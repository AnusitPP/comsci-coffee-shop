import { menus } from "../data/MenuData"
import CoffeeDetail from "../components/Menu/MenuDetail"
import CartDetail from "../components/Menu/CartDetail";
import { useState } from "react";
import CartItem from "../types/CartItem";
import { Italic } from "lucide-react";

function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id:number, change:number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity >= 1
          ? { ...item, quantity: newQuantity }
          : item;
      }
      return item;
    }));
  };

  const removeFromCart = (items: number) => {
    setCartItems(cartItems.filter((item) => item.id !== items));
  };

  return (
    <><div className="grid grid-cols">
      <div className="sm:grid-cols-3">
      {cartItems.map((item) => (
          <CartDetail
            key={item.id}
            cartItem={cartItems}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 p-6 space-py">
        {menus.map((menu) => (
          <CoffeeDetail key={menu.id} menu={menu} addToCart={addToCart} />
        ))}
      </div>
      </div>
    </>
  );
}

export default Home;
