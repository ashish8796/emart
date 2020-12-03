import { CREATE_ORDER } from "../actions/actionTypes";
import { CreateOrder } from "../actions/tsTypes";

export interface OrderState {

}

const initialState = {}

type MainAction = CreateOrder

function ordersReducer(state = initialState, action: MainAction) {
  switch (action.type) {
    case CREATE_ORDER: {
      return { ...state, ...action.payload }
    }

    default: return state;
  }
}

export default ordersReducer;