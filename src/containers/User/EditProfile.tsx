import React, { useRef } from "react";
import styled from "styled-components";
import Address from "./Address";
import Credential from "./Credential";
import PersonalInfoEdit from "./PersonalInfoEdit";

interface EditProfileFormProps {
  customer: any;
  editFeild: string;
}

function EditProfileForm({ customer, editFeild }: EditProfileFormProps) {
  const addressRef = useRef<React.ElementRef<typeof Address>>(null);
  const paymentRef = useRef<React.ElementRef<typeof Credential>>(null);
  const personalInfoRef = useRef<React.ElementRef<typeof PersonalInfoEdit>>(
    null
  );

  return (
    <SectionB>
      <EditForm>
        {editFeild === "personalInfo" && (
          <PersonalInfoEdit customer={customer} />
        )}
        {editFeild === "address" && <Address ref={addressRef} />}

        {editFeild === "credential" && <Credential ref={paymentRef} />}
      </EditForm>
    </SectionB>
  );
}

const SectionB = styled.section`
  width: 50%;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 0 5px #b2b1b1;
  border-radius: 3px;
`;
const EditForm = styled.form``;

const Input = styled.input`
  display: block;
  border: 1px solid gray;
  border-radius: 2px;
  outline: none;
  font-size: 20px;
  padding: 8px;
  background: #f3f3f3;
`;

const PTag = styled.p`
  display: inline-block;
  margin: 0 3em 1em 0;
  color: blue;

  &:first-child {
    font-weight: bold;
    font-size: 18px;
    color: black;

    &:hover {
      cursor: auto;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export default EditProfileForm;
