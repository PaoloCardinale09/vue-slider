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
        activeImage: 0,
        autoPlayForward: true,
      },
    };
  },

  methods: {
    prevImage() {
      if (this.slides.activeImage - 1 < 0) {
        this.slides.activeImage = this.slides.images.length - 1;
      } else {
        this.slides.activeImage--;
      }
    },

    nextImage() {
      if (this.slides.activeImage + 1 >= this.slides.images.length) {
        this.slides.activeImage = 0;
      } else {
        this.slides.activeImage++;
      }
    },

    switchToImage(index) {
      this.slides.activeImage = index;
    },

    stopInHover() {
      clearInterval(autoplay);
      clearInterval(restart);
    },

    restartAutoplay() {
      restart = setInterval(() => {
        if (this.slides.autoPlayForward == true) {
          this.nextImage();
        } else {
          this.prevImage();
        }
      }, 1000);
    },

    invertImage() {
      this.slides.autoPlayForward = !this.slides.autoPlayForward;
    },
  },

  created() {
    autoplay = setInterval(() => {
      if (this.slides.autoPlayForward == true) {
        this.nextImage();
      } else {
        this.prevImage();
      }
    }, 1000);
  },
});

app.mount("#app");
