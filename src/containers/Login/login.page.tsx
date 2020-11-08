import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface LoginPageProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

function LoginPage({ setIsLogin }: LoginPageProps) {
  const handleSignUpClick = () => {
    setIsLogin(false);
  };
  const [flipHeading, setFlipHeading] = useState(false);

  const handleLoginForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  useEffect(() => {
    setTimeout(() => {
      setFlipHeading(true);
    }, 600);
  }, []);

  return (
    <>
      <LoginWrapper>
        <LoginHeading
          style={{ visibility: flipHeading ? "visible" : "hidden" }}
        >
          Log In
        </LoginHeading>

        <LoginForm
          className="animate__animated animate__flip"
          onSubmit={handleLoginForm}
        >
          <LoginInput type="text" id="log-in-username" required />
          <LoginLabel htmlFor="log-in-username">Username Or E-mail</LoginLabel>

          <LoginInput type="text" id="log-in-password" required />
          <LoginLabel htmlFor="password">Password</LoginLabel>

          <LoginSubmit type="submit" onSubmit={handleLoginForm}>
            Log In
          </LoginSubmit>
        </LoginForm>

        <SignUpButton
          className="animate__animated animate__flip"
          onClick={handleSignUpClick}
        >
          <span>New User?</span>
          <span>Sign Up</span>
        </SignUpButton>
      </LoginWrapper>
    </>
  );
}

const LoginWrapper = styled.div`
  font-family: "Maven Pro", sans-serif;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 96%, 5% 0%);
  border-radius: 4px;
  background: linear-gradient(#9fb1b6, #084555);
`;

const LoginHeading = styled.h1`
  color: #fff;
  font-size: 40px;
  margin: 4em 1.3em 0 1.3em;
  animation-duration: 0.8s;
`;

const LoginForm = styled.form`
  // border: 2px solid red;
  display: flex;
  flex-direction: column;
  margin: 5em 0 0 52px;
  width: 40%;
  animation-duration: 0.8s;
`;

const LoginInput = styled.input`
  color: #ffffff;
  outline: none;
  border: none;
  border-bottom: 1px solid;
  width: 50%;
  background: none;
  font-size: 17px;
  padding: 3px 0;

  &::placeholder {
    color: #335a69;
    font-size: 15px;
  }
`;
const LoginLabel = styled.label`
  margin-top: 3px;
  margin-bottom: 15px;
  font-size: 15px;
  color: #99d1da;
`;

const LoginSubmit = styled.button`
  width: 35%;
  padding: 8px;
  border: none;
  background: #4af74a;
  border-radius: 3px;
  outline: none;
  box-shadow: 16px 11px 4px 2px #022f3b;
  transition: box-shadow 0.3s ease-in;
  font-size: 18px;
  color: #044e5e;
  margin-top: 2em;

  &:hover {
    cursor: pointer;
    box-shadow: 4px 6px 4px 2px #022f3b;
  }
`;

const SignUpButton = styled.p`
  position: absolute;
  left: 18%;
  bottom: 10%;
  padding: 3px;
  font-size: 20px;
  color: #00fffef5;
  margin-top: -20px;
  animation-duration: 0.8s;

  span:first-child {
    margin: 0 10px;
  }

  span:last-child {
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }
`;
export default LoginPage;
