import { create } from "zustand";

export const UseDomainStore = create(()=>({
    domain: "http://localhost:1337"
}))