import { HomeState } from "./../reducers/home.reducer";

export type Department = {}
export type Categories = object;

export type SetDepartment = {
  type: string,
  payload: Array<Department>
}

export type SetCategories = {
  type: string,
  payload: Categories
}

export interface State {
  home: HomeState
}

export type SetProdByDeptId = {
  type: string,
  payload: {
    [id: number]: {
      products: object[]
    }
  }
}