<template>
  <div class="bill-content">
      <!-- 返回 -->
        <div class="title-back">
            <div class="back-box" @click="backToRoom">
                 <img class="back-img" src="@/assets/icons/back-black.png">
            </div>
            <div class="title">Bill</div>
        </div>
         <van-dropdown-menu active-color="#aa7dff">
            <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        <div class="bill-box">
            <bill-list :num="300" title="Pay" content="Oct 29, 2020"/>
             <bill-list :num="300" :iconType="true" title="New Swan Stone Castle" content="Oct 29, 2020"/>
        </div>
  </div>
</template>

<script>
import billList from '@/components/billCompo/billList'
export default {
    components:{
        billList
    },
    data(){
        return{
            value1: 0,
            option1: [
                { text: 'All Types', value: 0 },
                { text: 'Income', value: 1 },
                { text: 'Expense', value: 2 },
            ],
        }
    },
    methods:{
        backToRoom(){
            this.$router.push({name:'wallet'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .bill-content{
        /deep/ .van-dropdown-menu__title{
            font-size: $text-normal-size;
            line-height: 70px;
        }
        /deep/ .van-dropdown-menu__bar{
            height: 100px;
            box-shadow: none;
        }
        /deep/ .van-cell{
            font-size:  $text-normal-size;
            line-height: 100px;
        }
        /deep/ .van-dropdown-menu__title::after{
            border: none;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-top: 15px solid $text-black-normal-color;
            border-radius: 10px;
            margin-right: -25px;
            transform: rotate(0deg);
        }
        /deep/ .van-dropdown-menu__title--active{
            color: $text-gradual-active-color;
        }
        /deep/ .van-dropdown-menu__bar{
            background: $gray-unActive-btn;
        }
        /deep/ .van-dropdown-menu__title--down::after{
            transform: rotate(180deg);
            border-top: 15px solid $text-gradual-active-color;
        }
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
        .bill-box{
            height: calc(100vh - 250px);
            overflow: auto;
            padding: $live-room-padding;
        }
    }
</style>