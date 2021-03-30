<template>
    <div class="bill-list">
        <div class="left">
            <img class="icon" src="@/assets/icons/bill_left.png" v-if="iconType">
            <img class="icon" src="@/assets/icons/bill_right.png" v-if="!iconType">
            <div class="box">
                <div class="title">{{title}}</div>
                <div class="contents">{{content}}</div>
            </div>
        </div>
        <div class="right">
            <div class="pay-num" :class="{isIcome:!iconType}">{{exchangeNum}}</div>
            <div class="has-money">$7200.00</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        iconType:Boolean,
        num:Number,
        hasNum:String,
        title:String,
        content:String
    },
    computed:{
        exchangeNum(){
            return this.iconType? `-${this.num}`:`+${this.num}`
        }
    }
}
</script>

<style lang="scss" scoped>
    .bill-list{
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
 
        font-size: $text-normal-size;
        border-bottom: $line-default-white;
        .left{
            display: flex;
            align-items: center;

            .icon{
                width: 64px;
                height: 54px;
                display: block;
            }
            .box{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-left: 54px;
                .title{
                    margin-bottom: 10px;
                }
            }
        }
        .right{
            text-align: start;
            .pay-num{
                 font-weight: bolder;
            }
            .has-money{
                margin-top: 10px;
                color: $text-gray-normal-color;
            }
            .isIcome{
                color: $text-gradual-active-color;
            }
        }
    }
</style>