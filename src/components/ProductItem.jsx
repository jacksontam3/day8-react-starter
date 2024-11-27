import "./ProductItem.css";

const productItem = (props) => {  
    const {productItem} = props;   
    return (       
    <div className="ProductItem">           
        <span>{productItem.name}</span>           
        <span>{productItem.price}</span>           
        {productItem.status ? <span>In stock</span> : <span>Out of Stock</span>}    
        </div>     
        ) 
    } 
    
    export default productItem;