import { api } from "./client";
import { DeliverPerson, InventoryData, Warehouse } from "@/types";

export const getAllProducts = async () => {
    const response = await api.get("/products");
    console.log('Response', response.data)
    return await response.data;
};

export const createProduct = async (data: FormData) => {
    const response = await api.post("/products", data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        withCredentials: true
    });
    console.log('Response', response.data)
    return response.data;
};

export const getAllWarehouses = async () => {
    const response = await api.get("/warehouses");
    console.log('Response-warehouse', response.data)
    return await response.data;
}

export const createWarehouse = async (data: Warehouse) => {
    const response = await api.post('/warehouses', data)
    return await response.data
}

export const createDeliveryPerson = async (data: DeliverPerson) => {
    const response = await api.post('/delivery-persons', data)
    console.log('data-delivery', response.data)
    return response.data
}

export const getAllDeliveryPerson = async () => {
    const response = await api.get("/delivery-persons");
    console.log('Response-delivery', response.data)
    return await response.data;
}

export const createInventory = async (data: InventoryData) => {
    const response = await api.post('/inventories', data);
    return response.data;
}

export const getAllInventory = async () => {
    const response = await api.get('/inventories')
    return response.data
}

