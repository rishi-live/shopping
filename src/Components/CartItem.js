import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  Button,
} from "reactstrap";

const CartItem = ({ product, addInCart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top height="250" width="100%" src={product.smallImage}></CardImg>
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary">
          Price: RS {product.productPrice}
        </CardText>
        <Button color="success" onClick={() => addInCart(product)}>
          Add Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;
