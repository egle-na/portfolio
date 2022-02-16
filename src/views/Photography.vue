<template>
<div class="container photo-grid">
  <router-link :to="'/photography' + image.link" class="image-container" v-for="image in themes" :key="image.id">

    <img :src="require(`../assets/images/photography/themes/${image.img}`)"
         :alt="image.alt"
         @click="$emit('openImage', image.id)"
         class="grid-img">

    <div class="overlay">
      <p class="image-title">{{ image.description }}</p>
    </div>

  </router-link>
</div>
</template>

<script>
  import themes from "../modules/photography.json"
  export default {
    name: "Photography",
    data() {
      return {
        themes
      }
    },
  }
</script>

<style scoped>

  .photo-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: .6em;
  }

  .image-container {
    width: 100%;
    padding-top: 56.25%; /* 16:9 */
    position: relative;
    overflow: hidden;
  }

  img {
    position: absolute;
    display: block;
    object-fit: cover;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
  }

  .overlay {
    background: var(--clr-white-transparent);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 300ms ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .overlay:hover {
    opacity: 1;
  }

  .image-title {
    color: #444;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2.3rem;

    letter-spacing: .015em;
    font-family: var(--ff-oswald);
  }

  @media (min-width: 720px) {
    .photo-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

</style>