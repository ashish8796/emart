import React from "react";
import styled from "styled-components";

function NetworkError() {
  return (
    <>
      <ErrorWrapper>
        <img
          src={
            require("./../../assets/images/connection_image/images.png").default
          }
          alt="internet down"
        />
        <p>Slow Internet!. Please Retry.</p>
      </ErrorWrapper>
    </>
  );
}

const ErrorWrapper = styled.div`
  position: absolute;
  z-index: 10;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // border: 2px solid red;

  font-family: Roboto, Arial, sans-serif;
  width: 100%;
  flex-width: 1;
  height: 99vh;

  img {
    width: 200px;
  }

  p {
    font-size: 20px;
    margin: 10px;
  }
`;

export default NetworkError;
