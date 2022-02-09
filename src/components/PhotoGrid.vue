<template>
  <div>
    <div class="flex-container" v-for="(set, index) in imagesReady" :key="index">
      <img v-for="image in set" :key="image.id"
           :src="require(`../assets/images/illustration/${image.img}`)"
           :alt="image.alt"
           :style="`width: calc(${image.width} - ${(set.length - 1) * .5 / set.length}em`"
           class="grid-img">
<!--           :style="`width: calc(${image.width} - ${(set.length - 1) * .5 / set.length}em`"-->
    </div>
  </div>
</template>
<script>
  export default {
    name: "PhotoGrid",
    props:[ 'images' ],
    data() {
      return{
        imagesReady: []
      }
    },
    async created() {
      // this.findWidth();
      this.imagesReady = await JSON.parse(JSON.stringify(this.images)).map(async set => {
        await this.setWidth(set);
        return set;
      });
      console.log("created");
    },
    watch:{
      imagesReady:{
        handler() {
          console.log( "elp")
        },
        deep: true
      }
    },

    methods: {
      findWidth() {
        // this.images.forEach(set => this.setWidth(set));
      },
      async setWidth(set) {
        if(set.length === 2){
          const image1 = new Image();
          const image2 = new Image();

          image1.onload = await async function() {
            image2.onload = await function() {
              const height1 = image1.naturalHeight;
              const height2 = image2.naturalHeight;
              const width1 = image1.naturalWidth;
              const width2 = image2.naturalWidth;

              let ratio = height1 / height2;
              console.log(image1, image1.naturalHeight)
              console.log(image2, image2.naturalHeight)

              let widthTotal = width1 + (width2 * ratio);
              let widthP1 = width1 / widthTotal * 100;
              let widthP2 = (width2 * ratio) / widthTotal * 100;

              set[0].width = `${widthP1}%`;
              set[1].width = `${widthP2}%`;
              console.log(set[0].width)
            }
          }

          image1.src = require(`../assets/images/illustration/${set[0].img}`);
          image2.src = require(`../assets/images/illustration/${set[1].img}`);


        } else if(set.length === 3){
          const image1 = new Image();
          const image2 = new Image();
          const image3 = new Image();

          image1.src = require(`../assets/images/illustration/${set[0].img}`);
          image2.src = require(`../assets/images/illustration/${set[1].img}`);
          image3.src = require(`../assets/images/illustration/${set[2].img}`);

          const height1 = image1.naturalHeight;
          const height2 = image2.naturalHeight;
          const height3 = image3.naturalHeight;
          const width1 = image1.naturalWidth;
          const width2 = image2.naturalWidth;
          const width3 = image3.naturalWidth;

          let ratio2 = height1 / height2;
          let ratio3 = height1 / height3;

          let widthTotal = width1 + (width2 * ratio2) + (width3 * ratio3);

          let widthP1 = width1 / widthTotal * 100;
          let widthP2 = (width2 * ratio2) / widthTotal * 100;
          let widthP3 = (width3 * ratio3) / widthTotal * 100;

          set[0].width = `${widthP1}%`;
          set[1].width = `${widthP2}%`;
          set[2].width = `${widthP3}%`;
        }
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
    }
  }
</style>