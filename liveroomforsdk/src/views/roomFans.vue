<template>
   <div class="room-fans">
         <backTitle names="The Room Fans" @back="backToRoom"/>
        <div class="friend">
            <userMsgIcon 
                v-for="(item,index) in friendArr"
                :key="index"
                :renderJson="item"
                :fontColor="true"
                :idx="index"
                :radioIsShow="item.radioIsShow"
                @changeRadioState="changeRadioState"
                :hasBorders="true"
             /> 
        </div>
   </div>
</template>

<script>
import backTitle from '@/components/publicCompo/backTitle'
import userMsgIcon from '@/components/publicCompo/userMsgIcon';
export default {
    components:{
        backTitle,
        userMsgIcon
    },
    methods:{
        backToRoom(){
            this.$router.push({path:'roomsetting'})
        }  ,
                changeRadioState(idx){
            this.friendArr[idx].radiosIsSelect = !this.friendArr[idx].radiosIsSelect
        } 
    },
    data(){
        return{
                         friendArr:[
                {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   nickname:'Jackey',
                   rule:"99",
                   micState:true,
                   radiosIsSelect:true,
                   radioIsShow:false
                },
                 {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   nickname:'Jackey',
                   rule:"80",
                   micState:false,
                   radiosIsSelect:false,
                     radioIsShow:false
                },
                 {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   nickname:'Jackey',
                   rule:"70",
                   micState:true,
                   radiosIsSelect:false,
                     radioIsShow:false
                },
                 {
                   avatar:require('@/assets/icons/avatar.jpg'), 
                   nickname:'Jackey',
                   rule:"20",
                   micState:true,
                   radiosIsSelect:false,
                     radioIsShow:false
                },
            ]
        }
    }
}
</script>

<style>

</style>