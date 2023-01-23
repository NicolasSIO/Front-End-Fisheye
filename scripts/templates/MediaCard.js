export default class MediaCard {
  constructor(media) {
    this._media = media;
  }

  // Permet de changer l'affichage selon le type de média
  createMediaCardDOM() {
    if (this._media.type === "image") {
      return this.createMediaCardImage();
    } else {
      return this.createMediaCardVideo();
    }
  }

  createMediaCardImage() {
    const $section = document.createElement("figure");

    const mediaCard = `
      <img
        alt="${this._media.title}"
        src="${this._media.media}"
        class="media-img"
      />
      <footer>
        <p>${this._media.title}</p>
        <p>${this._media.likes} <i class="fa-solid fa-heart"></i></p>
      </footer>
    `;

    $section.innerHTML = mediaCard;
    return $section;
  }

  createMediaCardVideo() {
    const $section = document.createElement("figure");

    const mediaCard = `
      <video title="${this._media.title}">
        <source src="${this._media.media}" type="video/mp4">
        Votre navigateur ne prend pas en charge la vidéo.
      </video>
      <footer>
        <p>${this._media.title}</p>
        <p>${this._media.likes} <i class="fa-solid fa-heart"></i></p>
      </footer>
    `;

    $section.innerHTML = mediaCard;
    return $section;
  }
}
