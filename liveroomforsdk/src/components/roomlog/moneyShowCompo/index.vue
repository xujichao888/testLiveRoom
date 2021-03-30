<template>
    <div class="money-show">
        <div>{{title}}</div>
        <div class="bottoms">
            <img class="money-show-img" src="@/assets/icons/gold_icon.png">
            <div class="money-show-num">{{num}}</div>
        </div>
         <div class="lefts vertical" v-if="hasVerticalLine"></div>
        <div class="rights vertical" v-if="hasVerticalLine"></div>
    </div>
</template>

<script>
export default {
    props:{
        title:String,
        num:String,
        hasVerticalLine:Boolean,
    }
}
</script>

<style lang="scss" scoped>
    .money-show{
        width: 326px;
        height: 114px;
        font-size: $text-normal-size;
        color: $text-gray-normal-color;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        font-weight: bold;
        position: relative;
        box-sizing: border-box;
        .bottoms{
            display: flex;
            align-items: center;
            .money-show-img{
                width: 48px;
            }
            .money-show-num{
                margin-left: 12px;
                color: $text-black-normal-color;
            }
        }
        .vertical{
            width: 2px;
            height: 50px;
            background: $line-default-color;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
        .lefts{
            left: 0;
        }
        .rights{
            right: 0;
        }
    }
</style>