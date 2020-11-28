import React, { useState } from "react";
import styled from "styled-components";
import { getRegion } from "../../services/api";

function ShippingDetails() {
  const [regionOption, setRegionOption] = useState([
    { shipping_region_id: 1, shipping_region: "Please Select" },
  ]);

  const customer = {
    customer_id: 89968,
    name: "Ashish Kumar Saini",
    email: "ashishsaini.ak143@gmail.com",
    address_1: null,
    address_2: null,
    city: null,
    country: null,
    credit_card: null,
    day_phone: null,
    eve_phone: null,
    mob_phone: null,
    postal_code: null,
    region: null,
    shipping_region_id: "",
  };

  const hancleSelectClick = async () => {
    const data = await getRegion();
    console.log(data);
    setRegionOption(data);
  };

  return (
    <AddressContainer>
      <Address>
        <p>Add Delivery Address</p>
        <AddressForm>
          <Input type="text" required />
          <Lable>Address Line 1</Lable>
          <Input type="text" />
          <Lable>Address Line 2</Lable>
          <Input type="text" required />
          <Lable>City</Lable>
          <Input type="text" required />
          <Lable>Country</Lable>
          <Input type="number" required />
          <Lable>Postal Code</Lable>
          <Select name="Select Region" onClick={hancleSelectClick}>
            {regionOption.map((option: any, i) => (
              <option key={i} selected={i === 0}>
                {option.shipping_region}
              </option>
            ))}
          </Select>
          <Lable>Region</Lable>
        </AddressForm>
      </Address>
    </AddressContainer>
  );
}

const AddressContainer = styled.div``;
const Address = styled.div``;
const AddressForm = styled.form``;
const Input = styled.input``;
const Lable = styled.label``;
const Select = styled.select``;

export default ShippingDetails;
