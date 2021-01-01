import { CREATE_ORDER, SET_ALL_ORDERS, SET_ORDER_DETAILS_BY_ID, SET_SHORT_DETAIL_OF_ORDER } from "../actions/actionTypes";
import { CreateOrder } from "../actions/tsTypes";

export interface OrderState {
  orderId: number | undefined
  orderDetailsById: { orderId: { products: [], status: boolean | number | string } }
  orderDetails: object
  allOrders: object[]
  shortDetailOfOrder: { shortDetailStatus: boolean | number | string }
  createdOrderStatus: boolean | number | string
  ordersStatus: boolean | number | string

}

const initialState: OrderState = {
  orderId: undefined,
  orderDetailsById: { orderId: { products: [], status: "" } },
  orderDetails: {},
  allOrders: [],
  shortDetailOfOrder: { shortDetailStatus: false },
  createdOrderStatus: false,
  ordersStatus: false,
}

type MainAction = CreateOrder

function ordersReducer(state = initialState, action: MainAction) {
  switch (action.type) {
    case CREATE_ORDER: {
      return { ...state, ...action.payload }
    }

    case SET_ALL_ORDERS: {
      return { ...state, allOrders: action.payload.result, ordersStatus: action.payload.status }
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