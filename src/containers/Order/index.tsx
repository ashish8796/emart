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
import ContactNums from "./ContactNumber";

function Orders() {
  const dispatch = useDispatch();
  const addressRef = useRef<React.ElementRef<typeof Address>>(null);

  const credentialRef = useRef<React.ElementRef<typeof Credential>>(null);

  const contactNumRef = useRef<React.ElementRef<typeof ContactNums>>(null);

  const { customer, cartId } = useSelector((state: State) => ({
    ...state.user,
    ...state.cart,
  }));
  const [addShippingDetails, setAddShippingDetails] = useState<boolean>(false);

  useEffect(() => {
    if (
      !customer.address_1 &&
      !customer.city &&
      !customer.country &&
      !customer.postal_code
    ) {
      setAddShippingDetails(true);
    }
  }, []);

  const handleOrderForm = (event: any) => {
    event.preventDefault();

    const addressObj = addressRef.current?.getAddressState();
    console.log(addressObj);

    const credentialObj = credentialRef.current?.getCredentialState();

    const userDetails = {
      name: customer.name,
      email: customer.email,
      mob_phone: contactNumRef.current?.getContactState(),
    };

    console.log({ addressObj, credentialObj, userDetails });

    if (
      credentialObj &&
      credentialObj.credit_Card === credentialObj.confirmNumber
    ) {
      dispatch(setUserAddress(addressObj));
      // dispatch(setUserCreditCard(credentialObj.credit_Card));
      dispatch(updateUserDetails(userDetails));
    }
  };

  const handleConfirmOrder = () => {
    const orderData = {
      cart_id: cartId,
      shipping_id: customer.shipping_region_id,
    };
    // dispatch();
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
          <span>{customer.name}</span> (<span>{customer.email}</span>)
        </p>
      </UserName>
      {addShippingDetails ? (
        <OrderForm onSubmit={handleOrderForm}>
          <Address ref={addressRef} />

          <div>
            <Credential ref={credentialRef} />

            <ContactNums ref={contactNumRef} />
          </div>

          <Submit type={"submit"} onSubmit={handleOrderForm}>
            Next
          </Submit>
        </OrderForm>
      ) : (
        <>
          <DeliveryAddress>
            <AddressHeading>Shipping Address</AddressHeading>
            <p>{customer.address_1},</p>
            <p>{customer.address_2 && customer.address_2 + " ,"}</p>
            <p>
              {customer.city} (<span>{customer.postal_code}</span>),
            </p>
            <p>
              {customer.country} ({customer.region})
            </p>

            <Contact>Contact Number</Contact>
            <p>{customer.mob_phone}</p>
          </DeliveryAddress>

          <DeliveryOption></DeliveryOption>

          <ConfirmOrder>
            <button onClick={handleConfirmOrder}>Confirm Order</button>
          </ConfirmOrder>
        </>
      )}
    </OrdersContainer>
  );
}

const OrdersContainer = styled.div`
  font-family: Roboto, Arial, sans-serif;
  // border: 2px solid red;
  padding: 30px;
  margin: 30px;
  background-color: #fff;
`;

const FlexStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled(FlexStyle)`
  flex-direction: row;

  p:first-child {
    margin: 0 20px 20px 0;
    font-weight: bold;

    span {
      color: green;
    }
  }

  p:last-child {
    span: first-child {
      font-weight: bold;
    }
  }
`;
const OrderForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 0 5em;
  justify-content: space-between;
  align-itmes: space-between;
`;

const DeliveryAddress = styled.div`
  p {
    margin-bottom: 8px;
  }
`;

const AddressHeading = styled.p`
  color: #585656;
  font-weight: bold;
`;

const Contact = styled.p`
  color: #585656;
  font-weight: bold;
  margin-top: 30px;
`;

const DeliveryOption = styled.div``;

const ConfirmOrder = styled.div`
  // border: 2px solid red;
  position: relative;
  margin-top: 3em;
  height: 60px;

  button {
    position: absolute;
    right: 0;
    margin-right: 2em;
    outline: none;
    border: none;
    font-size: 20px;
    padding: 10px 20px;
    background: #fc8621;
    color: #fff;
    border-radius: 3px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Submit = styled.button``;

export default Orders;
