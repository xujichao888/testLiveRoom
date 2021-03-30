<template>
    <div class="invite-friend">
        <div class="title-back">
            <div class="box">
                <div class="back-box" @click="$router.push({path:'liveroom'})">
                    <img class="back-img" src="@/assets/icons/back-black.png">
                </div>
                <div class="title">Invite Friends</div>
            </div>
            <div class="boxs">
                <pubBtn :isActive="true" text='Invite'/>
            </div>
        </div>
        <div class="search-contents">
            <div class="search-box">
                <img src="@/assets/icons/search.png" class="search-icon">
                <input type="text" class="inputs" placeholder="Search">
            </div>
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
                :radiosIsSelect="item.radiosIsSelect"
                btnType="2"
                @change="change"
                @changeRadioState="changeRadioState"
             /> 
        </div>
    </div>
</template>

<script>
import pubBtn from '@/components/publicCompo/pubBtn';
import personList from '@/components/publicCompo/personList';
export default {
    components:{
        pubBtn,
        personList
    },
    methods:{
        change(json){
            let {follow,idx} = json;
            this.friendArr[idx].isFollow=  follow
        },
        changeRadioState(idx){
            this.friendArr[idx].radiosIsSelect = !this.friendArr[idx].radiosIsSelect
        }
    },
    data(){
        return{
            friendArr:[
                {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   isShowFollow:false,
                   isFollow:false,
                   isShowIcon:false,
                   radiosIsSelect:false
                   
                },
                 {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   isShowFollow:false,
                   isFollow:true,
                   isShowIcon:false,
                   radiosIsSelect:true
                },
                 {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   isShowFollow:false,
                   isFollow:false,
                   isShowIcon:false,
                   radiosIsSelect:false
                },
                 {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   isShowFollow:false,
                   isFollow:false,
                   isShowIcon:false,
                   radiosIsSelect:false
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .invite-friend{
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
            .boxs{
               width: 228px;
               height: 84px;
            }

        }
        .search-contents{
            height: 156px;
            background: $gray-unActive-btn;
            padding: $live-room-padding;
            .search-box{
                width: 100%;
                height: 156px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-sizing: border-box;
                .search-icon{
                    width: 60px;
                    display: block;
                }
                .inputs{
                    width: 860px;
                    height: 148px;
                    background: none;
                    border: none;
                    font-size: $text-normal-size;
                    display: block;
                }
                .inputs::-webkit-input-placeholder{
                    font-size: $text-normal-size;
                    color: $text-gray-normal-color;
                }
            }
        }
    }
</style>