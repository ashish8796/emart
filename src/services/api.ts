import { AddProduct, LoginDetails, UserDetails } from "../store/actions/tsTypes";

const accessToken: string | null | undefined = localStorage.getItem('emart-token');
const headers = new Headers({
  "content-type": "application/json",
});
accessToken && headers.append("USER-KEY", accessToken)

class API {
  mainUrl: string = "https://backendapi.turing.com"

  async get(url: string) {
    try {
      const response = await fetch(this.mainUrl + url, { headers });
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  }

  async post(url: string, data: any) {
    // console.log(fetch)
    try {
      const response = await fetch(this.mainUrl + url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data)
      });

      return await response.json();
    } catch (e) {

      console.log(e);
    }
  }

  async delete(url: string, data: any) {
    try {
      const response = await fetch(this.mainUrl + url, {
        method: "DELETE",
        headers: {
          "content-type ": "application/json",
        },
        body: JSON.stringify(data)
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
        headers: {
          "content-type ": "application/json",
        },
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch (e) {
      console.log(e);
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

export const getProductsInShoppingCart = (cartId: string) => api.get(`/shoppingcart/${cartId}`)