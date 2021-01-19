import React, { useState, useEffect } from "react";
import Axios from "axios";
import { random, commerce } from "faker";
import { Container, Row, Col } from "reactstrap";
import CartItem from "./CartItem";

const apiKey = "";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
// const localurl = "";
const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);
  const fetchPhotos = async () => {
    const { data } = await Axios.get(url, {
      headers: {
        Authorization: apiKey,
      },
    });
    const { photos } = data;
    console.log(product);
    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));
    setProduct(allProduct);
    //   const fetchPhotos = async () => {
    //     const response = await Axios.get(localurl);
    //   };
  };

  const uu = random.uuid();

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((product1) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
        <h2>{uu}</h2>
      </Row>
    </Container>
  );
};
export default BuyPage;
