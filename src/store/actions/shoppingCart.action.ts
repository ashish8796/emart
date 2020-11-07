import { Dispatch } from "redux";
import { getShoppingCartId, postProductToShoppingCart } from "../../services/api";
import { ADD_PRODUCT_IN_SHOPPING_CART, SET_SHOPPING_CART_ID } from "./actionTypes";
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