import { getShoppingCart } from "../utilities/fakedb";

const cardProductsLoader = async() => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();

    const storedCard = getShoppingCart();
    const savedCart = [];

    console.log(storedCard);
    for(const id in storedCard){
        const addedProduct = products.find(pd =>pd.id === id);
        if(addedProduct){
            const quantity = storedCard[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    return savedCart;
}
export default cardProductsLoader;