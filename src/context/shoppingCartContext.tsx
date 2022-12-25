import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
}
 type CartItem ={
    id:number
    quantatity:number
 }
type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCardQuantity: (id: number) => void;
  removeFromQuantity: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext )

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {

    const[cartItems, setCartItems]= useState<CartItem>({})

    function getItemQuantity (id:number){
        return cartItems.find(item =>item.id ===id)?.quantity ||0 
    

    }

  return (
    <ShoppingCartContext.Provider value={{getItemQuantity}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
