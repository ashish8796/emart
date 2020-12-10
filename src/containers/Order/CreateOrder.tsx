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
import ConfirmOrder from "./ConfirmOrder";

function CreateOrder() {
  const dispatch = useDispatch();
  const addressRef = useRef<React.ElementRef<typeof Address>>(null);

  const credentialRef = useRef<React.ElementRef<typeof Credential>>(null);

  const contactNumRef = useRef<React.ElementRef<typeof ContactNums>>(null);

  const { customer, cartId } = useSelector((state: State) => ({
    ...state.user,
    ...state.cart,
  }));
  const [addShippingDetails, setAddShippingDetails] = useState<boolean>(true);

  const [showLoder, setShowLoder] = useState<boolean>(false);
  console.log(customer);

  useEffect(() => {
    if (customer.address_1) {
      setAddShippingDetails(false);
    }

    return () => {
      setAddShippingDetails(false);
    };
  }, []);

  const handleOrderForm = async (event: any) => {
    event.preventDefault();

    setShowLoder(true);

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
      const addressData = await dispatch(setUserAddress(addressObj));
      // await dispatch(
      //   setUserCreditCard({ credit_card: credentialObj.credit_Card })
      // );
      const userData: any = await dispatch(updateUserDetails(userDetails));

      if (userData.address_1 && userData.mob_phone) {
        setAddShippingDetails(false);
        setShowLoder(false);
      }
    }
  };

  return (
    <CreateOrderBox>
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
            <Loder showLoder={showLoder}></Loder> Next
          </Submit>
        </OrderForm>
      ) : (
        <ConfirmOrder />
      )}
    </CreateOrderBox>
  );
}

const CreateOrderBox = styled.div`
  position: relative;
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
  margin-top: 20px;

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
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 0 5em;
  justify-content: space-between;
`;

const Submit = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 20px;
  outline: none;
  background: #fc8621;
  border: none;
  padding: 10px 3em;
  border-radius: 3px;
  font-size: 20px;
  color: #fff;
  width: 200px;

  &:hover {
    cursor: pointer;
  }
`;

interface LoderProps {
  showLoder: boolean;
}

const Loder = styled.span`
  display: inline-block;
  border-radius: 50%;
  border: 2px solid #fff;
  border-bottom: 2px solid #fc8621;
  width: 13px;
  height: 13px;
  margin: 0 0 -2px -14px;
  animation: rotateLoader 0.8s linear infinite;
  visibility: ${(state: LoderProps) =>
    state.showLoder ? "visible" : "hidden"};

  @keyframes rotateLoader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default CreateOrder;
