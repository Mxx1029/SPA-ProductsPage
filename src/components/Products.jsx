import { useProductsContext } from '../contexts/ProductsContext';

export default function Products(){
    const [products, setProducts] = useProductsContext();

    return (
        <table className="Products">
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>ACTIONS</th>
            </tr>
                {products.map( item => {
                    return (    
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => {
                                    // creating an edit button for a name change
                                    const newName = prompt("New name plz", item.name);
                                    
                                    const updatedListWithNewName = products.map( product => {
                                        if (product.id === item.id) {
                                            product.name = newName;
                                        }

                                        return product;
                                    })
                                    setProducts(updatedListWithNewName);

                                }}>EDIT NAME</button>
                                <button onClick={() => {
                                    const newPrice = prompt("New price please", item.price);

                                    const updatedListWithNewPrice = products.map(prod => {
                                        if (prod.id === item.id) {
                                            prod.price = newPrice;
                                        }
                                        return prod
                                    })
                                    setProducts(updatedListWithNewPrice);

                                }}>EDIT PRICE
                                </button>
                                <button>DELETE</button>
                            </td>
                        </tr>
                    )
                })}
        </table>
    )
}