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
    //let id = 243;
    let params = new URLSearchParams(document.location.search);
    console.log(document.location.search);
    let id = parseInt(params.get("id"));
    const photographerData = await this.photographerApi.getId(id);

    const PhotographerProfile = new PhotographerCard(photographerData);
    this.$photographersSection.appendChild(
      PhotographerProfile.createPhotographerProfileDOM()
    );

    const mediaData = await this.photographerApi.getMedia(id);

    const Medias = mediaData.map((media) => new MediaFactory(media));

    let likes = 0;

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
