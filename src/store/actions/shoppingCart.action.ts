import { Dispatch } from "redux";
import { getProductsInShoppingCart, getShoppingCartId, postProductToShoppingCart } from "../../services/api";
import { ADD_PRODUCT_IN_SHOPPING_CART, REMOVE_PRODUCT_FROM_CART, SET_LIST_OF_PRODUCTS_IN_SHOPPING_CART, SET_SHOPPING_CART_ID } from "./actionTypes";
import { AddProduct } from "./tsTypes";

export const setShoppingCartId = () => async (dispatch: Dispatch): Promise<string> => {
  let cartId = '';
  try {
    const data = await getShoppingCartId();

    dispatch({
      type: SET_SHOPPING_CART_ID,
      payload: data.cart_id
    })

    cartId = data.cart_id;
  } catch (error) {

  }
  return cartId
}

export const addProductInShoppingCart = (obj: AddProduct) => async (dispatch: Dispatch) => {
  try {
    const data = await postProductToShoppingCart({ cart_id: obj.cartId, product_id: obj.productId, attributes: obj.attribute })
    // console.log(data)
    dispatch({
      type: ADD_PRODUCT_IN_SHOPPING_CART,
      payload: data
    })
    return data;
  } catch (error) {

  }
}

export const setProductsInShoppingCart = (cartId: string) => async (dispatch: Dispatch) => {
  try {

    // console.log(cartId);
    // const data_secondry = localStorage.getItem("secondry_cart_id") ? await getProductsInShoppingCart(localStorage.getItem("secondry_cart_id") as string) : []
    const data_primary = await getProductsInShoppingCart(cartId);

    dispatch({
      type: SET_LIST_OF_PRODUCTS_IN_SHOPPING_CART,
      payload: data_primary
    })
  } catch (error) {

  }
}

export const removeProductFromCart = (itemId: number) => async (dispatch: Dispatch) => {
  try {
    const data = await removeProductFromCart(itemId);
    console.log(data);
    dispatch({
      type: REMOVE_PRODUCT_FROM_CART,
      payload: itemId
    })
  } catch (error) {

  }
}