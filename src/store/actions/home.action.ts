import { SET_DEPARTMENT, SET_CATEGORIES, SET_PROD_BY_DEPT_ID, SET_INTERNET_ERROR } from "./actionTypes"
import { getAllCategories, getProductByDepartmentId, } from "../../services/api";
import { Dispatch } from "redux";
import { Categories, Department } from "./tsTypes";


export const setDepartments = () => async (dispatch: Dispatch, _: any, apiClient: { getAllDepartments: () => Promise<Array<Department> | string> }) => {
  try {
    const data: Array<Department> | string = await apiClient.getAllDepartments();
    // console.log(data)
    dispatch({
      type: data !== "Failed to fetch" ? SET_DEPARTMENT : SET_INTERNET_ERROR,
      payload: data !== "Failed to fetch" ? data : false
    })
  } catch (e) {
    console.log(e)
  }
}

export const setCategories = () => async (dispatch: Dispatch,) => {
  try {
    const data = await getAllCategories()
    dispatch({
      type: data !== "Failed to fetch" ? SET_CATEGORIES : SET_INTERNET_ERROR,
      payload: data !== "Failed to fetch" ? data : false
    })
  }
  catch (e) {

  }
}

export const setProdByDeptId = (id: number) => async (dispatch: Dispatch) => {
  let productsData;
  try {
    const data = await getProductByDepartmentId(+id);
    productsData = data;
    dispatch({
      type: SET_PROD_BY_DEPT_ID,
      payload: {
        [id]: {
          products: data.rows
        }
      }
    })
  } catch (error) {

  }

  return productsData;
}