import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/actions/tsTypes";
import EditProfileForm from "./EditProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faClipboardList,
  faCreditCard,
  faPowerOff,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { setLogOutUser } from "../../store/actions/user.action";

function UserProfile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { customer } = useSelector((state: State) => state.user);
  const [editFeild, setEditFeild] = useState<string>("personalInfo");

  const handlePersonalInfoClick = () => {
    setEditFeild("personalInfo");
  };

  const handleAddressClick = () => {
    setEditFeild("address");
  };

  const handlePaymentClick = () => {
    setEditFeild("credential");
  };

  const handleLogOut = () => {
    localStorage.removeItem("emart-token");
    localStorage.removeItem("secondry_cart_id");
    dispatch(setLogOutUser());
    history.push("/login");
  };

  const handleOrderClick = () => {
    history.push("/orders");
  };

  return (
    <ProfileWrapper>
      <SectionA>
        <GreetingArticle>
          {customer.name && (
            <>
              <img
                src={
                  require("./../../assets/images/user_image/rupee-indian.svg")
                    .default
                }
                alt="user"
              />
              <aside>
                <Hello>Hello,</Hello>
                <Name>{customer.name}</Name>
              </aside>
            </>
          )}
        </GreetingArticle>
        <InformationArticle>
          <OrdersButton onClick={handleOrderClick}>
            <span>
              <FontAwesomeIcon icon={faClipboardList} />
            </span>{" "}
            <MyOrderText>MY ORDERS</MyOrderText>
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </OrdersButton>

          <SettingDiv feild={editFeild}>
            <Heading>
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>

              <Text>ACCOUNT SETTINGS</Text>
            </Heading>

            <p onClick={handlePersonalInfoClick}>Profile Information</p>
            <p onClick={handleAddressClick}>Manage Addresses</p>
          </SettingDiv>

          <PaymentsDiv onClick={handlePaymentClick}>
            <Heading>
              <span>
                <FontAwesomeIcon icon={faCreditCard} />
              </span>

              <Text>Payments</Text>
            </Heading>
          </PaymentsDiv>

          <LogOut onClick={handleLogOut}>
            <span>
              <FontAwesomeIcon icon={faPowerOff} />
            </span>
            Log Out
          </LogOut>
        </InformationArticle>
      </SectionA>
      <EditProfileForm customer={customer} editFeild={editFeild} />
    </ProfileWrapper>
  );
}

const Flex = styled.div`
  display: flex;
  flex-direaction: row;
  font-family: Roboto, Arial, sans-serif;
`;

const ProfileWrapper = styled(Flex)`
  padding: 10px 30px;
`;

const SectionA = styled.section`
  width: 26%;
  display: flex;
  flex-direction: column;
  margin-right: 3em;

  svg {
    color: blue;
  }
`;

const GreetingArticle = styled.article`
  height: 50px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding: 13px 3em 13px 13px;
  border-radius: 3px;
  margin-bottom: 2em;
  box-shadow: 0 0 5px #b2b1b1;

  img {
    margin-right: 20px;
  }

  p {
    font-weight: bold;
    font-size: 20px;
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const Hello = styled.p`
  font-size: 14px !important;
  font-weight: normal !important;
  margin-bottom: -5px;
`;

const Name = styled.p`
  padding-bottom: -5px;
`;

const InformationArticle = styled.article`
  background-color: #fff;
  box-shadow: 0 0 5px #b2b1b1;
  padding: 13px 3em 13px 13px;
`;

const OrdersButton = styled.p`
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;

  span {
    color: grey;
  }

  .fa-chevron-right {
    color: grey;
  }

  &:hover {
    cursor: pointer;
  }
`;

interface SettingDivProps {
  feild: string;
}

const SettingDiv = styled.div`
  border-bottom: 1px solid lightgray;
  padding-bottom: 5px;
  p {
    margin: 10px 28px;

    &:hover {
      cursor: pointer;
    }
  }

  p:nth-child(2) {
    color: ${(state: SettingDivProps) =>
      state.feild === "personalInfo" ? "blue" : "black"};
  }

  p:nth-child(3) {
    color: ${(state: SettingDivProps) =>
      state.feild === "address" ? "blue" : "black"};
  }
`;

const PaymentsDiv = styled.div`
  p {
    &:hover {
      cursor: pointer !important;
    }
  }
`;

const MyOrderText = styled.span`
  display: inline-block;
  width: 80%;
  margin: 0 10px 0 15px;
  font-weight: bold;
  font-size: 18px;
`;

const Heading = styled.p`
  padding: 20px 0 10px 0;
  margin: 0 !important;

  &:hover {
    cursor: auto !important;
  }
`;

const Text = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: gray;
  margin-left: 15px;
`;

const LogOut = styled.p`
  margin: 20px 0;
  font-weight: bold;
  font-size: 18px;
  color: gray;

  svg {
    margin-right: 15px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default UserProfile;
