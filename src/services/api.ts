import { LoginDetails, UserDetails } from "../store/actions/tsTypes";

const accessToken: string | null | undefined = localStorage.getItem('emart-token');
const headers = new Headers({
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*"
});
accessToken && headers.append("USER-KEY", accessToken);


class API {
  mainUrl: string = "https://backendapi.turing.com"

  async get(url: string) {
    try {
      const response = await fetch(this.mainUrl + url, { headers });

      const result = response.ok && await response.json();
      console.log(result)
      return { result, status: response.status }
    } catch (e) {
      const error = String(e).split(":")[1].trim()
      // console.log(error);
      return error;
    }
  }

  async post(url: string, data: any) {
    try {
      const response = await fetch(this.mainUrl + url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
      });

      console.log(response)

      const result = response.ok && await response.json();
      console.log(result)
      return { result, status: response.status }
    } catch (e) {
      const error = String(e).split(":")[1].trim()
      // console.log(error);
      return error;
    }
  }

  async delete(url: string, data: any) {
    try {
      const response = await fetch(this.mainUrl + url, {
        method: "DELETE",
        headers: headers,

      });
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  }

  async put(url: string, data: any) {
    try {
      const response = await fetch(this.mainUrl + url, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(data)
      });
      const result = response.ok && await response.json();
      console.log(result)
      return { result, status: response.status }
    } catch (e) {
      const error = String(e).split(":")[1].trim()
      // console.log(error);
      return error;
    }
  }

}

const api = new API();

export const getAllDepartments = () => api.get('/departments');

export const getAllCategories = () => api.get('/categories');

export const getProductByDepartmentId = (id: number) => api.get(`/products/inDepartment/${id}`);

export const getProductByCategoryId = (id: string) => api.get(`/products/inCategory/${id}`);

export const getProductById = (id?: string) => api.get(`/products/${id}`);

export const getReviewsByProductId = (id?: string) => api.get(`/products/${id}/reviews`);

export const getShoppingCartId = () => api.get('/shoppingcart/generateUniqueId');

export const postProductToShoppingCart = (data: any) => api.post(`/shoppingcart/add`, data);

export const getAttributesByProductId = (id?: string) => api.get(`/attributes/inProduct/${id}`);

export const registerNewUser = (data: UserDetails) => api.post(`/customers`, data);

export const loginUser = (data: LoginDetails) => api.post('/customers/login', data);

export const getUserDetails = () => api.get('/customer');

export const getProductsInShoppingCart = (cartId: string | null) => api.get("/shoppingcart/" + cartId);

export const deleteProductfromCart = (itemId: number) => api.delete('/shoppingcart/removeProduct/' + itemId, itemId);

export const putUserAddress = (data: any) => api.put("/customers/address", data);

export const putCreditCart = (data: any) => api.put("/customers/creditCard", data);

export const getRegion = () => api.get("/shipping/regions");

export const putUserDetails = (data: any) => api.put("/customer", data);

export const getShippingOption = (shippingId: number) => api.get("/shipping/regions/" + shippingId);

export const postCreateOrder = (data: any) => api.post("/orders", data);

export const getOrderInfoById = (order_id: number) => api.get("/orders/" + order_id);

export const getAllOrders = () => api.get("/orders/inCustomer");

export const getShortDetailOfOrder = (orderId: number) => api.get("/orders/shortDetail/" + orderId);

export const getProductDetailById = (productId: number) => api.get(`/products/${productId}/details`);

export const putProductQuantityInCart = (itemId: number, data: any) => api.put("/shoppingcart/update/" + itemId, data);