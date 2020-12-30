import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faClipboardList,
  faPowerOff,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setIsDepartmentVisible } from "../../store/actions/screen.action";
import { setLogOutUser } from "../../store/actions/user.action";

interface OptionNavBarProps {
  customer: any;
}

function OptionNavBar({ customer }: OptionNavBarProps) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOptionVisible, setIsOptionVisible] = useState(false);

  const handleOrdersClick = () => {
    dispatch(setIsDepartmentVisible(false));
    history.push("/orders");
  };

  const handleLogOutClick = () => {
    localStorage.removeItem("emart-token");
    localStorage.removeItem("secondry_cart_id");
    dispatch(setLogOutUser());
    history.push("/login");
  };

  const handleLoginClick = () => {
    dispatch(setIsDepartmentVisible(false));
    history.push("/login");
  };

  const handleProfileClick = () => {
    dispatch(setIsDepartmentVisible(false));
    history.push("/account");
  };

  return (
    <LoginWrapper>
      {" "}
      {customer.customer_status === 200 ? (
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
              <ProfileButton onClick={handleProfileClick}>
                <span>
                  <FontAwesomeIcon icon={faUserCircle} />
                </span>{" "}
                Profile
              </ProfileButton>
              <OrdersButton onClick={handleOrdersClick}>
                <span>
                  <FontAwesomeIcon icon={faClipboardList} />
                </span>{" "}
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
  );
}

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
  z-index: 10;
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

    span {
      margin: 0 5px;
    }

    &:hover {
      color: blue;
    }
  }
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

const Login = styled(Button)`
  color: #0000c6;
`;

const OrdersButton = styled.p``;

const LogOut = styled.p``;

const ProfileButton = styled.p``;

export default OptionNavBar;
