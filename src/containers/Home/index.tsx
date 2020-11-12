import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getUserDetails } from "../../services/api";
import { State } from "../../store/actions/tsTypes";

import CreateDepartment from "../Department/CreateDepartment";

function Home() {
  // const dispatch = useDispatch();
  const { departments, customer, accessToken } = useSelector(
    (state: State) => ({
      ...state.home,
      ...state.user,
    })
  );

  useEffect(() => {
    console.log(accessToken);
    (async () => {
      const data = await getUserDetails();
      console.log(data);
    })();
  }, []);

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
