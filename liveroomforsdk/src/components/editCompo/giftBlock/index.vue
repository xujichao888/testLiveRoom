<template>
    <div class="gift-block" :class="{hasMargin:hasMargin}">
        <div class="gift" :class="{notBackground:notBackground}">
            <img :src="images" class="img">
            <div class="gift-num">{{giftNum}}</div>
        </div>
        <div class="title">
            {{title}}
        </div>
    </div>
</template>

<script>
export default {
    props:{
        imgs:String,
        title:String,
        images:String,
        giftNum:String,
        hasMargin:{
            type:Boolean,
            default:true
        },
        notBackground:Boolean,
    }
}
</script>

<style lang="scss" scoped>
    .gift-block{
        width: 228px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .gift{
            width: 228px;
            height: 228px;
            background: $gray-unActive-btn;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            .img{
                width: 140px;
                display: block;
            }
            .gift-num{
                font-size: $text-normal-size;
                color: #fff;
                padding: 10px 20px;
                border-radius: 60px;
                background: rgba(0,0,0,0.5);
                position: absolute;
                right: 10px;
                bottom: 10px;
            }
        }
        .notBackground{
            background:none;
        }
        .title{
            margin-top: 15px;
            word-break: normal;
            font-size: $text-normal-size;
        }
    }
    .hasMargin{
        margin-right: 22.6px;
    }

</style>