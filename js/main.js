// Ciao ragazzi,
// Esercizio di oggi: Vue Slider
// nome repo: vue-slider
// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Se volete potete ripartire da qui: https://github.com/TizianoN/object-carousel
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
// Consigli del giorno:
// - regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
// - il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
// Buon lavoro e buon divertimento!

const app = Vue.createApp({
  data() {
    return {
      slides: {
        images: [
          "img/01.webp",
          "img/02.webp",
          "img/03.webp",
          "img/04.webp",
          "img/05.webp",
        ],
      },
    };
  },

  methods: {},
});

app.mount("#app");

// // * RECUPERO GLI ELEMENTI HTML
// const slidesContainerEl = document.getElementById("slides-container");
// const thumbsContainerEl = document.getElementById("thumbs-container");
// const prevButton = document.getElementById("prev");
// const nextButton = document.getElementById("next");
// const stopAutoplayButton = document.getElementById("stop-autoplay");
// const invertiAutoplayButton = document.getElementById("inverti-autoplay");

// // * SETTO IL "CONTATORE" DELL'IMMAGINE ATTIVA
// let activeImage = 0;

// // * GENERO SLIDES E THUMBNAILS
// slides.forEach((slide, index) => {
//   slidesContainerEl.innerHTML += `
//     <div class="slide ${index == activeImage ? "active" : ""}">
//         <img src="./${slide.image}">
//         <div class="slide-text">
//             <h2>${slide.title}</h2>
//             <p>${slide.text}</p>
//         </div>
//     </div>`;

//   thumbsContainerEl.innerHTML += `
//     <div class="thumb" data-index="${index}">
//         <img src="./${slide.image}">
//     </div>
//     `;
// });

// // * LEGO IL CLICK DELLE THUMBNAILS AL CAMBIO DELL'IMMAGINE VISUALIZZATA
// const thumbsEl = document.querySelectorAll(".thumb");
// thumbsEl.forEach((thumbEl, index) => {
//   thumbEl.addEventListener("click", function () {
//     const thisIndex = this.getAttribute("data-index");
//     switchToSlide(thisIndex);
//   });
// });

// // * CREO UNA FUNZIONE PER GESTIRE L'AVANZAMENTO DEL CAROSELLO
// const onNextClick = () => {
//   activeImage++;

//   if (activeImage >= slides.length) {
//     activeImage = 0;
//   }

//   // console.log(activeImage);

//   switchToSlide(activeImage);
// };

// // * CREO UNA FUNZIONE PER GESTIRE L'ARRETRAMENTO DEL CAROSELLO
// const onPrevClick = () => {
//   activeImage--;

//   if (activeImage < 0) {
//     activeImage = slides.length - 1;
//   }

//   // console.log(activeImage);

//   switchToSlide(activeImage);
// };

// // * CREO UNA FUNZIONE PER CAMBIARE L'IMMAGINE VISUALIZZATA
// const switchToSlide = (activeIndex) => {
//   const activeSlide = document.querySelector(".slide.active");
//   const allSlides = document.querySelectorAll(".slide");

//   activeSlide.classList.remove("active");
//   allSlides[activeIndex].classList.add("active");
// };

// // * LEGO IL CLICK DEI CONTROLLI ALLE FUNZIONI DI AVANZAMENTO E ARRETRAMENTO
// nextButton.addEventListener("click", onNextClick);
// prevButton.addEventListener("click", onPrevClick);

// // * AUTOPLAY
// let autoplayForward = true;

// const autoplay = setInterval(() => {
//   if (autoplayForward) {
//     onNextClick();
//   } else {
//     onPrevClick();
//   }
// }, 3000);

// // * STOP AUTOPLAY
// stopAutoplayButton.addEventListener("click", () => {
//   clearInterval(autoplay);
// });

// // * INVERTI AUTOPLAY

// invertiAutoplayButton.addEventListener("click", () => {
//   autoplayForward = !autoplayForward;
// });
