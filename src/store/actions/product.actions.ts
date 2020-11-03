import { Dispatch } from "redux";
import { getProductById } from "../../services/api";
import { SET_PRODUCT_BY_ID } from "./actionTypes";

export const setProductById = (id: string) => async (dispatch: Dispatch) => {
  try {
    const data = await getProductById(id)
    dispatch({
      type: SET_PRODUCT_BY_ID,
      payload: data
    })
  } catch (error) {

  }
}