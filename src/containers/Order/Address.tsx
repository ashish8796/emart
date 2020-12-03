import React, { forwardRef, useImperativeHandle, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { getRegion } from "../../services/api";

interface AddressProps {}

export interface AddessHandler {
  getAddressState: () => object;
}

const Address = forwardRef<AddessHandler, AddressProps>((props, ref) => {
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
  const [toggleOption, setToggleOption] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<string>("Please Select");
  const [showLoader, setLoader] = useState<boolean>(false);

  const hancleSelectClick = async () => {
    if (regionOption.length === 1) {
      setLoader(true);
      const data = await getRegion();
      setLoader(false);

      setRegionOption(data);
    }

    setToggleOption(!toggleOption);
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

    console.log(shippingId);

    setSelectedRegion(region);
    setShippingRegion(region);
    setToggleOption(!toggleOption);
    setShippingRegionId(shippingId);
  };

  const getAddressState = () => {
    return {
      city,
      country,
      postal_code: postalCode,
      address_1: addressLine1,
      address_2: addressLine2,
      region: shippingRegion,
      shipping_region_id: shippingRegionId,
    };
  };

  useImperativeHandle(ref, () => ({
    getAddressState,
  }));

  return (
    <AddressBox>
      <p>Delivery Address</p>

      <InputBox>
        <Input
          type="text"
          value={addressLine1}
          required
          onChange={handleAddressLine1}
          placeholder={"Address Line 1"}
        />

        <Input
          type="text"
          value={addressLine2}
          onChange={handleAddressLine2}
          placeholder={"Address Line 2"}
        />

        <Input
          type="text"
          value={city}
          required
          onChange={handleCity}
          placeholder={"City"}
        />

        <Input
          type="text"
          value={country}
          required
          onChange={handleCountry}
          placeholder={"Country"}
        />

        <div>
          <Label>Postal Code</Label>
          <Input
            type="number"
            value={postalCode}
            required
            onChange={handlePostalCode}
          />
        </div>
      </InputBox>

      <SelectRegion>
        <Label>Region</Label>
        <div>
          <p onClick={hancleSelectClick}>
            {showLoader && <Loder> </Loder>}
            {selectedRegion}{" "}
            <span>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </p>
          {regionOption.slice(1).map((option: any, i) =>
            toggleOption ? (
              <p key={i} onClick={handleRegion}>
                {option.shipping_region}
              </p>
            ) : (
              <></>
            )
          )}
        </div>
      </SelectRegion>
    </AddressBox>
  );
});

const FlexStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddressBox = styled(FlexStyle)`
  p {
    color: #585656;
    font-weight: bold;
  }
`;

const InputBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding: 20px 0;

  div {
    display: flex;
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 80%;
  margin: 10px;
  outline: none;
  border: none;
  border-bottom: 2px solid grey;
  font-size: 18px;

  &:last-child {
    margin-top: 0;
  }
`;

const Label = styled.label`
  margin-top: 10px;
`;

const SelectRegion = styled(FlexStyle)`
  flex-direction: row;

  label {
    margin-right: 20px;
    margin-top: 0;
  }

  div {
    p {
      margin-bottom: 10px;
      font-weight: normal;
      color: black;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const Loder = styled.span`
  display: inline-block;
  border-radius: 50%;
  border: 2px solid green;
  border-bottom: 2px solid #fff;
  width: 13px;
  height: 13px;
  margin-bottom: -2px;
  margin-right: 8px;
  animation: rotateLoader 0.8s linear infinite;

  @keyframes rotateLoader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Address;
