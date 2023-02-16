function startLightbox() {
  let lightbox = document.querySelector(".lightbox");
  let lightboxClose = document.querySelector(".lightbox-close");
  let lightboxNext = document.querySelector(".lightbox-next");
  let lightboxPrev = document.querySelector(".lightbox-prev");
  let lightboxMedia = document.querySelector(".lightbox-media-container");

  const figures = document.querySelectorAll(".media-container");

  let index = 0;

  figures.forEach((figure) => {
    figure.addEventListener("click", (e) => {
      // retourne l'index du media cliqué
      // retourne la variable figures sous forme de tableau
      index = [...figures].indexOf(e.target.parentNode);
      // On test le type de l'élément ciblé
      if (e.target.parentNode.parentNode.getAttribute("type") === "image") {
        lightbox.style.display = "block";
        // e.target.outerHTML retourne l'HTML de l'élément ciblé
        lightboxMedia.innerHTML = e.target.outerHTML;
      } else {
        lightbox.style.display = "block";
        lightboxMedia.innerHTML = e.target.outerHTML;
        // Permet d'ajouter le contrôle de la vidéo
        lightboxMedia.childNodes[0].setAttribute("controls", true);
      }
    });
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightboxNext.addEventListener("click", () => {
    index++;
    if (index === figures.length) {
      index = 0;
    }
    if ([...figures][index].getAttribute("type") === "video") {
      [...figures][index].childNodes[1].setAttribute("controls", true);
    }
    lightboxMedia.innerHTML = [...figures][index].childNodes[1].outerHTML;
  });

  lightboxPrev.addEventListener("click", () => {
    index--;
    if (index < 0) {
      index = figures.length - 1;
    }
    if ([...figures][index].getAttribute("type") === "video") {
      [...figures][index].childNodes[1].setAttribute("controls", true);
    }
    lightboxMedia.innerHTML = [...figures][index].childNodes[1].outerHTML;
  });
}
