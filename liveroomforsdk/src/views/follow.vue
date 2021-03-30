<template>
    <div class="follow-content">
        <div class="title-back">
            <div class="box">
                <div class="back-box" @click="backToRoom">
                    <img class="back-img" src="@/assets/icons/back-black.png">
                </div>
                <div class="title">Contacts</div>
            </div>
            <img src="@/assets/icons/room_follow.png" class="images" @click="gotoFollowedRoom">
        </div>
        <div class="btns-box">
            <div class="btn-list" v-for="(item,index) in btnsArr" :key="index" :class="{btn1:index==0,btn2:index==1,btn3:index==2}" @click="changeBtnActive(index)">
                <pubBtn :text="item.title" :isActive="index==current" :num="item.num"/>
            </div>
        </div>
        <van-swipe class="my-swipe" duration="200" @change="onChange" ref="swipe">
             <van-swipe-item>
                 <div class="friend">
                      <personList 
                        v-for="(item,index) in friendArr"
                        :key="index"
                        :avatar="item.avatar" 
                        :isShowFollow="item.isShowFollow" 
                        :isFollow="item.isFollow" 
                        :isShowIcon="item.isShowIcon"
                        :idx ="index"
                        @change="change"
                    /> 
                 </div>
            </van-swipe-item>
             <van-swipe-item>
                    <div class="friend">
                      <personList 
                        v-for="(item,index) in friendArr"
                        :key="index"
                        :avatar="item.avatar" 
                        :isShowFollow="item.isShowFollow" 
                        :isFollow="item.isFollow" 
                        :isShowIcon="item.isShowIcon"
                        :idx ="index"
                        @change="change"
                    /> 
                 </div>
            </van-swipe-item>
             <van-swipe-item>
                    <div class="friend">
                      <personList 
                        v-for="(item,index) in friendArr"
                        :key="index"
                        :avatar="item.avatar" 
                        :isShowFollow="item.isShowFollow" 
                        :isFollow="item.isFollow" 
                        :isShowIcon="item.isShowIcon"
                        :idx ="index"
                        @change="change"
                    /> 
                 </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import pubBtn from '@/components/publicCompo/pubBtn'
import personList from '@/components/publicCompo/personList';
import roomMessageList from '@/components/publicCompo/roomMessageList'
export default {
    components:{
        pubBtn,
        personList,
        roomMessageList
    },
    mounted(){
        let {idx} = this.$route.params
        
        this.current = idx==undefined?0:idx;
    },
    data(){
        return{
            current:0,
            btnsArr:[
                {title:'Friends',num:2},
                {title:'Follow',num:2},
                 {title:'Fans',num:2},
            ],
            friendArr:[
                {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   isShowFollow:true,
                   isFollow:false,
                   isShowIcon:true,
                },
                 {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   isShowFollow:true,
                   isFollow:true,
                   isShowIcon:true,
                },
                 {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   isShowFollow:true,
                   isFollow:false,
                   isShowIcon:true,
                },
                 {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   isShowFollow:true,
                   isFollow:false,
                   isShowIcon:true,
                },
            ]
        }
    },
    methods:{
        backToRoom(){
            this.$router.push({name:'edit'})
        },
        changeBtnActive(idx){
            this.current = idx
            this.$refs.swipe.swipeTo(this.current)
        },
        onChange(idx){
            this.current = idx
        },
        change(json){
            let {follow,idx} = json;
            this.friendArr[idx].isFollow=  follow
        },
        gotoFollowedRoom(){
            this.$router.push({name:'followedroom'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .follow-content{
        .title-back{
            padding: $live-room-padding;
            box-sizing: border-box;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: $text-normal-size;
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
                width: 236px;
            }
            .btn2{
                width: 236px;
            }
            .btn3{
                width: 236px;
            }
        }
        .my-swipe{
             height: calc(100vh - 322px);
            .friend{
                height: calc(100vh - 322px);
                overflow: auto;
            }
        }
    }
</style>