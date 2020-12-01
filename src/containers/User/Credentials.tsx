import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setUserCreditCard } from "../../store/actions/user.action";

function Credientials({ editShippingDetails }: any) {
  const dispatch = useDispatch();
  const [creditCard, setCreditCard] = useState<string>("");
  const [confirmNumber, setConfirmNumber] = useState<string>("");

  const handleCrediInput = (event: any) => {
    setCreditCard(event.target.value);
  };
  const handleConfirmNumber = (event: any) => {
    setConfirmNumber(event.target.value);
  };
  const handleCredentialFrom = (event: any) => {
    event.preventDefault();

    if (creditCard === confirmNumber) {
      dispatch(setUserCreditCard(creditCard));

      editShippingDetails("userDetails");
    }
  };

  return (
    <CridentialWrapper>
      <CridentialForm onSubmit={handleCredentialFrom}>
        <CreditCardNumber type={"text"} required onChange={handleCrediInput} />
        <Label>Enter Credit Card Number</Label>

        <ConfirmNumber type={"text"} required onChange={handleConfirmNumber} />
        <Label>Confirm Credit Card Number</Label>

        <Submit type={"submit"} onSubmit={handleCredentialFrom}>
          Next
        </Submit>
      </CridentialForm>
    </CridentialWrapper>
  );
}

const CridentialWrapper = styled.div``;
const CridentialForm = styled.form``;
const Input = styled.input``;
const Label = styled.label``;
const CreditCardNumber = styled(Input)``;
const ConfirmNumber = styled(Input)``;
const Submit = styled.button``;

export default Credientials;
