<template>
    <div class="admins-container">
          <div class="title-back">
            <div class="box">
                <div class="back-box" @click="$router.push({path:'roomsetting'})">
                    <img class="back-img" src="@/assets/icons/back-black.png">
                </div>
                <div class="title">The Administrators</div>
            </div>
            <img src="@/assets/icons/circle_black_plus.png" class="images" @click="$router.push({path:'addadmin'})">
        </div>
        <div class="friend">
            <personList 
                v-for="(item,index) in friendArr"
                :key="index"
                :avatar="item.avatar" 
                :isShowFollow="item.isShowFollow" 
                :isFollow="item.isFollow" 
                :isShowIcon="item.isShowIcon"
                :idx ="index"
                btnType="2"
                @change="change"
             /> 
        </div>
    </div>
</template>

<script>
import personList from '@/components/publicCompo/personList';
export default {
    components:{
        personList,
    },
    methods:{
       gotoFollowedRoom(){

       },
        change(json){
            let {follow,idx} = json;
            this.friendArr[idx].isFollow=  follow
        },
    },
    data(){
        return{
            friendArr:[
                {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   isShowFollow:true,
                   isFollow:false,
                   isShowIcon:false,
                   
                },
                 {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   isShowFollow:true,
                   isFollow:true,
                   isShowIcon:false,
                 
                },
                 {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   isShowFollow:true,
                   isFollow:false,
                   isShowIcon:false,
                
                },
                 {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   isShowFollow:true,
                   isFollow:false,
                   isShowIcon:false,
                 
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .admins-container{
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
                width: 60px;
                display: block;
            }

        }
    }
   
</style>