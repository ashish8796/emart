import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/actions/tsTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Department from "../Department/Department";
import {
  setCategories,
  setDepartments,
  setProdByDeptId,
} from "../../store/actions/home.action";
import { useHistory, useLocation } from "react-router-dom";
import { setUsesrDetails } from "../../store/actions/user.action";
import { setIsDepartmentVisible } from "../../store/actions/screen.action";
import OptionNavBar from "./OptionNavBar";

function HeaderElement() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const showDepartments =
    location.pathname !== "/shoppingCart" && location.pathname !== "/login";
  const {
    departments,
    customer,
    accessToken,
    isDepartmentVisible,
  } = useSelector((state: State) => ({
    ...state.home,
    ...state.user,
    ...state.screen,
  }));

  useEffect(() => {
    (async () => {
      !customer.name && accessToken && (await dispatch(setUsesrDetails()));
    })();
  }, []);

  useEffect(() => {
    dispatch(setDepartments());
    dispatch(setCategories());
  }, []);

  useEffect(() => {
    departments.length > 0 &&
      departments.forEach((department) => {
        dispatch(setProdByDeptId(department.department_id));
      });
  }, [departments]);

  const handleCartClick = () => {
    dispatch(setIsDepartmentVisible(false));
    history.push("/cart");
  };

  const handleHomeClick = () => {
    dispatch(setIsDepartmentVisible(true));
    history.push("/");
  };

  return (
    <>
      <Header>
        <SearchHead>
          <HomeWrapper>
            <Logo
              src={require("./../../assets/images/freeLogo.jpeg").default}
              alt="logo"
              onClick={handleHomeClick}
            />

            <HomeButton onClick={handleHomeClick}>Home</HomeButton>
          </HomeWrapper>

          <SystemWrapper>
            {showDepartments && <OptionNavBar customer={customer} />}

            {showDepartments && (
              <Cart onClick={handleCartClick}>
                <span>{<FontAwesomeIcon icon={faShoppingCart} />}</span>Cart
              </Cart>
            )}
          </SystemWrapper>
        </SearchHead>
        {isDepartmentVisible && (
          <DepartmentWrapper>
            {departments.length > 0 &&
              departments.map((el, i) => <Department el={el} key={i} />)}
          </DepartmentWrapper>
        )}
      </Header>
    </>
  );
}

const Header = styled.header`
  border-bottom: 1px solid #c1c0c0;
  font-family: Roboto, Arial, sans-serif;
`;

const SearchHead = styled.div`
  background-color: blue;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const HomeWrapper = styled.div`
  flex-basis: 62%;
  display: flex;
  background-color: blue;
`;

const Logo = styled.img`
  margin: 5px 5em;
  width: 90px;
  height: 48px;

  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }
`;

const SystemWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const Button = styled.button`
  height: 40px;
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

const HomeButton = styled(Button)`
  color: #0000c6;
`;

const More = styled(Button)`
  background: none;
`;

const Cart = styled(Button)`
  background: none;
  span {
    margin-right: 5px;
  }
`;

const DepartmentWrapper = styled.div`
  margin-top: 3.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-family: Roboto, Arial, sans-serif;
  background-color: #fff;
`;

export default HeaderElement;
