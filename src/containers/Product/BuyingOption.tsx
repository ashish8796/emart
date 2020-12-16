import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/actions/tsTypes";
import {
  addProductInShoppingCart,
  setShoppingCartId,
} from "../../store/actions/shoppingCart.action";
import { setIsDepartmentVisible } from "../../store/actions/screen.action";
import { useHistory } from "react-router-dom";

interface BuyingOptionProps {
  attribute: any;
  productId: any;
}

function BuyingOption({ attribute, productId }: BuyingOptionProps) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { cartId } = useSelector((state: State) => ({
    ...state.cart,
  }));

  const [showLoader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      setLoader(false);
    };
  }, []);

  async function handleAddToCart() {
    let shoppingCartId: any;

    if (attribute.size && attribute.color) {
      setLoader(true);
      if (!cartId) {
        shoppingCartId = await dispatch(setShoppingCartId());
      }

      await dispatch(
        addProductInShoppingCart({
          cartId: !cartId ? shoppingCartId : cartId,
          productId,
          attribute: attribute.color + "-" + attribute.size,
        })
      );
      dispatch(setIsDepartmentVisible(false));

      history.push("/cart");
    } else {
      alert("Select Color and Size.");
    }
  }

  return (
    <Option>
      <AddToCart onClick={handleAddToCart}>
        <Loder showLoder={showLoader}> </Loder>
        <span>{<FontAwesomeIcon icon={faShoppingCart} />}</span>
        ADD TO CART
      </AddToCart>
      {/* <BuyNow onClick={handleBuyNowClick}>BUY NOW</BuyNow> */}
    </Option>
  );
}

const Option = styled.div`
  padding: 20px 0;
  margin-top: 20px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 20px;
  font-size: 20px;
  color: #fff;
  border-radius: 4px;
  width: 289px;

  span {
    margin-right: 10px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const AddToCart = styled(Button)`
  margin-right: 20px;
  background: #e94560;
`;

// const BuyNow = styled(Button)`
//   background: #00b7c2;
//   // width: 180px;
// `;

interface LoderProps {
  showLoder: boolean;
}

const Loder = styled.span`
  display: inline-block;
  border-radius: 50%;
  border: 2px solid #fff;
  border-bottom: 2px solid #e94560;
  width: 16px;
  height: 16px;
  margin: 0 0 -2px 0;
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

export default BuyingOption;
