import { create } from "zustand";


export const useConterStore = create((set) => ({
  products: [
    {
      name: "Mobile",
      price: 5600,
    },
    {
      name: "Laptop",
      price: 2000,
    },
    {
      name: "Shoes",
      price: 500,
    },
  ],
  cart : [],
  updateCart : (cart : any)=> set({cart})
}));
