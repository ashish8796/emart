import { LOGIN_USER, LOG_OUT_USER, REGISTER_USER, SET_CUSTOMER_STATUS, SET_USER_ADDRESS, SET_USER_CREDIT_CARD, SET_USER_DETAILS, UPDATE_USER_DETAILS } from "../actions/actionTypes";

export type Customer = {
  customer_id: number,
  name: string,
  email: string,
  address_1: string,
  address_2: string,
  city: string,
  region: string,
  postal_code: string,
  country: string,
  shipping_region_id: number,
  day_phone: string,
  eve_phone: string,
  mob_phone: string,
  credit_card: string,
  customer_status: number | boolean
}

export interface UserState {
  accessToken: string | null;
  customer: Customer
}

export const customerObj = {
  customer_id: 0,
  name: "",
  email: "",
  address_1: "",
  address_2: "",
  city: "",
  region: "",
  postal_code: "",
  country: "",
  shipping_region_id: 0,
  day_phone: "",
  eve_phone: "",
  mob_phone: "",
  credit_card: "",
  customer_status: false
}

const initialState: UserState = {
  accessToken: localStorage.hasOwnProperty('emart-token') ? localStorage.getItem('emart-token') : '',
  customer: customerObj,

}

function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case REGISTER_USER: {
      const accessToken = action.payload.accessToken
      localStorage.setItem("emart-token", accessToken)

      return {
        ...state, customer: { ...action.payload.customer, customer_status: action.payload.status }, accessToken
      }
    }

    case LOGIN_USER: {
      const accessToken = action.payload.accessToken
      localStorage.setItem("emart-token", accessToken)

      return {
        ...state, customer: { ...action.payload.customer, customer_status: action.payload.status }, accessToken
      }
    }

    case SET_USER_DETAILS: {
      return {
        ...state, customer: action.payload
      }
    }

    case LOG_OUT_USER: {
      return {
        ...state, customer: customerObj
      }
    }

    case SET_USER_ADDRESS: {
      return {
        ...state, customer: { ...action.payload.customer, customer_status: action.payload.status }
      }
    }

    case SET_USER_CREDIT_CARD: {
      return {
        ...state, customer: { ...action.payload.customer, customer_status: action.payload.status }
      }
    }

    case UPDATE_USER_DETAILS: {
      return {
        ...state, customer: { ...state.customer, ...action.payload.customer }
      }
    }

    case SET_CUSTOMER_STATUS: {
      return {
        ...state, customer: { ...state.customer, customer_status: action.payload.customer }
      }
    }

    default: return state;
  }
}

export default userReducer;