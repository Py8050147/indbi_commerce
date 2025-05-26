"use client";

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { columns } from './_components/columns'
import {  Product } from '@/types'
import { useNewDeliveryPerson } from '@/store/delivery-person/deliveryPerson'
import { DataTable } from '../_components/data-table'
import DeliverPersonSheet from './_components/delivery-person-sheet'
import { getAllDeliveryPerson } from '@/http/api'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

const DeliveryPersonsPage = () => {
    const { onOpen } = useNewDeliveryPerson();

    const {
        data: deliveryPersons,
        isLoading,
        isError,
    } = useQuery<Product[]>({
        queryKey: ['delivery-persons'],
        queryFn: getAllDeliveryPerson,
    });

  return (
    <>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight">Delivery Persons</h3>
                <Button size={'sm'} onClick={onOpen}>
                    Add Delivery Person
                </Button>
                <DeliverPersonSheet />
            </div>

            {isError && <span className="text-red-500">Something went wrong.</span>}

            {isLoading ? (
                <div className="flex items-center justify-center">
                    <Loader2 className="size-10 animate-spin" />
                </div>
            ) : (
                <DataTable columns={columns} data={deliveryPersons || []} />
            )}
        </>
  )
}

export default DeliveryPersonsPage
