const customFetch = (url, headers) =>
  fetch(url, headers).then((res) =>
    res.ok ? res.json() : Promise.reject(res.statusText),
  );

class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getAllInfo(token) {
    return Promise.all([
      this.getRestaurants(token),
      this.getChefs(token),
      this.getDishes(token),
      this.getChefOfWeek(token),
    ]);
  }

  getRestaurants(token) {
    return customFetch(`${this.baseUrl}/restaurants`,{
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getRestaurantsByChef(chefId,token) {
    return customFetch(`${this.baseUrl}/restaurants/${chefId}`,{
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getChefs(token) {
    return customFetch(`${this.baseUrl}/chefs`,{
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getDishes(token) {
    return customFetch(`${this.baseUrl}/dishes`,{
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getChefOfWeek(token) {
    return customFetch(`${this.baseUrl}/chefOfWeek`,{
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getSearchResults(keyword) {
    return customFetch(`${this.baseUrl}/search/${keyword}`,{
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }
}

export const api = new Api({
  baseUrl: 'http://3.82.121.223/api',
});

export default api;
