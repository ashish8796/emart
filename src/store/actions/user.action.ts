import { Dispatch } from "redux";
import { getUserDetails, loginUser, putCreditCart, putUserAddress, putUserDetails, registerNewUser } from "../../services/api";
import { Customer, customerObj } from "../reducers/user.reducer";
import { LOGIN_USER, LOG_OUT_USER, REGISTER_USER, SET_CUSTOMER_STATUS, SET_USER_ADDRESS, SET_USER_CREDIT_CARD, SET_USER_DETAILS, UPDATE_USER_DETAILS } from "./actionTypes";
import { LoginDetails, UserDetails } from "./tsTypes";

export const registerUser = (userDetails: UserDetails) => async (dispatch: Dispatch) => {
  let registerData;
  try {
    const data: any = await registerNewUser(userDetails);
    console.log(data)
    dispatch({
      type: REGISTER_USER,
      payload: data === "Failed to fetch" ? { customer: customerObj, customer_status: false, accessToken: "" } : { ...data.result, status: data.status }
    })
    registerData = data;
  } catch (error) {
  }
  return registerData;
}

export const loginTheUser = (loginDetails: LoginDetails) => async (dispatch: Dispatch) => {
  let loginData: {
    customer: Customer;
    status: boolean | number;
    accessToken: string;
  };
  try {
    const data: any = await loginUser(loginDetails);
    // console.log(data)
    loginData = data === "Failed to fetch" ? { customer: customerObj, status: false, accessToken: "" } : { ...data.result, status: data.status }

    dispatch({
      type: LOGIN_USER,
      payload: loginData,
    })
    return data === "Failed to fetch" ? { status: data } : loginData;
  } catch (error) { }
}

export const setUsesrDetails = () => async (dispatch: Dispatch) => {
  try {
    const data: any = await getUserDetails();
    // console.log(data)

    dispatch({
      type: SET_USER_DETAILS,
      payload: data === "Failed to fetch" ? { ...customerObj, customer_status: false } : { ...data.result, customer_status: data.status }
    })
  } catch (e) {
    console.log(e);

  }
}

export const setLogOutUser = () => {
  return {
    type: LOG_OUT_USER,
  }
}

export const setUserAddress = (obj: any) => async (dispatch: Dispatch) => {
  try {

    const data: any = await putUserAddress(obj)
    dispatch({
      type: SET_USER_ADDRESS,
      payload: data === "Failed to fetch" ? { customer: customerObj, customer_status: false } : { ...data.result, status: data.status }
    })
  } catch (error) {

  }
}

export const setUserCreditCard = (creditCardNumber: any) => async (dispatch: Dispatch) => {
  try {
    const data: any = await putCreditCart(creditCardNumber);
    dispatch({
      type: SET_USER_CREDIT_CARD,
      payload: data === "Failed to fetch" ? { customer: customerObj, status: false } : { ...data.result, status: data.status }
    })
  } catch (error) {

  }
}

export const updateUserDetails = (obj: any) => async (dispatch: Dispatch) => {
  let userDetails;
  try {
    const data: any = await putUserDetails(obj);
    userDetails = data;
    dispatch({
      type: UPDATE_USER_DETAILS,
      payload: data === "Failed to fetch" ? { customer: customerObj, status: false } : { ...data.result, status: data.status }
    })

  } catch (error) {

  }
  return userDetails;
}