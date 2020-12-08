import { SET_IS_DEPARTMENT_VISIBLE } from "../actions/actionTypes";
import { IsDepartmentVisible } from "../actions/tsTypes";

export interface ScreenState {
  isDepartmentVisible: boolean
}

const initialState = {
  isDepartmentVisible: true
}

type MainAction = IsDepartmentVisible

function screenReducer(state = initialState, action: MainAction) {
  switch (action.type) {
    case SET_IS_DEPARTMENT_VISIBLE: {
      return { ...state, isDepartmentVisible: action.payload }
    }

    default: return state
  }
}

export default screenReducer;
