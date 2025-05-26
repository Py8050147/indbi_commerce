import { db } from "@/lib/db/db";
import { warehouseSchema } from "@/lib/validators/warehouseSchema";
import { warehouses } from "@/lib/db/schema";
import { TrophyIcon } from "lucide-react";

export async function POST(request: Request) {
    const requestedData = await request.json()
    let validatedData;
    try {
        validatedData = await warehouseSchema.parse(request)
    } catch (error) {
        return Response.json({ message: error }, { status: 400 })
    }

    try {
        await db.insert(warehouses).values(validatedData).returning()
        return Response.json({ message: 'OK' }, { status: 201 });
    } catch (error) {
        return Response.json({ message: 'Failed to store the warehouse' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const allgetwareehouses = await db.select().from(warehouses)
        return Response.json(allgetwareehouses)
    } catch (error) {
        return Response.json({ message: 'Failed to fetch all warehouses' }, { status: 500 });
    }
}