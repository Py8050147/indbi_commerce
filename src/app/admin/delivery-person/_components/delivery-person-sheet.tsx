import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet'
import { DeliverPerson } from '@/types'
import CreateDeliverPersonForm, { FormValues } from './delivery-person-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createDeliveryPerson } from '@/http/api'
import { useNewDeliveryPerson } from '@/store/delivery-person/deliveryPerson'


const DeliverPersonSheet = () => {
    const { isOpen, onClose } = useNewDeliveryPerson()
    const query = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationKey: ['create-delivery-person'],
        mutationFn: (data: DeliverPerson) => createDeliveryPerson(data),
        onSuccess: () => {
            query.invalidateQueries({ queryKey: ['delivery-person'] })
            onClose()
        }
        
    })

    const onSubmit = (values: FormValues) => {
        mutate(values as unknown as DeliverPerson);
    };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
    <SheetContent className="min-w-[28rem] space-y-4">
        <SheetHeader>
            <SheetTitle>Create Delivery Person</SheetTitle>
            <SheetDescription>Create a new Delivery Person</SheetDescription>
        </SheetHeader>
        <CreateDeliverPersonForm onSubmit={onSubmit} disabled={isPending} />
    </SheetContent>
</Sheet>
  )
}

export default DeliverPersonSheet
