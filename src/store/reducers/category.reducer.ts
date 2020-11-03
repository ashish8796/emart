import { SET_PRODUCT_BY_CATEGORY_ID } from "../actions/actionTypes";
import { Categories, SetProductByCategoryId } from "./../actions/tsTypes"


type MainAction = SetProductByCategoryId;
export type Product = {
  id: number;
  name: string
}

export interface CategoryProductList {
  categoryId: string,
  count: number,
  rows: Array<Product>
}
export interface CategoryState {
  categoriesProducts: {
    [slug: string]: CategoryProductList
  }
}

const initialState: CategoryState = {
  categoriesProducts: {}
}

function categoryReducer(state = initialState, action: MainAction) {
  switch (action.type) {
    case SET_PRODUCT_BY_CATEGORY_ID: {
      // console.log(action.payload)
      const { data, categoryName } = action.payload

      return {
        ...state,
        categoriesProducts: {
          ...state.categoriesProducts,
          [categoryName]: { ...data }
        }
      }
    }

    default: return state;
  }
}

export default categoryReducer;