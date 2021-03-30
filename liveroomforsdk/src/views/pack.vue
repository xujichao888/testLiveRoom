<template>
    <div class="pack-content">
        <div class="title-back">
            <div class="box">
                <div class="back-box" @click="backToRoom">
                    <img class="back-img" src="@/assets/icons/back-black.png">
                </div>
                <div class="title">Pack</div>
            </div>
            <div class="btn" @click="gotoRecycling">
                <pubBtnBorder text="Recycling"/>
            </div>
        </div>
        <div class="btns-box">
            <div class="btn-list" v-for="(item,index) in btnsArr" :key="index" :class="{btn1:index==0,btn2:index==1,btn3:index==2}" @click="changeBtnActive(index)">
                <pubBtn :text="item" :isActive="index==current"/>
            </div>
        </div>
        <div class="gift-box">
            <div class="gift-list" v-for="(item,index) in giftArr" :key="index">
                 <packgift :images="item.img" :title="item.title" :giftNum="item.giftNum" :diamonds="item.diamonds" :giftType="item.giftType"/>
            </div>
           
        </div>
    </div>
</template>

<script>
import pubBtnBorder from '@/components/publicCompo/pubBtnBorder';
import pubBtn from '@/components/publicCompo/pubBtn';
import packgift from '@/components/publicCompo/packgift';
export default {
    components:{
        pubBtnBorder,
        pubBtn,
        packgift
    },
    data(){
        return{
            current:0,
            btnsArr:[
                'All',
                'Purchased',
                'Given' 
            ],
            img:require('@/assets/icons/gift1.png'),
            giftArr:[
                {img:require('@/assets/icons/gift1.png'),title:'Cosmic Rocket',giftNum:'100',diamonds:'100',giftType:'Purchased'},
                {img:require('@/assets/icons/gift1.png'),title:'Cosmic Rocket',giftNum:'100',diamonds:'100',giftType:'Purchased'},
                {img:require('@/assets/icons/gift1.png'),title:'Cosmic Rocket',giftNum:'100',diamonds:'100',giftType:'Purchased'},
                {img:require('@/assets/icons/gift1.png'),title:'Cosmic Rocket',giftNum:'100',diamonds:'100',giftType:'Purchased'},
                {img:require('@/assets/icons/gift1.png'),title:'Cosmic Rocket',giftNum:'100',diamonds:'100',giftType:'Purchased'},
                {img:require('@/assets/icons/gift1.png'),title:'Cosmic Rocket',giftNum:'100',diamonds:'100',giftType:'Purchased'},
                {img:require('@/assets/icons/gift1.png'),title:'Cosmic Rocket',giftNum:'100',diamonds:'100',giftType:'Purchased'},
            ]
        }
    },
    methods:{
        backToRoom(){
            this.$router.push({name:'edit'})
        },
        changeBtnActive(idx){
            this.current = idx
        },
        gotoRecycling(){
            this.$router.push({name:'recucling'})
        }
    }
}
</script>

<style lang="scss" scoped>
.pack-content{
    .title-back{
        padding: $live-room-padding;
        box-sizing: border-box;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: $text-normal-size;
        .box{
            display:flex;
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
        .btn{
            width: 250px;
            height: 84px;
        }

    }
    .btns-box{
        height: 172px;
        padding: $live-room-padding;
        display: flex;
        align-items: center;
        .btn-list{
            height: 84px;
            margin-right: 26px;
        }
        .btn1{
            width: 156px;
        }
        .btn2{
            width: 254px;
        }
        .btn3{
            width: 176px;
        }
    }
    .gift-box{
         padding: $live-room-padding;
         height: calc(100vh - 322px);
         overflow: auto;
         display: flex;
         justify-content: space-between;
         align-content: flex-start;
         flex-wrap: wrap;
         .gift-list{
             width: 312px;
             margin-bottom: 100px;
         }
    }
}
</style>