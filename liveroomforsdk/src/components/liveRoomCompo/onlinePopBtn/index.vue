<template>
  <div class="online-pop-Btn" @click="clickCallback">
      <div>
        <img class="imagess" :src="imgs">
        <div class="texts">{{text}}</div>
      </div>
      <div v-if="hasVertical">
        <div class="rightVertical vertical"></div>
        <div class="leftVertical vertical"></div>
      </div>
     
  </div>
</template>

<script>
export default {
    props:{
        imgs:String,
        text:String,
        hasVertical:Boolean
    },
    methods:{
        clickCallback(){
            this.$emit('clickCallback')
        }
    }
}
</script>

<style lang="scss" scoped>
    .online-pop-Btn{
        width: 217px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .imagess{
            width: 60px;
        }
        .texts{
            font-size: $text-normal-size;
        }
        .vertical{
            width: 2px;
            height: 50px;
            background: rgba(255,255,255,0.15);
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
        .rightVertical{
            right: 0;
        }
        .leftVertical{
            left: 0;
        }
    }
</style>