import { AddProduct } from "../store/actions/tsTypes";

class API {
  mainUrl: string = "https://backendapi.turing.com"

  async get(url: string) {
    try {
      const response = await fetch(this.mainUrl + url);
      return await response.json();
    } catch (e) {
      return e;
    }
  }

  async post(url: string, data: any) {
    try {
      const response = await fetch(this.mainUrl + url, {
        method: "POST",
        headers: {
          "content-type ": "application/json",
        },
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch (e) {
      return e;
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
      return e;
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
      return e;
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

export const postProductToShoppingCart = (data: AddProduct) => api.post(`/shoppingcart/add`, data);

export const getAttributesByProductId = (id?: string) => api.get(`/attributes/inProduct/${id}`);