const customFetch = (url, headers) =>
  fetch(url, headers).then((res) =>
    res.ok ? res.json() : Promise.reject(res.statusText),
  );

class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getAllInfo() {
    return Promise.all([
      this.getRestaurants(),
      this.getChefs(),
      this.getDishes(),
      this.getChefOfWeek(),
    ]);
  }

  getRestaurants() {
    return customFetch(`${this.baseUrl}/restaurants`);
  }

  getRestaurantsByChef(chefId) {
    return customFetch(`${this.baseUrl}/restaurants/${chefId}`);
  }

  getChefs() {
    return customFetch(`${this.baseUrl}/chefs`);
  }

  getDishes() {
    return customFetch(`${this.baseUrl}/dishes`);
  }

  getChefOfWeek() {
    return customFetch(`${this.baseUrl}/chefOfWeek`);
  }

  getSearchResults(keyword) {
    return customFetch(`${this.baseUrl}/search/${keyword}`);
  }
}

export const api = new Api({
  baseUrl: 'http://localhost:3000/api',
});

export default api;
