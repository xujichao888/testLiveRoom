<template>
  <div class="follow-room">
        <div class="title-back">
            <div class="box">
                <div class="back-box" @click="backToRoom">
                    <img class="back-img" src="@/assets/icons/back-black.png">
                </div>
                <div class="title">Followed Voice Room</div>
            </div>
            <img src="@/assets/icons/back_person_icon.png" class="images" @click="backToRoom">
        </div>
        <div class="boxs">
             <roomMessageList @change="changeRoomFollow" :isFollow="follow2" :avatar="testAvatar"/>
        </div>
  </div>
</template>

<script>
import roomMessageList from '@/components/publicCompo/roomMessageList'
export default {
    components:{
        roomMessageList
    },
    data(){
        return{
           follow2:false,
            testAvatar:require('@/assets/icons/testavatar.png')
        }
    },
    methods:{
        backToRoom(){
            this.$router.push({name:'follow'})
        },
        changeRoomFollow(bool){
            this.follow2 = bool
        }
    }
}
</script>
<style lang="scss" scoped>
    .follow-room{
        height: 100vh;
        .title-back{
            width: 1080px;
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
        .boxs{
            height: calc(100vh - 150px);
            overflow: auto;
        }
    }
</style>