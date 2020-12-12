import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";

interface ContactNumProps {}

interface ContactNumHandler {
  getContactState: () => string;
}

const ContactNums = forwardRef<ContactNumHandler, ContactNumProps>(
  (props, ref) => {
    const [mobileNum, setMobileNum] = useState<string>("");

    const handleMobileNumber = (event: any) => {
      setMobileNum(event.target.value);
    };

    const getContactState = () => {
      return mobileNum;
    };

    useImperativeHandle(ref, () => ({
      getContactState,
    }));

    return (
      <ContactNumberBox>
        <p>Phone Number</p>
        <Input
          type={"text"}
          onChange={handleMobileNumber}
          required
          placeholder={"Enter Mobile Number"}
        />
      </ContactNumberBox>
    );
  }
);

const FlexStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 200px;
  margin: 10px;
  outline: none;
  border: none;
  border-bottom: 2px solid grey;
  font-size: 18px;
`;

const ContactNumberBox = styled(FlexStyle)`
  p {
    color: #585656;
    font-weight: bold;
  }

  margin-top: 20px;
`;

export default ContactNums;
