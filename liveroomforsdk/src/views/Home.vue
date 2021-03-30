<template>
  <div class="home">
    <div class="login-user-content" @click="goToEdit">
      <div class="user-message-left">
        <img class="login-user-avatar" src="@/assets/icons/avatar.jpg">
        <div class="nickname-id">
          <div class="nickname">Michael</div>
          <div class="id">id:2616164</div>
        </div>
      </div>
      <div class="user-message-right">
        <img src="@/assets/icons/right_enter.png" class="user-msg-img">
      </div>
    </div>
    <div class="handle-icons">
        <img class="handle-icon-img" src="@/assets/icons/sort.png" @click="gotoSort">
        <img class="handle-icon-img" src="@/assets/icons/search.png" @click="gotoSearch">
        <img class="handle-icon-img" src="@/assets/icons/create_room.png" @click="gotoCreatRoom">
    </div>
    <div class="room-list-content">
       <van-pull-refresh 
          v-model="roomControl.refreshing" 
          @refresh="RefreshRoom" 
          pulling-text="Pull down to refresh" 
          loosing-text="Release to refresh"
          loading-text="Loading..."
        >
          <van-list
            v-model="roomControl.loading"
            :finished="roomControl.finished"
            finished-text="no more"
            @load="loadMoreRoom"
            loading-text="Loading..."
          >
               <div class="room-list-box">
                 <roomBlock v-for="(item,index) in 20" :key="index" @click.native="gotoRoom"/>
               </div>       
          </van-list>
        </van-pull-refresh>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import roomBlock from '@/components/homeCompo/roomBlock'
export default {
  name: 'Home',
  components: {
    roomBlock
  },
  data(){
    return{
      roomControl:{
        refreshing:false,
        loading:false,
        finished:false
      }
    }
  },
  methods:{
    gotoRoom(){
      console.log(123)
      this.$router.push({name:'liveroom'})
    },
    loadMoreRoom(){
      
    },
    RefreshRoom(){
      setTimeout(() => {
        this.roomControl.refreshing = false
      }, 1000);
    },
    gotoSearch(){
      this.$router.push({name:'search'})
    },
    goToEdit(){
      this.$router.push({name:'edit'})
    },
    gotoCreatRoom(){
      this.$router.push({name:'createroom'})
    },
    gotoSort(){
      this.$router.push({name:'sort'})
    }
  }
}
</script>
<style lang="scss" scoped>
  .home{
    width: 1080px;
    height: 100vh;
    box-sizing: border-box;
    font-size: $text-normal-size;
    color: $text-black-normal-color;
      /deep/ .van-loading__text {
         font-size: $text-normal-size;
     }
         /deep/ .van-pull-refresh__text{
          font-size: $text-normal-size;
     }
    .login-user-content{
      height: 234px;
      padding: $live-room-padding;
      box-sizing: border-box;
      border-bottom: $line-default-white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .user-message-left{

        display: flex;
        align-items: center;
        .nickname-id{
          margin-left: 46px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .id{
            margin-top: 20px;
            color: $text-gray-normal-color;
          }
        }
        .login-user-avatar{
           width: 144px;
           height: 144px;
           border-radius: 144px;
        }
      }
      .user-message-right{
        width: 100px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .user-msg-img{
          width: 14px;
          display: block;
        }
      }
    }
    .handle-icons{
      height: 178px;
      padding: $live-room-padding;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .handle-icon-img{
        width: 56px;
        display: block;
        margin-left: 60px;
      }
    }
    .room-list-content{
      height: calc(100vh - 412px);
      box-sizing: border-box;
      overflow: auto;
      .room-list-box{
        min-height: calc(100vh - 412px);
        padding: $live-room-padding;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: flex-start;
      }
    }
  }
</style>
