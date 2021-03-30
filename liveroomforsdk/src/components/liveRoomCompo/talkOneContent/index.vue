<template>
    <div class="talk-one-containers">
      <div class="talk-list-box" v-show="!pageIsShow && !systemPageIsShow">
           <popupTitle titles="Message" personNum="168"/>
           <div class="someOneMsg">
               <talkMsgList :renderJson="systemInfo" @click.native="showSystemPage"/>
               <talkMsgList v-for="(item,index) in talkOneList" :key="index" :renderJson="item" @click.native="showPageView(index)"/>
           </div>
      </div>
      <!-- 聊天页面 -->

      <!-- 系统消息页面 -->
      <div class="system-msg" v-show="systemPageIsShow">
          <systemTitle title="System Notification" @back="showSystemPage"/>
      </div>
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import popupTitle from '@/components/liveRoomCompo/popupTitle';
import talkMsgList from '@/components/liveRoomCompo/talkMsgList';
import systemTitle from '@/components/liveRoomCompo/systemTitle';
import followBtn from '@/components/publicCompo/followBtn';

export default {
    computed:{
        ...mapState([
            'talkOneList'
        ]),
    },
    components:{
        popupTitle,
        talkMsgList,
        systemTitle,
        followBtn
    },
    methods:{
        
        showPageView(item){ //隐藏列表页，显示聊天页
            
            this.$emit('changePageForTalkOne',item)
        },
        showSystemPage(){
            this.$emit('changeSystemPage')
        },
        handleMore(){
            this.moreIsShow = !this.moreIsShow
        },
        stopDownKeybroad(key){
            // console.log('stop')
            // this.$emit('stopDownKeybroad')
        },
        focusHandle(){
            this.$emit('talkInputFocus')
        },
        startDownKeybroad(){
            console.log('start')
            this.$emit('startDownKeybroad')
        }
    },
    props:{
        pageIsShow:{
            type:Boolean,
            default:false
        },
        systemPageIsShow:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            index:0,
            moreIsShow:false,
            systemInfo:{
                nickname:'System Notification',
                avartar:require('@/assets/icons/system.png'),
                lastOneMsg:'step into my office!,could you leave us alone,',
                time:new Date().getTime(),
                notReadNum:1,
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .talk-one-containers{
        height: 100%;
        .talk-list-box{
            height: 100%;
            .someOneMsg{
                width: 1080px;
                height: calc(100% - 154px);
                overflow: auto;
            }
        }
        .talk-page{
            height: 100%;
            .talk-page-title{
                width: 1080px;
                height: 154px;
                border-bottom: $line-default;
                box-sizing: border-box;;
                font-size: $text-normal-size;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding:$live-room-padding;
                .talk-back-left{
                    display: flex;
                    height: 154px;
                    .img-box{
                        width: 100px;
                        height: 154px;
                        display: flex;
                        align-items: center;
                        .back-imgs{
                            width: 54px;
                            height: 34px;
                        }
                    }
                    .nickname{
                        display: flex;
                        align-items: center;
                        font-weight: bold;
                    }
                }
                .talk-back-right{
                    display: flex;
                    height: 154px;
                    align-items: center;
                    .followBtn{
                        width: 240px;
                        height: 84px;
                        margin-right: 46px;
                    }
                    .more-box{
                        width: 50px;
                        height: 154px;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        position: relative;
                        .imgsss{
                            width: 36px;
                            display: block;
                        }
                        .position-blocks{
                            width: 420px;
                            height: 468px;
                            background-color: #282828;
                            position: absolute;
                            top: 130px;
                            border-radius: 40px;
                            .unfollow{
                                height: 156px;
                                padding: $live-room-padding;
                                .boxss{
                                    height: 156px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: flex-start;
                                     border-bottom: $line-default;
                                      .position-icon{
                                        width: 60px;
                                        display: block;
                                        margin-right: 20px;
                                    }
                                }
                                .clears{
                                      border-bottom: none;
                                }
                            }
                        }
                    }
                }
            }
            .talk-page-content{
                height: calc(100% - 310px);
                overflow: auto;
             
            }
            .bottom-bars{
                width: 1080px;
                height: 156px;
                box-sizing: border-box;
                position: absolute;
                bottom: 0;
                border-top: $line-default;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: $live-room-padding;
                .mic-icon{
                    width: 48px;
                    display: block;
                }
                .other{
                    width: 60px;
                    display: block;
                }
                .inputs-box{
                    width: 552px;
                    height: 108px;
                    box-sizing: border-box;
                    background-color: #464646;
                    border-radius: 108px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .inputs{
                        width: 420px;
                        height: 80px;
                        font-size: $text-normal-size;
                        line-height: 80px;
                        border: none;
                        background:none;
                    }
                    .inputs::-webkit-input-placeholder{
                        color: $text-gray-normal-color;
                        font-size: $text-normal-size;
                        line-height: 80px;
                    }
                }
            }
        }
    }
</style>