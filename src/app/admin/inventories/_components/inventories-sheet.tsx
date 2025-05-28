import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import CreateInvetoriesForm, { FormValues } from './inventories-form'
import { useNewInvtories } from '@/store/invertories/inventories-store'
import { createInventory } from '@/http/api'
import { InventoryData } from '@/types'



const CreateInvetories = () => {
    const { isOpen, onClose } = useNewInvtories()
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationKey: ['create-inventory'],
        mutationFn: (data: InventoryData) => createInventory(data),
        onSuccess: (() => {
            queryClient.invalidateQueries({ queryKey: ['inventories'] })
            onClose()
        })
    })

    const onSubmit = (values: FormValues) => {
        mutate(values);
    };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
    <SheetContent className="min-w-[28rem] space-y-4">
        <SheetHeader>
            <SheetTitle>Create Inventory</SheetTitle>
            <SheetDescription>Create a new Inventory</SheetDescription>
        </SheetHeader>
        <CreateInvetoriesForm onSubmit={onSubmit} disabled={isPending} />
    </SheetContent>
</Sheet>
  )
}

export default CreateInvetories
