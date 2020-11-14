import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/actions/tsTypes";
import { setUsesrDetails } from "../../store/actions/user.action";

import CreateDepartment from "../Department/CreateDepartment";

function Home() {
  const dispatch = useDispatch();
  const { departments, customer, accessToken } = useSelector(
    (state: State) => ({
      ...state.home,
      ...state.user,
    })
  );

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
