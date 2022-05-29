<template>
  <div class="project-card">

    <div class="project-description">

      <title-underlined>
        <slot name="title">Project Title</slot>
      </title-underlined>

      <div class="project-display mobile">
        <slot name="display"/>
      </div>

      <slot name="description">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae dicta dignissimos doloremque ducimus,
          expedita facere id iste libero molestiae, nemo quam quas, quod repudiandae rerum sapiente sequi veniam vero.</p>
      </slot>

      <div class="btn-container">

        <a v-if="code" :href="code" target="_blank" class="btn btn--purple">Source code</a>
        <a v-if="page" :href="page" target="_blank" class="btn" :class="{'btn--disabled': page}">Visit page</a>

      </div>

    </div>

    <div class="project-display non-mobile">
      <slot name="display"/>
    </div>

  </div>

  <!-- Structure(copy paste and fill) -->
<!--  <project-card>-->
<!--    <template v-slot:title></template>-->
<!--    <template v-slot:description></template>-->
<!--    <template v-slot:button></template>-->
<!--    <template v-slot:display></template>-->
<!--  </project-card>-->

</template>

<script>
  import TitleUnderlined from "@/components/TitleUnderlined";
  export default {
    name: "ProjectCard",
    props: {
      code: {
        type: String,
        default: ''
      },
      page: {
        type: String,
        default: ''
      },

    },
    components: {TitleUnderlined}
  }
</script>

<style scoped>

  iframe{
    display: block;
  }

  .project-card {
    display: flex;
    flex-direction: column;
    margin: 4em 0;
  }

  .project-description {
    display: flex;
    flex-direction: column;
    /*height: 100%;*/
    min-height: available;
    justify-content: center;
    text-align: center;
  }

  .project-display {
    border: 3px solid var(--clr-accent);
    padding: .5em;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 1em;
  }

  .project-display img {
    display: block;
    width: 100%;
    height: 280px;
    object-fit: cover;
    object-position: top center;
  }

  .project-card h2 {
    margin: 0 auto 1em 0;
  }

  .btn-container {
    padding: 0;
    margin:0;
    display: flex;
    justify-content: center;
  }

  .btn {
    display: inline-block;
    font-family: var(--ff-dosis);
    font-weight: 700;
    letter-spacing: .2em;
    text-transform: uppercase;

    background: var(--clr-accent);
    color: var(--clr-bg);
    border: solid var(--clr-accent);

    width: -moz-fit-content;
    width: fit-content;
    padding: .7em 2em;
    margin: .4em 1em .4em 0;
    align-self: flex-end;
    cursor: pointer;
  }

  .btn:last-child {
    margin-right: 0;
  }

  .btn:hover,
  .btn:focus:active {
    background: var(--clr-bg);
    color: var(--clr-accent);
  }

  .btn--purple{
    --clr-accent: #977dbd;
  }

  @media (min-width: 770px) {
    .project-card {
      flex-direction: row;
      margin: 7em 0;
    }

    .project-card:nth-of-type(odd) {
      flex-direction: row-reverse;
    }

    .project-card:nth-of-type(even) .project-description,
    .project-card:nth-of-type(odd) .project-display {
      margin-right: 2em;
    }

    .project-card h2 {
      margin: 0 auto .3em 0;
    }

    .project-description {
      width: 55%;
      text-align: left;
      padding-top: 1em;
    }

    .project-display {
      /*align-self: center;*/
      width: 45%;
      height: 100%;
      min-height: 300px;
      margin-bottom: 0;
    }

    .btn-container{
      justify-content: flex-end;
    }
  }

  @media (min-width: 1000px) {
    .project-card {
      margin: 10em 0;
    }

    .project-card:nth-of-type(even) .project-description,
    .project-card:nth-of-type(odd) .project-display {
      margin-right: 3em;
    }
  }
</style>