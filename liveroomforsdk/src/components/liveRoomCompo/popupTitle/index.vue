<template>
    <div class="title-container">
        {{titles}} <span v-if="personNum">({{personNum}})</span>
    </div>
</template>

<script>
export default {
    props:{
        titles:String,
        personNum:String
    }
}
</script>

<style lang="scss" scoped>
    .title-container{
        height: 154px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border-bottom: $line-default;
        font-size: $text-normal-size;
        font-weight: bold;
    }
</style>