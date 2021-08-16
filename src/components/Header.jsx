import { useProductsContext } from "../contexts/ProductsContext";

export default function Header() {
    const [ products ] = useProductsContext();

    return (
        <header>
            <h1>Product manager app</h1>
            <p>now with {products.length} products</p>
        </header>
    )
}