<template>
<div class="carousel">
  <div class="backdrop" @click="$emit('close')" />
  <button class="close-btn" @click="$emit('close')">&times;</button>
  <div class="image-container"></div>
</div>
</template>

<script>
  export default {
    name: "Carousel"
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

    line-height: 1em;
    font-size: 2rem;
    cursor: pointer;
    transition: transform 200ms;
  }

  .close-btn:hover {
    color: var(--clr-accent);
    transform: scale(1.5);
  }

  .image-container {
    background: white;
    position: absolute;
    width: 400px;
    height: 400px;
  }

</style>