import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { setProductsInShoppingCart } from "../../store/actions/shoppingCart.action";
import { State } from "../../store/actions/tsTypes";
import { CartLoader } from "../Home/contentLoader";
import CreateProductInCart from "./CreateProductInCart";
import EmptyCart from "./EmptyCart";

function ShoppingCart() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cartId, productsList, accessToken } = useSelector((state: State) => ({
    ...state.cart,
    ...state.user,
  }));
  const [IsCartLoaderVisible, setCartLoaderVisible] = useState<boolean>(true);

  const convertPrice = (price: string) => {
    return Math.ceil(Number(price) * 75);
  };

  // const percentOff = (totalCost: string, discountedCost: string) => {
  //   return (
  //     Math.ceil(
  //       (convertPrice(totalCost) - convertPrice(discountedCost)) /
  //         convertPrice(totalCost)
  //     ) * 100
  //   );
  // };

  const handlePlaceOrder = () => {
    history.push("/create-order");
  };

  useEffect(() => {
    (async () => {
      cartId &&
        !productsList.length &&
        (await dispatch(setProductsInShoppingCart(cartId)));
      setCartLoaderVisible(false);
    })();

    // return () => {
    //   setCartLoaderVisible(false);
    // };
  }, [cartId, productsList.length, dispatch]);

  return (
    <>
      {IsCartLoaderVisible ? (
        <CartLoader />
      ) : (
        <CartWrapper>
          {productsList.length && accessToken ? (
            <>
              <ProductSection>
                {productsList.map((product, i) => (
                  <CreateProductInCart product={product} key={i} />
                ))}

                <PlaceOrder>
                  <button onClick={handlePlaceOrder}>Place Order</button>
                </PlaceOrder>
              </ProductSection>

              <BalanceSection>
                <p>PRICE DETAILS</p>
                <hr />

                <p>
                  <span>
                    Price ({productsList.length}{" "}
                    {productsList.length > 1 ? "items" : "item"})
                  </span>
                  <span>
                    &#8377;
                    {productsList.reduce(
                      (acc, cv) => (acc += convertPrice(cv.subtotal)),
                      0
                    )}
                  </span>
                </p>

                {/* <p>
                <span>Delivery charges</span>
                <span>&#8377;00</span>
              </p> */}
                <hr />
                <p>
                  <Amount>Total Amount</Amount>
                  <span>
                    &#8377;
                    {productsList.reduce(
                      (acc, cv) => (acc += convertPrice(cv.subtotal)),
                      0
                    )}
                  </span>
                </p>
                <hr />
              </BalanceSection>
            </>
          ) : (
            <EmptyCart />
          )}
        </CartWrapper>
      )}
    </>
  );
}

// const Div = styled.div``;
// const Section = styled.section``;
const CartWrapper = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-direction: row;
  font-family: Roboto, Arial, sans-serif;
  margin-top: 3em;
`;

const ProductSection = styled.section`
  position: relative;
  padding-left: 20px;
  width: 60%;
  background-color: #fff;
  border-radius: 2px;
  border: 1px solid #e5e2e2;
`;

const PlaceOrder = styled.div`
  width: 58.9%;
  background-color: #fff;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  left: 30px;
  text-align: right;
  box-shadow: 1px -1px 6px #c3c3c3;
  button {
    margin-right: 20px;
    border: none;
    outline: none;
    background: #db6400;
    padding: 15px 40px;
    font-size: 25px;
    border-radius: 3px;
    color: #fff;

    &:hover {
      cursor: pointer;
    }
  }
`;

const BalanceSection = styled.section`
  position: fixed;
  right: 9%;
  margin-left: 1em;
  width: 350px;
  background-color: #fff;
  padding: 20px;
  height: fit-content;
  border: 1px solid #e5e2e2;
  border-radius: 2px;

  p:first-of-type {
    color: grey;
    font-weight: bold;
    margin: 0;
  }

  p {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin: 30px 0;
  }
`;

const Amount = styled.span`
  font-weight: bold;
`;

export default ShoppingCart;
