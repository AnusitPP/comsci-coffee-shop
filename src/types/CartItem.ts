import Menu from "./Menu";

interface CartItem extends Menu{
  id: number;
  name: string;
  menuImageUrl: string;
  sweetness: string;
  price: number;
  quantity: number;
}

export default CartItem;
