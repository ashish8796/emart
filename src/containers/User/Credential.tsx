import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";

interface CredentialProps {
  addCard?: boolean;
}

interface CredentialObj {
  credit_Card: string;
  confirmNumber: string;
}

export interface CredentialHanler {
  getCredentialState: () => CredentialObj;
}

const Credential = forwardRef<CredentialHanler, CredentialProps>(
  ({ addCard = true }, ref) => {
    const [creditCard, setCreditCard] = useState<string>("");
    const [confirmNumber, setConfirmNumber] = useState<string>("");

    const handleCrediInput = (event: any) => {
      setCreditCard(event.target.value);
    };
    const handleConfirmNumber = (event: any) => {
      setConfirmNumber(event.target.value);
    };

    const getCredentialState = () => {
      return {
        credit_Card: creditCard,
        confirmNumber,
      };
    };

    useImperativeHandle(ref, () => ({
      getCredentialState,
    }));

    return (
      <CredentialBox>
        <p>Credentials</p>

        <CreditCardNumber
          type={"text"}
          required
          onChange={handleCrediInput}
          placeholder={"Enter Credit Card Number"}
          disabled={addCard}
        />

        <ConfirmNumber
          type={"text"}
          required
          onChange={handleConfirmNumber}
          placeholder={"Confirm Credit Card Number"}
          disabled={addCard}
        />
      </CredentialBox>
    );
  }
);

const FlexStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 250px;
  margin: 10px 0;
  outline: none;
  border: none;
  border-bottom: 2px solid grey;
  font-size: 18px;
`;

const CredentialBox = styled(FlexStyle)`
  p {
    color: #585656;
    font-weight: bold;
  }
`;
const CreditCardNumber = styled(Input)`
  margin: 20px 10px;
`;
const ConfirmNumber = styled(Input)`
  margin: 10px;
`;

export default Credential;
