import { url } from "inspector";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/actions/tsTypes";
import LoginPage from "./login.page";
import SignUp from "./signUp.page";

function LoginAndSignUp() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const { user } = useSelector((state: State) => state);

  useEffect(() => {
    console.log(user);
    "accessToken" in user && setIsLogin(true);
  }, [user]);

  return (
    <LoginAndSignUpContainer>
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