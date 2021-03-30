<template>
  <div class="follow-btn" :class="{followed:hasBeenFollow}">
      <div class="box">
          <img class="images" src="@/assets/icons/plus.png" v-if="!hasBeenFollow && isShowIcon">
          <div>{{text}}</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        hasBeenFollow:Boolean,
        isShowIcon:{
            type:Boolean,
            default:true
        },
        types:{
           type:String,
           default:'1' 
        },
    },
    computed:{
        text(){
            return this.types == '1'? this.hasBeenFollow?'Unfollow':'Follow' :this.hasBeenFollow?'block':'release'
        }
    }
}
</script>

<style lang="scss" scoped>
    .follow-btn{
        width: 100%;
        height: 100%;
        background: $popup-btn-gradual-changes;
        border-radius: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: $text-normal-size;
        color: #fff;
        .box{
            display: flex;
            align-items: center;
            .images{
                width: 24px;
                height: 24px;
                display:block;
                margin-right: 5px;
            }
        }
    }
    .followed{
        background: $gray-unActive-btn;
        color: $text-gray-normal-color;
    }
</style>