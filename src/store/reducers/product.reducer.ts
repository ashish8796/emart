import { SET_PRODUCT_BY_ID } from "../actions/actionTypes";
import { SetProductById } from "../actions/tsTypes";


export interface ProductState {
  productId: { projectStatus: boolean | number }
}

const intialState: ProductState = {
  productId: { projectStatus: false },
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