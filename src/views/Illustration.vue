<template>
<main class="container">

  <photo-grid :images="illustrations" type="illustration" @openImage="openCarousel"/>
  <carousel :images="illustrations" type="illustration" :currentImg="carouselActive" @close="carouselActive = false" v-if="carouselActive"/>
</main>
</template>

<script>
  import illustrations from "../modules/illustrations.json"
  import PhotoGrid from "@/components/PhotoGrid";
  import Carousel from "@/components/Carousel";
  export default {
    name: "Illustration",
    components: {Carousel, PhotoGrid},
    data() {
      return{
        illustrations,
        carouselActive: false,
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