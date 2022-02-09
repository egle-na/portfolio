<template>
  <div v-if="!isLoading">

    <div class="flex-container" v-for="(set, index) in imagesReady" :key="index">
      <img v-for="(image) in set" :key="image.id"
           :src="require(`../assets/images/illustration/${image.img}`)"
           :alt="image.alt"
           :style="`width: calc(${image.width} - ${(set.length - 1) * .5 / set.length}em`"
           @click="$emit('openImg', image.id)"
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
    async created() {
      this.imagesReady = JSON.parse(JSON.stringify(this.images));
      await Promise.all(this.imagesReady.map(async set => {
        await this.setWidth(set);
        return set;
      }));
      this.isLoading = false;
    },
    methods: {
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

        //   if( images.length === 2){
        //     const height1 = images[0].naturalHeight;
        //     const height2 = images[1].naturalHeight;
        //     const width1 = images[0].naturalWidth;
        //     const width2 = images[1].naturalWidth;
        //
        //     let ratio = height1 / height2;
        //     console.log(images[0].naturalHeight, images[1].naturalHeight)
        //
        //     let widthTotal = width1 + (width2 * ratio);
        //     let widthP1 = width1 / widthTotal * 100;
        //     let widthP2 = (width2 * ratio) / widthTotal * 100;
        //
        //     set[0].width = `${widthP1}%`;
        //     set[1].width = `${widthP2}%`;
        //   }
        // if(set.length === 2){
        //   const image1 = new Image();
        //   const image2 = new Image();
        //
        //   let count = 2;
        //
        //   const promise1 = new Promise(resolve => {
        //     image1.onload = () => {
        //       count--;
        //       if(count > 0) return resolve();
        //       this.getWidth(set, image1, image2)
        //       resolve(set[0].width);
        //     }
        //   } )
        //   const promise2 = new Promise((resolve) => {
        //     image2.onload = () => {
        //       count--;
        //       if(count > 0) return resolve();
        //       this.getWidth(set, image1, image2);
        //       resolve(set[0].width);
        //     }
        //   } )
        //
        //   image1.src = require(`../assets/images/illustration/${set[0].img}`);
        //   image2.src = require(`../assets/images/illustration/${set[1].img}`);
        //
        //   return Promise.all([promise1, promise2]).then(val => console.log(val, 'values'))
        //
        //   // image2.onload = () => {
        //   //   count--;
        //   //   if(count > 0) return;
        //   //   let [firstImageWidth, secondImageWidth] = this.getWidthTemp(image1, image2);
        //   //   set[0].width = firstImageWidth;
        //   //   set[1].width = secondImageWidth;
        //   // }
        //
        //
        //   // this.getWidth(set, image1, image2)
        //
        // } else if(set.length === 3){
        //   const image1 = new Image();
        //   const image2 = new Image();
        //   const image3 = new Image();
        //
        //   image1.src = require(`../assets/images/illustration/${set[0].img}`);
        //   image2.src = require(`../assets/images/illustration/${set[1].img}`);
        //   image3.src = require(`../assets/images/illustration/${set[2].img}`);
        //
        //   const height1 = image1.naturalHeight;
        //   const height2 = image2.naturalHeight;
        //   const height3 = image3.naturalHeight;
        //   const width1 = image1.naturalWidth;
        //   const width2 = image2.naturalWidth;
        //   const width3 = image3.naturalWidth;
        //
        //   let ratio2 = height1 / height2;
        //   let ratio3 = height1 / height3;
        //
        //   let widthTotal = width1 + (width2 * ratio2) + (width3 * ratio3);
        //
        //   let widthP1 = width1 / widthTotal * 100;
        //   let widthP2 = (width2 * ratio2) / widthTotal * 100;
        //   let widthP3 = (width3 * ratio3) / widthTotal * 100;
        //
        //   set[0].width = `${widthP1}%`;
        //   set[1].width = `${widthP2}%`;
        //   set[2].width = `${widthP3}%`;
        // }
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