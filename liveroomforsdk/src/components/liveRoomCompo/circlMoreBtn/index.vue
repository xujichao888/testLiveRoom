<template>
  <div class="circle-content">
      <div class="circle-img">
          <img class="imgs" :src="images" v-if="hasToggle">
          <img class="imgs" :src="hasCloseImage" v-else>
      </div>
      <div class="circl-text">
         <div class="margins" v-for="(item,index) in textChange" :key="index">
             {{item}}
         </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        hasToggle:Boolean,
        images:String,
        closeImagge:String,
        text:String
    },
    computed:{
        textChange(){
           return this.text.split('-')
        },
        hasCloseImage(){
            return this.closeImagge?this.closeImagge:this.images
        }
    }
}
</script>

<style lang="scss" scoped>
    .circle-content{
        width: 245px;
        height: 260px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top:68px;
        .circle-img{
            width: 144px;
            height: 144px;
            border-radius: 144px;
            background: $popup-btn-gradual-changes;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
            .imgs{
                width: 60px;
            }
        }
        .circl-text{
            color: $text-gray-color;
            font-size:$text-normal-mini-size;
            .margins{
                margin-top: 10px;
            }
        }
    }
</style>