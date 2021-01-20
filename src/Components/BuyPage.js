import React, { useState, useEffect } from "react";
import Axios from "axios";
import { random, commerce } from "faker";
import { Container, Row, Col } from "reactstrap";
import CartItem from "./CartItem";
const apiKey = "563492ad6f91700001000001e36876584cd846a58c7ca0aff2aefdeb";
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
    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));
    console.log(allProduct);
    setProduct(allProduct);
    //   const fetchPhotos = async () => {
    //     const response = await Axios.get(localurl);
    //   };
  };

  // const uu = random.uuid();
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default BuyPage;
