import {
  ADD_PRODUCT_IN_SHOPPING_CART,
  REMOVE_PRODUCT_FROM_CART,
  SET_INTERNET_ERROR,
  SET_LIST_OF_PRODUCTS_IN_SHOPPING_CART,
  SET_SHOPPING_CART_ID,
} from "../actions/actionTypes";
import {
  AddProductInShoppingCart,
  CartProcuct,
  RemoveProductFromCart,
  SetShoppingCartId,
} from "../actions/tsTypes";

export interface ShoppingCartState {
  cartId: { cartIdStatus: boolean | number; id: string | null };
  productsList: CartProcuct[];
  cartProductStatus: boolean | number | string;
}

const intialState: ShoppingCartState = {
  // cartId: "emart-token" in localStorage ? "primary_cart_id" in localStorage ? localStorage.getItem('primary_cart_id') : '' : "secondry_cart_id" in localStorage ? localStorage.getItem("secondry_cart_id") : "",

  cartId: {
    id:
      typeof window !== "undefined" && localStorage.getItem("primary_cart_id")
        ? localStorage.getItem("primary_cart_id")
        : "",
    cartIdStatus:
      typeof window !== "undefined" && localStorage.getItem("primary_cart_id")
        ? 200
        : false,
  },
  productsList: [],
  cartProductStatus: false,
};

type MainAction =
  | SetShoppingCartId
  | AddProductInShoppingCart
  | RemoveProductFromCart;

function shoppingCartReducer(state = intialState, action: MainAction) {
  switch (action.type) {
    case SET_SHOPPING_CART_ID: {
      localStorage.setItem("primary_cart_id", action.payload.id);

      return { ...state, cartId: action.payload };
    }

    case ADD_PRODUCT_IN_SHOPPING_CART: {
      return {
        ...state,
        productsList: action.payload.result,
        cartProductStatus: action.payload.status,
      };
    }

    case SET_LIST_OF_PRODUCTS_IN_SHOPPING_CART: {
      return {
        ...state,
        productsList: action.payload.result,
        cartProductStatus: action.payload.status,
      };
    }

    // case REMOVE_PRODUCT_FROM_CART: {
    //   return { ...state, productsList: action.payload.result, cartProductStatus: action.payload.status };
    // }

    case SET_INTERNET_ERROR: {
      return {
        ...state,
        cartProductStatus: action.payload,
        productsList: [],
      };
    }

    default:
      return state;
  }
}

export default shoppingCartReducer;
