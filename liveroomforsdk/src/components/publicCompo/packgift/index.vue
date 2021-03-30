<template>
    <div class="gift-block" >
        <div class="gift">
            <img :src="images" class="img">
            <div class="gift-num">{{giftNum}}</div>
        </div>
        <div class="title">
            {{title}}
        </div>
        <div class="diamonds-box">
            <img class="diamonds-icon" src="@/assets/icons/Diamonds.png">
            <div class="diamonds-num">{{diamonds}}</div>
        </div>
        <div class="gift-type">{{giftType}}</div>
    </div>
</template>

<script>
export default {
    props:{
        title:String,
        images:String,
        giftNum:String,
        diamonds:String,
        giftType:String
    }
}
</script>

<style lang="scss" scoped>
    .gift-block{
        width: 312px;
        font-size: $text-normal-size;
        .gift{
            width: 312px;
            height: 312px;
            background: $gray-unActive-btn;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            .img{
                width: 180px;
                display: block;
            }
            .gift-num{
                font-size: $text-normal-mini-size;
                color: #fff;
                padding: 10px 20px;
                border-radius: 60px;
                background: rgba(0,0,0,0.5);
                position: absolute;
                right: 20px;
                bottom: 20px;
            }
        }
        .title{
            text-align: start;
            margin-top: 20px;
            word-break: normal;
            font-size: $text-normal-size;
        }
        .diamonds-box{
            display: flex;
            align-items: center;
         
            margin-top: 16px;
            .diamonds-icon{
                width: 58px;
                height: 57px;
                display: block;
            }
            .diamonds-num{
                margin-left: 16px;
                color: $text-gradual-active-color;
            }
        }
        .gift-type{
            margin-top: 16px;
            text-align: start;
            color: $text-gray-normal-color;
        }
    }
</style>