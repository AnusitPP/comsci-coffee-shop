import React from 'react';
import CartItem from '../../types/CartItem';

interface CartDetailProps {
    items: CartItem[];
    onRemoveItem: (id: number) => void;
    onUpdateQuantity: (id: number, quantity: number) => void;
}

const CartDetail: React.FC<CartDetailProps> = ({ items, onRemoveItem, onUpdateQuantity }) => {
    const handleRemove = (id: number) => {
        onRemoveItem(id);
    };

    const handleQuantityChange = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const quantity = parseInt(event.target.value, 10);
        onUpdateQuantity(id, quantity);
    };

    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Cart Details</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span>${item.price.toFixed(2)}</span>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(event) => handleQuantityChange(item.id, event)}
                            min="1"
                        />
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
        </div>
    );
};

export default CartDetail;

