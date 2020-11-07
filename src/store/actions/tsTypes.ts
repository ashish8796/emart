import { CategoryProductList, CategoryState, Product } from "../reducers/category.reducer";
import { ShoppingCartState } from "../reducers/shopping.reducer";
import { HomeState } from "./../reducers/home.reducer";
import { ProductState } from "./../reducers/product.reducer"


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
  category: CategoryState;
  product: ProductState;
  cart: ShoppingCartState;
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
  payload: {
    product_id: number,
    name: string,
    description: string,
    price: string,
    discounted_price: string,
    image: string,
    image2: string,
    thumbnail: string,
    display: number
  }
}

export type SetShoppingCartId = {
  type: string,
  payload: string
}
export type AddProduct = {
  cartId?: any;
  productId: string | undefined;
  attribute: string
}

export type CartProcuct = {
  attributes: string,
  image: string,
  item_id: number,
  name: string,
  product_id: number,
  price: string,
  quantity: number,
  subtotal: string;
}

export type AddProductInShoppingCart = {
  type: string,
  payload: CartProcuct[]
}