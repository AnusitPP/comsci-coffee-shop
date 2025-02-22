import { ShoppingBasket } from "lucide-react";
import Menu from '../../types/Menu';
import CartItem from "../../types/CartItem";
import { useState } from "react";

interface CoffeeDetailProps {
    coffee: Menu;
    addToCart: (coffee:Menu) => void;
}

function CoffeeDetail({coffee,addToCart}:CoffeeDetailProps) {

    const [sweetness, setSweetness] = useState<string>("100%")
    return (
        <div className="flex justify-center mb-4">
        <img 
          src={coffee.menuImageUrl}
          alt={coffee.title}
          className='w-full h-80 object-cover rounded-t-lg mb-4' 
        />
        <h2 className='font-semibold mb-2 max-w-[25ch] truncate'>{coffee.title}</h2>
        <h2 className='font-semibold mb-2 max-w-[25ch] truncate'>{coffee.description}</h2>
        <button
        onClick={() => addToCart(coffee)}
        className="w-full font-semibold flex items-center justify-center gap-2 bg-blue-500 hover:text-red-600 hover:bg-sky-300 text-white rounded-md py-3 mt-4"
      >
        <ShoppingBasket size={20} />
        เพิ่มลงตะกร้า
      </button>
      </div>
    )
}

export default CoffeeDetail;