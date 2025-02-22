interface Menu {
  rating(rating: any): import("react").ReactNode;
  id: number;
  title: string;
  price: number;
  description: string;
  menuImageUrl: string;
}

export default Menu;
