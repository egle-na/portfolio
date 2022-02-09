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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac neque semper,
      pulvinar ligula viverra, scelerisque lorem. Maecenas fermentum risus quis neque malesuada,
      quis molestie tortor posuere. Nunc non purus sed arcu semper auctor ut in elit. Fusce nec
      felis tempor ante ultrices venenatis sit amet quis est. Integer eleifend eros vel sagittis
      convallis. Proin at nibh ut quam posuere pulvinar. Nulla erat nibh, aliquam vitae aliquet quis,
      posuere ac lacus.
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