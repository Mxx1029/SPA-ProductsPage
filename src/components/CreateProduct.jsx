import { useState } from 'react';
import { useProductsContext } from '../contexts/ProductsContext';

export default function CreateProduct(){
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useProductsContext();

    function createProduct(e) {
        // alert("Clicked!") // to check if clicking the button works!
        const id = Math.floor(Math.random() * 999999); // you wouldn't do it like that in the real world

        const newProduct = { id, name, price };
        setProducts([ ...products, newProduct ])

    }

    return (
        <div className="CreateProduct">
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
            <button onClick={createProduct}>Add product</button>
        </div>
    )
}