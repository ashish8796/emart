import { ADD_PRODUCT_IN_SHOPPING_CART, REMOVE_PRODUCT_FROM_CART, SET_LIST_OF_PRODUCTS_IN_SHOPPING_CART, SET_SHOPPING_CART_ID } from "../actions/actionTypes";
import { AddProductInShoppingCart, CartProcuct, RemoveProductFromCart, SetShoppingCartId } from "../actions/tsTypes";

export interface ShoppingCartState {
  cartId: string | null
  productsList: CartProcuct[]
}

const intialState: ShoppingCartState = {
  // cartId: "emart-token" in localStorage ? "primary_cart_id" in localStorage ? localStorage.getItem('primary_cart_id') : '' : "secondry_cart_id" in localStorage ? localStorage.getItem("secondry_cart_id") : "",

  cartId: "emart-token" in localStorage ? localStorage.getItem('primary_cart_id') : "",
  productsList: []
}

type MainAction = SetShoppingCartId | AddProductInShoppingCart | RemoveProductFromCart;

function shoppingCartReducer(state = intialState, action: MainAction) {
  switch (action.type) {
    case SET_SHOPPING_CART_ID: {
      const cartId = action.payload as string;

      !("primary_cart_id" in localStorage) && localStorage.setItem("primary_cart_id", cartId);

      return { ...state, cartId: action.payload };
    }

    case ADD_PRODUCT_IN_SHOPPING_CART: {
      return { ...state, productsList: action.payload };
    }

    case SET_LIST_OF_PRODUCTS_IN_SHOPPING_CART: {

      return { ...state, productsList: action.payload };
    }

    case REMOVE_PRODUCT_FROM_CART: {
      return { ...state, productsList: action.payload };
    }

    default: return state;
  }
}

export default shoppingCartReducer;