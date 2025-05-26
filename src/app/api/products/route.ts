import { db } from "@/lib/db/db";
import { products } from "@/lib/db/schema";
import { productSchema } from "@/lib/validators/productsSchema";
import { desc } from "drizzle-orm";
import s3Client from "@/lib/s3Client";
import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";

async function uploadFileToS3(file: File, key: string) {
  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: key,
      Body: buffer,
      ContentType: file.type,
    });

    await s3Client.send(command);
    return key;
  } catch (error) {
    console.error("S3 upload error:", error);
    throw error;
  }
}

export  async function POST(request: Request) {
  const data = await request.formData();

  let validatedData;
  try {
    validatedData = await productSchema.parse({
      name: data.get("name"),
      description: data.get("description"),
      price: Number(data.get("price")),
      image: data.get("image"),
    });
  } catch (error) {
    return NextResponse.json({ message: "Validation failed", error }, { status: 400 });
  }

  const inputImage = validatedData.image as File;
  if (!inputImage) {
    return NextResponse.json({ message: "Image file is missing" }, { status: 400 });
  }

  const imageKey = `uploads/images/${Date.now()}_${inputImage.name}`;
  await uploadFileToS3(inputImage, imageKey);
  try {
    await db.insert(products).values({
      name: validatedData.name,
      description: validatedData.description,
      price: validatedData.price,
      image: imageKey,
    });

    return NextResponse.json({ message: "Product created successfully" }, { status: 200 });
  } catch (error) {
    console.error("Upload or DB insert error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const allProducts = await db.select().from(products).orderBy(desc(products.id));

    const allProductsWithSignedUrls = await Promise.all(
      allProducts.map(async (product) => {
        let imageSignedUrl = null;
        if (product.image) {
          const command = new GetObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME!,
            Key: product.image,
          });
          imageSignedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
        }

        return {
          ...product,
          image: imageSignedUrl,
        };
      })
    );

    return NextResponse.json(allProductsWithSignedUrls);
  } catch (error) {
    console.error("Fetch products error:", error);
    return NextResponse.json({ message: "Failed to fetch products" }, { status: 500 });
  }
}
