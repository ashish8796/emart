import { SET_IS_DEPARTMENT_VISIBLE } from "../actions/actionTypes";
import { IsDepartmentVisible } from "../actions/tsTypes";

export interface ScreenState {
  isDepartmentVisible: boolean;
}

// console.log(typeof localStorage.getItem)

let key = "isDepartmentVisible";

const initialState: ScreenState = {
  isDepartmentVisible:
    typeof window !== "undefined" && key in localStorage
      ? localStorage.getItem(key) === "true" && true
      : true,
};

type MainAction = IsDepartmentVisible;

function screenReducer(state = initialState, action: MainAction) {
  switch (action.type) {
    case SET_IS_DEPARTMENT_VISIBLE: {
      localStorage.setItem(
        "isDepartmentVisible",
        JSON.stringify(action.payload)
      );

      console.log(action.payload);
      return { ...state, isDepartmentVisible: action.payload };
    }

    default:
      return state;
  }
}

export default screenReducer;
