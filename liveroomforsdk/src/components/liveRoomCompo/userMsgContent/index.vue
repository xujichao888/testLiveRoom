<template>
    <div class="usermsg-content">
        <div class="avatar">
            <img :src="renderJson.avatar" class="imgs">
        </div>
        <div class="nickname">
            {{renderJson.nickname}}
        </div>
        <div class="uid">
            ID:{{renderJson.id}}
        </div>
        <div class="tags">
            <sexCompo age="18"/>
            <div class="blocks"></div>
            <levelCompo rule="99"/>
            <div class="blocks"></div>
            <fansCompo fansNum="6000"/>
        </div>
        <div class="sign">
            {{renderJson.sign}}
        </div>
        <div class="location">
            <div class="aquarius">
                <img src="@/assets/icons/star.png" class="aquarius-icon">
                <div class="aquarius-text">Aquarius</div>
            </div>
             <div class="locations">
                <img src="@/assets/icons/locations.png" class="aquarius-icon">
                <div class="aquarius-text">New York USA</div>
            </div>
        </div>
        <div class="gift-wall">
            <div class="gift-text">Gifts Wall</div>
            <div class="icon-box" @click="popupGiftWall">
                <img class="right-icon" src="@/assets/icons/btn_yjiantou.png">
            </div>
        </div>
        <div class="gift-content">
             <div class="giftList" v-for="(item,index) in giftWallArr" :key="index" @click="popupGiftWall">
                 <div class="img-boxs">
                     <img :src="item.giftImg" class="gift-imgs">
                     <div class="gift-numss">{{item.giftNum}}</div>
                 </div>
                 <div class="gift-text">
                     {{item.giftname}}
                 </div>
             </div>
        </div>
        <div class="btn-contents">
            <div class="public-btn">
                <img src="@/assets/icons/aite.png" class="aite">
            </div>
            <div class="public-btn">
                <img src="@/assets/icons/messages.png" class="aite">
            </div>
            <div class="public-btn">
                <img src="@/assets/icons/icon_liwu.png" class="aite">
            </div>
            <div class="follows">
                <followBtn :hasBeenFollow="follow" @click.native="changeState"/>
            </div>
        </div>
    </div>
</template>

<script>
import sexCompo from '@/components/publicCompo/sexCompo';
import levelCompo from '@/components/publicCompo/levelCompo';
import fansCompo from '@/components/publicCompo/fansCompo';
import followBtn from '@/components/publicCompo/followBtn';
import giftBlock from '@/components/editCompo/giftBlock'
export default {
    components:{
        sexCompo,
        levelCompo,
        fansCompo,
        giftBlock,
        followBtn
    },
    props:{
       renderJson:Object
    },
    data(){
        return{
            follow:false,
            gift1:require('@/assets/icons/gift1.png'),
            giftWallArr:[
                {giftImg:require('@/assets/icons/gift1.png'),giftNum:100,giftname:'Cosmic Rocket'},
                {giftImg:require('@/assets/icons/gift1.png'),giftNum:0,giftname:'Cosmic Rocket'},
                {giftImg:require('@/assets/icons/gift1.png'),giftNum:0,giftname:'Cosmic Rocket'},
                {giftImg:require('@/assets/icons/gift1.png'),giftNum:0,giftname:'Cosmic Rocket'},
                {giftImg:require('@/assets/icons/gift1.png'),giftNum:0,giftname:'Cosmic Rocket'},
                {giftImg:require('@/assets/icons/gift1.png'),giftNum:0,giftname:'Cosmic Rocket'},
            ]
        }
    },
    methods:{
        changeState(){
            this.follow = !this.follow
        },
        popupGiftWall(){
            this.$emit('popupGift')
        }
    }
}
</script>

<style lang="scss" scoped>
    .usermsg-content{
        height: 100%;
        box-sizing: border-box;
        font-size: $text-normal-size;
      
        .avatar{
            width: 1080px;
            height:180px ;
            display: flex;
            justify-content: center;
            padding-top: 45px;
            .imgs{
                width: 180px;
                height: 180px;
                border-radius: 180px;
                display: block;
            }
        }
        .nickname{
            margin-top: 26px;
              font-weight: bold;
        }
        .uid{
              margin-top: 26px;
              color: $text-gray-normal-color;
        }
        .tags{
            margin-top: 26px;
            width: 1080px;
            height: 48px;
            display: flex;
            justify-content: center;
            .blocks{
                width: 20px;
            }
        }
        .sign{
             margin-top: 60px;
             color: $text-gray-normal-color;
            padding: $live-room-padding;
            text-align: start;
            overflow:hidden; 
            text-overflow:ellipsis;
            display:-webkit-box; 
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2;
        }
        .location{
             margin-top: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            .aquarius{
                width: 288px;
                height: 84px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 84px;
                background-color: #464646;
                margin-right: 24px;
                .aquarius-icon{
                    width: 32px;
                    height: 35px;
                    margin-right: 20px;
                }
            }
            .locations{
                width: 378px;
                height: 84px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 84px;
                background-color: #464646;
                  .aquarius-icon{
                    width: 32px;
                    height: 35px;
                    margin-right: 20px;
                }
            }
        }
        .gift-wall{
            margin-top: 98px;
            height: 100px;
            padding: $live-room-padding;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .gift-text{
                font-weight: bold;
            }
            .icon-box{
                height: 100px;
                width: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                .right-icon{
                    width: 14px;
                    height: 24px;
                }
            }

        }
        .gift-content{
            padding: $live-room-padding;
            display: flex;
            .giftList{
                width: 163.3px;
                height: 240px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .gift-text{
                    font-size: $text-normal-mini-size;
                }
                .img-boxs{
                    width: 163px;
                    height: 163px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    .gift-imgs{
                        width: 65%;
                    }
                    .gift-numss{
                        font-size:26px;
                        position: absolute;
                        padding: 5px 15px;
                        right: 10px;
                        bottom: 30px;
                        border-radius: 100px;
                        background-color: rgba(0,0,0,0.3);
                    }
                }
            }
        }
        .btn-contents{
            height: 120px;
            margin-top: 100px;
            padding: $live-room-padding;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .public-btn{
                width: 144px;
                height: 120px;
                background: $popup-btn-gradual-changes;
                border-radius: 120px;
                display: flex;
                align-items: center;
                justify-content: center;
                .aite{
                    width: 60px;
                    display: block;
                }
            }
            .follows{
                width: 480px;
                height: 120px;
            }
        }
    }
</style>