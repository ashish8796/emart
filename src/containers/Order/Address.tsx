import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { getRegion } from "../../services/api";

function Address() {
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

  return (
    <AddressBox>
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
    </AddressBox>
  );
}

const AddressBox = styled.div``;
const AddressForm = styled.form``;
const Input = styled.input``;
const Label = styled.label``;
const SelectRegion = styled.div``;
const Loder = styled.span``;

export default Address;
