import Menu from "./Menu";

interface CartItem extends Menu {
  name: ReactNode;
  sweetness: string;
  quantity: number;
}

export default CartItem;
