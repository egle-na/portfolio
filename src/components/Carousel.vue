<template>
<div class="carousel"
     @keydown.right="nextImage"
     @keydown.left="previousImage"
     @keydown.space.prevent ="toggleVideoPlay"
     ref="carousel"
     tabindex="0">

  <div class="backdrop" @click="$emit('close')" />
  <button class="close-btn" @click="$emit('close')">&times;</button>

  <div class="image-container">
    <div class="overlay"></div>

    <!-- Display vid if video file exists -->
    <video v-if="imagesList[currentImageIndex].vid"
           :src="require(`../assets/images/${type}/vid/${imagesList[currentImageIndex].vid}`)"
           width="100%"
           ref="video"
           controls controlslist="nodownload" disablepictureinpicture
           autoplay muted loop>
      <img class="carousel__image"
           :src="require(`../assets/images/${type}/${imagesList[currentImageIndex].img}`)"
           :alt="imagesList[currentImageIndex].alt">
    </video>

    <img v-else class="carousel__image"
         :src="require(`../assets/images/${type}/${imagesList[currentImageIndex].img}`)"
         :alt="imagesList[currentImageIndex].alt">

    <button class="carousel__btn carousel__btn--previous" @click="previousImage()">
      <i class="fa fa-angle-left"/>
    </button>
    <button class="carousel__btn carousel__btn--next" @click="nextImage()">
      <i class="fa fa-angle-right"/>
    </button>

  </div>

</div>
</template>

<script>
  export default {
    name: "Carousel",
    props: [ "images", "type", "currentImg" ],
    data() {
      return {
        currentImageIndex: "",
      }
    },
    created() {
      this.currentImageIndex = this.imagesList?.map(image => image.id)?.indexOf(this.currentImg);
    },
    mounted() {
      this.keepCarouselActive();
    },
    computed:{
      imagesList() {
        let unpacked = []
        this.images.forEach(set => {
          set.forEach(image => {
            unpacked.push(image);
          })
        })
        return unpacked;
      },
    },
    methods: {
      previousImage() {
        this.currentImageIndex = this.currentImageIndex === 0
            ? this.imagesList.length - 1
            : this.currentImageIndex - 1;
        this.keepCarouselActive();
      },

      nextImage() {
        this.currentImageIndex = this.currentImageIndex === this.imagesList.length - 1
            ?  0
            : this.currentImageIndex + 1;
        this.keepCarouselActive();
      },

      toggleVideoPlay(){
        if(this.$refs.video && this.$refs.video !== document.activeElement){
          if(this.$refs.video.paused) this.$refs.video.play();
          else this.$refs.video.pause();
        }
      },

      keepCarouselActive() {
        this.$refs.carousel.focus();
      }
    }
  }
</script>

<style scoped>
  video {
    max-width: 100%;
    max-height: 90vh;
  }

  .carousel {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .backdrop {
    background: var(--clr-bg-transparent);
    width: 100%;
    height: 100%;
  }

  .close-btn {
    position: absolute;
    right: 1em;
    top: 1em;
    z-index: 2;

    line-height: 1em;
    font-size: 2rem;
    transition: transform 200ms;
  }

  .close-btn:hover {
    color: var(--clr-accent);
    transform: scale(1.5);
  }

  .image-container {
    position: absolute;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel__image {
    max-width: 100%;
    max-height: 90vh;
  }

  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(to right,
        var(--clr-bg-transparent50),
        transparent 30%,
        transparent 70%,
        var(--clr-bg-transparent50));
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  .carousel__btn {
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    /*bottom: 0;*/

    font-size: 2em;
    line-height: 1;
    padding: 1em;

    color: var(--clr-white);
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  .image-container:hover .carousel__btn,
  .image-container:hover .overlay{
    opacity: 1;
  }

  .carousel__btn:focus {
    outline: 0;
  }

  .carousel__btn--previous {
    left: 0;
    padding-left: .5em;
  }

  .carousel__btn--next {
    right: 0;
    padding-right: .5em;
  }

  @media (min-width: 770px) {
    .image-container {
      width: 90vw;
      max-width: calc(100vh * (1 + 1/3)); /* 1.333... image ratio */
    }

    .carousel__btn{
      font-size: 3em;
    }
  }

</style>