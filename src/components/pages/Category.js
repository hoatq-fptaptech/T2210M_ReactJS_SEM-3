import { useEffect, useState } from "react";
import {  Card, Col, Row } from "react-bootstrap";
import { get_product } from "../../services/product.service";
function CategoryPage(){
    const [products,setProducts] = useState([]);
    const load_products = async ()=>{
        const rs = await get_product(8);
        setProducts(rs);
    }

    useEffect(()=>{ // check sự thay đổi của các state
        load_products();
    },[]); // truyền mảng rỗng tức là tương đương componentDidMount

    return (
        <div className="container">
            <h1>Category Page</h1>
            <Row>
                    {
                        products.map((e,k)=>{
                            return (
                            <Col key={k} xs={3}>
                                <Card>
                                    <Card.Img src={e.thumbnail}/>
                                    <Card.Body>
                                        <Card.Title>{e.title}</Card.Title>
                                        <Card.Text>{e.description}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Card.Text>{e.price}$</Card.Text>
                                        <Card.Link className="btn btn-primary">
                                            Add To Cart
                                        </Card.Link>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            )
                        })
                    }
                    
                </Row> 
        </div>
    )
}
export default CategoryPage;