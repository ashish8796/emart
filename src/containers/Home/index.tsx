import React from "react";
import ContentLoader from "react-content-loader";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/actions/tsTypes";
import CreateDepartment from "../Department/CreateDepartment";
import HomeLoader from "./contentLoader";

function Home() {
  const { departments, departmentStatus } = useSelector((state: State) => ({
    ...state.home,
    ...state.user,
  }));

  console.log(departmentStatus);

  return (
    <>
      {departmentStatus ? (
        <MainWrapper>
          {departments.length > 0 &&
            departments.map((department, i) => (
              <CreateDepartment key={i} id={department.department_id} />
            ))}
        </MainWrapper>
      ) : (
        <ErrorWrapper>
          <ContentLoader
            speed={1}
            width={200}
            height={40}
            backgroundColor={"#333"}
            foregroundColor={"#999"}
            viewBox="0 0 380 70"
          >
            <rect x="100%" y="100" rx="0" ry="0" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
          </ContentLoader>
          <img
            src={
              require("./../../assets/images/connection_image/images.png")
                .default
            }
            alt="internet down"
          />
          <p>Slow Internet!. Please Retry.</p>

          {/* <HomeLoader /> */}
        </ErrorWrapper>
      )}
    </>
  );
}

const MainWrapper = styled.div``;
const ErrorWrapper = styled.div`
  position: absolute;
  top: 10%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  border: 2px solid red;

  font-family: Roboto, Arial, sans-serif;
  width: 99%;
  flex-width: 1;
  height: 98%;

  p {
    font-size: 20px;
    margin: 10px;
  }
`;

export default Home;
