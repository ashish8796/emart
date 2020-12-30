import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteProductfromCart } from "../../services/api";
import {
  setInternetError,
  setProductsInShoppingCart,
} from "../../store/actions/shoppingCart.action";
import { CartProcuct, State } from "../../store/actions/tsTypes";
import ProductQuantity from "./ProductQuantity";

interface CreateProductInCartProps {
  product: CartProcuct;
}

function CreateProductInCart({ product }: CreateProductInCartProps) {
  const dispatch = useDispatch();
  const { cartId } = useSelector((state: State) => state.cart);
  const [showLoader, setLoader] = useState<boolean>(false);

  const convertPrice = (price: string) => {
    return Math.ceil(Number(price) * 75);
  };

  const handleRemoveClick = async () => {
    setLoader(true);
    const deleteObj = await deleteProductfromCart(product.item_id);
    if (deleteObj?.status === 200) {
      await dispatch(setProductsInShoppingCart(cartId.id));
      setLoader(false);
    } else if (deleteObj?.status === 400) {
    } else if (deleteObj?.status === "Failed to fetch") {
      dispatch(setInternetError(deleteObj?.status));
    }
  };

  useEffect(() => {
    return () => {
      setLoader(false);
    };
  }, []);

  // console.log(product);

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
          <ProductQuantity product={product} />
        </p>

        <Remove onClick={handleRemoveClick}>
          <Loder showLoder={showLoader}> </Loder>
          Remove
        </Remove>
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
    display: flex;
    font-size: 23px;
    justify-content: space-between;
    align-items: center;

    p:nth-child(2) {
      color: black;
      font-size: 23px;
    }
  }

  span {
    display: inline-block;
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
  }
`;

interface LoderProps {
  showLoder: boolean;
}

const Loder = styled.span`
  display: inline-block;
  border-radius: 50%;
  border: 2px solid green;
  border-bottom: 2px solid #fff;
  width: 13px;
  height: 13px;
  margin: 0 5px -2px -20px;
  animation: rotateLoader 0.8s linear infinite;
  visibility: ${(state: LoderProps) =>
    state.showLoder ? "visible" : "hidden"};

  @keyframes rotateLoader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default CreateProductInCart;
