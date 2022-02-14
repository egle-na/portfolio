<template>
  <h2><slot /></h2>
</template>
<script>
  export default {
    name: 'TitleUnderlined'
  }
</script>
<style scoped>
  h2 {
    /*display: inline-block;*/
    font-weight: lighter;
    font-family: 'Dosis', sans-serif;
    font-size: 2.2rem;

    width: -moz-fit-content;
    width: fit-content;
    margin: .6em auto .9em;
  }

  h2::after {
    content: "";
    display:block;
    height: 2px;
    width: 102%;

    background: -moz-linear-gradient(
        to right, var(--clr-accent) 3px,
        transparent 3px, transparent 6px,
        var(--clr-accent) 6px, var(--clr-accent) 9px,
        transparent 9px, transparent 12px ,
        var(--clr-accent) 12px);
    background: linear-gradient(
        to right, var(--clr-accent) 3px,
        transparent 3px, transparent 6px,
        var(--clr-accent) 6px, var(--clr-accent) 9px,
        transparent 9px, transparent 12px ,
        var(--clr-accent) 12px);

    margin-left: 20px;
  }
</style>
