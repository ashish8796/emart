import { url } from "inspector";
import React, { useState } from "react";
import styled from "styled-components";
import LoginPage from "./login.page";
import SignUp from "./signUp.page";

function LoginAndSignUp() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  // window.location.pathname = "/signUp";

  return (
    <LoginAndSignUpContainer
    // style={{
    //   backgroundImage: `url(${
    //     require("./../../assets/images/login_image/login.png").default
    //   })`,
    // }}
    >
      <img
        src={require("./../../assets/images/login_image/login.png").default}
      />
      {!isLogin ? (
        <SignUp setIsLogin={setIsLogin} />
      ) : (
        <LoginPage setIsLogin={setIsLogin} />
      )}
    </LoginAndSignUpContainer>
  );
}

const LoginAndSignUpContainer = styled.div`
  // background-size: cover;
  background-color: #fff;
  height: 100vh;
  // border: 2px solid red;
  position: relative;
  overflow: hidden;
  // margin: 10px 0;

  img {
    position: absolute;
    right: 0;
    height: 75vh;
    margin-top: 25px;
  }
`;

export default LoginAndSignUp;
