<template>
  <div class="show-follow">
      <div class="title">{{title}}</div>
      <div class="content">{{content}}</div>
  </div>
</template>

<script>
export default {
    props:{
        title:String,
        content:String
    }
}
</script>

<style lang="scss" scoped>
.show-follow{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: $text-normal-size;
    .title{
        color: $text-gray-normal-color;
    }
    .content{
        color: $text-black-normal-color;
        font-weight: bolder;
        margin-top: 20px;
    }
}
</style>