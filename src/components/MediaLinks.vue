<template>
  <ul class="media-links" :class="{'media-links--horizontal': isHorizontal}">
    <!-- Instagram -->
    <li>
      <a href="https://www.instagram.com/pilna_tylos" target="_blank">
        <i class="fab fa-instagram"></i>
        <span class="non-mobile">pilna_tylos</span>
      </a>
    </li>

    <!-- Facebook -->
    <li>
      <a href="https://www.facebook.com/egle.naslenaite" target="_blank">
        <i class="fab fa-facebook-f"></i>
        <span class="non-mobile">egle.naslenaite</span>
      </a>
    </li>

    <!-- Linkedin -->
    <li>
      <a href="https://www.linkedin.com/in/egle-naslenaite/" target="_blank">
        <i class="fab fa-linkedin-in"></i>
        <span class="non-mobile">egle.naslenaite</span>
      </a>
    </li>

    <!-- GitHub -->
    <li>
      <a href="https://github.com/egle-na" target="_blank">
        <i class="fab fa-github"></i>
        <span class="non-mobile">egle-na</span>
      </a>
    </li>

    <!-- Email -->
    <li>
      <a>
        <i class="far fa-envelope" />
        <span class="non-mobile easy-select" :class="{'handle-visible': isHorizontal}">egle.naslenaite@gmail.com</span>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "MediaLinks",
    props: [ 'isHorizontal' ]
  }
</script>

<style scoped>

  a {
    font-size: .8rem;
  }

  .media-links {
    display: flex;
    margin: 1em auto .2em;

    width: -moz-fit-content;
    width: fit-content;
  }

  .media-links i {
    font-size: 1.1rem;
    padding: .5em;
    transition: color 250ms;
  }

  .media-links li {
    margin-right:1.5em;
  }

  .media-links li:last-child {
    margin-right: 0;
  }

  .media-links a:hover i {
    color: #83b3e8;
  }

  .easy-select {
    user-select: all;
  }

  @media (min-width: 720px){
    .media-links {
      flex-direction: column;
      justify-content: space-around;
      margin-left: 7vh;
    }

    .media-links i{
      margin-right: 1.2em;
    }

    .media-links--horizontal {
      flex-direction: row;
      margin: 0 auto;
    }
    .media-links--horizontal .non-mobile {
      display: none;
    }
    .media-links--horizontal .handle-visible {
      display: initial;
    }
  }

</style>