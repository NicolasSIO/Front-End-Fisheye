export default class Api {
  constructor(url) {
    this._url = url;
  }

  async get() {
    try {
      let res = await fetch(this._url);
      let data = await res.json();
      return data.photographers;
    } catch (e) {
      console.log(e);
    }
  }
}
