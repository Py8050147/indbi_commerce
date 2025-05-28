"use client";
import React from 'react'
import { DataTable } from '../_components/data-table';
import { getAllWarehouses } from '@/http/api';
import { useQuery } from '@tanstack/react-query';
import { useNewWarehouse } from '@/store/warehouse/warehouseStore';
import { Warehouse } from '@/types';
import CreateWarehouseSheet from './_components/warehouse-sheet';
import { Loader2 } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { columns } from './_components/columns';


const WarehousePage = () => {
    const { onOpen } = useNewWarehouse()
    const { data: warehouse, isLoading, isError } = useQuery<Warehouse[]>({
        queryKey: ['warehouses'],
        queryFn: getAllWarehouses
    })
  return (
    <>
        <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold tracking-tight">Products</h3>
            <Button size={'sm'} onClick={onOpen}>
                Add Product
            </Button>
            <CreateWarehouseSheet />
        </div>

        {isError && <span className="text-red-500">Something went wrong.</span>}

        {isLoading ? (
            <div className="flex items-center justify-center">
                <Loader2 className="size-10 animate-spin" />
            </div>
        ) : (
            <DataTable columns={columns} data={warehouse || []} />
        )}
    </>
  )
}

export default WarehousePage
