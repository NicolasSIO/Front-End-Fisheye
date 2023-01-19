export default class Api {
  constructor(url) {
    this._url = url;
  }

  async getPhotographers() {
    try {
      let res = await fetch(this._url);
      let data = await res.json();
      return data.photographers;
    } catch (e) {
      console.log(e);
    }
  }

  async getMedia(id) {
    try {
      let res = await fetch(this._url);
      let data = await res.json();
      const media = data.media.filter((media) => media.photographerId === id);
      return media;
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
