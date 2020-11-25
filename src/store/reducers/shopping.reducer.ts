import { ADD_PRODUCT_IN_SHOPPING_CART, SET_LIST_OF_PRODUCTS_IN_SHOPPING_CART, SET_SHOPPING_CART_ID } from "../actions/actionTypes";
import { AddProductInShoppingCart, CartProcuct, SetShoppingCartId } from "../actions/tsTypes";

export interface ShoppingCartState {
  cartId: string | null
  productsList: CartProcuct[]
}

const intialState: ShoppingCartState = {
  cartId: localStorage.hasOwnProperty('card_id') ? localStorage.getItem('card_id') : '',
  productsList: []
}

type MainAction = SetShoppingCartId | AddProductInShoppingCart;

function shoppingCartReducer(state = intialState, action: MainAction) {
  switch (action.type) {
    case SET_SHOPPING_CART_ID: {
      localStorage.setItem("card_id", JSON.stringify(action.payload))
      return { ...state, cartId: action.payload }
    }

    case ADD_PRODUCT_IN_SHOPPING_CART: {
      return { ...state, productsList: action.payload }
    }

    case SET_LIST_OF_PRODUCTS_IN_SHOPPING_CART: {
      return { ...state, productsList: action.payload }
    }

    default: return state;
  }
}

export default shoppingCartReducer;