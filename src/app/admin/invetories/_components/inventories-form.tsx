import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,

} from '@/components/ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { useQuery } from '@tanstack/react-query'
import { Product, Warehouse } from '@/types'
import { getAllProducts, getAllWarehouses } from '@/http/api'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { inventoriesSchema } from '@/lib/validators/inventoriesSchema'
import { Input } from '@/components/ui/input'

export type FormValues = z.infer<typeof inventoriesSchema>

const CreateInvetoriesForm = (
    {
        onSubmit,
        disabled
    }: {
        onSubmit: (formvalues: FormValues) => void,
        disabled: boolean
    }) => {

    const form = useForm<z.input<typeof inventoriesSchema>>({
        resolver: zodResolver(inventoriesSchema),
        defaultValues: {
            sku: "",
        }
    })

    const { data: warehouses, isLoading:isWarehousesLoading } = useQuery<Warehouse[]>({
        queryKey: ['warehouses'],
        queryFn: () => getAllWarehouses()
    })

    const { data: products, isLoading: isProductLoading } = useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: () => getAllProducts()
    })

    const handleSubmit = (values: FormValues) => {
        onSubmit(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                    control={form.control}
                    name='sku'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>SKU</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. CH123456" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='warehouseId'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Warehouse ID</FormLabel>
                            <Select
                                onValueChange={(value: string) => field.onChange(parseInt(value))}
                                defaultValue={field.value ? field.value.toString() : ''}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Warehouse ID" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {isWarehousesLoading ? (
                                        <SelectItem value="Loading">Loading...</SelectItem>
                                    ) : (
                                        <>
                                            {warehouses && warehouses.map((item) => (
                                                <SelectItem
                                                    key={item.id}
                                                    value={item.id ? item.id?.toString() : ''}>
                                                    {item.name}
                                                </SelectItem>
                                            ))}
                                        </>
                                    )}
                                </SelectContent>
                            </Select>

                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='productId'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Product ID</FormLabel>
                            <Select
                                onValueChange={(value: string) => field.onChange(parseInt(value))}
                                defaultValue={field.value ? field.value.toString() : ''}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select product ID" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {isProductLoading ? (
                                        <SelectItem value="Loading">Loading...</SelectItem>
                                    ) : (
                                        <>
                                            {products && products.map((item) => (
                                                <SelectItem
                                                    key={item.id}
                                                    value={item.id ? item.id?.toString() : ''}>
                                                    {item.name}
                                                </SelectItem>
                                            ))}
                                        </>
                                    )}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />

                <Button className="w-full" disabled={disabled}>
                    {disabled ? <Loader2 className="size-4 animate-spin" /> : 'Create'}
                </Button>
            </form>
        </Form>
    )
}

export default CreateInvetoriesForm
