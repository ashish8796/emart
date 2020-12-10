import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/actions/tsTypes";
import EditProfileForm from "./EditProfile";

function UserProfile() {
  const { customer } = useSelector((state: State) => state.user);

  return (
    <ProfileWrapper>
      <SectionA>
        <GreetingArticle>
          <aside>
            <img
              src={
                require("./../../assets/images/user_image/rupee-indian.svg")
                  .default
              }
              alt="user"
            />
          </aside>
          <p>Hello,</p>
          <p>{customer.name}</p>
        </GreetingArticle>
        <InformationArticle>
          <OrdersButton>MY ORDERS</OrdersButton>
          <SettingHeading>ACCOUNT SETTINGS</SettingHeading>
          <p>Profile Information</p>
          <p>Manage Addresses</p>

          <LogOut>Log Out</LogOut>
        </InformationArticle>
      </SectionA>
      <SectionB>
        <EditProfileForm customer={customer} />
      </SectionB>
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div``;
const SectionA = styled.section``;
const SectionB = styled.section``;
const GreetingArticle = styled.article``;
const InformationArticle = styled.article``;
const OrdersButton = styled.p``;
const SettingHeading = styled.p``;
const LogOut = styled.p``;

export default UserProfile;
