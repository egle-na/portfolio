<template>
  <main class="container">

    <photo-grid :images="images" type="photography/plants" @openImage="openCarousel"/>
    <carousel :images="images" type="photography/plants" :currentImg="carouselActive" @close="carouselActive = false" v-if="carouselActive"/>

  </main>
</template>

<script>
  import images from "../modules/plants"
  import PhotoGrid from "@/components/PhotoGrid";
  import Carousel from "@/components/Carousel";
  export default {
    name: "Plants",
    components: {Carousel, PhotoGrid},
    data() {
      return {
        images,
        carouselActive: false
      }
    },
    methods: {
      openCarousel(id) {
        this.carouselActive = id;
        console.log(id);
      }
    }
  }
</script>

<style scoped>

</style>