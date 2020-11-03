import { CategoryProductList, CategoryState } from "../reducers/category.reducer";
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
  home: HomeState;
  category: CategoryState
}

export type SetProdByDeptId = {
  type: string,
  payload: {
    [id: number]: {
      products: object[]
    }
  }
}

export type SetProductByCategoryId = {
  type: string,
  payload: {
    data: CategoryProductList,
    categoryName: string,
  }
}

export type SetProductById = {
  type: string,
  payload: object
}