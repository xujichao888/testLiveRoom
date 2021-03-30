<template>
    <div class="gray-list">
        <div class="gray-list-left">
            {{leftTtile}}
        </div>
        <div class="gray-list-right" v-if="hasRightTitle" @click="clickhandle" :class="{actives:rightTitleColor}">
            {{rightTile}}
        </div>
    </div>
</template>

<script>
export default {
    props:{
        leftTtile:String,
        rightTile:String,
        hasRightTitle:Boolean,
        rightTitleColor:Boolean
    },
    methods:{
        clickhandle(){
            this.$emit('clickHandle')
        }
    }
}
</script>

<style lang="scss" scoped>
    .gray-list{
        padding: $live-room-padding;
        box-sizing: border-box;
        height: 84px;
        background: #f5f5f5;
        color: $text-gray-normal-color;
        font-size: $text-normal-size;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .gray-list-left,.gray-list-right{
            height: 84px;
            line-height: 84px;
        }
        .actives{
            color: $text-gradual-active-color;
        }
    }
</style>