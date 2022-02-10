<template>
  <div>
    <!-- Header -->
    <Header>
      <template v-slot:title>Eglė Našlėnaitė</template>
      <ul class="nav__list">
        <li><router-link to="/photography">Photography</router-link></li>
        <li><router-link to="/illustration">Illustration</router-link></li>
        <li><router-link to="/modeling-vfx">3D Modeling</router-link></li>
        <li><router-link to="/frontend">Frontend</router-link></li>
      </ul>
      <ul class="nav__list">
        <li><router-link to="/about-me">About me</router-link></li>
        <li><router-link to="/contact-me">Contact me</router-link></li>
      </ul>
    </Header>

    <!-- Main Content -->
    <router-view />

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
    --clr-bg-transparent: #161616f4;
    --clr-bg-transparent50: #161616aa;
    --clr-white: #F8F8FF;
    --clr-accent: #83b3e8;

    --ff-titillium: 'Titillium Web', sans-serif;
    --ff-dosis: 'Dosis', sans-serif;

    --fs-header: 1.75rem;
  }

  * { box-sizing: border-box }

  body {
    margin: 0;
    background: var(--clr-bg);
    color: var(--clr-white);
    font-family: var(--ff-titillium);
  }

  a {
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: .2em;
    white-space: nowrap;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
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
    :root{
      --fs-header: 2.4rem;
    }
    .mobile {
      display: none;
    }

    .non-mobile{
      display: initial;
    }

    h2 {
      /*margin-top: 1.2em;*/
    }
  }

</style>