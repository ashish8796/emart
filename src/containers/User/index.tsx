import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/actions/tsTypes";
import AddressDetails from "./AddressDetails";
import Credientials from "./Credentials";
import UserDetails from "./UserDetails";

function User() {
  const { customer } = useSelector((state: State) => state.user);
  const [editAddress, setEditAddress] = useState(false);

  useEffect(() => {
    if (
      !customer.address_1 &&
      !customer.city &&
      !customer.country &&
      !customer.postal_code
    ) {
      setEditAddress(true);
    }
  }, []);

  return (
    <UserContainer>
      <Steps>
        <StepNamesBox>
          <StepCount>Step 1</StepCount>
          <StepCount>Step 2</StepCount>
          <StepCount>Step 3</StepCount>
        </StepNamesBox>
        <ConnectedLine></ConnectedLine>
        <DotsBox>
          <Dots></Dots>
          <Dots></Dots>
          <Dots></Dots>
        </DotsBox>
      </Steps>

      <UserName>
        <p>
          LOGIN{" "}
          <span>
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </p>

        <p>
          {customer.name} <span>{customer.email}</span>
        </p>
      </UserName>
      {editAddress && <UserDetails />}
    </UserContainer>
  );
}

const UserContainer = styled.div`
  // margin-top: 30px;
  font-family: Roboto, Arial, sans-serif;
`;

const FlexStyle = styled.div``;

const UserName = styled(FlexStyle)``;
const Steps = styled(FlexStyle)``;
const StepNamesBox = styled(FlexStyle)``;
const StepCount = styled(FlexStyle)``;
const ConnectedLine = styled(FlexStyle)``;
const DotsBox = styled(FlexStyle)``;
const Dots = styled(FlexStyle)``;

export default User;
