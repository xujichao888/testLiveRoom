<template>
    <div class="add-admin">
        <div class="title-back">
            <div class="box">
                <div class="back-box" @click="$router.push({path:'administrators'})">
                    <img class="back-img" src="@/assets/icons/back-black.png">
                </div>
                <div class="title">Add Administrators</div>
            </div>
            <div class="boxs" @click="goback">
                <pubBtn :isActive="true" text='Done'/>
            </div>
        </div>
        <div class="friend">
            <userMsgIcon 
                v-for="(item,index) in friendArr"
                :key="index"
                :renderJson="item"
                :fontColor="true"
                :idx="index"
                @changeRadioState="changeRadioState"
             /> 
        </div>
    </div>
</template>

<script>
import pubBtn from '@/components/publicCompo/pubBtn';
import userMsgIcon from '@/components/publicCompo/userMsgIcon';
export default {
    components:{
          userMsgIcon,
        pubBtn
    },
    data(){
        return{
             friendArr:[
                {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   nickname:'Jackey',
                   rule:"99",
                   micState:true,
                   radiosIsSelect:true
                },
                 {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   nickname:'Jackey',
                   rule:"80",
                   micState:false,
                   radiosIsSelect:false
                },
                 {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   nickname:'Jackey',
                   rule:"70",
                   micState:true,
                   radiosIsSelect:false
                },
                 {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   nickname:'Jackey',
                   rule:"20",
                   micState:true,
                   radiosIsSelect:false
                },
            ]
        }
    },
    methods:{
        goback(){
            this.$router.push({path:'administrators'})
        },
           change(json){
            let {follow,idx} = json;
            this.friendArr[idx].isFollow=  follow
        },
        changeRadioState(idx){
            this.friendArr[idx].radiosIsSelect = !this.friendArr[idx].radiosIsSelect
        }
    }
}
</script>

<style lang="scss" scoped>
    .add-admin{
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
    }
</style>