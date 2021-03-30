<template>
  <div class="sex" :class="{hasAge:age!=undefined}">
      <img src="@/assets/icons/boy.png" class="imgs" v-if="sex==1">
      <img src="@/assets/icons/girl.png" class="imgs" v-else>
      <div class="age"  v-if="age!=undefined">
          {{age}}
      </div>
  </div>
</template>

<script>
export default {
    props:{
        sex:{
            type:Number,
            default:1
        },
        age:String
        
    }
}
</script>

<style lang="scss" scoped>
    .sex{
        padding:0 12px;
        height: 48px;
        background: $violet-gradual-changes;
        font-size: $text-normal-mini-size;
        border-radius: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        .imgs{
            width: 24px;
            height: 25px;
            display: block;
        }
        .age{
            margin-left: 15px;
        }
    }
    .hasAge{
        padding: 0;
        width: 142px;
    }
</style>