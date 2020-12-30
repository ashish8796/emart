import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { registerUser } from "../../store/actions/user.action";
import { BadRequest } from "./LoginSignUpError";

interface SignUpProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

function SignUp({ setIsLogin }: SignUpProps) {
  const dispatch = useDispatch();
  const [flipHeading, setFlipHeading] = useState(false);
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoad, setIsLoad] = useState(false);
  const [badRequest, setBadRequest] = useState<boolean | number | string>("");

  const handleLogInClick = () => {
    setIsLogin(true);
  };

  const handleName = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const handleEmail = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handleCheck = (event: {
    target: { checked: React.SetStateAction<boolean> };
  }) => {
    console.log(event.target.checked);
  };

  const handlePassword = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  const handleSignUpForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setIsLoad(true);

    const userDetails = { name, email, password };
    const registerData: any = await dispatch(registerUser(userDetails));

    setIsLoad(false);
    console.log({ registerData });
    setBadRequest(registerData.status);
    registerData.status === 200 && setIsLogin(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setFlipHeading(true);
    }, 600);

    return () => {
      setName("");
      setEmail("");
      setPassword("");
      setFlipHeading(false);

      setIsLoad(false);
    };
  }, []);

  return (
    <>
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
            onChange={handleName}
          />
          <label htmlFor="first-name">First & last name</label>

          <Input
            type="email"
            id="email"
            placeholder="******@gmail.com"
            required
            onChange={handleEmail}
            value={email}
          />
          <label htmlFor="email">E-mail</label>

          <Input
            type="password"
            id="password"
            required
            onChange={handlePassword}
            value={password}
          />
          <label htmlFor="passward">Password</label>

          <TermsAndConditions>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              onChange={handleCheck}
              required
            />
            <p>Please accept term and conditions.</p>
          </TermsAndConditions>

          <Submit type="submit" id="submit" onSubmit={handleSignUpForm}>
            <Rotate isLoad={isLoad}></Rotate> SIGN ME UP
          </Submit>
        </SignUpForm>

        {/* <!-- Log-in Link --> */}
        <LogInButton className="animate__animated animate__flip">
          Already Registered? <span onClick={handleLogInClick}>Log In</span>
        </LogInButton>
      </SignUpWrapper>

      {badRequest && (
        <BadRequest
          setUserName={setEmail}
          setPassword={setPassword}
          setBadRequest={setBadRequest}
          badRequest={badRequest}
          calledIn="signUp"
        />
      )}
    </>
  );
}

type Loder = {
  isLoad: boolean;
};

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
  margin: 3em 1.3em 0 1.3em;
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

const TermsAndConditions = styled.div``;

const Button = styled.button`
  width: 35%;
  height: fit-content;
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
const Rotate = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0 10px -2px -18px;
  border: 2px solid #4af74a;
  border-top: 2px solid ${(state: Loder) => (state.isLoad ? "#fff" : "#4af74a")};
  border-right: 2px solid
    ${(state: Loder) => (state.isLoad ? "#fff" : "#4af74a")};
  border-radius: 50%;
  animation: rotate 0.8s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LogInButton = styled.p`
  position: absolute;
  left: 19.5%;
  bottom: 10%;
  padding: 3px;
  font-size: 20px;
  animation-duration: 0.8s;
  color: #00fffef5;

  span {
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default SignUp;
