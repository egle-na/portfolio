<template>
  <div v-if="!isLoading">

    <div class="flex-container" v-for="(set, index) in imagesReady" :key="index">
      <img v-for="(image) in set" :key="image.id"
           :src="require(`../assets/images/illustration/${image.img}`)"
           :alt="image.alt"
           :style="`width: calc(${image.width} - ${(set.length - 1) * .5 / set.length}em`"
           @click="$emit('openImage', image.id)"
           class="grid-img">
    </div>

  </div>
</template>
<script>
  export default {
    name: "PhotoGrid",
    props:[ 'images' ],
    data() {
      return{
        imagesReady: [],
        isLoading: true
      }
    },
    created() {
      this.loadImages();
    },
    methods: {
      async loadImages(){
        this.imagesReady = JSON.parse(JSON.stringify(this.images));
        await Promise.all(this.imagesReady.map(async set => {
          await this.setWidth(set);
          return set;
        }));
        this.isLoading = false;
      },

      setWidth(set) {
        let images = [];
        let promises = [];

        // create Image element for every item
        set.forEach(() => images.push( new Image() ));

        // the last image that loads calls a function to get all images widths
        let count = images.length;
        images.forEach(image => {
          promises.push( new Promise(resolve => {
            image.onload = () => {
              count--;
              if (count > 0) return resolve();
              this.getWidth(set, images);
              resolve(set[0].width);
            }
          }) )
        })

        images.forEach((image,index) => {
          image.src = require(`../assets/images/illustration/${set[index].img}`);
        })
        return Promise.all(promises);
      },

      getWidth(set, images){
          let heights = [];
          let widths = [];
          let ratios = [];

          // get all images dimensions
          images.forEach(image => {
            heights.push(image.naturalHeight);
            widths.push(image.naturalWidth);
          })

          // find total width when all images are the same height
          let widthTotal = 0;
          images.forEach((image, index) => {
            ratios[index] = heights[0] / heights[index];
            widthTotal += widths[index] * ratios[index];
          })

          // find every image's width in percentage
          images.forEach((image, index) => {
            let widthInPercentage = (widths[index] * ratios[index] ) / widthTotal * 100;
            set[index].width = `${widthInPercentage}%`;
          })
      },

    }
  }
</script>

<style scoped>
  img {
    margin-right: .5em;
  }

  img:last-child {
    margin: 0;
  }

  .flex-container{
    display: flex;
    width: 100%;
    margin-bottom: .5em;
  }

  @media (max-width: 720px){
    .flex-container {
      flex-direction: column;
    }

    img{
      margin: 0 0 .5em 0;
      min-width: 100%;
      max-height: calc(95vh - 3em);
      object-fit: cover;
    }
  }
</style>