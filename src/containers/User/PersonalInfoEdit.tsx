import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";

interface PersonalInfoEditProps {
  customer: any;
}

interface PersonalInfoHandler {
  getPersonalInfoState: () => PersonalInfoObj;
}

interface PersonalInfoObj {}

const PersonalInfoEdit = forwardRef<PersonalInfoHandler, PersonalInfoEditProps>(
  ({ customer }, ref) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [mobNum, setMobNum] = useState<string>("");
    const [editName, setEditName] = useState<boolean>(false);
    const [editEmail, setEditEmail] = useState<boolean>(false);
    const [changePassword, setChangePassword] = useState<boolean>(false);
    const [editMobNo, setEditMobNo] = useState<boolean>(false);

    const getPersonalInfoState = () => {
      return {};
    };

    useImperativeHandle(ref, () => ({
      getPersonalInfoState,
    }));

    return (
      <>
        <PersonalInfoEditDiv>
          <PTag>Personal Information</PTag>
          <PTag>Edit</PTag>
          <Input type="text" placeholder={customer.name} />
        </PersonalInfoEditDiv>

        <EmailAddressEdit>
          <PTag>Email Address</PTag>
          <PTag>Edit</PTag>
          <Input type={"email"} />
        </EmailAddressEdit>

        <ChangePassword>
          <PTag>Change Password</PTag>
          <PTag>Change</PTag>
          <Input type={"password"} />
        </ChangePassword>

        <MobileNumberEdit>
          <PTag>Mobile Number</PTag>
          <PTag>Edit</PTag>
          <Input type="number" />
        </MobileNumberEdit>
      </>
    );
  }
);

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

const PersonalInfoEditDiv = styled.div``;

const EmailAddressEdit = styled.div`
  margin: 50px 0;
`;

const ChangePassword = styled.div`
  margin: 50px 0;
`;
const MobileNumberEdit = styled.div``;

export default PersonalInfoEdit;
