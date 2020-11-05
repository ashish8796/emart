import { SET_CATEGORIES, SET_DEPARTMENT, SET_PROD_BY_DEPT_ID } from "../actions/actionTypes";
import { SetCategories, SetDepartment, SetProdByDeptId } from "../actions/tsTypes";
import { Product } from "./category.reducer";

export type RowsObj = {
  category_id?: number,
  name?: string,
  description?: string,
  department_id?: number
}

export interface Department {
  department_id: number,
  name: string,
  description: string
}

export interface HomeState {
  departments: Array<Department>,
  categories: {
    rows: RowsObj[] | []
  }
  prodByDept: {
    [id: number]: {
      products: Product[]
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
      // console.log(obj)
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