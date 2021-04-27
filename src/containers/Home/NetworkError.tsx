import React from "react";
import styled from "styled-components";

interface NetworkErrorProps {
  setNetworkError: React.Dispatch<React.SetStateAction<string | number>>;
}

function NetworkError({ setNetworkError }: NetworkErrorProps) {
  const handleCancelButton = () => {
    setNetworkError("");
  };

  return (
    <>
      <ErrorWrapper>
        <div>
          <CancelButton onClick={handleCancelButton}>X</CancelButton>
          <img
            src={
              require("./../../assets/images/connection_image/images.png")
                .default
            }
            alt="internet down"
          />
          <p>Slow Internet!. Please Retry.</p>
        </div>
      </ErrorWrapper>
    </>
  );
}

const ErrorWrapper = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  border: 2px solid red;
  font-family: Roboto, Arial, sans-serif;
  backdrop-filter: blur(2px);
  text-align: center;

  img {
    width: 200px;
    display: block;
  }

  p {
    font-size: 20px;
    margin: 10px;
  }

  div {
    width: fit-content;
    margin: 25vh auto;
    background-color: #fff;
  }
`;

const CancelButton = styled.button`
  position: absolute;
  right: 5vw;
  top: 10vh;
  width: 80px;
  height: 50px;
  font-size: 30px;
  border: none;
  background: none;
  color: red;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

export default NetworkError;
