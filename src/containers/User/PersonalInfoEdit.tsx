import React from "react";
import styled from "styled-components";

interface PersonalInfoEditProps {
  customer: any;
}

function PersonalInfoEdit({ customer }: PersonalInfoEditProps) {
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
        <PTag>Change Password</PTag>
        <Input type={"email"} />
      </EmailAddressEdit>

      <MobileNumberEdit>
        <PTag>Mobile Number</PTag>
        <PTag>Edit</PTag>
        <Input type="number" />
      </MobileNumberEdit>
    </>
  );
}

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
const MobileNumberEdit = styled.div``;

export default PersonalInfoEdit;
