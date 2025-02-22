import { Plus, Minus, Trash2 } from "lucide-react";
import CartItem from "../../types/CartItem";
import React from "react";

interface CartDetailProps {
  cartItem: CartItem[];
  updateQuantity: (id: number, change: number,sweetness:string) => void;
  removeFromCart: (id: number, sweetness: string) => void;
};
// แปลงจาก tsx ไป jsx เพื่อให้อ่านได้
const CartDetail: React.FC<CartDetailProps> = ({ cartItem, updateQuantity, removeFromCart }) => {
  return (
    <div className="justify-center p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold bg-gray-800 text-white p-2 rounded-md text-center">
        รายการสินค้าในตะกร้า
      </h2>

      {cartItem.length === 0 ? (
        <p className="font-bold text-center mt-4">ไม่มีสินค้าในตะกร้า</p>
      ) : (
        <div className="space-y-4 mt-4">
          {cartItem.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-2 bg-gray-100 rounded-md shadow-sm">
              <img src={item.menuImageUrl} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
              <div className="flex-1 ml-4">
                <p className="font-bold">{item.title}</p>
                <p className="text-sm text-gray-600">หวาน: {item.sweetness}</p>
                <p className="text-sm text-gray-600">ราคา: ฿{item.price}</p>
                <div className="flex items-center space-x-2">
                    <button onClick={() => {
                    if (item.quantity > 1) {
                      updateQuantity(item.id, -1, item.sweetness);
                    } else {
                      removeFromCart(item.id, item.sweetness);
                    }
                    }} className="p-1 bg-gray-200 rounded-full hover:bg-gray-300">
                    <Minus size={16} />
                    </button>
                  <span className="font-bold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1,item.sweetness)} className="p-1 bg-gray-200 rounded-full hover:bg-gray-300">
                    <Plus size={16} />
                  </button>
                  <button onClick={() => removeFromCart(item.id, item.sweetness)} className="p-1 bg-red-200 rounded-full hover:bg-red-300">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <p className="mt-4 font-bold flex justify-center text-[22px]">
        ยอดรวม: ฿{cartItem.reduce((total, item) => total + item.price * item.quantity, 0)}
      </p>
    </div>

  );
}

export default CartDetail;