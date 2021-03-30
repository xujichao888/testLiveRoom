<template>
    <div class="recycling-content" v-if="renderJson">
        <div class="select-box" @click="changeSelectState">
                <img src="@/assets/icons/circle_focus.png" class="icon" v-if="renderJson.isSelect">
                 <img src="@/assets/icons/circle_blur.png" class="icon" v-else>
    
        </div>
        <div class="right-box">
            <div class="gift-rights">
                <div class="gift-block">
                    <img class="imgs" :src="renderJson.gift">
                </div>
            </div>

            <div class="right">
                <div class="box">
                    <div class="top">
                        <div class="gift-name">{{renderJson.giftname}}</div>
                        <div class="gift-type-box">
                            <div class="gift-type">{{renderJson.giftType}}: </div>
                            <img class="img" src="@/assets/icons/Diamonds.png">
                            <div class="gift-exchange-price">{{renderJson.price}}</div>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="minus">
                            <img class="icon" src="@/assets/icons/disable_minus.png" v-if="renderJson.num<=1">
                            <img class="icon" src="@/assets/icons/circle_minus.png" v-if="renderJson.num>1" @click="minus">
                        </div>
                        <div class="input-box">
                            <input type="number" class="reset-input" :value="renderJson.num" @input="changeNum" @blur="blur">
                        </div>
                        <img class="icon" src="@/assets/icons/circle_plus.png" @click="plus">
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        renderJson:Object,
        idx:Number
    },
    methods:{
        changeSelectState(){
            this.$emit('changeSelect',this.idx)
        },
        plus(){
            this.$emit('plus',this.idx)
        },
        minus(){
           this.$emit('minus',this.idx)  
        },
        changeNum(event){
             this.$emit('changeNum',{idx:this.idx,value:event.target.value})  
        },
        blur(idx){
            this.$emit('blur',this.idx)
        }
    }
}
</script>

<style lang="scss" scoped>
    .recycling-content{
        padding: $live-room-padding;
        font-size: $text-normal-size;
        height: 316px;
        display: flex;
        align-items: center;
        .select-box{
            .icon{
                width: 60px;
            }
        }
        .right-box{
            flex: 1;
            height: 100%;
            margin-left: 48px;
            display: flex;
            .gift-rights{
                width: 216px;
                height: 100%;
                display: flex;
                align-items: center;
                .gift-block{
                    width: 216px;
                    height: 216px;
                    border-radius: 30px;
                    background: $gray-unActive-btn;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .imgs{
                        width: 130px;
                        height: 130px;
                        display: block;
                    }
                }
            }

            .right{
                flex: 1;
                box-sizing: border-box;
                padding-left: 50px;
                height: 100%;
                text-align: start;
                border-bottom: $line-default-white;
                display: flex;
                align-items: center;
                .box{
                    width: 100%;
                    height: 216px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .top{   
                        .gift-type-box{
                            margin-top: 20px;
                            display: flex;
                            align-items: center;
                            .gift-type{
                                color: $text-gray-normal-color;
                            }
                            .img{
                                width: 46px;
                                height: 45px;
                                display: block;
                                margin: 0 10px;
                            }
                            .gift-exchange-price{
                                color: $text-gradual-active-color;
                            }
                        }
                    }
                    .bottom{
                        align-self: flex-end;
                        display: flex;
                        align-items: center;
                        .minus{
                            .icon{
                                width: 60px;
                                height: 60px;
                                display: block;
                            }
                        }
                        .input-box{
                            margin: 0 24px;
                            width: 144px;
                            height: 84px;
                            box-sizing: border-box;
                            border: 3px solid $line-default-color;
                            border-radius: 84px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            .reset-input{
                                width: 100px;
                                text-align: center;
                                border: none;
                                background: none;
                                display: block;
                                caret-color:#ab78ff;
                                color: $text-black-normal-color;
                                font-size: $text-normal-size;
                            }
                        }
                        .icon{
                            width: 60px;
                            height: 60px;
                            display: block;
                        }
                    }
                }

            }
        }
    }
</style>