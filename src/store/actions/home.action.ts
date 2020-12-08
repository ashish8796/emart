import { SET_DEPARTMENT, SET_CATEGORIES, SET_PROD_BY_DEPT_ID } from "./actionTypes"
import { getAllDepartments, getAllCategories, getProductByDepartmentId, } from "../../services/api";
import { Dispatch } from "redux";
import { Categories, Department } from "./tsTypes";


export const setDepartments = () => async (dispatch: Dispatch, _: any, apiClient: { getAllDepartments: () => Promise<Array<Department>> }) => {
  try {
    const data: Array<Department> = await apiClient.getAllDepartments();
    dispatch({
      type: SET_DEPARTMENT,
      payload: data
    })
  } catch (e) {
    // return e;
  }
}

export const setCategories = () => async (dispatch: Dispatch,) => {
  try {
    const data: Categories = await getAllCategories()
    dispatch({
      type: SET_CATEGORIES,
      payload: data
    })
  }
  catch (e) {

  }
}

export const setProdByDeptId = (id: number) => async (dispatch: Dispatch) => {
  try {
    const data = await getProductByDepartmentId(+id);
    // console.log(data)
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
}