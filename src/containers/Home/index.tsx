import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/actions/tsTypes";
import CreateDepartment from "../Department/CreateDepartment";
import NetworkError from "./NetworkError";

function Home() {
  const { departments, departmentStatus } = useSelector((state: State) => ({
    ...state.home,
    ...state.user,
  }));

  console.log(departments);

  return (
    <>
      {departmentStatus !== "Fetch to Failed" ? (
        <MainWrapper>
          {departmentStatus === 200 &&
            departments.map((department, i) => (
              <CreateDepartment key={i} id={department.department_id} />
            ))}
        </MainWrapper>
      ) : (
        <NetworkError />
      )}
    </>
  );
}

const MainWrapper = styled.div``;

export default Home;
