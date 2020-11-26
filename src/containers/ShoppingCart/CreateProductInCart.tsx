import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeProductFromCart } from "../../store/actions/shoppingCart.action";
import { CartProcuct } from "../../store/actions/tsTypes";

interface CreateProductInCartProps {
  product: CartProcuct;
}

function CreateProductInCart({ product }: CreateProductInCartProps) {
  const dispatch = useDispatch();

  const convertPrice = (price: string) => {
    return Math.ceil(Number(price) * 75);
  };

  const handleRemoveClick = () => {
    dispatch(removeProductFromCart(product.item_id));
  };

  return (
    <ProductCart>
      <div>
        <ProductImg
          src={
            require(`./../../assets/images/product_images/${product.image}`)
              .default
          }
        />
      </div>
      <ProductDetails>
        <div>
          <p>{product.name}</p>
          <p>
            <span>&#8377;{convertPrice(product.price)}</span>
          </p>
        </div>

        <p>
          <span>Size: {product.attributes.split("-")[1]}</span>
          <span>Color: {product.attributes.split("-")[0]}</span>
        </p>

        <p>
          <span>Quantity: {product.quantity}</span>
        </p>

        <Remove onClick={handleRemoveClick}>Remove</Remove>
      </ProductDetails>
    </ProductCart>
  );
}

const ProductCart = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3em 0;

  &:first-of-type {
    margin: 20px 0;
  }

  &:nth-last-child(2) {
    margin-bottom: 5em;
  }
`;

const ProductImg = styled.img`
  border-radius: 3px;
`;

const ProductDetails = styled.div`
  width: 100%;
  margin: 0 20px;
  padding-left: 30px;

  p:first-child {
    margin: 3px 0 10px 0;
  }

  p:nth-child(2) {
    font-size: 16px;
    color: gray;
    span:first-child {
      margin-right: 2em;
    }
  }

  p:nth-child(3) {
    margin: 10px 0;
  }

  & > div {
    // border: 2px solid red;
    display: flex;
    font-size: 23px;
    justify-content: space-between;
    align-items: center;

    p:nth-child(2) {
      color: black;
      font-size: 23px;
    }
  }
`;
const Remove = styled.button`
  font-size: 20px;
  border: none;
  outline: none;
  padding: 5px 20px 5px 0;
  margin-top: 3em;
  background: none;

  &:hover {
    cursor: pointer;
    color: red;
    // text-decoration: underline;
  }
`;

export default CreateProductInCart;
