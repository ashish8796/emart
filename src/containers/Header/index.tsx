import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/actions/tsTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Department from "../Department/Department";
import {
  setCategories,
  setDepartments,
  setProdByDeptId,
} from "../../store/actions/home.action";
import { useRouter } from "next/router";
import { setUsesrDetails } from "../../store/actions/user.action";
import { setIsDepartmentVisible } from "../../store/actions/screen.action";
import OptionNavBar from "./OptionNavBar";
import { HeaderLoader } from "../Home/contentLoader";

function HeaderElement() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loader, setLoader] = useState(true);

  const showDepartments =
    router.pathname !== "/shoppingCart" && router.pathname !== "/login";

  const {
    departments,
    customer,
    accessToken,
    isDepartmentVisible,
    departmentStatus,
  } = useSelector((state: State) => ({
    ...state.home,
    ...state.user,
    ...state.screen,
  }));

  useEffect(() => {
    (async () => {
      if (!customer.customer_status && accessToken) {
        dispatch(setUsesrDetails());
      }
    })();
  }, [accessToken, dispatch]);

  useEffect(() => {
    (async () => {
      await dispatch(setDepartments());
      await dispatch(setCategories());

      setLoader(false);
    })();
  }, [dispatch]);

  const handleCartClick = () => {
    dispatch(setIsDepartmentVisible(false));
    router.push("/cart");
  };

  const handleHomeClick = () => {
    dispatch(setIsDepartmentVisible(true));
    router.push("/");
  };

  let networkError = false;
  if (departmentStatus === "Fetch to Failed") {
    networkError = true;
  }

  // console.log({ customer, accessToken });

  return (
    <>
      {departmentStatus !== 200 || networkError ? (
        <HeaderLoader />
      ) : (
        <Header>
          <SearchHead>
            <HomeWrapper>
              <Logo
                src="/assets/images/freeLogo.jpeg"
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

          <DepartmentWrapper isHeight={isDepartmentVisible}>
            {isDepartmentVisible &&
              departmentStatus === 200 &&
              departments.map((el, i) => <Department el={el} key={i} />)}
          </DepartmentWrapper>
        </Header>
      )}
    </>
  );
}

interface Props {
  isHeight: boolean;
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

const Cart = styled(Button)`
  background: none;
  span {
    margin-right: 5px;
  }
`;

const DepartmentWrapper = styled.div`
  margin-top: 3.8em;
  height: ${(props: Props) => (props.isHeight ? "fit-content" : "35px")};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #fff;
`;

export default HeaderElement;
