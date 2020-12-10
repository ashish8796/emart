import { Dispatch } from "redux";
import { getUserDetails, loginUser, putCreditCart, putUserAddress, putUserDetails, registerNewUser } from "../../services/api";
import { LOGIN_USER, LOG_OUT_USER, REGISTER_USER, SET_USER_ADDRESS, SET_USER_CREDIT_CARD, SET_USER_DETAILS, UPDATE_USER_DETAILS } from "./actionTypes";
import { LoginDetails, UserDetails } from "./tsTypes";

export const registerUser = (userDetails: UserDetails) => async (dispatch: Dispatch) => {
  let registerData;
  try {
    const data = await registerNewUser(userDetails);
    console.log(data)
    dispatch({
      type: REGISTER_USER,
      payload: data
    })
    registerData = data;
  } catch (error) {
  }
  return registerData;
}

export const loginTheUser = (loginDetails: LoginDetails) => async (dispatch: Dispatch) => {
  let loginData;
  try {
    const data = await loginUser(loginDetails);
    // console.log(data)
    dispatch({
      type: LOGIN_USER,
      payload: data,
    })
    loginData = data
  } catch (error) {

  }
  return loginData;
}

export const setUsesrDetails = () => async (dispatch: Dispatch) => {
  try {
    const data = await getUserDetails();
    dispatch({
      type: SET_USER_DETAILS,
      payload: data
    })
  } catch (error) {

  }
}

export const setLogOutUser = () => {
  return {
    type: LOG_OUT_USER,
  }
}

export const setUserAddress = (obj: any) => async (dispatch: Dispatch) => {
  try {

    const data = await putUserAddress(obj)
    dispatch({
      type: SET_USER_ADDRESS,
      payload: data
    })
  } catch (error) {

  }
}

export const setUserCreditCard = (creditCardNumber: any) => async (dispatch: Dispatch) => {
  try {
    const data = await putCreditCart(creditCardNumber);
    dispatch({
      type: SET_USER_CREDIT_CARD,
      payload: data
    })
  } catch (error) {

  }
}

export const updateUserDetails = (obj: any) => async (dispatch: Dispatch) => {
  let userDetails;
  try {
    const data = putUserDetails(obj);
    userDetails = data;
    dispatch({
      type: UPDATE_USER_DETAILS,
      payload: data
    })

  } catch (error) {

  }
  return userDetails;
}