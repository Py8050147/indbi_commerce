import { create } from "zustand"

type NewDeliverPersonState = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useNewDeliveryPerson = create<NewDeliverPersonState>((set) => {
    return {
        isOpen: false,
        onOpen: () => set({ isOpen: true }),
        onClose: () => set({ isOpen: false }),
}
})