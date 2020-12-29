import React, { useState } from "react";
import styled from "styled-components";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { putProductQuantityInCart } from "../../services/api";
import { State } from "../../store/actions/tsTypes";
import { setProductsInShoppingCart } from "../../store/actions/shoppingCart.action";

interface ProductQuantityProps {
  product: any;
}

function ProductQuantity({ product }: ProductQuantityProps) {
  const dispatch = useDispatch();

  const [changeColor, setChangeColor] = useState<string>("");
  const { cartId } = useSelector((state: State) => state.cart);

  const handleIncreaseQuantity = async () => {
    setChangeColor("increase");
    await putProductQuantityInCart(product.item_id, {
      quantity: product.quantity + 1,
    });
    await dispatch(setProductsInShoppingCart(cartId.id));
    setChangeColor("");
  };

  const handleDecreaseQuantity = async () => {
    setChangeColor("decrease");
    await putProductQuantityInCart(product.item_id, {
      quantity: product.quantity - 1,
    });
    await dispatch(setProductsInShoppingCart(cartId.id));
    setChangeColor("");
  };

  return (
    <>
      <span>Quantity:</span>{" "}
      <span>
        <DecreaseQuantityButton
          onClick={handleDecreaseQuantity}
          changeColor={changeColor}
          quantity={product.quantity}
          disabled={product.quantity === 1}
        >
          <FontAwesomeIcon icon={faMinus} />
        </DecreaseQuantityButton>
      </span>
      {product.quantity}
      <span>
        <IncreaseQuantityButton
          onClick={handleIncreaseQuantity}
          changeColor={changeColor}
        >
          <FontAwesomeIcon icon={faPlus} />
        </IncreaseQuantityButton>
      </span>
    </>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background: none;
  border: 1px solid grey;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 0 10px;

  &:hover {
    cursor: pointer;
  }
`;

interface IncreaseProps {
  changeColor: string;
}

const IncreaseQuantityButton = styled(Button)`
  color: ${(state: IncreaseProps) =>
    state.changeColor === "increase" ? "grey" : "black"};
`;

interface DecreaseProps {
  changeColor: string;
  quantity: number;
}

const DecreaseQuantityButton = styled(Button)`
  color: ${(state: DecreaseProps) =>
    state.changeColor === "decrease" || state.quantity === 1
      ? "grey"
      : "black"};
`;

export default ProductQuantity;
