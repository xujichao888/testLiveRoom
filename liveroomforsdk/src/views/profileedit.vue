<template>
    <div class="profileedit-content">
        <div class="title-back">
            <div class="back-box" @click="backToRoom">
                 <img class="back-img" src="@/assets/icons/back-black.png">
            </div>
            <div class="title">Profile Edit</div>
        </div>
        <div class="set-box">
             <setCell title="Profile Photo" :avatar="avatar"/>
             <setCell title="Nick Name" rightText="Test nickname" :grayRightText="true" @click.native="$router.push({path:'setNickname'})"/>
             <setCell title="Birth Date" rightText="2020-03-28" :grayRightText="true" @click.native="popupBirth"/>
             <setCell title="Constellation" rightText="Libra" :grayRightText="true" :hasRightIcon="false"/>
             <setCell title="Signature" content="I am approaching this  glimmer"  :grayRightText="true" @click.native="$router.push({path:'signature'})"/>
        </div>
        <setBirth :isShow="birthIsShow" @mask="popupBirth"/>
    </div>
</template>

<script>
import setCell from '@/components/roomsetting/setCell';
import setBirth from '@/components/publicCompo/setBirth';
export default {
    components:{
        setCell,
        setBirth
    },
    data(){
        return{
            avatar:require('@/assets/icons/testavatar.png'),
            birthIsShow:false,
        }
    },
    methods:{
        backToRoom(){
            this.$router.push({name:'edit'})
        },
        popupBirth(){
            this.birthIsShow = !this.birthIsShow;
        }
    }
}
</script>

<style lang="scss" scoped>
    .profileedit-content{
        width: 1080px;
        height: 100vh;
        .title-back{
            padding: $live-room-padding;
            box-sizing: border-box;
            height: 150px;
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
        .set-box{
            padding: $live-room-padding;
        }
    }
</style>