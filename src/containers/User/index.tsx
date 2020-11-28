import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/actions/tsTypes";
import ShippingDetails from "./ShippingDetails";

function User() {
  const { customer } = useSelector((state: State) => state.user);
  const [editAddress, setEditAddress] = useState(false);

  useEffect(() => {
    if (
      !customer.address_1 &&
      !customer.city &&
      !customer.country &&
      !customer.credit_card &&
      !customer.mob_phone &&
      !customer.postal_code
    ) {
      setEditAddress(true);
    }
  }, []);

  return (
    <UserContainer>
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
      {editAddress && <ShippingDetails />}
    </UserContainer>
  );
}

const UserContainer = styled.div`
  // margin-top: 30px;
  font-family: Roboto, Arial, sans-serif;
`;
const UserName = styled.div``;

export default User;
