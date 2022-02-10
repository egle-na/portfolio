<template>
<main class="container">

  <photo-grid :images="modeling" type="modeling" @openImage="openCarousel"/>
  <carousel :images="modeling" type="modeling" :currentImg="carouselActive" @close="carouselActive = false" v-if="carouselActive"/>

</main>
</template>

<script>
  import modeling from "../modules/modeling.json"
  import PhotoGrid from "@/components/PhotoGrid";
  import Carousel from "@/components/Carousel";
  export default {
    name: "Modeling",
    components: {Carousel, PhotoGrid},
    data() {
      return{
        modeling,
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