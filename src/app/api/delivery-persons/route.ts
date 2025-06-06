import { db } from "@/lib/db/db";
import { deliveryPersons, warehouses } from "@/lib/db/schema";
import { deliveryPersonSchema } from "@/lib/validators/deliveryPersonSchema";
import { desc, eq } from "drizzle-orm";

export async function POST(request: Request) {
    const requestData = await request.json()
    let validatedData;
    try {
        validatedData = await deliveryPersonSchema.parse(requestData)
    } catch (error) {
          return Response.json({ message: error }, { status: 400 });
    }

    try {
        await db.insert(deliveryPersons).values(validatedData).returning()
        return Response.json({ message: 'OK' }, { status: 201 });
    } catch (error) {
        return Response.json(
            { message: 'Failed to store the delivery person into the database' },
            { status: 500 }
        );
    }
}

export async function  GET() {
    try {
        const allDeliveryPersons = await db.select({
            id: deliveryPersons.id,
            name: deliveryPersons.name,
            phone: deliveryPersons.phone,
            warehouse: warehouses.name
        }).from(deliveryPersons).
            leftJoin(warehouses, eq(deliveryPersons.warehouseId, warehouses.id)).
            orderBy(desc(deliveryPersons.id))

        return Response.json(allDeliveryPersons)
    } catch (error) {
        return Response.json({ message: 'Failed to fetch delivery persons'}, { status: 500 });
    }
}