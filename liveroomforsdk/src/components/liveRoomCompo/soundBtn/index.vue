<template>
  <div class="sound-btn">
      {{text}}
  </div>
</template>

<script>
export default {
    props:{
        text:String
    }
}
</script>

<style lang="scss" scoped>
    .sound-btn{
        width: 480px;
        height: 120px;
        background: $popup-btn-gradual-changes;
        border-radius: 120px;
        text-align: center;
        line-height: 120px;
        color: #fff;
        font-weight: bold;
        font-size: $text-normal-size;
        margin-bottom: 50px;
    }
</style>