import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getRegion } from "../../services/api";
import { State } from "../../store/actions/tsTypes";
import { setUserAddress } from "../../store/actions/user.action";

function AddressDetails({ editShippingDetails }: any) {
  const dispatch = useDispatch();
  const { customer } = useSelector((state: State) => state.user);

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

  // const customer = {
  //   customer_id: 89968,
  //   name: "Ashish Kumar Saini",
  //   email: "ashishsaini.ak143@gmail.com",
  //   address_1: null,
  //   address_2: null,
  //   city: null,
  //   country: null,
  //   credit_card: null,
  //   day_phone: null,
  //   eve_phone: null,
  //   mob_phone: null,
  //   postal_code: null,
  //   region: null,
  //   shipping_region_id: "",
  // };

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

  const handleEditAddress = async (event: any) => {
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

    dispatch(setUserAddress(addressObj));
    editShippingDetails("credential");
  };

  return (
    <AddressContainer>
      <Address>
        <p>Add Delivery Address</p>
        <AddressForm onSubmit={handleEditAddress}>
          <Input type="text" required onChange={handleAddressLine1} />
          <Lable>Address Line 1</Lable>
          <Input type="text" onChange={handleAddressLine2} />
          <Lable>Address Line 2</Lable>
          <Input type="text" required onChange={handleCity} />
          <Lable>City</Lable>
          <Input type="text" required onChange={handleCountry} />
          <Lable>Country</Lable>
          <Input type="number" required onChange={handlePostalCode} />
          <Lable>Postal Code</Lable>

          <SelectRegion>
            <Lable>Region</Lable>
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

          <Submit type={"submit"} onSubmit={handleEditAddress}>
            Next
          </Submit>
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
const SelectRegion = styled.div``;
const Loder = styled.span``;
const Submit = styled.button``;

export default AddressDetails;
