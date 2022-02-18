<template>
  <div class="floating-card">
    <button class="close-btn" @click="$emit('close')">&times;</button>
    <p>{{ message }}</p>
  </div>
</template>
<script>
  export default {
    name: 'FloatingMessage',
    props: {
      message: {}
    }
  }
</script>
<style scoped>

  .floating-card {
    position: fixed;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);

    max-width: 400px;
    width: 90%;
    padding: .7em 2.5em;

    text-align: center;
    background: var(--clr-bg);
    border: solid var(--clr-accent) 2px;
    box-shadow: 0 0 15px 10px var(--clr-bg-transparent50);
    border-radius: 5px;
  }

  .close-btn{
    position: absolute;
    top: .3em;
    right: .3em;
    font-size: 1.5em;
    color: var(--clr-white-transparent);
  }

  .floating-card:hover .

</style>