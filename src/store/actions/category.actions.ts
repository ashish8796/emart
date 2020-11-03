import { Dispatch } from "redux";
import { getProductByCategoryId } from "../../services/api";
import { SET_PRODUCT_BY_CATEGORY_ID } from "./actionTypes";

interface Obj {
  categoryId: string;
  categoryName: string;
}

export const setPorductBycategoryId = ({ categoryId, categoryName }: Obj) => async (dispatch: Dispatch) => {
  try {
    const data = await getProductByCategoryId(categoryId)
    // console.log({ data, categoryName })
    dispatch({
      type: SET_PRODUCT_BY_CATEGORY_ID,
      payload: {
        data: { ...data, categoryId },
        categoryName,
      }
    })
  } catch (e) {

  }
}