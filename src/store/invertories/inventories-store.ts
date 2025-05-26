import { create } from "zustand"

type NewInvetoriesState  = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useNewInvtories = create<NewInvetoriesState>((set) => {
    return {
        isOpen: false,
        onOpen: () => set({ isOpen: true }),
        onClose: () => set({ isOpen: false }),
    };
});
