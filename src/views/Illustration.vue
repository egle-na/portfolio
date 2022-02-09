<template>
<main class="container">

  <photo-grid :images="illustrations" />
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
        illustrations
      }
    },
  }
</script>

<style scoped>


</style>