import { SET_IS_DEPARTMENT_VISIBLE } from "./actionTypes"

export const setIsDepartmentVisible = (flag: boolean) => {
  return {
    type: SET_IS_DEPARTMENT_VISIBLE,
    payload: flag
  }
}