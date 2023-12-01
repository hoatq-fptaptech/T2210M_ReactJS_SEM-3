import { useEffect, useState } from "react";
import { detail_product } from "../../services/product.service";
import { useParams } from "react-router-dom";

function ProductPage(){
    const [product,setProduct] = useState({});
    const {id} = useParams();
    const loadProduct = async ()=>{
        const rs = await detail_product(id);
        setProduct(rs);
    }
    useEffect(()=>{
        loadProduct();
    },[])
    return (
        <div className="container">
            <img src={product.thumbnail} />
            <h1>{product.title}</h1>
            <p>{product.price}</p>
        </div>
    )
}
export default ProductPage;