<template>
<div class="carousel" @keydown.right="nextImage" @keydown.l.left="previousImage">

  <div class="backdrop" @click="$emit('close')" />
  <button class="close-btn" @click="$emit('close')">&times;</button>

  <div class="image-container">

    <button class="carousel__btn carousel__btn--previous" @click="previousImage()">
      <i class="fa fa-angle-left"/>
    </button>

    <img class="carousel__image"
         :src="require(`../assets/images/${type}/${imagesList[currentImageIndex].img}`)"
         :alt="imagesList[currentImageIndex].alt">
    <div v-if="imagesList[currentImageIndex].vid">Video</div>

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
      },
      nextImage() {
        this.currentImageIndex = this.currentImageIndex === this.imagesList.length - 1
            ?  0
            : this.currentImageIndex + 1;
      }
    }
  }
</script>

<style scoped>
  .carousel {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

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
    max-width: 95%;
  }

  .carousel__image {
    max-width: 100%;
    max-height: 90vh;
  }

  .carousel__btn {
    position: absolute;
    top:0;
    bottom: 0;

    font-size: 2em;
    line-height: 1;
    padding: .5em;

    color: var(--clr-white);
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  .image-container:hover .carousel__btn{
    opacity: 1;
  }

  .carousel__btn:focus {
    outline: 0;
  }

  .carousel__btn--previous {
    left: 0;
    padding-right: 25%;
    background: linear-gradient(to right, var(--clr-bg-transparent50), transparent);
  }

  .carousel__btn--next {
    right: 0;
    padding-left: 25%;
    background: linear-gradient(to left, var(--clr-bg-transparent50), transparent);
  }

  @media (min-width: 720px) {
    .image-container {
      max-width: 90vw;
    }

    .carousel__btn{
      font-size: 3em;
    }
  }

</style>