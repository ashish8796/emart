import React, { useEffect, useRef, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/actions/tsTypes";
import {
  setUserAddress,
  setUserCreditCard,
  updateUserDetails,
} from "../../store/actions/user.action";
import Address from "./Address";
import Credential from "./Credential";

function Orders() {
  const dispatch = useDispatch();
  const addressRef = useRef<React.ElementRef<typeof Address>>(null);

  const credentialRef = useRef<React.ElementRef<typeof Credential>>(null);

  const { customer } = useSelector((state: State) => state.user);
  // const [editShippingDetails, setShippingDetails] = useState<string>("");

  const [dayPhone, setDayPhone] = useState<string>("");
  const [eveningPhone, setEveningPhone] = useState<string>("");
  const [mobileNum, setMobileNum] = useState<string>("");

  useEffect(() => {
    if (
      !customer.address_1 &&
      !customer.city &&
      !customer.country &&
      !customer.postal_code
    ) {
      // setShippingDetails("address");
    }
  }, []);

  const handleDayPhone = (event: any) => {
    setDayPhone(event.target.value);
  };
  const handleEveningPhone = (event: any) => {
    setEveningPhone(event.target.value);
  };
  const handleMobileNumber = (event: any) => {
    setMobileNum(event.target.value);
  };

  const handleOrderForm = (event: any) => {
    event.preventDefault();

    const userDetail = {
      day_phone: dayPhone,
      eve_phone: eveningPhone,
      mob_phone: mobileNum,
    };

    const addressObj = addressRef.current?.getAddressState();
    console.log(addressObj);
    const credentialObj = credentialRef.current.getCredentialState();

    if (credentialObj.creditCard === credentialObj.confirmNumber) {
      dispatch(setUserAddress(addressObj));
      dispatch(setUserCreditCard(credentialObj.creditCard));
      dispatch(updateUserDetails(userDetail));
    }
  };

  return (
    <OrdersContainer>
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
      <OrderForm onSubmit={handleOrderForm}>
        <Address ref={addressRef} />

        <Credential ref={credentialRef} />

        <Submit type={"submit"} onSubmit={handleOrderForm}>
          Next
        </Submit>
      </OrderForm>
    </OrdersContainer>
  );
}

const OrdersContainer = styled.div``;
const FlexStyle = styled.div``;

const UserName = styled(FlexStyle)``;
const OrderForm = styled.form``;

const Input = styled.input``;
const Label = styled.label``;
const ContactNumberBox = styled(FlexStyle)``;

const Submit = styled.button``;

export default Orders;
