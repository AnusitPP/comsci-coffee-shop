import { useState } from 'react';
import CartItem from '../../types/CartItem';
import Menu from '../../types/Menu';
import { ShoppingBasket } from 'lucide-react';

interface CoffeeDetailProps {
  menu: Menu;
  addToCart: (cart: CartItem) => void;
}

const CoffeeDetail = ({ menu, addToCart }: CoffeeDetailProps) => {
  const [sweetness, setSweetness] = useState<string>("100%");

  return (
    <div className="border rounded-lg p-2 shadow-md hover:shadow-xl transition bg-white flex flex-col">
            {/* Menu */}
            <img
                src={menu.menuImageUrl}
                alt={menu.title}
                className="w-36 h-36 object-cover rounded-md mx-auto items-center"
            />

            {/* Name */}
            <h1 className="text-xs font-bold mt-2 bg-gray-800 text-white px-3 py-1 rounded-md text-center">
                {menu.title}
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-1">{menu.description}</p>

            {/* Price */}
            <p className="text-sm font-bold text-blue-600 mt-2">฿{menu.price.toFixed(2)}</p>

            {/* Level */}
            <div className="flex flex-col  mt-2">
                <span className="text-sm font-semibold">ระดับความหวาน</span>
                <div className="flex gap-2 mt-1">
                    {["0%", "50%", "100%", "150%"].map((level) => (
                        <button
                            key={level}
                            className={`px-2 py-1 text-xs rounded-md border ${
                                sweetness === level
                                    ? "bg-black text-white"
                                    : "bg-white text-black"
                            }`}
                            onClick={() => setSweetness(level)}
                        >
                            {level}
                        </button>
                    ))}
                </div>
            </div>
            
            {/* AddToCart */}
            <button
                onClick={() => addToCart({
                    ...menu, sweetness, quantity: 1,
                    name: undefined,
                    image: undefined
                })}
                className="w-full flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white rounded-lg py-2 mt-4"
            >
                <ShoppingBasket size={20} />
                เพิ่มลงตะกร้า
            </button>
            </div>
  );
};

export default CoffeeDetail;