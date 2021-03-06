import { CategoryProductList, CategoryState } from "../reducers/category.reducer";
import { OrderState } from "../reducers/orders.reducer";
import { ScreenState } from "../reducers/screen.reducer";
import { ShoppingCartState } from "../reducers/shopping.reducer";
import { UserState } from "../reducers/user.reducer";
import { HomeState } from "./../reducers/home.reducer";
import { ProductState } from "./../reducers/product.reducer"


export type Department = {}
export type Categories = object;

export type SetDepartment = {
  type: string,
  payload: any
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
  user: UserState
  order: OrderState
  screen: ScreenState
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
    categoryProductStatus: boolean | number
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
  payload: any
  // payload: { result: CartProcuct[], status: boolean | number }
}

export type UserDetails = {
  name: string,
  email: string,
  password: string
}

export type LoginDetails = {
  email: string,
  password: string
}

export type RemoveProductFromCart = {
  type: string,
  payload: number
}

export type CreateOrder = {
  type: string,
  payload: any
}

export type IsDepartmentVisible = {
  type: string,
  payload: boolean
}
