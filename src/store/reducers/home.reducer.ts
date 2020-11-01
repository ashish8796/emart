import { SET_CATEGORIES, SET_DEPARTMENT, SET_PROD_BY_DEPT_ID } from "../actions/actionTypes";
import { SetCategories, SetDepartment, SetProdByDeptId } from "../actions/tsTypes";

export type RowsObj = {
  category_id?: number,
  name?: string,
  description?: string,
  department_id?: number
}

export interface HomeState {
  departments: Array<object>,
  categories: {
    rows: RowsObj[] | []
  }
  prodByDept: {
    [id: number]: {
      products: object[]
    }
  }
}


type MainAction = SetDepartment | SetCategories | SetProdByDeptId;

const initialState: HomeState = {
  departments: [],
  categories: {
    rows: []
  },
  prodByDept: {}
}

function homeReducer(state = initialState, action: MainAction) {
  switch (action.type) {
    case SET_DEPARTMENT: {
      // console.log(action.payload)
      return { ...state, departments: action.payload }
    }

    case SET_CATEGORIES: {
      return { ...state, categories: action.payload }
    }

    case SET_PROD_BY_DEPT_ID: {
      let obj = action.payload;
      return {
        ...state,
        prodByDept: {
          ...state.prodByDept, ...action.payload
        }
      }
    }

    default: return state;
  }
}

export default homeReducer;