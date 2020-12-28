import { Dispatch } from "redux";
import { getProductsInShoppingCart, getShoppingCartId, postProductToShoppingCart } from "../../services/api";
import { ADD_PRODUCT_IN_SHOPPING_CART, REMOVE_PRODUCT_FROM_CART, SET_LIST_OF_PRODUCTS_IN_SHOPPING_CART, SET_SHOPPING_CART_ID } from "./actionTypes";
import { AddProduct } from "./tsTypes";

export const setShoppingCartId = () => async (dispatch: Dispatch): Promise<string> => {
  let cartId = '';
  try {
    const data: any = await getShoppingCartId();

    dispatch({
      type: SET_SHOPPING_CART_ID,
      payload: data !== "Failed to Fetch" ? { id: data.result.cart_id, cartIdStatus: data.status } : { id: "", cartIdStatus: false }
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
      payload: data !== "Failed to Fetch" ? data : { result: [], status: false }
    })
    return data;
  } catch (error) {

  }
}

export const setProductsInShoppingCart = (cartId: string | null) => async (dispatch: Dispatch) => {
  try {
    // const data_secondry = localStorage.getItem("secondry_cart_id") ? await getProductsInShoppingCart(localStorage.getItem("secondry_cart_id") as string) : []
    const data: any = await getProductsInShoppingCart(cartId);

    dispatch({
      type: SET_LIST_OF_PRODUCTS_IN_SHOPPING_CART,
      payload: data !== "Failed to Fetch" ? data : { result: [], status: false }
    })
  } catch (error) {

  }
}

export const removeProductFromCart = (cartId: string | null) => async (dispatch: Dispatch) => {
  try {
    const data: any = await getProductsInShoppingCart(cartId);
    dispatch({
      type: REMOVE_PRODUCT_FROM_CART,
      payload: data !== "Failed to Fetch" ? data : { result: [], status: false }
    })
  } catch (error) {

  }
}