<template>
          <div class="title-back">
            <div class="back-box" @click="backToRoom">
                 <img class="back-img" src="@/assets/icons/back-black.png">
            </div>
            <div class="title">{{names}}</div>
        </div>
</template>

<script>
export default {
    props:{
        names:String
    },
    methods:{
        backToRoom(){
             this.$emit('back')
        }
    }
}
</script>

<style lang="scss" scoped>
     .title-back{
            padding: $live-room-padding;
            box-sizing: border-box;
            height: 150px;
            display: flex;
            align-items: center;
            .back-box{
                width: 100px;
                height: 100px;
                display: flex;
                align-items: center;
                .back-img{
                    width: 54px;
                }
            }
            .title{
                font-size: $text-normal-size;
                font-weight: bold;
                color: $text-black-normal-color;
            }
        }
</style>