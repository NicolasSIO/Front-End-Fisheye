import Api from "../api/Api.js";
import PhotographerFactory from "../factories/photographerFactory.js";
import PhotographerCard from "../templates/PhotographerCard.js";

class Index {
  constructor() {
    this.$photographersSection = document.querySelector(
      ".photographer_section"
    );

    this.photographerApi = new Api("../../data/photographers.json");
  }

  async main() {
    const photographerData = await this.photographerApi.getPhotographers();

    const Photographers = photographerData.map(
      (photographer) => new PhotographerFactory(photographer)
    );

    Photographers.forEach((photographer) => {
      const Template = new PhotographerCard(photographer);
      this.$photographersSection.appendChild(
        Template.createPhotographerCardDOM()
      );
    });
  }
}

const index = new Index();
index.main();
