import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";

interface PersonalInfoEditProps {
  customer: any;
}

interface PersonalInfoHandler {
  getPersonalInfoState: () => PersonalInfoObj;
}

interface PersonalInfoObj {
  name: string;
  email: string;
  password: string;
  mob_phone: string;
}

const PersonalInfoEdit = forwardRef<PersonalInfoHandler, PersonalInfoEditProps>(
  ({ customer }, ref) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [mobNum, setMobNum] = useState<string>("");
    const [editName, setEditName] = useState<boolean>(true);
    const [editEmail, setEditEmail] = useState<boolean>(true);
    const [changePassword, setChangePassword] = useState<boolean>(true);
    const [editMobNo, setEditMobNo] = useState<boolean>(true);

    const getPersonalInfoState = () => {
      return {
        name: name ? name : customer.name,
        email: email ? email : customer.email,
        password,
        mob_phone: mobNum,
      };
    };

    useImperativeHandle(ref, () => ({
      getPersonalInfoState,
    }));

    const handleNameInput = (event: any) => {
      console.log(event.target.value);
      setName(event.target.value);
    };

    const handleEmailInput = (event: any) => {
      setEmail(event.target.value);
    };

    const handlePasswordInput = (event: any) => {
      setPassword(event.target.value);
    };

    const handleMobileInput = (event: any) => {
      setMobNum(event.target.value);
    };

    const handleEditName = (event: any) => {
      setEditName((state) => !state);
    };

    const handleEditEmail = (event: any) => {
      setEditEmail((state) => !state);
    };

    const handleChangePassword = (event: any) => {
      setChangePassword((state) => !state);
    };

    const handleEditMobNo = (event: any) => {
      setEditMobNo((state) => !state);
    };

    console.log(customer);

    return (
      <>
        <PersonalInfoEditDiv>
          <PTag>Personal Information</PTag>
          <PTag onClick={handleEditName}>{editName ? "Edit" : "Cancel"}</PTag>
          <Input
            type="text"
            placeholder={customer.name}
            value={!editName ? name : ""}
            onChange={handleNameInput}
            disabled={editName}
          />
        </PersonalInfoEditDiv>

        <EmailAddressEdit>
          <PTag>Email Address</PTag>
          <PTag onClick={handleEditEmail}>{editEmail ? "Edit" : "Cancel"}</PTag>
          <Input
            type={"email"}
            value={!editEmail ? email : ""}
            onChange={handleEmailInput}
            disabled={editEmail}
            placeholder={customer.email}
          />
        </EmailAddressEdit>

        <ChangePassword>
          <PTag>Change Password</PTag>
          <PTag onClick={handleChangePassword}>
            {changePassword ? "Edit" : "Cancel"}
          </PTag>
          <Input
            type={"password"}
            value={!changePassword ? password : ""}
            onChange={handlePasswordInput}
            disabled={changePassword}
          />
        </ChangePassword>

        <MobileNumberEdit>
          <PTag>Mobile Number</PTag>
          <PTag onClick={handleEditMobNo}>{editMobNo ? "Edit" : "Cancel"}</PTag>
          <Input
            type="number"
            value={!editMobNo ? mobNum : ""}
            onChange={handleMobileInput}
            disabled={editMobNo}
          />
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
  width: 280px;
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
