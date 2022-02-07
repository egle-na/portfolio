<template>
  <main class="container">
    <!-- Title -->
    <title-underlined>About me</title-underlined>

    <!-- Picture and Media Container -->
    <div class="media-container">
      <!-- Picture -->
      <img class="media-container__img img--about" src="../assets/images/profile/IMG_2906.jpg" alt="Egle's portrait in the snow">
      <!-- Media Links desktop -->
      <media-links class="non-mobile"/>
    </div>

    <!-- About me -->
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac neque semper,
      pulvinar ligula viverra, scelerisque lorem. Maecenas fermentum risus quis neque malesuada,
      quis molestie tortor posuere. Nunc non purus sed arcu semper auctor ut in elit. Fusce nec
      felis tempor ante ultrices venenatis sit amet quis est. Integer eleifend eros vel sagittis
      convallis. Proin at nibh ut quam posuere pulvinar. Nulla erat nibh, aliquam vitae aliquet quis,
      posuere ac lacus.
    </p>

    <!-- Title -->
    <title-underlined>Contact me</title-underlined>

    <!-- Contact Form -->
    <contact-form isDark="true" isHorizontal="true" />

    <!-- Media Links mobile -->
    <media-links class="mobile" />

  </main>
</template>

<script>
  import MediaLinks from "@/components/MediaLinks";
  import TitleUnderlined from "@/components/TitleUnderlined";
  import ContactForm from "@/components/ContactForm";

  export default {
    name: "About",
    components: {
      ContactForm,
      MediaLinks,
      TitleUnderlined
    }
  }
</script>

<style scoped>
  .container {
    max-width: 1000px
  }

  p {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .media-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5em;
  }

  .media-container__img {
    height: 40vw;
    object-fit: cover;
  }

  .img--about {
    object-position: center;
  }

  .media-links.non-mobile {
    display: none;
  }

  @media (min-width: 720px){
    .media-links.mobile {
      display: none;
    }

    .media-links.non-mobile{
      display: flex;
    }

    .media-container {
      flex-direction: row;
      margin-bottom: 2em;
    }

    .img--about {
      width: 55%;
      height: 100%;
    }

    form {
      margin-top: 2em;
    }
  }
</style>

