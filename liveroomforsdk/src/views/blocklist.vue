<template>
   <div class="block-list-content">
        <div class="title-back">
            <div class="back-box" @click="backToRoom">
                 <img class="back-img" src="@/assets/icons/back-black.png">
            </div>
            <div class="title">Block List</div>
        </div>
        <personList 
            :avatar="testAvatar" 
            :isShowFollow="true" 
            :isFollow="isActive"  
            btnType="2"  
            :isShowIcon="false"
            @change="changeRelease"
        /> 
        
   </div>
</template>

<script>
import personList from '@/components/publicCompo/personList';
export default {
    components:{
        personList
    },
    data(){
        return{
           testAvatar:require('@/assets/icons/testavatar.png'),
           isActive:false
        }
    },
    methods:{
        backToRoom(){
            this.$router.push({name:'edit'})
        },
        changeRelease(bool){
            console.log(bool)
            let {follow,idx} = bool
            this.isActive = follow
        }
    }
}
</script>

<style lang="scss" scoped>
    .block-list-content{
        height: 100vh;
        font-size: $text-normal-size;
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
    }
</style>