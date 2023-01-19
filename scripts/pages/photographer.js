//Mettre le code JavaScript lié à la page photographer.html
import Api from "../api/Api.js";
import PhotographerCard from "../templates/PhotographerCard.js";

class Photographer {
  constructor() {
    this.$photographersSection = document.querySelector(".photograph-header");

    this.photographerApi = new Api("../../data/photographers.json");
  }

  async main() {
    //let id = 243;
    let params = new URLSearchParams(document.location.search);
    console.log(document.location.search);
    let id = parseInt(params.get("id"));
    const photographerData = await this.photographerApi.getId(id);

    console.log(photographerData);

    const PhotographerProfile = new PhotographerCard(photographerData);
    this.$photographersSection.appendChild(
      PhotographerProfile.createPhotographerProfileDOM()
    );
  }
}

const photographer = new Photographer();
photographer.main();
