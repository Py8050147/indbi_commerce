import { db } from "@/lib/db/db";
import { inventories, products, warehouses } from "@/lib/db/schema";
import { inventoriesSchema } from "@/lib/validators/inventoriesSchema";
import { desc, eq } from "drizzle-orm";

export async function POST(request:Request) {
    const requestedData = await request.json()
    let validatedData

    try {
        validatedData = await inventoriesSchema.parse(validatedData)
    } catch (error) {
        return Response.json({ message: error }, { status: 400 })
    }

    try {
        await db.insert(inventories).values(validatedData)
        return Response.json({message: "inventories create successfully"}, {status: 200})
    } catch (error) {
        return  Response.json({message: "inventories not create successfully"}, {status: 500})
    }
}

export async function GET() {
    try {
        const allgetInventories = await db.select({
            id: inventories.id,
            sku: inventories.sku,
            warehouses: warehouses.name,
            products: products.name
        }).from(inventories).leftJoin(products, eq(inventories.productId, products.id)).leftJoin(warehouses, eq(inventories.warehouseId, warehouses.id)).orderBy(desc(inventories.id))
    } catch (error) {
        
    }
}