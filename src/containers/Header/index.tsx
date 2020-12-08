import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/actions/tsTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  faChevronDown,
  faChevronUp,
  faPowerOff,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Department from "../Department/Department";
import {
  setCategories,
  setDepartments,
  setProdByDeptId,
} from "../../store/actions/home.action";
import { useHistory, useLocation } from "react-router-dom";
import {
  setLogOutUser,
  setUsesrDetails,
} from "../../store/actions/user.action";
import { setProductsInShoppingCart } from "../../store/actions/shoppingCart.action";
import { setIsDepartmentVisible } from "../../store/actions/screen.action";

function HeaderElement() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [isOptionVisible, setIsOptionVisible] = useState(false);

  const showDepartments =
    location.pathname !== "/shoppingCart" && location.pathname !== "/login";
  const {
    departments,
    customer,
    accessToken,
    cartId,
    productsList,
    isDepartmentVisible,
  } = useSelector((state: State) => ({
    ...state.home,
    ...state.user,
    ...state.cart,
    ...state.screen,
  }));

  // console.log(customer);
  useEffect(() => {
    (async () => {
      !customer.name && accessToken && (await dispatch(setUsesrDetails()));
      console.log(cartId);
      cartId && (await dispatch(setProductsInShoppingCart(cartId)));
    })();
  }, []);

  useEffect(() => {
    dispatch(setDepartments());
    dispatch(setCategories());

    return () => {
      setIsOptionVisible(false);
    };
  }, []);

  useEffect(() => {
    departments.length > 0 &&
      departments.forEach((department) => {
        dispatch(setProdByDeptId(department.department_id));
      });
  }, [departments]);

  // console.log(cartId);

  const handleLoginClick = () => {
    history.push("/login");
  };

  const handleLogOutClick = () => {
    localStorage.removeItem("emart-token");
    localStorage.removeItem("secondry_cart_id");
    dispatch(setLogOutUser());
    history.push("/login");
  };

  const handleCartClick = () => {
    dispatch(setIsDepartmentVisible(false));
    history.push("/cart");
  };

  const handleOrdersClick = () => {
    dispatch(setIsDepartmentVisible(false));
    history.push("/orders");
  };

  return (
    <>
      <Header>
        <SearchHead>
          <SearchWrapper>
            <Logo
              src={require("./../../assets/images/freeLogo.jpeg").default}
              alt="logo"
              onClick={() => {
                dispatch(setIsDepartmentVisible(true));
                history.push("/");
              }}
            />
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
            {showDepartments && (
              <LoginWrapper>
                {" "}
                {customer.name ? (
                  <>
                    <p
                      onMouseOver={() => {
                        setIsOptionVisible(true);
                      }}
                    >
                      {customer.name.slice(0, 13)}{" "}
                      <FontAwesomeIcon
                        icon={isOptionVisible ? faChevronUp : faChevronDown}
                      />
                    </p>
                    {isOptionVisible && (
                      <OptionContainer
                        onMouseLeave={() => {
                          setIsOptionVisible(false);
                        }}
                      >
                        <OrdersButton onClick={handleOrdersClick}>
                          Orders
                        </OrdersButton>
                        <LogOut onClick={handleLogOutClick}>
                          <span>
                            <FontAwesomeIcon icon={faPowerOff} />
                          </span>{" "}
                          Log Out
                        </LogOut>
                      </OptionContainer>
                    )}
                  </>
                ) : (
                  <Login onClick={handleLoginClick}>Login</Login>
                )}
              </LoginWrapper>
            )}

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
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const SearchWrapper = styled.div`
  // border: 1px solid red;
  flex-basis: 62%;
  display: flex;
  justify-content: flex-end;
  background-color: blue;
`;

const Logo = styled.img`
  margin-right: 10px;
  margin-top: 5px;
  width: 45px;
  height: 45px;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }
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

const LoginWrapper = styled.div`
  position: relative;
  margin: auto;
  p {
    color: #fff;
    font-size: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const OptionContainer = styled.div`
  position: absolute;
  // top: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: #fff;
  width: 130px;
  border-radius: 3px;

  p {
    color: black;
    font-size: 17px;
    margin: 5px 0;

    &:hover {
      color: blue;
    }
  }
`;

const OrdersButton = styled.p``;

const LogOut = styled.p``;

const Login = styled(Button)`
  // padding: 20px;
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
  // padding: 10px;
  font-family: Roboto, Arial, sans-serif;
  background-color: #fff;
`;

export default HeaderElement;
