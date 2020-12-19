import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { setIsDepartmentVisible } from "../../store/actions/screen.action";

function EmptyCart() {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogin = () => {
    history.push("/login");
  };

  const handleShopNow = () => {
    dispatch(setIsDepartmentVisible(true));
    history.push("/");
  };

  return (
    <>
      <EmptyCartWrapper>
        <MyCart>My Cart</MyCart>
        <img
          src={require("./../../assets/images/cart_image/shopNow.png").default}
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
      </EmptyCartWrapper>
    </>
  );
}

const EmptyCartWrapper = styled.div`
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

const LoginButton = styled(Button)``;
const ShopNow = styled(Button)``;
export default EmptyCart;
