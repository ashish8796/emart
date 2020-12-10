import React from "react";
import styled from "styled-components";

interface EditProfileFormProps {
  customer: any;
}

function EditProfileForm({ customer }: EditProfileFormProps) {
  return (
    <EditForm>
      <PersonalInfoEdit>
        <p>Personal Information</p>
        <p>Edit</p>
        <input type="text" placeholder={customer.name} />
      </PersonalInfoEdit>
      <EmailAddressEdit>
        <p>Email Address</p>
        <p>Edit</p>
        <p>Change Password</p>
        <input type={"email"} />
      </EmailAddressEdit>
      <MobileNumberEdit></MobileNumberEdit>
    </EditForm>
  );
}
const EditForm = styled.form``;
const PersonalInfoEdit = styled.div``;
const EmailAddressEdit = styled.div``;
const MobileNumberEdit = styled.div``;

export default EditProfileForm;
