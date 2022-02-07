<template>
  <div>
    <Header>
      <template v-slot:title>Eglė Našlėnaitė</template>
    </Header>
    hi
  </div>
</template>
<script>
  import Header from "@/components/Header";
  export default {
    components: {Header}
  }
</script>
<style>
  :root {
    --clr-bg: #161616;
    --clr-white: #fff;
    --clr-accent: #83b3e8;

    --ff-titillium: 'Titillium Web', sans-serif;
    --ff-dosis: 'Dosis', sans-serif;

    --fs-header: 2.4rem;
  }

  * { box-sizing: border-box }

  body {
    background: var(--clr-bg);
    color: var(--clr-white);
    font-family: var(--ff-titillium);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    color: inherit;
    border: none;
  }

  .container {
    margin: 0 auto;
    width: 95%;
    max-width: 1200px;
  }

  .non-mobile {
    display: none;
  }

  @media (min-width: 720px) { /* tablet */
    .mobile {
      display: none;
    }

    .non-mobile{
      display: initial;
    }
  }

</style>