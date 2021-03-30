<template>
  <div class="header">
      <div class="title-text">Birth Date</div>
  </div>
</template>

<script>
  // TODO： 支持自定义的render渲染
  // import textRender from './render'
  export default {
    props: {
      cancelText: {
        type: String
      },
      confirmText: {
        type: String
      },
      title: {
        type: String
      }
    },
    methods: {
      cancel () {
        this.$emit('cancel')
      },
      confirm () {
        this.$emit('confirm')
      }
    }
  }
</script>

<style lang="scss" scoped>
.header{
     height: 154px;
    border-top-left-radius: 38px;
    border-top-right-radius: 38px;
    box-sizing: border-box;
    border-bottom: $line-default-white;
    display: flex;
    align-items: center;
    justify-content: center;
    .title-text{
      font-weight: bold;
      font-size: $text-normal-size;
      color: $text-black-normal-color;
    }
}
</style>
