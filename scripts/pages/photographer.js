import Api from "../api/Api.js";
import PhotographerCard from "../templates/PhotographerCard.js";
import MediaFactory from "../factories/MediaFactory.js";
import MediaCard from "../templates/MediaCard.js";

class Photographer {
  constructor() {
    this.$photographersSection = document.querySelector(".photograph-header");
    this.$mediasSection = document.querySelector(".media_article");

    this.photographerApi = new Api("../../data/photographers.json");
  }

  async main() {
    // On récupere l'id du photographe dans l'URL
    let params = new URLSearchParams(document.location.search);
    console.log(document.location.search);
    let id = parseInt(params.get("id"));

    // On récupere les infos du photographe grâce à son id
    const photographerData = await this.photographerApi.getId(id);

    const PhotographerProfile = new PhotographerCard(photographerData);
    this.$photographersSection.appendChild(
      PhotographerProfile.createPhotographerProfileDOM()
    );

    // On récupere les médias du photographe
    const mediaData = await this.photographerApi.getMedia(id);

    const Medias = mediaData.map((media) => new MediaFactory(media));

    let likes = 0;

    // On créer les cartes pour les médias et on récupere les likes
    Medias.forEach((media) => {
      const Template = new MediaCard(media);
      this.$mediasSection.appendChild(Template.createMediaCardDOM());
      likes += media.likes;
      console.log(likes);
    });

    console.log(Medias);
  }
}

const photographer = new Photographer();
photographer.main();
