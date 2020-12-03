import { Dispatch } from "redux";
import { postCreateOrder } from "../../services/api";
import { CREATE_ORDER } from "./actionTypes";

export const createOrder = (orderData: any) => async (disptach: Dispatch) => {
  try {
    const data = await postCreateOrder(orderData)
    disptach({
      type: CREATE_ORDER,
      payload: data,
    })
  } catch (error) {

  }
}