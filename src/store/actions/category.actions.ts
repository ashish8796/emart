import { Dispatch } from "redux";
import { getProductByCategoryId } from "../../services/api";
import { SET_PRODUCT_BY_CATEGORY_ID, SET_PRODUCT_CATEGORY_STATUS } from "./actionTypes";

interface Obj {
  categoryId: string;
  categoryName: string;
}

export const setPorductBycategoryId = ({ categoryId, categoryName }: Obj) => async (dispatch: Dispatch) => {
  try {
    const data: any = await getProductByCategoryId(categoryId)
    dispatch({
      type: data === "Failed to Fetch" ? SET_PRODUCT_CATEGORY_STATUS : SET_PRODUCT_BY_CATEGORY_ID,
      payload: data === "Failed to Fetch" ? { categoryName, categoryProductStatus: false } : {
        data: { ...data.result, categoryId, },
        categoryName,
        categoryProductStatus: data.status
      }
    })
  } catch (e) {

  }
}