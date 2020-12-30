import React from "react";
import styled from "styled-components";
import NetworkError from "../Home/NetworkError";

interface BadRequestProps {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setBadRequest: React.Dispatch<
    React.SetStateAction<boolean | number | string>
  >;
  badRequest: boolean | number | string;
}

function BadRequest({
  setUserName,
  setPassword,
  setBadRequest,
  badRequest,
}: BadRequestProps) {
  const handleOkButton = () => {
    setUserName("");
    setPassword("");
    setBadRequest(false);
  };

  return (
    <Overlay>
      {badRequest === 400 && (
        <BadRequestBox className="animate__animated animate__zoomIn">
          <p>
            Email Id or Password does not match. <br></br>Please try again with
            correct Id or Password.
          </p>
          <OkButton onClick={handleOkButton}>OK</OkButton>
        </BadRequestBox>
      )}
      {badRequest === "Failed to fetch" && <NetworkError />}
    </Overlay>
  );
}

const Overlay = styled.article`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 20;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(3px);
  font-family: "Maven Pro", sans-serif;
`;

const BadRequestBox = styled.article`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0096884d;
  width: 400px;
  height: 150px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 1px #1b759f52;
  align-text: center;
  animation-duration: 0.5s;

  p {
    font-size: 20px;
    margin: 10px;
    line-height: 25upx;
  }
`;

const OkButton = styled.button`
  padding: 8px;
  border: none;
  background: #4af74a;
  border-radius: 3px;
  outline: none;
  font-size: 18px;
  color: #044e5e;
  margin-top: 10px;
  width: 100px;

  &: hover {
    cursor: pointer;
  }
`;

export default BadRequest;
