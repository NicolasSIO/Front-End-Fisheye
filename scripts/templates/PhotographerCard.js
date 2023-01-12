export default class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerCardDOM() {
    const $section = document.createElement("article");

    const photographerCard = `
        <a href="photographer.html?id=${this._photographer.id}">
            <img
                alt="${this._photographer.name}"
                src="/${this._photographer.portrait}"
                class="photographer-img"
            />
            <h3>${this._photographer.name}</h3>
        </a>
        <p>
            <span>${this._photographer.city}, ${this._photographer.country}</span>
            <span>${this._photographer.tagline}</span>
            <span>${this._photographer.price}€/jour</span>
        </p>
    `;

    $section.innerHTML = photographerCard;
    return $section;
  }
}
