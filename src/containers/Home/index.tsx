import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// import {
//   setDepartments,
//   setCategories,
//   setProdByDeptId,
// } from "../../store/actions/home.action";
import { State } from "../../store/actions/tsTypes";

import CreateDepartment from "../Department/CreateDepartment";

function Home() {
  // const dispatch = useDispatch();

  const { departments } = useSelector((state: State) => state.home);

  // console.log(departments);

  useEffect(() => {}, []);

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
