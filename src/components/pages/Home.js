import React from "react";
import {  Card, Col, Row } from "react-bootstrap";

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        // call api
        const url = `https://dummyjson.com/products?limit=12`;
        fetch(url).then(rs=>rs.json())
        .then(rs=>{
            this.setState({products: rs.products})
        })
        .catch(err=>{console.log(err)});
    }
    render(){
        const products = this.state.products;
        return (
            <div className="container">
                <h1>Home Page</h1>
                <Row>
                    {
                        products.map((e,k)=>{
                            return (
                            <Col xs={3}>
                                <Card>
                                    <Card.Img src="/images/product/product-1.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Tên Sản phẩm</Card.Title>
                                        <Card.Text>Mô tả sản phẩm</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Card.Text>12$</Card.Text>
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
}
export default HomePage;