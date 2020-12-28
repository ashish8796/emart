
import { SET_PRODUCT_BY_CATEGORY_ID, SET_PRODUCT_CATEGORY_STATUS } from "../actions/actionTypes";
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
  rows: Product[],
  categoryProductStatus: number | boolean,
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
      const { data, categoryName, categoryProductStatus } = action.payload

      return {
        ...state,
        categoriesProducts: {
          ...state.categoriesProducts,
          [categoryName]: { ...data, categoryProductStatus }
        }
      }
    }

    case SET_PRODUCT_CATEGORY_STATUS: {
      const { categoryName, categoryProductStatus } = action.payload
      const data = state.categoriesProducts
      data[categoryName].categoryProductStatus = categoryProductStatus
      return {
        ...state, categoriesProducts: data
      }
    }

    default: return state;
  }
}

export default categoryReducer;