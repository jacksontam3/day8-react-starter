import ProductItem from "./ProductItem";

const ProductCategory = ({}) => {
    const products = [
        {         
            name: 'Football',         
            price: 49.99,         
            status: true     
        },
        {         
            name: 'Baseball',         
            price: 49.99,         
            status: true     
        }, 
        {         
            name: 'Football',         
            price: 49.99,         
            status: true     
        }  

    ];
    return (
        <div>
            {products.map((product, index) => {
               return <ProductItem productItem = {product} />
        })}
        </div>
    )
}

export default ProductCategory;