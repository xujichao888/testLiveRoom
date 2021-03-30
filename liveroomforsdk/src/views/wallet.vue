<template>
   <div class="wallet-content">
        <div class="title-back">
            <div class="box">
                <div class="back-box" @click="backToRoom">
                    <img class="back-img" src="@/assets/icons/back-black.png">
                </div>
                <div class="title">Wallet</div>
            </div>
            <img src="@/assets/icons/bill.png" class="images" @click="gotoBill">
        </div>
        <div class="money-bar">
            <div class="box">
                <div class="gold">
                    <img class="images" src="@/assets/icons/gold_money.png">
                    <div class="gold-text">70,000</div>
                </div>
                <div class="line"></div>
                <div class="Diamonds">
                    <img class="images" src="@/assets/icons/Diamonds.png">
                    <div class="gold-text">70,000</div>
                </div>
            </div>
        </div>
        <div class="btn-box">
            <div class="btn1" v-for="(item,index) in btnArr" :key="index" :class="{btn2:index==1}" @click="changeCurrent(index)">
                <pubBtn :text="item" :isActive="index==current"/>
            </div>
        </div>
        <van-swipe class="my-swipe" duration="200" @change="onChange" ref="swipe" :show-indicators="false">
             <van-swipe-item>
                 <div class="money-block">
                     <div v-for="(item,index) in coinArr" :key="index" class="money-list">
                         <div class="top-gold">
                             <img src="@/assets/icons/gold_money.png" class="gold-money">
                             <div class="gold-num">{{item.gold}}</div>
                         </div>
                         <div class="sell-price">
                             <div class="box">
                                 <img class="fu" src="@/assets/icons/money_fu.png">
                                 <div class="text">{{item.money}}</div>
                             </div>
                         </div>
                     </div>
                 </div>
             </van-swipe-item>
              <van-swipe-item>
                  <div class="exchange">
                      <div class="top">
                        <div class="exchange-title">Exchange Amount</div>
                        <div class="input-box">
                            <img src="@/assets/icons/Diamonds.png" class="Diamonds">
                            <input type="number" class="inputs" placeholder="Input exchange amount" v-model="exchangeVal">
                        </div>
                      </div>
                      <div class="exchange-bar">
                          <div class="text">$ {{exchangeVal}}</div>
                           <div class="btn">
                               <pubBtn text="Exchange" :isActive="true"/>
                           </div>
                      </div>
                  </div>
             </van-swipe-item>
        </van-swipe>
   </div>
</template>

<script>
import pubBtn from '@/components/publicCompo/pubBtn'
export default {
    components:{
        pubBtn
    },
    methods:{
        backToRoom(){
            this.$router.push({name:'edit'})
        },
        changeCurrent(idx){
            this.current = idx;
            this.$refs.swipe.swipeTo(this.current)
        },
        onChange(idx){
            this.current = idx;
        },
        gotoBill(){
            this.$router.push({name:'bill'})
        }
    },
    data(){
        return{
            current:0,
            btnArr:[
                'Mall Coin',
                'Recycling Diamond'
            ],
            coinArr:[
                {gold:100,money:10},
                {gold:200,money:18},
                {gold:500,money:40},
                {gold:1000,money:65}
            ],
            exchangeVal:''
        }
    }
}
</script>

<style lang="scss" scoped>
    .wallet-content{
        height: 100vh;
        .title-back{
            padding: $live-room-padding;
            box-sizing: border-box;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .box{
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
            .images{
                width: 54px;
                display: block;
            }

        }
        .money-bar{
            height: 156px;
            padding: $live-room-padding;
            background: #f6f2ff;
            .box{
                width: 980px;
                height: 156px;
                display: flex;
                align-items: center;
                .gold{
                    width:calc(50% - 1px);
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: $text-normal-size;
                    .images{
                        width: 60px;
                        display: block;
                        margin-right: 20px;
                    }
                    .gold-text{
                        font-weight: bolder;
                        color: $text-gold-color;
                    }
                }
                .Diamonds{
                    width:calc(50% - 1px);
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: $text-normal-size;
                    .images{
                        width: 60px;
                        display: block;
                        margin-right: 20px;
                    }
                    .gold-text{
                        font-weight: bolder;
                        color: $text-gradual-active-color;
                    }
                }
                .line{
                    width: 2px;
                    height: 48px;
                    background: rgba(177,125,255,0.45);
                }
            }
        }
        .btn-box{
            padding: $live-room-padding;
            height: 180px;
            display: flex;
            align-items: center;
            
            .btn1{
                width: 244px;
                height: 84px;
                margin-right: 24px;
            }
            .btn2{
                width: 394px;
            } 
        }
        .my-swipe{
            height: calc(100vh - 486px);
            .money-block{
                padding: $live-room-padding;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                font-size: $text-large-size;
                font-weight: bolder;
                color: #fff;
                .money-list{
                    box-sizing: border-box;
                    width: 480px;
                    height: 324px;
                    margin-bottom: 20px;
                    background: $popup-btn-gradual-changes;
                    border-radius: 20px;
                    padding: 46px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .top-gold{
                        display: flex;
                        .gold-money{
                            width: 60px;
                            height: 60px;
                            display:block;
                        }
                        .gold-num{
                            margin-left: 20px;
                        }
                    }
                    .sell-price{
                        width: 228px;
                        height: 84px;
                        background: #ffe900;
                        border-radius: 84px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        align-self: flex-end;
                        .box{
                            display: flex;
                            align-items: center;
                            .fu{
                                width: 20px;
                                height: 38px;
                                display: block;
                                margin-right: 15px;
                            }
                            .text{
                                color: $text-black-normal-color;
                            }
                        }
                    }
                }
            }
            .exchange{
                height: 100%;
                position: relative;
                font-size: $text-normal-size;
                text-align: start;
                margin-top: 40px;
                .top{
                    padding: $live-room-padding;
                    .input-box{
                        height: 180px;
                        border-bottom: 2px solid #aa7dff;
                        display: flex;
                        align-items: center;
                        .Diamonds{
                            width: 58px;
                            height: 57px;
                            display: block;
                            margin-right: 30px;
                        }
                        .inputs{
                            display: block;
                            width: 446px;
                            height: 138px;
                            box-sizing: border-box;
                            border: none;
                            background: none;
                            font-weight: bolder;
                            font-size: $text-normal-size;
                            color: $text-black-normal-color;

                        }
                        .inputs::-webkit-input-placeholder{
                            color: $text-gray-normal-color;
                            font-size: $text-normal-size;
                            line-height: 138px;
                            font-weight: normal;
                        }
                    }
                }
                .exchange-bar{
                    width: 1080px;
                    height: 178px;
                    position: absolute;
                    left: 0;
                    bottom: 30px;
                    padding: $live-room-padding;
                    border-top: $line-default-white;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    box-sizing: border-box;
                    .text{
                        font-size: $text-large-size;
                        font-weight: bold;
                    }
                    .btn{
                        width: 312px;
                        height: 120px;
                    }
                }
            }
        }

    }
</style>