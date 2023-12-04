import { useContext, useEffect, useState } from "react";
import { detail_product } from "../../services/product.service";
import { useParams } from "react-router-dom";
import Context from "../../context/context";

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
    const {state,setState} = useContext(Context);
    const addToCart = ()=>{
        let cart = state.cart;
        let check = true;
        cart.map(e=>{
            if(e.id == product.id){
                e.buy_qty = e.buy_qty + 1;
                check = false;
            }
            return e;
        })
        if(check){
            product.buy_qty = 1;
            cart.push(product);
        }
        // state.cart = cart;
        // setState(state);
        setState({...state,cart:cart});
    }
    return (
        <div className="container">
            <img src={product.thumbnail} />
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <button onClick={addToCart} className="btn btn-primary">Add To Cart</button>
        </div>
    )
}
export default ProductPage;