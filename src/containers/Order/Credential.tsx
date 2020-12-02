import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";

interface CredentialProps {}

interface CredentialObj {
  creditCard: string;
  confirmNumber: string;
}

export interface CredentialHanler {
  getCredentialState: () => CredentialObj;
}

const Credential = forwardRef<CredentialHanler, CredentialProps>(
  (props, ref) => {
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
        creditCard,
        confirmNumber,
      };
    };

    useImperativeHandle(ref, () => ({
      getCredentialState,
    }));

    return (
      <CredentialBox>
        <CreditCardNumber type={"text"} required onChange={handleCrediInput} />
        <Label>Enter Credit Card Number</Label>

        <ConfirmNumber type={"text"} required onChange={handleConfirmNumber} />
        <Label>Confirm Credit Card Number</Label>
      </CredentialBox>
    );
  }
);

const FlexStyle = styled.div``;
const Input = styled.input``;
const Label = styled.label``;
const CredentialBox = styled(FlexStyle)``;
const CreditCardNumber = styled(Input)``;
const ConfirmNumber = styled(Input)``;

export default Credential;
