
import { SET_PRODUCT_BY_CATEGORY_ID } from "../actions/actionTypes";
import { SetProductByCategoryId } from "./../actions/tsTypes"

type MainAction = SetProductByCategoryId;
export interface Product {
  description: string;
  discounted_price: string;
  name: string;
  price: string;
  product_id: number;
  thumbnail: string;
  image: string,
  image_2: string,
}

export interface CategoryProductList {
  categoryId: string,
  count: number,
  rows: Product[]
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