<template>
    <div class="room-log">
        <!-- title和返回 -->
        <div class="title-back">
            <div class="back-box" @click="backToRoom">
                 <img class="back-img" src="@/assets/icons/back-black.png">
            </div>
            <div class="title">Room Log</div>
        </div>
        <!-- 上方按钮 -->
        <div class="select-tag-box">
            <div class="btn-box" v-for="(item,index) in btnArr" :key="index" @click="changeCurrentState(index)">
                <pub-btn :text="item" :isActive="index==btnCurrent"/>
            </div>
        </div>
        <!-- 轮播组件 -->
        <van-swipe class="my-swipe" duration="200" @change="onChange" ref="swipe">
            <van-swipe-item>
                <!-- 各种金额 -->
                <div class="turnove-box">
                    <moneyShowCompo v-for="(item,index) in moneyArr" :key="index" :title="item.title" :num="item.num" :hasVerticalLine="index==1"/>
                </div>
                <!-- 灰色分割条 -->
                <grayList leftTtile="Date" rightTile="Turnove" :hasRightTitle="true"/>
                <!-- turnove -->
                <div class="turnove-list-box">
                    <van-pull-refresh 
                        v-model="turnoveControl.refreshing" 
                        @refresh="turnOveronRefresh" 
                        pulling-text="Pull down to refresh" 
                        loosing-text="Release to refresh"
                        loading-text="Loading..."
                    >
                        <van-list
                            v-model="turnoveControl.loading"
                            :finished="turnoveControl.finished"
                            finished-text="no more"
                            @load="turnoveLoadMore"
                        >
                            <div class="min-height-box">
                                 <normalCell 
                                    v-for="(item,index) in turnoverlist" 
                                    :key="index"  
                                    :size="true" 
                                    :content="item.date"
                                    :rightContent="item.content"
                                />
                            </div>
                        </van-list>
                    </van-pull-refresh>
                </div>
            </van-swipe-item>
          
            <van-swipe-item>
                <grayList leftTtile="Nickname" rightTile="Gift" :hasRightTitle="true"/>
                  <!-- reward -->
                <div class="log-list-box">
                    <van-pull-refresh 
                        v-model="rewardControl.refreshing" 
                        @refresh="rewardOveronRefresh" 
                        pulling-text="Pull down to refresh" 
                        loosing-text="Release to refresh"
                        loading-text="Loading..."
                    >
                        <van-list
                            v-model="rewardControl.loading"
                            :finished="rewardControl.finished"
                            finished-text="no more"
                            @load="rewardLoadMore"
                        >
                            <div class="min-height-box">
                                 <normalCell 
                                    v-for="(item,index) in rewardList" 
                                    :key="index" 
                                    :title="item.nickname" 
                                    :content="item.date"
                                    :isGiftBar="true"
                                    :giftImage="item.icon"
                                    :giftContent="item.giftContent"
                                />
                            </div>
                        </van-list>
                    </van-pull-refresh>
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <!-- log -->
                <div class="reward-list-box">
                    <van-pull-refresh 
                        v-model="logContol.refreshing" 
                        @refresh="logonRefresh" 
                        pulling-text="Pull down to refresh" 
                        loosing-text="Release to refresh"
                        loading-text="Loading..."
                    >
                        <van-list
                            v-model="logContol.loading"
                            :finished="logContol.finished"
                            finished-text="no more"
                            @load="logLoadMore"
                        >
                            <div class="min-height-box">
                                 <normalCell 
                                    v-for="(item,index) in logList" 
                                    :key="index" 
                                    :title="item.title" 
                                    :content="item.content"
                                    :isGiftBar="true"
                                />
                            </div>
                        </van-list>
                    </van-pull-refresh>
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <grayList leftTtile="NickName" rightTile="Allrelease" :hasRightTitle="true" :rightTitleColor="true"/>
                <div class="log-list-box">
                    <van-pull-refresh 
                        v-model="BlockedContol.refreshing" 
                        @refresh="blockedRefresh" 
                        pulling-text="Pull down to refresh" 
                        loosing-text="Release to refresh"
                        loading-text="Loading..."
                    >
                        <van-list
                            v-model="BlockedContol.loading"
                            :finished="BlockedContol.finished"
                            finished-text="no more"
                            @load="blockedLoadMore"
                        >
                            <div class="min-height-box">
                                 <normalCell 
                                    v-for="(item,index) in BlockedList" 
                                    :key="index" 
                                    :title="item.title" 
                                    :content="item.content"
                                    :isShowIcon="true"
                                    @clickhandle="handleBlockedRelease"
                                />
                            </div>
                        </van-list>
                    </van-pull-refresh>
                </div>
            </van-swipe-item>
        </van-swipe>
        <!-- Blocked弹出层 -->
        <van-popup v-model="popup" position="bottom" duration="0.1" :round="true">
            <div class="popup-s-content">
                <div class="btnss">
                     <pubBtn text="Release " :isActive="true"/>
                </div>
                <div class="btnss">
                   <pubBtnBorder text="Cancel"/>
                 </div>
            </div>
      </van-popup>
    </div>
</template>

<script>
import pubBtn from '@/components/publicCompo/pubBtn';
import pubBtnBorder from '@/components/publicCompo/pubBtnBorder';
import moneyShowCompo from '@/components/roomlog/moneyShowCompo';
import grayList from '@/components/publicCompo/grayList';
import normalCell from '@/components/publicCompo/normalCell';
export default {
    components:{
        pubBtn,
        moneyShowCompo,
        grayList,
        normalCell,
        pubBtnBorder
    },
    data(){
        return{
            popup:false,
            btnCurrent:0,
            btnArr:[
               'Turnover',
               'Reward',
               'Log',
               'Blocked'
            ],
            moneyArr:[
                {title:'Total',num:"11616"},
                {title:'Last Week',num:"1616"},
                {title:'This Week',num:"4494"},
            ],
            turnoverlist: [ //turnover的虚拟数据
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
                {date:'Oct 29, 2020',content:'320'},
            ],
            turnoveControl:{ //第一页加载状态
                loading: false, //上拉加载的loading加载状态
                finished: false, //数据全部完成
                refreshing: false, //刷新状态
            },
            rewardList:[ //rewardList的虚拟数据
                {nickname:'Jack',date:'Oct 29, 2020 16:16:20',icon:require("@/assets/icons/gift.png"),giftContent:'Porche 911 x 1'},
                {nickname:'Jack',date:'Oct 29, 2020 16:16:20',icon:require("@/assets/icons/gift.png"),giftContent:'Porche 911 x 2'},
                {nickname:'Jack',date:'Oct 29, 2020 16:16:20',icon:require("@/assets/icons/gift.png"),giftContent:'Porche 911 x 1'},
                {nickname:'Jack',date:'Oct 29, 2020 16:16:20',icon:require("@/assets/icons/gift.png"),giftContent:'Porche 911 x 1'},
                {nickname:'Jack',date:'Oct 29, 2020 16:16:20',icon:require("@/assets/icons/gift.png"),giftContent:'Porche 911 x 6'},
                {nickname:'Jack',date:'Oct 29, 2020 16:16:20',icon:require("@/assets/icons/gift.png"),giftContent:'Porche 911 x 1'},
                {nickname:'Jack',date:'Oct 29, 2020 16:16:20',icon:require("@/assets/icons/gift.png"),giftContent:'Porche 911 x 1'},  
            ],
            rewardControl:{ //第二页刷新控制
                loading: false, //上拉加载的loading加载状态
                finished: false, //数据全部完成
                refreshing: false, //刷新状态
            },
            logList:[
                {title:'Jacky open the room', content:'Oct 29, 2020 16:18:55'},
                {title:'Jacky open the room', content:'Oct 29, 2020 16:18:55'},
                {title:'Jacky open the room', content:'Oct 29, 2020 16:18:55'},
                {title:'Jacky open the room', content:'Oct 29, 2020 16:18:55'},
                {title:'Jacky open the room', content:'Oct 29, 2020 16:18:55'},
            ],
            logContol:{
                loading: false, //上拉加载的loading加载状态
                finished: false, //数据全部完成
                refreshing: false, //刷新状态
            },
            BlockedList:[
                {title:'Jacky open the room', content:'Oct 29, 2020 16:18:55'},
            ],
            BlockedContol:{
                loading: false, //上拉加载的loading加载状态
                finished: false, //数据全部完成
                refreshing: false, //刷新状态
            }   
        }
    },
    mounted(){
        //this.turnoveLoadMore()
        if(this.$route.params.num){
              this.changeCurrentState(this.$route.params.num)
        }
      
    },
    methods:{
        backToRoom(){
            this.$router.push({name:'liveroom'})
        },
        changeCurrentState(idx){
            this.btnCurrent = idx
            console.log(this.$refs.swipe.swipeTo(this.btnCurrent))
        },
        onChange(idx){
            this.btnCurrent = idx
        },
        turnoveLoadMore(){
            this.turnoveControl.loading = false
        },
        turnOveronRefresh() {
      // 清空列表数据
           setTimeout(()=>{
               this.turnoveControl.refreshing= false
           },1000)
        },
        rewardLoadMore(){
            console.log(123)
             this.rewardControl.loading = false
        },
        rewardOveronRefresh() {
      // 清空列表数据
           setTimeout(()=>{
               this.rewardControl.refreshing= false
           },1000)
        },
        logLoadMore(){
            console.log(123)
             this.logContol.loading = false
        },
        logonRefresh() {
      // 清空列表数据
           setTimeout(()=>{
               this.logContol.refreshing= false
           },1000)
        },
        blockedLoadMore(){
            console.log(123)
             this.BlockedContol.loading = false
        },
        blockedRefresh() {
      // 清空列表数据
           setTimeout(()=>{
               this.BlockedContol.refreshing= false
           },1000)
        },
        handleBlockedRelease(){
            this.popup = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.room-log{
    width: 1080px;
    height: 100vh;
     /deep/ .van-loading__text {
         font-size: $text-normal-size;
     }
     /deep/ .van-pull-refresh__text{
          font-size: $text-normal-size;
     }
    /deep/ .van-popup--bottom.van-popup--round{
      border-radius: 50px 50px 0 0;
    } 
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
    .select-tag-box{
        padding: $live-room-padding;
        box-sizing: border-box;
        margin-top: 40px;
        display: flex;
        height: 150px;
        justify-content: space-between;
        .btn-box{
            width: 228px;
            height: 84px;
        }
    }
    .my-swipe{
        height: calc(100vh - 340px);
        .turnove-box{
            padding: $live-room-padding;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
        }
        .turnove-list-box{
            height: calc(100% - 246px);
            overflow: auto;
            .min-height-box{
                 box-sizing: border-box;
                 padding: $live-room-padding;
                min-height: calc(100vh - 586px);
            }
        }
        .reward-list-box{
            height: calc(100% - 84px);
            overflow: auto;
            .min-height-box{
                 box-sizing: border-box;
                 padding: $live-room-padding;
                min-height: calc(100vh - 424px);
            }
        }
        .log-list-box{
            height: 100%;
            overflow: auto;
            .min-height-box{
                 box-sizing: border-box;
                 padding: $live-room-padding;
                min-height: calc(100vh - 340px);
            }
        }
    }
    .popup-s-content{
        font-size: $text-normal-size;
         padding: $live-room-padding;
        box-sizing: border-box;
        padding-top: 96px;
        padding-bottom: 96px;
        .btnss{
            margin-top: 30px;
            height: 144px;
        }
    }
}
</style>