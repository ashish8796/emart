import { SET_PRODUCT_BY_ID } from "../actions/actionTypes";
import { SetProductById } from "../actions/tsTypes";


interface ProductState {
  productId: object
}

const intialState: ProductState = {
  productId: {},
}

type MainAction = SetProductById

function productReducer(state = intialState, action: MainAction) {
  switch (action.type) {
    case SET_PRODUCT_BY_ID: {
      const productId = action.payload.product_id
      return {
        ...state, [productId]: action.payload
      }
    }

    default: return state;
  }
}

export default productReducer;