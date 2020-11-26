import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { State } from "../../store/actions/tsTypes";
import CreateProductInCart from "./CreateProductInCart";

function ShoppingCart() {
  const history = useHistory();
  const { cartId, productsList } = useSelector((state: State) => state.cart);

  const convertPrice = (price: string) => {
    return Math.ceil(Number(price) * 75);
  };

  const percentOff = (totalCost: string, discountedCost: string) => {
    return (
      Math.ceil(
        (convertPrice(totalCost) - convertPrice(discountedCost)) /
          convertPrice(totalCost)
      ) * 100
    );
  };

  console.log(productsList);

  const product = {
    attributes: "Black-XL",
    image: "easter-rebellion.gif",
    item_id: 63762,
    name: "Easter Rebellion",
    price: "16.95",
    product_id: 30,
    quantity: 1,
    subtotal: "16.95",
  };

  const handleLogin = () => {
    history.push("/login");
  };

  const handleShopNow = () => {
    history.push("/");
  };

  return (
    <>
      <CartWrapper>
        {productsList.length ? (
          <>
            <ProductSection>
              {productsList.map((product, i) => (
                <CreateProductInCart product={product} key={i} />
              ))}

              <PlaceOrder>
                <button>Place Order</button>
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
                    (acc, cv) => (acc += convertPrice(cv.price)),
                    0
                  )}
                </span>
              </p>

              <p>
                <span>Delivery charges</span>
                <span>&#8377;00</span>
              </p>
              <hr />
              <p>
                <Amount>Total Amount</Amount>
                <span>
                  &#8377;
                  {productsList.reduce(
                    (acc, cv) => (acc += convertPrice(cv.price)),
                    0
                  )}
                </span>
              </p>
              <hr />
            </BalanceSection>
          </>
        ) : (
          <EmptyCart>
            <MyCart>My Cart</MyCart>
            <img
              src={
                require("./../../assets/images/cart_image/shopNow.png").default
              }
              alt="Shop Now"
            />
            {localStorage.hasOwnProperty("emart-token") ? (
              <LogedIn>
                <p>Your Cart is empty!</p>
                <p>Add items to it now.</p>
                <ShopNow onClick={handleShopNow}>Shop Now</ShopNow>
              </LogedIn>
            ) : (
              <LogedOut>
                <p>Missing Cart items?</p>
                <p>Login to see the items you added previously</p>
                <LoginButton onClick={handleLogin}>Login</LoginButton>
              </LogedOut>
            )}
          </EmptyCart>
        )}
      </CartWrapper>
    </>
  );
}

const Div = styled.div``;
const Section = styled.section``;
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

const EmptyCart = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #fff;
  // border: 2px solid red;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 300px;
    margin: 4em 0 1em 0;
  }
`;

const MyCart = styled.p`
  position: absolute;
  left: 30px;
  top: 30px;
  font-size: 20px;
  font-weight: bold;
`;

const Button = styled.button`
  font-size: 18px;
  padding: 6px 40px;
  border: none;
  background: none;
  background-color: #de5e07;
  border-radius: 2px;
  color: #fff;
  margin: 20px 0;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

const LogedIn = styled.div`
  height: 100%;

  p:nth-child(2) {
    font-size: 14px;
    margin: 10px 0;
  }

  p:first-of-type {
    font-size: 20px;
  }
`;

const LogedOut = styled.div`
  // border: 2px solid blue;

  p:first-child {
    font-size: 20px;
    margin: 10px 0;
  }

  p:nth-child(2) {
    margin: 10px 0;
    font-size: 14px;
  }
`;

const LoginButton = styled(Button)``;
const ShopNow = styled(Button)``;

export default ShoppingCart;
