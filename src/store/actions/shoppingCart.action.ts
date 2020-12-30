import { Dispatch } from "redux";
import { getProductsInShoppingCart, getShoppingCartId, postProductToShoppingCart } from "../../services/api";
import { ADD_PRODUCT_IN_SHOPPING_CART, SET_INTERNET_ERROR, SET_LIST_OF_PRODUCTS_IN_SHOPPING_CART, SET_SHOPPING_CART_ID } from "./actionTypes";
import { AddProduct } from "./tsTypes";

export const setShoppingCartId = () => async (dispatch: Dispatch): Promise<string> => {
  let cartId = '';
  try {
    const data: any = await getShoppingCartId();
    console.log({ data, cart: "cart" })
    dispatch({
      type: SET_SHOPPING_CART_ID,
      payload: data !== "Failed to Fetch" ? { id: data.result.cart_id, cartIdStatus: data.status } : { id: "", cartIdStatus: data }
    })

    cartId = data.result.cart_id;
  } catch (error) {

  }
  return cartId
}

export const addProductInShoppingCart = (obj: AddProduct) => async (dispatch: Dispatch) => {
  try {
    const data: any = await postProductToShoppingCart({ cart_id: obj.cartId, product_id: obj.productId, attributes: obj.attribute })
    dispatch({
      type: ADD_PRODUCT_IN_SHOPPING_CART,
      payload: data !== "Failed to Fetch" ? data : { result: [], status: data }
    })
    return data;
  } catch (error) {

  }
}

export const setProductsInShoppingCart = (cartId: string | null) => async (dispatch: Dispatch) => {
  try {

    const data: any = await getProductsInShoppingCart(cartId);

    dispatch({
      type: SET_LIST_OF_PRODUCTS_IN_SHOPPING_CART,
      payload: data !== "Failed to Fetch" ? data : { result: [], status: data }
    })
  } catch (error) {

  }
}

export const setInternetError = (errorText: string) => {
  return {
    type: SET_INTERNET_ERROR,
    payload: errorText
  }
}