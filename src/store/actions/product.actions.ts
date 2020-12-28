import { Dispatch } from "redux";
import { getProductById } from "../../services/api";
import { SET_PRODUCT_BY_ID } from "./actionTypes";

export const setProductById = (id: string) => async (dispatch: Dispatch) => {

  try {
    const data: any = await getProductById(id)
    dispatch({
      type: SET_PRODUCT_BY_ID,
      payload: data === "Failed to Fetch" ? { ...data.result, projectStatus: data.status } : { projectStatus: false }
    })
  } catch (error) {

  }
}