import { CREATE_ORDER, SET_ALL_ORDERS, SET_ORDER_DETAILS_BY_ID, SET_SHORT_DETAIL_OF_ORDER } from "../actions/actionTypes";
import { CreateOrder } from "../actions/tsTypes";

export interface OrderState {
  orderId: number
  orderDetails: object
  orders: object[]
  shortDetailOfOrder: object
}

const initialState = {
  orderId: undefined,
  orderDetailsById: {},
  orders: [],
  shortDetailOfOrder: {}
}

type MainAction = CreateOrder

function ordersReducer(state = initialState, action: MainAction) {
  switch (action.type) {
    case CREATE_ORDER: {
      return { ...state, orderId: action.payload }
    }

    case SET_ALL_ORDERS: {
      return { ...state, orders: action.payload }
    }

    case SET_ORDER_DETAILS_BY_ID: {
      return { ...state, orderDetailsById: action.payload }
    }

    case SET_SHORT_DETAIL_OF_ORDER: {
      return { ...state, shortDetailOfOrder: action.payload }
    }

    default: return state;
  }
}

export default ordersReducer;