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
    });

    document.querySelector(
      ".likes"
    ).innerHTML = `${likes} <i class="fa-solid fa-heart"></i>`;
    document.querySelector(
      ".price"
    ).innerHTML = `${PhotographerProfile._photographer.price}€ / jour`;

    startLightbox();
    submit();

    this.sort();
  }

  sort() {
    let figures = document.getElementsByTagName("figure");
    let tri = document.querySelector("select");
    let indexesArray = Array.from(figures);
    tri.addEventListener("change", () => {
      // tri selon les likes
      if (tri.value === "popularite") {
        let sorted = indexesArray.sort((a, b) => {
          a = a.childNodes[1].getAttribute("data-like");
          b = b.childNodes[1].getAttribute("data-like");
          return a - b;
        });
        document.querySelector(".media_article").innerHTML = "";
        sorted.forEach((e) =>
          document.querySelector(".media_article").appendChild(e)
        );
      // tri selon la date 
      } else if (tri.value === "date") {
        let sorted = indexesArray.sort((a, b) => {
          a = new Date(a.childNodes[1].getAttribute("data-date")).getTime();
          b = new Date(b.childNodes[1].getAttribute("data-date")).getTime();
          return a > b ? 1 : -1;
        });
        document.querySelector(".media_article").innerHTML = "";
        sorted.forEach((e) => {
          document.querySelector(".media_article").appendChild(e);
        });
      // tri selon le titre
      } else {
        let sorted = indexesArray.sort((a, b) => {
          a = a.childNodes[1].getAttribute("data-title");
          b = b.childNodes[1].getAttribute("data-title");
          return a.localeCompare(b);
        });
        document.querySelector(".media_article").innerHTML = "";
        sorted.forEach((e) =>
          document.querySelector(".media_article").appendChild(e)
        );
      }
    });
  }
}

const photographer = new Photographer();
photographer.main();
