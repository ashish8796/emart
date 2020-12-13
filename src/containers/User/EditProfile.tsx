import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  setUserAddress,
  updateUserDetails,
} from "../../store/actions/user.action";
import Address from "./Address";
import Credential from "./Credential";
import PersonalInfoEdit from "./PersonalInfoEdit";

interface EditProfileFormProps {
  customer: any;
  editFeild: string;
}

function EditProfileForm({ customer, editFeild }: EditProfileFormProps) {
  const dispatch = useDispatch();
  const addressRef = useRef<React.ElementRef<typeof Address>>(null);
  const paymentRef = useRef<React.ElementRef<typeof Credential>>(null);
  const personalInfoRef = useRef<React.ElementRef<typeof PersonalInfoEdit>>(
    null
  );
  const [showLoader, setLoader] = useState<boolean>(false);
  const [editAddress, setEditAddress] = useState<boolean>(false);
  const [addCard, setAddCard] = useState<boolean>(false);

  const sumbitPersonalInfoForm = async (event: any) => {
    event.preventDefault();
    const personalInfoObj = personalInfoRef.current?.getPersonalInfoState();

    if (personalInfoObj?.name && personalInfoObj?.email) {
      setLoader(true);
      await dispatch(updateUserDetails(personalInfoObj));
      setLoader(false);
      // window.location.reload();
    }
  };

  const submitAddressForm = async (event: any) => {
    event.preventDefault();

    const addressObj = addressRef.current?.getAddressState();

    if (addressObj?.address_1) {
      setLoader(true);
      await dispatch(setUserAddress(addressObj));
      setLoader(false);
      window.location.reload();
    }
  };

  const submitCredentialForm = async (event: any) => {
    event.preventDefault();

    const paymentObj = paymentRef.current?.getCredentialState();

    if (paymentObj?.credit_Card !== paymentObj?.confirmNumber) {
      alert("Please enter same card details.");
    } else {
      setLoader(false);
      window.location.reload();
    }
  };

  let handleSubmitForm;
  let text;

  if (editFeild === "personalInfo") {
    handleSubmitForm = sumbitPersonalInfoForm;
    text = "Personal Information";
  } else if (editFeild === "address") {
    handleSubmitForm = submitAddressForm;
    text = "Address";
  } else if (editFeild === "credential") {
    handleSubmitForm = submitCredentialForm;
    text = "Credit Card";
  }

  const handleEditAddress = () => {
    setEditAddress((state) => !state);
  };

  const handleAddCard = () => {
    setAddCard((state) => !state);
  };

  return (
    <SectionB>
      <EditForm onSubmit={handleSubmitForm}>
        {editFeild === "personalInfo" && (
          <PersonalInfoEdit customer={customer} ref={personalInfoRef} />
        )}
        {editFeild === "address" && (
          <>
            <EditAddressText onClick={handleEditAddress}>
              {editAddress ? "Cancel" : "Edit Address"}
            </EditAddressText>
            <Address ref={addressRef} editAddress={!editAddress} />
          </>
        )}

        {editFeild === "credential" && (
          <>
            <AddCardText onClick={handleAddCard}>
              {addCard ? "Cancel" : "Add Card"}
            </AddCardText>
            <Credential ref={paymentRef} addCard={!addCard} />
          </>
        )}

        <button type="submit" onSubmit={handleSubmitForm}>
          <Loder showLoder={showLoader}> </Loder> Save {text + " "}
        </button>
      </EditForm>
    </SectionB>
  );
}

const SectionB = styled.section`
  position: relative;
  width: 50%;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 0 5px #b2b1b1;
  border-radius: 3px;
`;

const EditForm = styled.form`
  button {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 30px;
    padding: 8px 30px;
    font-size: 20px;
    border: none;
    outline: none;
    background: #fc8621;
    border-radius: 3px;
    color: #fff;

    &:hover {
      cursor: pointer;
    }
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
  margin: 0 0 -2px 0;
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

const Text = styled.p`
  position: absolute;
  right: 4em;
  font-weight: bolder;
  color: blue;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;

const EditAddressText = styled(Text)``;

const AddCardText = styled(Text)``;

export default EditProfileForm;
