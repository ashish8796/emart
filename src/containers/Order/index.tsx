import React, { useEffect, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/actions/tsTypes";
import AddressDetails from "../User/AddressDetails";
import Credientials from "../User/Credentials";
import UserDetails from "../User/UserDetails";
import { getRegion } from "../../services/api";
import {
  setUserAddress,
  setUserCreditCard,
  updateUserDetails,
} from "../../store/actions/user.action";

function Orders() {
  const dispatch = useDispatch();
  const { customer } = useSelector((state: State) => state.user);
  // const [editShippingDetails, setShippingDetails] = useState<string>("");
  const [regionOption, setRegionOption] = useState([
    { shipping_region_id: 1, shipping_region: "Please Select" },
  ]);

  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [postalCode, setPostalCode] = useState<number>();
  const [addressLine1, setAddressLine1] = useState<string>("");
  const [addressLine2, setAddressLine2] = useState<string>("");
  const [shippingRegion, setShippingRegion] = useState<string>("");
  const [shippingRegionId, setShippingRegionId] = useState<number>();
  const [creditCard, setCreditCard] = useState<string>("");
  const [confirmNumber, setConfirmNumber] = useState<string>("");
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

  const hancleSelectClick = async () => {
    if (regionOption.length === 1) {
      const data = await getRegion();
      console.log(data);
      setRegionOption(data);
    }
  };

  const handleAddressLine1 = (event: any) => {
    setAddressLine1(event.target.value);
  };
  const handleAddressLine2 = (event: any) => {
    setAddressLine2(event.target.value);
  };
  const handleCity = (event: any) => {
    setCity(event.target.value);
  };
  const handleCountry = (event: any) => {
    setCountry(event.target.value);
  };
  const handlePostalCode = (event: any) => {
    setPostalCode(event.target.value);
  };
  const handleRegion = (event: any) => {
    const region = event.target.innerText;
    const shippingId = regionOption.find(
      (obj) => obj.shipping_region === region
    )?.shipping_region_id;
    setShippingRegion(region);
    setShippingRegionId(shippingId);
  };

  const handleCrediInput = (event: any) => {
    setCreditCard(event.target.value);
  };
  const handleConfirmNumber = (event: any) => {
    setConfirmNumber(event.target.value);
  };
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

    const addressObj = {
      address_1: addressLine1,
      address_2: addressLine2,
      city,
      country,
      postal_code: postalCode,
      shipping_region_id: shippingRegionId,
      region: shippingRegion,
    };

    const userDetail = {
      day_phone: dayPhone,
      eve_phone: eveningPhone,
      mob_phone: mobileNum,
    };

    if (creditCard === confirmNumber) {
      dispatch(setUserAddress(addressObj));
      dispatch(setUserCreditCard(creditCard));
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
        <Address>
          <p>Add Delivery Address</p>

          <Input type="text" required onChange={handleAddressLine1} />
          <Label>Address Line 1</Label>
          <Input type="text" onChange={handleAddressLine2} />
          <Label>Address Line 2</Label>
          <Input type="text" required onChange={handleCity} />
          <Label>City</Label>
          <Input type="text" required onChange={handleCountry} />
          <Label>Country</Label>
          <Input type="number" required onChange={handlePostalCode} />
          <Label>Postal Code</Label>

          <SelectRegion>
            <Label>Region</Label>
            {regionOption.map((option: any, i) =>
              i === 0 ? (
                <p key={i} onClick={hancleSelectClick}>
                  <Loder></Loder>
                  {option.shipping_region}{" "}
                  <span>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </p>
              ) : (
                <p key={i} onClick={handleRegion}>
                  {option.shipping_region}
                </p>
              )
            )}
          </SelectRegion>
        </Address>
        <CredentialBox>
          <CreditCardNumber
            type={"text"}
            required
            onChange={handleCrediInput}
          />
          <Label>Enter Credit Card Number</Label>

          <ConfirmNumber
            type={"text"}
            required
            onChange={handleConfirmNumber}
          />
          <Label>Confirm Credit Card Number</Label>
        </CredentialBox>

        <ContactNumberBox>
          <Input type={"text"} onChange={handleDayPhone} />
          <Label>Enter Day Phone Number</Label>

          <Input type={"text"} onChange={handleEveningPhone} />
          <Label>Enter Evening Phone Number</Label>

          <Input type={"text"} onChange={handleMobileNumber} required />
          <Label>Enter Mobile Number</Label>
        </ContactNumberBox>

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
const Address = styled.div``;
const AddressForm = styled.form``;
const Input = styled.input``;
const Label = styled.label``;
const SelectRegion = styled.div``;
const Loder = styled.span``;
const CredentialBox = styled(FlexStyle)``;
const CreditCardNumber = styled(Input)``;
const ConfirmNumber = styled(Input)``;
const ContactNumberBox = styled(FlexStyle)``;

const Submit = styled.button``;

export default Orders;
