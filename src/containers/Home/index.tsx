import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/actions/tsTypes";

import CreateDepartment from "../Department/CreateDepartment";

function Home() {
  const { departments } = useSelector((state: State) => ({
    ...state.home,
    ...state.user,
  }));

  // console.log(departments);

  return (
    <>
      <MainWrapper>
        {departments.length > 0 &&
          departments.map((department, i) => (
            <CreateDepartment key={i} id={department.department_id} />
          ))}
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.div``;

export default Home;
