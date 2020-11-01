import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Dept from "./Department";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  setDepartments,
  setCategories,
  setProdByDeptId,
} from "../../store/actions/home.action";
import { State } from "../../store/actions/tsTypes";
import CreateDepartment from "./CreateDepartment";

function Home() {
  const dispatch = useDispatch();

  const { departments } = useSelector((state: State) => state.home);

  useEffect(() => {
    dispatch(setDepartments());
    dispatch(setCategories());
    [1, 2, 3].forEach(async (id) => {
      dispatch(setProdByDeptId(id));
    });
  }, []);

  // useEffect(() => {
  //   console.log(releventCats);
  // }, [releventCats]);

  // console.log(departments);
  return (
    <>
      <Header>
        <SearchHead>
          <SearchWrapper>
            <Logo src={"./../../assets/images/freeLogo.jpeg"} alt="logo" />
            <SearchForm>
              <Search
                type="text"
                placeholder={"Search for products, brands and more"}
              />
              <SearchLogo type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </SearchLogo>
            </SearchForm>
          </SearchWrapper>
          <SystemWrapper>
            <Login>Login</Login>
            <More>More</More>
            <Cart>Cart</Cart>
          </SystemWrapper>
        </SearchHead>
        <Department>
          {departments.length > 0 &&
            departments.map((el, i) => <Dept el={el} key={i} />)}
        </Department>
      </Header>
      <MainWrapper>
        {[1, 2, 3].map((id, i) => (
          <CreateDepartment key={i} id={id} />
        ))}
      </MainWrapper>
    </>
  );
}

const Header = styled.header`
  border-bottom: 1px solid #c1c0c0;
`;

const SearchHead = styled.div`
  display: flex;
`;

const SearchWrapper = styled.div`
  // border: 1px solid red;
  font-family: Roboto, Arial, sans-serif;
  flex-basis: 62%;
  display: flex;
  justify-content: flex-end;
  background-color: blue;
`;

const Logo = styled.img`
  margin-right: 10px;
`;

const SearchForm = styled.form`
  // border: 2px solid green;
  background-color: #fff;
  margin: 10px;
  width: 70%;
  border-radius: 2px;
`;

const Search = styled.input`
  width: 90%;
  padding: 6px;
  font-size: 20px;
  display: inline-block;
  border-radius: 4px;
  outline: none;
  border: none;

  &::-webkit-input-placeholder {
    font-size: 16px;
  }
`;

const SearchLogo = styled.button`
  display: inline-block;
  font-size: 20px;
  margin-left: 10px;
  color: blue;
  outline: none;
  border: none;
  background: none;
`;

const SystemWrapper = styled.div`
  flex: 1;
  background-color: blue;
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  width: 120px;
  font-size: 18px;
  margin: 10px;
  border-radius: 3px;
  outline: none;
  border: none;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

const Login = styled(Button)`
  // padding: 20px;
  color: #0000c6;
`;

const More = styled(Button)`
  background: none;
`;

const Cart = styled(Button)`
  background: none;
`;

const Department = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  // padding: 10px;
  font-family: Roboto, Arial, sans-serif;
  background-color: #fff;
`;

const MainWrapper = styled.div``;

export default Home;
