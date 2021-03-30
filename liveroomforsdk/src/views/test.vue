<template>
    <div class="create-room">
        <div class="create-room-title">
            <img src="@/assets/icons/close_white_big.png" class="icon" @click="backtoHome">
            <div class="title">Create Voice Room</div>
        </div>
        
        <div class="upload-room-img">

        </div>
    </div>
</template>

<script>
export default {
    methods:{
        backtoHome(){
            this.$router.push({name:'Home'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .create-room{
        width: 1080px;
        height: 100vh;
        background: $bg-gradual-change-all;
        font-size: $text-large-size;
        .create-room-title{
            height: 140px;
            padding: $live-room-padding;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            .icon{
                width: 36px;
                height: 36px;
                display: block;
                position: absolute;
                left: 50px;
                top: 50%;
                transform: translateY(-50%);
            }
            .title{
                font-weight: bolder;
                color: #fff;
            }
        }
    }
</style>