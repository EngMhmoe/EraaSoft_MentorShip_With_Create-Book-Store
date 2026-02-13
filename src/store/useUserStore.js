import { create } from "zustand";

export const useUserStore = create(()=>({
    user: JSON.parse(localStorage.getItem("user"))
}));