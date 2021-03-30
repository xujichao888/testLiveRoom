<template>
    <div class="talk-title-content">
        <div class="back-img">
            <img src="@/assets/icons/btn_fanhui.png" class="back-icon" @click="backhandle">
        </div>
        <div class="titles">
            {{title}}
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:String
    },
    methods:{
        backhandle(){
            this.$emit('back')
        }
    }
}
</script>

<style lang="scss" scoped>
    .talk-title-content{
        width: 1080px;
        height: 154px;
        border-bottom: $line-default;
        box-sizing: border-box;
        font-size: $text-normal-size;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        .back-img{
            width: 100px;
            height: 154px;
            position: absolute;
            left: 50px;
            display: flex;
            align-items: center;
            .back-icon{
                width: 54px;
                height: 34px;
            }
        }
    }
</style>