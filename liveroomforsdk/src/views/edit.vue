<template>
    <div class="edit-box">
          <div class="back-box" @click="backToRoom">
            <img class="back-img" src="@/assets/icons/btn_fanhui.png">
        </div>
        <userMsg 
            :backBG="bg" 
            :avatar="avatar" 
            level="32" 
            nickName="White Moore" 
            id="1616" 
            age="46" 
            userSign="I just wanna go back, back to 1999.."
            
        />
        <div class="follow-show-msg">
            <pub-follow-show-compo 
                :title="item.title" 
                :content="item.content" 
                v-for="(item,index) in followArr" 
                :key="index"
                @click.native="gotoFollow(index)"
            />
        </div>
        <div class="set-cell-box">
            <set-cell :leftImg="walletPng" title="Wallet" :isBold="true" @click.native="gotoWallet"/>
            <set-cell :leftImg="packPng" title="Pack" :isBold="true" @click.native="gotoPack"/>
            <set-cell :leftImg="blockPng" title="Block List" :isBold="true" @click.native="gotoBlickList"/>
        </div>
        <div class="gift-title">
             <set-cell title="Gifts Wall" :isBold="true" :hasBorder="false"/>
        </div>
        <div class="gift-content">
            <giftBlock :images="gift1" giftNum="0" title="Colorful Cat"/>
            <giftBlock :images="gift1" giftNum="0" title="Colorful Cat"/>
        </div>
    </div>
</template>

<script>
import userMsg from '@/components/publicCompo/userMsg';
import pubFollowShowCompo from '@/components/publicCompo/pubFollowShowCompo';
import setCell from '@/components/roomsetting/setCell';
import giftBlock from '@/components/editCompo/giftBlock'
export default {
    components:{
        userMsg,
        pubFollowShowCompo,
        setCell,
        giftBlock
    },
    data(){
        return{
            bg:require('@/assets/icons/edit_bg_03.png'),
            avatar:require('@/assets/icons/testavatar.png'),
            walletPng:require('@/assets/icons/wallet.png'),
            packPng:require('@/assets/icons/pack.png'),
            blockPng:require('@/assets/icons/block_black.png'),
            gift1:require('@/assets/icons/gift1.png'),
            followArr:[
                {title:'Friend',content:'4'},
                {title:'Follow',content:'4'},
                {title:'Fans',content:"6"}
            ]
        }
    },
    methods:{
        backToRoom(){
            this.$router.push({name:'Home'})
        },
        gotoBlickList(){
            this.$router.push({name:'blocklist'})
        },
        gotoWallet(){
            this.$router.push({name:'wallet'})
        },
        gotoPack(){
            this.$router.push({name:'pack'})
        },
        gotoFollow(idx){
            this.$router.push({name:'follow',params:{idx}})
        }
    }
}
</script>

<style lang="scss" scoped>
    .edit-box{
        height: 100vh;
        box-sizing: border-box;
        position: relative;
        .back-box{
            width: 100px;
            height: 100px;
            display: flex;
            position: absolute;
            left: 50px;
            top: 184px;
            margin-top: -50px;
            align-items: center;
            .back-img{
                width: 54px;
            }
        }
        .follow-show-msg{
            height: 184px;
            width: 980px;
            margin: 0 auto;
            padding:  0 96px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-sizing: border-box;
            border-bottom:$line-default-white;
        }
        .set-cell-box{
            padding: $live-room-padding;
        }
        .gift-title{
             padding: $live-room-padding;
        }
        .gift-content{
             padding: $live-room-padding;
             display: flex;
        }
    }
</style>
