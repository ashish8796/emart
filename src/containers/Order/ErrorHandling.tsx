import React from "react";
import styled from "styled-components";

interface UnAuthErrorProps {
  setNetworkError: React.Dispatch<React.SetStateAction<string | number>>;
}

export function UnAuthError({ setNetworkError }: UnAuthErrorProps) {
  const handleOnClick = () => {
    setNetworkError("");
  };
  return (
    <>
      <UnAuthOverlay></UnAuthOverlay>
      <UnAuthErrorBox>
        <div>
          <p>Unauthorized Access. Please login again.</p>
          <button onClick={handleOnClick}>OK</button>
        </div>
      </UnAuthErrorBox>
    </>
  );
}

const UnAuthOverlay = styled.article`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const UnAuthErrorBox = styled.article`
  top: 60px;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(4px);

  div {
    padding: 10px;
    text-align: center;
    margin: 10em auto;
    width: 300px;
    height: 150px;
    border: 2px solid red;
    border-radius: 5px;
    background-color: #fff;
  }

  p {
    margin-top: 2em;
    font-size: 18px;
  }

  button {
    margin-top: 20px;
    width: 100px;
    padding: 8px 10px;
    font-size: 18px;
    outline: none;
    border: none;
    background: #f37121;
    color: #fff;
    border-radius: 3px;
    font-weight: bold;

    &: hover {
      cursor: pointer;
    }
  }
`;
