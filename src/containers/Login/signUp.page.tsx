import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

interface SignUpProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

function SignUp({ setIsLogin }: SignUpProps) {
  const history = useHistory();
  const [flipHeading, setFlipHeading] = useState(false);

  const handleLogInClick = () => {
    setIsLogin(true);
  };

  const handleSignUpForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  useEffect(() => {
    setTimeout(() => {
      setFlipHeading(true);
    }, 600);
  }, []);

  return (
    <SignUpWrapper>
      <Heading style={{ visibility: flipHeading ? "visible" : "hidden" }}>
        Sign up
      </Heading>

      <SignUpForm
        className="animate__animated animate__flip"
        onSubmit={handleSignUpForm}
      >
        <Input
          type="text"
          name="name"
          id="full-name"
          placeholder="Ashish    Saini"
          required
        />
        <label htmlFor="first-name">First & last name</label>

        <Input
          type="email"
          id="email"
          placeholder="******@gmail.com"
          required
        />
        <label htmlFor="email">E-mail</label>

        <Input type="text" id="username" placeholder="Username" required />
        <label htmlFor="user-name">Username</label>

        <Input type="password" id="password" required />
        <label htmlFor="passward">Password</label>

        <TermsAndConditions>
          <input type="checkbox" name="checkbox" id="checkbox" />
          <p>Please accept term and conditions.</p>
        </TermsAndConditions>

        <Submit type="submit" id="submit" onSubmit={handleSignUpForm}>
          SIGN ME UP
        </Submit>
      </SignUpForm>

      {/* <!-- Log-in Link --> */}
      <LogInButton
        className="animate__animated animate__flip"
        onClick={handleLogInClick}
      >
        Log In
      </LogInButton>
    </SignUpWrapper>
  );
}

const SignUpWrapper = styled.div`
  font-family: "Maven Pro", sans-serif;
  color: #fff;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 96%, 5% 0%);
  border-radius: 4px;
  background: linear-gradient(#9fb1b6, #084555);
`;

const Heading = styled.h1`
  font-size: 40px;
  margin: 4em 1.3em 0 1.3em;
  animation-duration: 0.8s;
`;

const SignUpForm = styled.form`
  display: flex;
  margin: 2em 0 0 52px;
  flex-flow: column nowrap;
  width: 40%;
  animation-duration: 0.8s;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0;
  }

  #checkbox {
    margin-right: 5px;
    width: fit-content;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: #07ee2d;
    border: 1px solid #cacece;
    padding: 6px;
    border-radius: 2px;
    position: relative;
    outline: none;

    &:checked {
      background-color: #07ee2d;
      border: 1px solid #adb8c0;
    }

    &:checked::after {
      content: "✔";
      font-size: 16px;
      position: absolute;
      top: -3px;
      left: 0px;
      color: black;
    }

    &:hover {
      cursor: pointer;
    }
  }

  label {
    margin-top: 3px;
    margin-bottom: 15px;
    font-size: 15px;
    color: #99d1da;
  }
`;

const Input = styled.input`
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

const Label = styled.label``;

const TermsAndConditions = styled.div``;

const Button = styled.button`
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
  margin-left: 5px;

  &:hover {
    cursor: pointer;
    box-shadow: 4px 6px 4px 2px #022f3b;
  }
`;

const Submit = styled(Button)``;

const LogInButton = styled.p`
  color: #00fffef5;
  position: absolute;
  text-decoration: underline;
  left: 25%;
  bottom: 10%;
  padding: 3px;
  font-size: 20px;
  animation-duration: 0.8s;

  &:hover {
    cursor: pointer;
  }
`;

export default SignUp;
