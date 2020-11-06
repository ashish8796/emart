import { ADD_PRODUCT_IN_SHOPPING_CART, SET_SHOPPING_CART_ID } from "../actions/actionTypes";
import { AddProductInShoppingCart, SetShoppingCartId } from "../actions/tsTypes";
import { Product } from "./category.reducer";

export interface ShoppingCartState {
  cartId: string
  productsList: Product[]
}

const intialState: ShoppingCartState = {
  cartId: "",
  productsList: []
}

type MainAction = SetShoppingCartId | AddProductInShoppingCart;

function shoppingCartReducer(state = intialState, action: MainAction) {
  switch (action.type) {
    case SET_SHOPPING_CART_ID: {
      return { ...state, cartId: action.payload }
    }

    case ADD_PRODUCT_IN_SHOPPING_CART: {
      return { ...state, productsList: [...state.productsList, action.payload] }
    }

    default: return state;
  }
}

export default shoppingCartReducer;