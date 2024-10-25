"use client";

import Cart from "@/component/cart/cart";
import Products from "@/component/product/product";
import { useConterStore } from "@/store/counter.store";
import { useState } from "react";

export default function Home() {
  const producst = useConterStore((store : any) => store.products);
  console.log(producst);

  return (
    <div>
      <Products />
      <Cart/>
    </div>
  );
}
