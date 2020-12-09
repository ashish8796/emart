import { Dispatch } from "redux";
import { getAllOrders, getOrderInfoById, getShortDetailOfOrder, postCreateOrder } from "../../services/api";
import { CREATE_ORDER, SET_ALL_ORDERS, SET_ORDER_DETAILS_BY_ID, SET_SHORT_DETAIL_OF_ORDER } from "./actionTypes";

export const createOrder = (orderData: any) => async (disptach: Dispatch) => {
  let orderId;
  try {
    const data = await postCreateOrder(orderData);
    orderId = data;
    console.log(data)
    disptach({
      type: CREATE_ORDER,
      payload: data,
    })
  } catch (error) {

  }
  return orderId;
}

export const setOrderDetails = (orderId: number) => async (dispatch: Dispatch) => {
  try {
    const data = await getOrderInfoById(orderId)
    dispatch({
      type: SET_ORDER_DETAILS_BY_ID,
      payload: data
    })
  } catch (error) {

  }
}

export const setAllOrders = () => async (dispatch: Dispatch) => {
  let ordersData;
  try {
    const data = await getAllOrders();
    ordersData = data;
    dispatch({
      type: SET_ALL_ORDERS,
      payload: data
    })
  } catch (error) {
    console.log(error)

  }
  return ordersData;
}

export const setShortDetailOfOrder = (orderId: number) => async (dispatch: Dispatch) => {
  try {
    const data = await getShortDetailOfOrder(orderId);
    dispatch({
      type: SET_SHORT_DETAIL_OF_ORDER,
      payload: data
    })
  } catch (error) {

  }
}
