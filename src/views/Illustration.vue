<template>
<main class="container">

  <div v-show="carouselActive">carousel {{ carouselActive }}</div>
  <photo-grid :images="illustrations" @openImage="openCarousel"/>
</main>
</template>

<script>
  import illustrations from "../modules/illustrations.json"
  import PhotoGrid from "@/components/PhotoGrid";
  export default {
    name: "Illustration",
    components: {PhotoGrid},
    data() {
      return{
        illustrations,
        carouselActive: false,
      }
    },
    methods: {
      openCarousel(id) {
        this.carouselActive = true;
        console.log(id);
      }
    }
  }
</script>

<style scoped>


</style>