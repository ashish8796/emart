import { SET_DEPARTMENT, SET_CATEGORIES, SET_PROD_BY_DEPT_ID, SET_INTERNET_ERROR, SET_CATEGORY_STATUS } from "./actionTypes"
import { getAllCategories, getProductByDepartmentId, } from "../../services/api";
import { Dispatch } from "redux";
import { Categories, Department } from "./tsTypes";


export const setDepartments = () => async (dispatch: Dispatch, _: any, apiClient: { getAllDepartments: () => Promise<Array<Department> | string> }) => {
  try {
    const data: any = await apiClient.getAllDepartments();
    // console.log(data)
    dispatch({
      type: SET_DEPARTMENT,
      payload: data !== "Failed to fetch" ? { departments: data.result, departmentStatus: data.status } : { departments: [], departmentStatus: false }
    })
  } catch (e) {
    console.log(e)
  }
}

export const setCategories = () => async (dispatch: Dispatch,) => {
  try {
    const data: any = await getAllCategories()
    dispatch({
      type: SET_CATEGORIES,
      payload: data !== "Failed to fetch" ? { ...data.result, categoriesStatus: data.status } : { rows: [], categoriesStatus: false }
    })
  }
  catch (e) {

  }
}

export const setProdByDeptId = (id: number) => async (dispatch: Dispatch) => {
  let productsData;
  try {
    const data: any = await getProductByDepartmentId(+id);
    productsData = data;
    dispatch({
      type: SET_PROD_BY_DEPT_ID,
      payload: data !== "Failed to fetch" ? {
        [id]: {
          products: data.result.rows,
          productsStatus: data.status
        }
      } : { [id]: { productsStatus: false } }
    })
  } catch (error) {

  }

  return productsData;
}