function startLightbox() {
  let lightbox = document.querySelector(".lightbox");
  let lightboxClose = document.querySelector(".lightbox-close");
  let lightboxNext = document.querySelector(".lightbox-next");
  let lightboxPrev = document.querySelector(".lightbox-prev");
  let lightboxMedia = document.querySelector(".lightbox-media-container");

  const figures = document.querySelectorAll("figure");

  figures.forEach((figure) => {
    figure.addEventListener("click", (e) => {
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
      // div.innerHTML = e.target.outerHTML;
      // div.childNodes[0].setAttribute("controls", true);
      // console.log(div.childNodes);
      // console.log(e.target.parentNode.parentNode.getAttribute("type"));
      // console.log(e.target.outerHTML);
    });
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  let test = document.getElementsByTagName("figure");
  console.log(test);

  let index = 0;

  lightboxNext.addEventListener("click", () => {
    index++;
    if (index === test.length) {
      index = 0;
    }
    lightboxMedia.innerHTML = test[index].childNodes[1].childNodes[1].outerHTML;
  });

  lightboxPrev.addEventListener("click", () => {
    index--;
    if (index < 0) {
      index = test.length - 1;
    }
    if (test[index].getAttribute("type") === "video") {
      test[index].childNodes[1].childNodes[1].setAttribute("controls", true);
    }
    lightboxMedia.innerHTML = test[index].childNodes[1].childNodes[1].outerHTML;
  });
}
