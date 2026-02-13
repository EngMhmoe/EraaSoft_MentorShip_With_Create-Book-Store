//import create zustand
import { create } from "zustand";


//(1) => Token
export const UseTokenStore = create(()=>({
    token: localStorage.getItem("token"),
}))