class API {
  mainUrl: string = "https://backendapi.turing.com/"

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

export default new API;