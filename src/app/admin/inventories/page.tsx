"use client";
import React from 'react'
import { columns } from './_components/columns';
import { DataTable } from '../_components/data-table';
import { useQuery } from '@tanstack/react-query';
import { getAllInventory } from '@/http/api';
import { Inventories } from '@/types';
import { useNewInvtories } from '@/store/invertories/inventories-store';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import CreateInvetories from './_components/inventories-sheet';

const InventoriesPage = () => {
    const { onOpen } = useNewInvtories()
    const {
        data: inventories,
        isLoading,
        isError
    } = useQuery<Inventories[]>({
        queryKey: ['inventories'],
        queryFn: getAllInventory
    })
 
  return (
    <>
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight">Inventories</h3>
                <Button size={'sm'} onClick={onOpen}>
                    Add Inventory
                </Button>
                <CreateInvetories />
            </div>

            {isError && <span className="text-red-500">Something went wrong.</span>}

            {isLoading ? (
                <div className="flex items-center justify-center">
                    <Loader2 className="size-10 animate-spin" />
                </div>
            ) : (
                <DataTable columns={columns} data={inventories || []} />
            )}
        </>
  )
}

export default InventoriesPage
