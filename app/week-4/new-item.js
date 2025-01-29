"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity,setquantity] = useState(1);

    const increment = () => {
        if (quantity >= 20) {

            return;
        }
        setquantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity <= 0) {
            return;
        }
        setquantity(quantity - 1);
    };

    return (
        <div className="border-2 border-gray-900 my-2 p-2 rounded-lg flex flex-col items-center">
          
            <p className="font-bold">Quantity: {quantity}</p>
            <button className={`m-2 border-2 p-2 hover:bg-blue-400 border-gray-900 rounded-lg ${quantity>=20 ? 'opacity-50 cursor-not-allowed': ''}`} onClick={increment} >Increase</button>
            <button className={`m-2 border-2 p-2 hover:bg-blue-400 border-gray-900 rounded-lg  ${quantity==0 ? 'opacity-50 cursor-not-allowed': ''}`} onClick={decrement}>Decrease</button>
        </div>
    );

}
