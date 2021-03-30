<template>
  <div class="normal-cell" :class="{minisize:size}">
      <div class="cell-left">
          <div class="cell-left-title" v-if="title">{{title}}</div>
          <div class="cell-left-content" :class="{margins:title}">{{content}}</div>
      </div>
      <div class="cell-right" v-if="!isGiftBar">
        <!-- 更多按钮 -->
         <div class="cell-right-img-box" v-if="isShowIcon" @click="clickhandle">
           <img class="cell-right-more-img" src="@/assets/icons/black_more.png">
         </div>
         <!-- 右侧conten -->
         <div class="cell-right-content" v-else>{{rightContent}}</div>
      </div>
      <div class="gift-bar" v-if="isGiftBar">
          <img class="gift-bar-img" :src="giftImage">
          <div class="gift-content">{{giftContent}}</div>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    size:Boolean, //是否是小的高度尺寸
    title:String,
    content:String,
    rightContent:String,
    isShowIcon:Boolean,
    isGiftBar:Boolean,
    giftImage:String,
    giftContent:String
  },
  methods:{
    clickhandle(){
      this.$emit('clickhandle')
    }
  }
}
</script>

<style lang="scss" scoped>
  .normal-cell{
    height: 200px; 
    border-bottom:$line-default-white;
    font-size: $text-normal-size;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .cell-left{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: $text-black-normal-color;
      .cell-left-content{
        color:$text-gray-normal-color;
        
      }
      .margins{
        margin-top: 20px;
      }
    }
    .cell-right{
      .cell-right-img-box{
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        .cell-right-more-img{
          width: 36px;
        }
      }
      .cell-right-content{
        color: $text-gray-normal-color;
      }

    }
    .gift-bar{
      color: $text-gradual-active-color;
      display: flex;
      align-items: center;
      .gift-bar-img{
        display: block;
        width: 150px;
        margin-right: 10px;
      }
    }
  }
  .minisize{
    height: 154px;
  }
</style>