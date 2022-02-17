<template>
<main class="container">

  <project-card>
    <template v-slot:title>Inventory System</template>
    <template v-slot:description></template>
    <template v-slot:button>
      <a href="https://egle-na.github.io/inventory-system" target="_blank" class="visit-btn">Visit Page</a>
    </template>
    <template v-slot:display>
      <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fto3EomHM1m5BMdu9AtYEk6%2FInventorius%3Fnode-id%3D0%253A1"
              allowfullscreen
              class="figma-iframe" />
    </template>
  </project-card>

  <project-card>
    <template v-slot:title>Portfolio Page</template>
    <template v-slot:description>
      <p>Custom portfolio page, with different image layouts and responsive design. Built with Vue.js framework.</p>
    </template>
    <template v-slot:button>
      <a href="/" class="visit-btn" target="_blank">Visit Page</a>
    </template>
    <template v-slot:display>
      <img src="../assets/images/frontend/Portfolio-screen-capture.jpg" alt="Portfolio page illustrations grid">
    </template>
  </project-card>

  <project-card>
    <template v-slot:title>Maišiagala Kindergarten</template>
    <template v-slot:description></template>
    <template v-slot:button>
      <a href="https://www.maisiagalosdarzelis.lt/" target="_blank" class="visit-btn">Visit Page</a>
    </template>
    <template v-slot:display>
      <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fyhm6tMPcXpHraV5w6KKVzn%2FDar%25C5%25BEelis%3Fnode-id%3D0%253A1"
              allowfullscreen
              class="figma-iframe" />
    </template>
  </project-card>

<!--  <project-card>-->
<!--    <template v-slot:title></template>-->
<!--    <template v-slot:description></template>-->
<!--    <template v-slot:button></template>-->
<!--    <template v-slot:display></template>-->
<!--  </project-card>-->

</main>
</template>

<script>
  import ProjectCard from "@/components/ProjectCard";
  export default {
    name: "Frontend",
    components: { ProjectCard }
  }
</script>

<style scoped>

  .figma-iframe {
    border: none;
    width: 100%;
    height: 100%;
    min-height: 300px;

  }
</style>