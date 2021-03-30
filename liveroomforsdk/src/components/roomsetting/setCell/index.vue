<template>
  <div class="set-cell" :class="{borders:hasBorder,mini:miniSize}">
      <div class="left-content">
          <div class="left-title" :class="{titleBold:isBold}">
              <img :src="leftImg" class="img" v-if="leftImg!=undefined">
              <span>{{title}}</span>
            </div>
          <div class="left-content-text" v-if="content">{{content}}</div>
      </div>
      <div class="right-content" @click="clickhandle">
          <img class="avatar" :src="avatar" v-if="avatar">
          <div class="right-text" v-if="rightText" :class="{grayRightText:grayRightText}">{{rightText}}</div>
          <div class="gradual" v-if="hasGradual" :class="{bg1:gradual=='bg1'}"></div>
          <pubSwitch :active="swithActive" @change="changeState" v-if="hasSwitch"/>
          <div class="right-icon-box" v-if="hasRightIcon">
               <img class="rigt-content-icon" src="@/assets/icons/right_enter.png">
          </div>
      </div>
  </div>
</template>

<script>
import pubSwitch from '@/components/publicCompo/pubSwitch'
export default {
    
    components:{
        pubSwitch
    },
    props:{
        leftImg:String,
        miniSize:Boolean,
        title:String,
        isBold:Boolean,
        content:String,
        hasBorder:{
            type:Boolean,
            default:true
        },
        hasRightIcon:{
            type:Boolean,
            default:true
        },
        rightText:String,
        avatar:String,
        hasGradual:{
            type:Boolean,
            default:false
        },
        gradual:{
            type:String,
            default:'bg1'
        },
        hasSwitch:Boolean,
        swithActive:Boolean,
        grayRightText:Boolean,
    },
    methods:{
        changeState(bool){
            this.$emit('change',bool)
        },
        clickhandle(){
            this.$emit('clickhandle')
        }
    }
}
</script>

<style lang="scss" scoped>
    .set-cell{
        height: 194px;
         font-size: $text-normal-size;
         display: flex;
         justify-content: space-between;
         align-items: center;
         .left-content{
             display: flex;
             flex-direction: column;
             align-items: flex-start;
             .left-title{
                 display: flex;
                 align-items: center;
                 .img{
                     width: 60px;
                     margin-right: 50px;
                 }
             }
             .titleBold{
                 font-weight: bolder;
             }
             .left-content-text{
                 margin-top: 20px;
                color:$text-gray-normal-color;
             }
         }
         .right-content{
             display: flex;
             align-items: center;
             .avatar{
                 width: 144px;
                 height: 144px;
                 border-radius: 144px;
             }
             .right-text{
                 color: $text-gradual-active-color;
             }
             .grayRightText{
                 color:$text-gray-normal-color
             }
            .bg1{
                 width: 84px;
                height: 84px;
                border-radius: 20px;
                background:$bg-gradual-change-all;
            }
             .right-icon-box{
                 width: 50px;
                 height: 150px;
                 display: flex;
                 align-items: center;
                 justify-content: flex-end;
                .rigt-content-icon{
                     width: 14px;
                     display: block;
                 }
             }
           
         }
    }
    .borders{
        border-bottom:$line-default-white;
    }
    .mini{
        height: 154px;
    }

</style>