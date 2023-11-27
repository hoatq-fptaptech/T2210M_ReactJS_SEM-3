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
}
export default HomePage;