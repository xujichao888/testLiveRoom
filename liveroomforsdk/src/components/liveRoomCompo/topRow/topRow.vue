<template>
    <!-- 最上方的一条 -->
    <div class="top-row-container">
      <div class="left">
          <div class="back-icon-box" @click="handleClick">
              <img class="back-icon" src="@/assets/icons/btn_fanhui.png" >
          </div>
          <div class="room-title-follow">
              <div class="room-title">{{roomTitle}}</div>
              <div class="follow-btn">
                  <followBtn :isActive="true" text="follow" :hasBeenFollow="hasBeenFollow" @click.native="changeFollowState"/>
              </div>
          </div>
      </div>
      <div class="right">
          <awesome-person
             score="111100"
             Ranking="1"
          />
           <awesome-person
             score="30000"
             Ranking="2"
          />
           <awesome-person
             score="1100"
             Ranking="3"
          />
           <awesome-person
             score="999"
             Ranking="4"
          />
          <div class="onlineNum" @click="showOnline">{{$calculationNum(9999)}}</div>
      </div>
    </div>
</template>
<script>
import followBtn from '@/components/publicCompo/followBtn'
import awesomePerson from '@/components/liveRoomCompo/awesomePerson'
export default {
    data(){
        return{
            roomTitle:'Speak in the Moonlight',
            hasBeenFollow:false
        }
    },
    computed:{

    },
    components:{
        followBtn,
        awesomePerson
    },
    methods:{
        showOnline(){
            this.$emit('showOnline')
        },
        handleClick(){
            this.$emit('back')
        },
        changeFollowState(){
            this.hasBeenFollow = !this.hasBeenFollow
        }
    }

}
</script>
<style lang="scss" scoped>
.top-row-container{
    width: 1080px;
    height: 168px;
    box-sizing: border-box;
    padding: $live-room-padding;
    background: $ten-percent-black;
    display: flex;
    align-items: center;
    .left,.right{
        width: 490px;
        height: 168px;
    }
    .left{
        display: flex;
        justify-content: space-between;
        .back-icon-box{
            width: 108px;
            height: 168px;
            display: flex;
            align-items: center;
            .back-icon{
                width: 54px;
                height: 34px;
            }
        }
        .room-title-follow{
            width: 382px;
            height: 168px;
            color: #eadcec;
            
            display: flex;
            flex-direction: column;
            justify-content: center;

            .room-title{
                width: 382px;
                font-size:$text-normal-size;
                line-height: $text-normal-size;
                text-align: start;
                white-space:nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                margin-bottom: 14px;
            }
            .follow-btn{
                width: 192px;
                height: 60px;
            }
        }
    }
    .right{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .onlineNum{
            width: 72px;
            height: 72px;
            border-radius: 100px;
            background: $ten-percent-black;
            text-align: center;
            line-height: 72px;
            font-size: $text-mini-size;
            color: #fff;
        }
    }
}
</style>