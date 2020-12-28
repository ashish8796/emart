import { Dispatch } from "redux";
import { getAllOrders, getOrderInfoById, getShortDetailOfOrder, postCreateOrder } from "../../services/api";
import { CREATE_ORDER, SET_ALL_ORDERS, SET_ORDER_DETAILS_BY_ID, SET_SHORT_DETAIL_OF_ORDER } from "./actionTypes";

export const createOrder = (orderData: any) => async (disptach: Dispatch) => {
  let orderId;
  try {
    const data: any = await postCreateOrder(orderData);
    orderId = data.result;
    disptach({
      type: CREATE_ORDER,
      payload: data !== "Failed to Fetch" ? { orderId: data.result, createdOrderStatus: data.status } : { orderId: undefined, createdOrderStatus: false },
    })
  } catch (error) {

  }
  return orderId;
}

export const setOrderDetails = (orderId: number) => async (dispatch: Dispatch) => {
  try {
    const data: any = await getOrderInfoById(orderId)
    dispatch({
      type: SET_ORDER_DETAILS_BY_ID,
      payload: data !== "Failed to Fetch" ? { ...data.result, singleOrderStatus: data.status } : { singleOrderStatus: false }
    })
  } catch (error) {

  }
}

export const setAllOrders = () => async (dispatch: Dispatch) => {
  let ordersData;
  try {
    const data: any = await getAllOrders();
    ordersData = data.result;
    dispatch({
      type: SET_ALL_ORDERS,
      payload: data !== "Failed to Fetch" ? { result: data.result, status: data.status } : {
        result: [], status: false
      }
    })
  } catch (error) {
    console.log(error)

  }
  return ordersData;
}

export const setShortDetailOfOrder = (orderId: number) => async (dispatch: Dispatch) => {
  try {
    const data: any = await getShortDetailOfOrder(orderId);
    dispatch({
      type: SET_SHORT_DETAIL_OF_ORDER,
      payload: data !== "Failed to Fetch" ? { ...data.result, shortDetailStatus: data.status } : { shortDetailStatus: false }
    })
  } catch (error) {

  }
}
