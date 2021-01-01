import { Dispatch } from "redux";
import { getAllOrders, getOrderInfoById, getShortDetailOfOrder, postCreateOrder } from "../../services/api";
import { CREATE_ORDER, SET_ALL_ORDERS, SET_ORDER_DETAILS_BY_ID, SET_SHORT_DETAIL_OF_ORDER } from "./actionTypes";

export const createOrder = (orderData: any) => async (disptach: Dispatch) => {
  let createdOrderData;
  try {
    const data: any = await postCreateOrder(orderData);
    createdOrderData = data !== "Failed to fetch" ? { orderId: data.result, createdOrderStatus: data.status } : { orderId: undefined, createdOrderStatus: data }
    disptach({
      type: CREATE_ORDER,
      payload: createdOrderData,
    })
    return createdOrderData;
  } catch (error) { }
}

export const setOrderDetails = (orderId: number) => async (dispatch: Dispatch) => {
  try {
    const data: any = await getOrderInfoById(orderId)
    dispatch({
      type: SET_ORDER_DETAILS_BY_ID,
      payload: data !== "Failed to fetch" ? { [orderId]: data.result, status: data.status } : { [orderId]: [], status: data.status }
    })

  } catch (error) {

  }
}

export const setAllOrders = () => async (dispatch: Dispatch) => {
  let ordersData;
  try {
    const data: any = await getAllOrders();
    ordersData = data !== "Failed to fetch" ? { result: data.result, status: data.status } : {
      result: [], status: data
    };
    dispatch({
      type: SET_ALL_ORDERS,
      payload: ordersData
    })
    return ordersData;
  } catch (error) {
    console.log(error)

  }
}

export const setShortDetailOfOrder = (orderId: number) => async (dispatch: Dispatch) => {
  try {
    const data: any = await getShortDetailOfOrder(orderId);
    dispatch({
      type: SET_SHORT_DETAIL_OF_ORDER,
      payload: data !== "Failed to fetch" ? { ...data.result, shortDetailStatus: data.status } : { shortDetailStatus: false }
    })
  } catch (error) {

  }
}
