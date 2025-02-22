import { menus } from "../data/MenuData" 
import CoffeeDetail from "../components/Menu/MenuDetail"
import CartDetail from "../components/Menu/CartDetail";
import Menu from "../types/Menu";
import { useState } from "react";
import CartItem from "../types/CartItem";

function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item:CartItem) => {
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


  return (
    <>
      <div>
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 space-py">
        {menus.map((menu) => (
            <CoffeeDetail key={menu.id} menu={menu} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}

export default Home;
