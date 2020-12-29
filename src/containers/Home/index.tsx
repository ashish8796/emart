import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/actions/tsTypes";
import CreateDepartment from "../Department/CreateDepartment";

function Home() {
  const { departments, departmentStatus } = useSelector((state: State) => ({
    ...state.home,
    ...state.user,
  }));

  return (
    <>
      {departmentStatus !== false ? (
        <MainWrapper>
          {departmentStatus === 200 &&
            departments.map((department, i) => (
              <CreateDepartment key={i} id={department.department_id} />
            ))}
        </MainWrapper>
      ) : (
        <ErrorWrapper>
          <img
            src={
              require("./../../assets/images/connection_image/images.png")
                .default
            }
            alt="internet down"
          />
          <p>Slow Internet!. Please Retry.</p>
        </ErrorWrapper>
      )}
    </>
  );
}

const MainWrapper = styled.div``;
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

export default Home;
