<template>
  <div class="room-setting-container">
        <backTitle names="Room Setting" @back="backToRoom"/>
        <div class="cell-contents">
             <setCell title="Voice Room Photo" :avatar="avatar"/>
             <setCell title="Name Your Voice Room" content="I just hope everyone is happy" rightText="Edit" @clickhandle="goToeditRoom" />
             <setCell 
                title="Background of the Room" 
                :hasGradual="true" 
                :miniSize="true"
                @click.native="$router.push({path:'setBackground'})" 
            />
             <setCell title="Password Setting" :miniSize="true" @clickhandle="goToSetpassword" />
             <setCell title="Sequential Microphone Mode" :miniSize="true" :hasRightIcon="false" :hasSwitch="true" :swithActive="modeActive" @change="changeMicrophonePositionState" />
             <setCell title="The Boss Position" :miniSize="true" :hasRightIcon="false" :hasSwitch="true" :swithActive="bossActive" @change="changeBossPositionState" />
        </div>
        <div class="gray-line"></div>
         <div class="cell-contents">
             <setCell title="Room Announcement"  :miniSize="true" @click.native="$router.push({path:'roomAnnouncement'})"/>
        </div>
        <div class="gray-line"></div>
         <div class="cell-contents">
             <setCell title="Blocklist" :miniSize="true" @click.native="$router.push({path:'roomblocklist'})" />
             <setCell title="The Administrators"  :miniSize="true" @click.native="$router.push({path:'administrators'})"/>
             <setCell title="The Room Fans" :miniSize="true" @click.native="$router.push({path:'roomFans'})"/>
        </div>
  </div>
</template>

<script>
import setCell from '@/components/roomsetting/setCell'
import pubSwitch from '@/components/publicCompo/pubSwitch'
import backTitle from '@/components/publicCompo/backTitle'
export default {
    components:{
        setCell,
        pubSwitch,
        backTitle
    },
    data(){
        return{
            avatar:require('@/assets/icons/avatar.jpg'),
            modeActive:false,
            bossActive:true,
        }
    },
    methods:{
        backToRoom(){
            this.$router.push({name:'liveroom'})
        },
        changeMicrophonePositionState(bool){
            this.modeActive = bool
        },
        changeBossPositionState(bool){
            this.bossActive = bool
        },
        goToeditRoom(){
           this.$router.push({name:'editroomname'})
        },
        goToSetpassword(){
             this.$router.push({name:'setRoomPassword'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .room-setting-container{
        width: 1080px;
        height: 100vh;
        .cell-contents{
            padding: $live-room-padding;
            box-sizing: border-box;
        }
        .gray-line{
            height: 18px;
            background: #f5f5f5;
        }
    }
</style>