<template>
  <header>

    <!-- Hamburger icon -->
    <!-- // make hamburger icon transform into X to close nav -->
    <button class="mobile nav-btn" @click="navVisible = !navVisible">&#9776;</button>

    <!-- Page Header Title -->
    <router-link to="/" class="title">
      <slot name="title">Page Title</slot>
    </router-link>

    <!-- Navigation -->
    <nav class="navigation container nav" :class="{'navigation--visible': navVisible}">
      <slot />
    </nav>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        navVisible: false,
      }
    },
    watch: {
      $route(){
        this.navVisible = false;
      }
    }
  }
</script>

<style scoped>
  header {
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 1em 1em .5em;
    margin-bottom: 1em;

    background: var(--clr-bg-transparent);

    display: flex;
    flex-direction: column;
    border-bottom: var(--clr-accent) solid 2px;
  }

  a {
    white-space: nowrap;
    border-bottom: transparent solid 1px;
    transition: border-bottom-color 200ms;
  }

  a:hover {
    border-bottom-color: var(--clr-accent);
  }

  .router-link-active:not(.title) {
    border-bottom: var(--clr-accent) solid 2px;
  }

  .title {
    text-transform: none;
    font-family: var(--ff-dosis);
    font-size: var(--fs-header);
    letter-spacing: initial;
    font-weight: 300;
    margin: 0 auto .2em;
    border: none;
    transition: none;
  }

  .title:hover {
    border: none;
  }

  .nav-btn {
    position: absolute;
    z-index: 1;
    font-size: 1.55rem;
    margin: 0;
    transition: color 250ms;
  }

  .nav-btn:hover {
    color: var(--clr-accent);
  }

  .navigation {
    background: var(--clr-bg);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 2em;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 1rem;

    transform: translateX(-100%);
    transition: transform 250ms ease-in-out;
  }

  .navigation--visible {
    transform: translateX(0);
  }

  .nav__list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav__list:not(:last-child) {
    margin-bottom: 2em;
  }

  .nav__list li {
    padding: .5em;
  }

  @media (min-width: 720px) { /* tablet */
    .navigation {
      background: none;
      font-size: .8rem;

      position: relative;
      flex-direction: row;
      justify-content: space-between;
      transform: translateX(0);
      padding: 1em 0 0;
    }

    .nav__list {
      flex-direction: row;
      margin-right: 2em;
    }

    .nav__list:first-child {
      margin-bottom: 0;
    }

    .nav__list li {
      padding: 0 2em 0 0;
    }

    .nav__list li:last-child {
      padding-right: 0;
    }
  }

</style>