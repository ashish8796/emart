import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  setUserAddress,
  setUsesrDetails,
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

  const handleEditProfileForm = async (event: any) => {
    event.preventDefault();

    const addressObj = addressRef.current?.getAddressState();
    const personalInfoObj = personalInfoRef.current?.getPersonalInfoState();
    const paymentObj = paymentRef.current?.getCredentialState();

    if (paymentObj?.credit_Card !== paymentObj?.confirmNumber) {
      alert("Please enter same card details.");
    } else {
      dispatch(setUserAddress(addressObj));
      dispatch(updateUserDetails(personalInfoObj));
    }
  };

  return (
    <SectionB>
      <EditForm onSubmit={handleEditProfileForm}>
        {editFeild === "personalInfo" && (
          <PersonalInfoEdit customer={customer} ref={personalInfoRef} />
        )}
        {editFeild === "address" && <Address ref={addressRef} />}

        {editFeild === "credential" && <Credential ref={paymentRef} />}

        <button type="submit" onSubmit={handleEditProfileForm}>
          {" "}
          Save Changes{" "}
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

export default EditProfileForm;
