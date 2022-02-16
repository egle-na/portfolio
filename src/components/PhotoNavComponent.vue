<template>
<div>
  <slot />
  <router-link to="/photography/#">
<!--    <img src="../assets/images/photography/IMG_1802.jpg" alt="">-->
<!--    <img src="../assets/images/photography/IMG_1814.jpg" alt="">-->
  </router-link>
</div>
</template>

<script>
  export default {
    name: "PhotoNavComponent"
  }
</script>

<style scoped>

</style>