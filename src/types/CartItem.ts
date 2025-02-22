import Menu from "./Menu";

interface CartItem extends Menu{
  name: string | undefined;
  image: String | undefined;
  sweetness: string;
  price: number;
  quantity: number;
}

export default CartItem;
