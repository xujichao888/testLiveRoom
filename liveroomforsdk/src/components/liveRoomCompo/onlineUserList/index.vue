<template>
    <div class="userList">
        <div class="avatar-box">
            <img class="avatar" src="@/assets/icons/avatar.jpg">
        </div>
        <div class="user-content">
            <div class="tags-box">
                <div class="user-name">{{renderJson.nickname}}</div>
                <div class="user-tags">
                    <sex-compo/>
                    <level-compo :rule="renderJson.rule" />
                    <micStateForOnline :micState="renderJson.micState"/>
                </div>
            </div>
            <div class="more-box" @click="changeOnlinePositionState">
                <img class="more" src="@/assets/icons/more.png" >
            </div>
        </div>
        <onlinePosition ref="onlinep" :isShow="renderJson.positionIsShow"/>
    </div>
</template>

<script>
import sexCompo from '@/components/publicCompo/sexCompo'
import levelCompo from '@/components/publicCompo/levelCompo'
import micStateForOnline from '@/components/publicCompo/micStateForOnline'
import onlinePosition from '@/components/liveRoomCompo/onlinePosition'
import {mapMutations} from 'vuex'
export default {
    components:{
       sexCompo,
       levelCompo,
       micStateForOnline,
       onlinePosition 
    },
    props:{
        renderJson:{
            type:Object,
            default:{}
        },
        isMaster:Boolean,
        idx:Number
    },
    data(){
        return{
            positionIsShow:false
        }
    },
    methods:{
         ...mapMutations(['SET_ONLINE_CONTROL_ONE']),
        changeOnlinePositionState(){
            this.positionIsShow = !this.positionIsShow;
            if(this.positionIsShow)this.$emit('getMomentScroll')
            this.SET_ONLINE_CONTROL_ONE(this.idx)
        }
    }
}
</script>

<style lang="scss" scoped>
    .userList{
        padding: $live-room-padding;
        height: 210px;
        position: relative;
        display: flex;
        .avatar-box{
           width: 210px;
           height: 210px;
           display:flex;
           align-items: center;
           justify-content: flex-start;
           .avatar{
               width: 144px;
               height: 144px;
               border-radius: 300px;
           } 
        }
        .user-content{
            width: 870px;
            height: 210px;
            box-sizing:border-box;
            border-bottom: $line-default;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .tags-box{
                font-size: $text-normal-size;
                color: #fff;
                font-weight: bold;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                .user-tags{
                    display: flex;
                    margin-top: 30px;
                }
            }
            .more-box{
                width: 100px;
                height: 100px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                .more{
                    width: 36px;
                    display: block;
                }
            }
        }
    }
</style>