import { Dispatch } from "redux";
import { getUserDetails, loginUser, registerNewUser } from "../../services/api";
import { LOGIN_USER, REGISTER_USER, SET_USER_DETAILS } from "./actionTypes";
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