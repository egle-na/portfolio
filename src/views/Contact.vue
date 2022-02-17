<template>
  <main class="container">
    <!-- Title -->
    <title-underlined>Contact me</title-underlined>

    <!-- Image and Contact Form -->
    <div class="contact-container image-container">
      <img class="img--contact image-container__img" src="../assets/images/profile/IMG_7894.jpg" alt="Egle's portrait in the snow">
      <contact-form />
    </div>

    <!-- Media Links -->
    <media-links isHorizontal="true" />

    <!-- Title -->
    <title-underlined>About me</title-underlined>
    <p>
      Junior Frontend Developer with a passion for design and technology. Working mostly with the Vue.js framework.
      Fast learner, thorough, and always eager to learn. Loves sunny days and being in nature.
    </p>
  </main>
</template>
<script>
  import ContactForm from "@/components/ContactForm";
  import TitleUnderlined from "@/components/TitleUnderlined";
  import MediaLinks from "@/components/MediaLinks";
  export default {
    name: "Contact",
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
    margin: 1em auto;
  }

  .image-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5em;
  }

  .image-container__img {
    height: 40vw;
    object-fit: cover;
    object-position: top;
  }

  @media (min-width: 720px){
    .image-container {
      flex-direction: row;
      align-items: stretch;
      margin-bottom: 2em;
    }

    .img--contact {
      width: 55%;
      max-height: 60vh;
      min-height: 358px;
      margin-bottom: 0;
    }
  }
</style>