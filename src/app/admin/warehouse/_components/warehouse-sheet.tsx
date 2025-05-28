import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Warehouse } from "@/types";
import { useNewWarehouse } from "@/store/warehouse/warehouseStore";
import CreateWarehouseForm, { FormValues } from "./warehouse-form";
import { createWarehouse } from "@/http/api";

const CreateWarehouseSheet = () => {
    const { isOpen, onClose } = useNewWarehouse()
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationKey: ['create-warehouse'],
        mutationFn: (data: Warehouse) => createWarehouse(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['warehouses'] });
            onClose()
        }
    })

    const onSubmit = (values: FormValues) => {
        mutate(values as unknown as Warehouse)
    }
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
    <SheetContent className="min-w-[28rem] space-y-4">
         <SheetHeader>
             <SheetTitle>Create Warehouse</SheetTitle>
             <SheetDescription>Create a new warehouse</SheetDescription>
         </SheetHeader>
         <CreateWarehouseForm onSubmit={onSubmit} disabled={isPending} />
     </SheetContent>
 </Sheet>
  )
}

export default CreateWarehouseSheet
