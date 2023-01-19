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

  async getId(id) {
    try {
      let res = await fetch(this._url);
      let data = await res.json();
      const photographer = data.photographers.filter(
        (photographer) => photographer.id === id
      );

      return photographer[0];
    } catch (e) {
      console.log(e);
    }
  }
}
