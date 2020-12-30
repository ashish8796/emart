import React, { useState } from "react";
import styled from "styled-components";
import LoginPage from "./login.page";
import SignUp from "./signUp.page";

function LoginAndSignUp() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <LoginAndSignUpContainer>
      <img
        src={require("./../../assets/images/login_image/login.png").default}
        alt={"login.png"}
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
  background-color: #fff;
  height: 84.8vh;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    right: 0;
    height: 73vh;
    margin-top: -30px;
  }
`;

export default LoginAndSignUp;
