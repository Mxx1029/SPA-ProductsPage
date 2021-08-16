import { ProductsContextProvider } from "../contexts/ProductsContext";
import CreateProduct from "./CreateProduct";
import Header from "./Header";
import Products from "./Products";

export default function App() {
    return (
        <ProductsContextProvider>
            <Header />
            <CreateProduct />
            <Products />
        </ProductsContextProvider>
    )
}