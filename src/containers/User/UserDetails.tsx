import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateUserDetails } from "../../store/actions/user.action";

function UserDetails() {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [dayPhone, setDayPhone] = useState<string>("");
  const [eveningPhone, setEveningPhone] = useState<string>("");
  const [mobileNum, setMobileNum] = useState<string>("");

  const handleName = (event: any) => {
    setName(event.target.value);
  };
  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handlePasswoed = (event: any) => {
    setPassword(event.target.value);
  };
  const handleDayPhone = (event: any) => {
    setDayPhone(event.target.value);
  };
  const handleEveningPhone = (event: any) => {
    setEveningPhone(event.target.value);
  };
  const handleMobileNumber = (event: any) => {
    setMobileNum(event.target.value);
  };

  const handleUserDetailForm = async (event: any) => {
    event.preventDefault();

    const userDetail = {
      name,
      email,
      password,
      day_phone: dayPhone,
      eve_phone: eveningPhone,
      mob_phone: mobileNum,
    };

    dispatch(updateUserDetails(userDetail));
  };

  return (
    <UserDetailsBox>
      <UserDetailForm onSubmit={handleUserDetailForm}>
        <Input type={"text"} required onChange={handleName} />
        <Label>Enter Name</Label>

        <Input type={"email"} required onChange={handleEmail} />
        <Label>Enter Email</Label>

        <Input type={"password"} onChange={handlePasswoed} />
        <Label>Enter password</Label>

        <Input type={"text"} onChange={handleDayPhone} />
        <Label>Enter Day Phone Number</Label>

        <Input type={"text"} onChange={handleEveningPhone} />
        <Label>Enter Evening Phone Number</Label>

        <Input type={"text"} onChange={handleMobileNumber} required />
        <Label>Enter Evening Mobile Number</Label>

        <Submit type={"submit"} onSubmit={handleUserDetailForm}>
          Save
        </Submit>
      </UserDetailForm>
    </UserDetailsBox>
  );
}

const UserDetailsBox = styled.div``;
const UserDetailForm = styled.form``;
const Input = styled.input``;
const Label = styled.label``;
const Submit = styled.button``;

export default UserDetails;
