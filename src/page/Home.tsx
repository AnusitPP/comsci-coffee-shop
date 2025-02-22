import { menus } from "../data/MenuData"
import CoffeeDetail from "../components/Menu/MenuDetail"
import CartDetail from "../components/Menu/CartDetail";
import { useState } from "react";
import CartItem from "../types/CartItem";

function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id && cartItem.sweetness === item.sweetness);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id && cartItem.sweetness === item.sweetness ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, change: number,sweetness:string) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id && item.sweetness === sweetness) {
        const newQuantity = item.quantity + change;
        return newQuantity >= 1
          ? { ...item, quantity: newQuantity }
          : item;
      }
      return item;
    }));
  };

  const removeFromCart = (id: number, sweetness: string) => {
    setCartItems(cartItems.filter((item) => !(item.id === id && item.sweetness === sweetness)));
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 p-6 space-py">
        <div className="sm:grid-cols-3">
        <CartDetail
        cartItem={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
        </div>
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-6 space-py">
          {menus.map((menu) => (
            <CoffeeDetail key={menu.id} menu={menu} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
