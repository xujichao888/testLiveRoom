<template>
  <div class="live-container" :style="{height:containerHeight+'px'}" ref="liveContainer">
      <!-- 最上方第一排的内容 -->
      <top-row @showOnline="showOnline" @back="backToIndex"/>
      <!-- 房主喇叭 -->
      <div class="master-row">
          <div class="public-horn">
             <img src="@/assets/icons/icon_gonggao.png">
          </div>
          <seatCompo  :renderJson="filterMaster"/>
          <div class="sort-btn" @click="gotoSort">
              <div class="sort-btn-left"> 
                 <img class="music" src="@/assets/icons/icon_yinyue.png">
                <div>
                  Heat {{textCaculation}}
                </div>
              </div>
              <img class="right-icon" src="@/assets/icons/btn_yjiantou.png">
          </div>
      </div>
      <!-- 测试动画 -->
      <!-- <div class="wocaonida" ref="wocaonida" @click="handldTest"></div> -->
      <!-- 座位列表 -->
      <div class="seat-content">
          <seatCompo v-for="(item,key,index) in this.filterOtherSeat" :key="item.id" :renderJson="item" :idx="index" @click.native="()=>{userMsg=true}"/>
      </div>
      <!-- 群聊列表 -->
      <div class="channel-talk-content" @scroll="testScroll" ref="channelbox" v-if="channelTalkIsShow">
         <div>
           <channelTalkBar v-for="(item) in channelTalk" :key="item.id" :renderJson="item"/>
         </div>
      </div>
      <!-- 底部条 -->
      <div class="bottom-bar">
          <div class="bottom-bar-mic-box" @click="toggleMicState">
             <img class="bottom-bar-mic-turnon" src="@/assets/icons/icon_maikefeng.png" v-if="micState">
             <img class="bottom-bar-mic-turnon" src="@/assets/icons/icon_mic_off.png" v-else>
          </div>
          <div class="channel-talk-input-box">
             <input class="inputs" type="text" v-model="channelInputBindValue" placeholder="Say Something...." @keyup="sendVal" @focus="focusBottomInput">
          </div>
          <img class="gitf-icon" src="@/assets/icons/icon_liwu.png" @click="showGiftPop">
          <img class="letter-icon" src="@/assets/icons/icon_xinfeng.png" @click="handleTalkHandle" >
          <img class="other-icon" src="@/assets/icons/icon_qita.png" @click="showMorePopup" >
      </div>
      <!-- 表情语音图片软键盘弹出的高度 -->
      <div class="hide-list" :style="{height:( keybroadHeight*-1)+'px',transform:`translateY(${keybroadHeight*-1}px)`}" >
          <div class="send-sound" v-show="moveType == 'mic'">
              <div class="rubbish-box" v-show="keybroadHeight!=0">
                <div class="rubbish-title" :class="{margins:rubbishcircleA}">{{rubbishTitles}}</div>
                <img src="@/assets/icons/right_way.png" class="right_way">
                <div class="rubbish-circle" :class="{rubbishcircleA:rubbishcircleA}">
                  <img src="@/assets/icons/rubbish.png" class="rubbish">
                </div>
              </div>
              <div v-show="keybroadHeight!=0" class="send-title">{{soundTitle}}</div>
              <div 
                  v-show="keybroadHeight!=0" 
                  class="send-btn" 
                  :class="{activeBtn:activeBtn}"
                  v-on:touchstart="touchS" 
                  v-on:touchmove="bodyTouchMove" 
                  v-on:touchend="btnTouchEnd"
                >
                <img src="@/assets/icons/mic_full.png" class="mic-full">
              </div>
          </div>
          <div class="face-contents" v-show="moveType == 'face'">
              <div v-for="(item,index) in emojiArr" :key="index" :class="item.className" class="faceList">
              </div>
          </div>
      </div>
       <!-- 聊天列表 -->
       <van-popup v-model="talkOnePopup" position="bottom" duration="0.1" :round="true" @close="resetPageState">
            <div class="talkOneList" :style="{height:(520+keybroadHeight)+'px'}">
                  <talkOneContent  
                    @changePageForTalkOne="changePageForTalkOne"
                    @changeSystemPage="changeSystemPage" 
                    @startDownKeybroad="startDownKeybroad"
                    @talkInputFocus="talkInputFocus"
                    :pageIsShow="pageisShow" 
                    :systemPageIsShow="systemPageIsShow"
                    />
            </div>
        </van-popup>
        <!-- 聊天全屏弹层 -->
        <van-popup v-model="talkSomePages" position="left" duration="0.1" :round="true" @close="resetPageState">
              <div class="talk-page" :style="{height:`${containerHeight}px`}" @click="startDownKeybroad">
                  <div class="talk-page-title" ref="talkPageTitles" >
                      <div class="talk-back-left">
                          <div class="img-box"  @click="()=>{talkSomePages=false}" >
                              <img src="@/assets/icons/btn_fanhui.png" class="back-imgs">
                          </div>
                          <div class="nickname">
                              jackey
                          </div>
                      </div>
                      <div class="talk-back-right">
                          <div class="followBtn">
                              <followBtn/>
                          </div>
                          <div class="more-box">
                              <img src="@/assets/icons/more.png" class="imgsss">
                              <div class="position-blocks">
                                  <div class="unfollow">
                                      <div class="boxss">
                                          <img src="@/assets/icons/removes.png" class="position-icon">
                                          <div class="title">Unfollow</div>
                                      </div>
                                  </div>
                                  <div class="unfollow">
                                      <div class="boxss">
                                          <img src="@/assets/icons/removes.png" class="position-icon">
                                          <div class="title">Block</div>
                                      </div>
                                  </div>
                                  <div class="unfollow">
                                      <div class="boxss clears">
                                          <img src="@/assets/icons/removes.png" class="position-icon">
                                          <div class="title">Report</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="talk-page-content">
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                      <div>content</div>
                  </div>
                  <div class="bottom-bars">
                      <img src="@/assets/icons/icon_maikefeng.png" class="mic-icon" @click.stop="stopDownKeybroad('mic')">
                      <div class="inputs-box"  @click.stop="()=>{}">
                          <div  contenteditable="true"  class="inputs" placeholder="Type a message..." @focus="talkInputFocus"></div>
                      </div>
                      <img src="@/assets/icons/face-img.png" class="mic-icon other" @click.stop="stopDownKeybroad('face')">
                      <img src="@/assets/icons/send-img.png" class="mic-icon other" @click.stop="stopDownKeybroad('img')">
                      <img src="@/assets/icons/gift-line.png" class="mic-icon other">
                  </div>
              </div>
        </van-popup>
      <!-- 在线人数弹出层 -->
      <van-popup v-model="onlinePopupIsShow" position="bottom" duration="0.1" :round="true" @close="resetStateForOnline">
          <div class="online-default-box">
              <popupTitle titles="Members" personNum="168"/>
              <div class="online-user-list-box" @scroll="controlHideControlPopup">
                <online-user-list v-for="(item,index) in onlineList" :key="item.id" :renderJson="item" :idx="index" @getMomentScroll="getMomentScroll"/>
              </div>
          </div>
      </van-popup>
      <!-- 三条杠 -->
      <van-popup v-model="morePopupIsShow" position="bottom" duration="0.1" :round="true">
          <div class="more-popup-box">
              <circlMoreBtn 
                v-for="(item,index) in moreRenderArr" 
                :key="index" 
                :images="item.images" 
                :text="item.text"
                :closeImagge="item.closeImagge"
                :hasToggle="item.hasToggle"
                @click.native="handleMorePopupclick(index)"
              />
          </div>
      </van-popup>
      <!-- 音效Sound弹出层 -->
      <van-popup v-model="soundPopupIsShow" position="bottom" duration="0.1" :round="true">
        <div class="sound-content">
            <popupTitle titles="Sound"/>
            <div class="sound-title">
                Hold to Button listen to the sound
            </div>
            <div class="sound-btn-box">
               <soundBtn v-for="(item,index) in soundBtnArr" :key="index" :text="item"/>
            </div>
        </div>
      </van-popup>
      <!-- 分享弹出 -->
      <van-popup v-model="sharePop" position="bottom" duration="0.1" :round="true">
        <div class="share-content">
            <shareBtn texts="Whatsapp"/>
            <shareBtn texts="Instagram" type="2"/>
            <shareBtn texts="Facebook" type="3"/>
        </div>
      </van-popup>
      <!-- 用户信息弹出 -->
       <van-popup v-model="userMsg" position="bottom" duration="0.1" :round="true">
         <div class="user-msg">
            <userMsgContent :renderJson="userMsgRenderJson" @popupGift="popupGift"/>
         </div>
       </van-popup>
       <!-- 礼物墙 -->
         <van-popup v-model="giftwallHandlle" position="bottom" duration="0.1" :round="true">
            <div class="gift-walls">
                <giftWall @closeWall="popupGift"/>
            </div>
        </van-popup>
     
 
      <!-- 礼物 -->
      <van-popup v-model="giftpopup" position="bottom" duration="0.1" :round="true">
        <div class="gift-content-box">
           <gift-title-bar @change="giftTabsChange"/>
            <van-swipe class="my-swipe" duration="200" @change="onChange" ref="swipe" :show-indicators="false">
                <van-swipe-item v-for="(item,index) in cutGiftArr" :key="index">
                    <div class="box">
                        <giftBlock 
                          v-for="(i,idx) in item" 
                          :key="idx" 
                          :idx="idx" 
                          :row="index"
                          :renderJson="i"
                          @select="selectGift"
                        />

                    </div>

                </van-swipe-item>
            </van-swipe>
            <div class="circle-boxss">
               <div class="circle" v-for="(item,index) in cutGiftArr" :key="index" :class="{clearmargin:index==cutGiftArr.length-1,active:index==giftCurrent}"></div>
            </div>
            <div class="bottom-bar-bar">
              <div class="left">
                <img class="gold-icon" src="@/assets/icons/gold_money.png">
                <div class="has-money">25556</div>
                <img class="gold-icon" src="@/assets/icons/circle_pluss.png">
              </div>
              <div class="right">
                  <div class="blocks">
                      1
                  </div>
                  <div class="sendBtn" @click="sendTestSvga">
                      <pubBtn text="Send" :isActive="true" />
                  </div>

              </div>
            </div>
        </div>
      </van-popup>
  </div>
</template>
<script>

import Binding from "weex-bindingx";
import biaoqing from '@/assets/js/biaoqing'
import topRow from '@/components/liveRoomCompo/topRow/topRow';
import seatCompo from '@/components/liveRoomCompo/seatCompo';
import userMsgContent from '@/components/liveRoomCompo/userMsgContent';
import channelTalkBar from '@/components/liveRoomCompo/channelTalkBar';
import popupTitle from '@/components/liveRoomCompo/popupTitle';
import onlineUserList from '@/components/liveRoomCompo/onlineUserList';
import circlMoreBtn from '@/components/liveRoomCompo/circlMoreBtn';
import soundBtn from '@/components/liveRoomCompo/soundBtn'
import giftTitleBar from '@/components/liveRoomCompo/giftTitleBar';
import giftBlock from '@/components/liveRoomCompo/giftBlock';
import pubBtn from '@/components/publicCompo/pubBtn';
import shareBtn from '@/components/publicCompo/shareBtn'
import giftWall from '@/components/liveRoomCompo/giftWall'
import talkOneContent from '@/components/liveRoomCompo/talkOneContent';
import followBtn from '@/components/publicCompo/followBtn';
import { mapState,mapMutations } from 'vuex'
export default {
  components:{
    topRow,
    channelTalkBar,
    seatCompo,
    popupTitle,
    onlineUserList,
    circlMoreBtn,
    soundBtn,
    giftTitleBar,
    giftBlock,
    pubBtn,
    shareBtn,
    userMsgContent,
    giftWall,
    talkOneContent,
    followBtn
  },
  computed:{
      ...mapState([
       'onlineList',
       'channelTalk'
    ]),
    //格式化数字
    textCaculation(){
      return this.$calculationNum(10000)
    },
    //判断房主是否在线
    filterMaster(){ 
      return JSON.stringify(this.seatArr) == "{}"?{}:this.seatArr[0]
    },
    //过滤出除房主以外的座位
    filterOtherSeat(){
      let obj = {}
      for(let key in this.seatArr){
        if(key!=0){
          obj[key] = this.seatArr[key]
        }
      }
      return obj
    },
    cutGiftArr(){ //计算轮播并补全
      let arr = []
      for(let a=0;a<this.giftArr.length;a+=8){
          arr.push( this.giftArr.slice(a,a+8))
      }
      arr.forEach(item => {
        let length = item.length
        if(item.length<8){
          for(let i=0;i<8-length;i++){
            item.push({})
          }
        }
      });
      console.log(arr)
      return arr
    }
  },
  mounted(){

    let containerWidth = document.documentElement.clientWidth;
    this.containerWidth = containerWidth
    this.exchangePX = 1080 / containerWidth;

    let Lbody = document.getElementsByClassName('body')
    this.containerHeight = document.documentElement.clientHeight
    console.log(this.containerHeight )
    var originalHeight=document.documentElement.clientHeight ||document.body.clientHeight;
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isAndroid){
        this.handleFocusCaculationAndroid(originalHeight)
    }
    if(isiOS){
        console.log('是ios');
    }
    //将表情的数组推入data
    this.emojiArr.push(...biaoqing)
  },
  data(){
    return{
      emojiArr:[],
      exchangePX:0,//像素换算比例
      keybroadCanDown:true,//键盘落下了，页面跟不跟着下落
      containerWidth:0,
      focusName:'', //现在获取焦点的名字,
      talkOnePopup:false, //聊天弹出层
      keybroadHeight:0, //软键盘的高度 用于推页面的计算会随着键盘抬起下落改变
      saveKeybroadHeight:0,//保存软键盘高度
      talkInputIsFocus:false,//根据是否focus判断软键盘是否弹出
      pageisShow:false,//单聊页面是否显示
      systemPageIsShow:false,//系统消息页面
      downKeyBroadNum:0,//点击收起键盘的次数
      //座位的信息 0 为房主
      testAvatar:require('@/assets/icons/avatar.jpg'),
      seatArr:{
        "0":{
          id:'01',
          nickname:'MichaelJackson',
          avatar:'@/assets/icons/avatar.jpg',
          money:10000,
          hasVoice:false,
          border:'border1',
          isSpeak:true,
        },
        "1":{
          id:'02',
          nickname:'jack',
          avatar:'@/assets/icons/avatar.jpg',
          money:10000,
          hasVoice:false,
          border:'',
          isSpeak:true
        },
        "2":{},
        "4":{},
        "8":{},
        "16":{},
        "32":{},
        "64":{},
        "128":{},
      },
    
      //在线列表的模拟数据
      channelInputBindValue:'',//群聊双向绑定
      channelTalkIsShow:true, //群聊列表是否显示
      channelCanBottom:true,//当添加聊天时是否直接
      containerHeight:0, //计算屏幕的高度
      micState:true,//麦克风按钮
      onlinePopupIsShow:false,//在线人数弹出层
      onlineSroll:0,//点击的一瞬间,滚动条的值
      scroll:0,//监听滚动条的值
      morePopupIsShow:false,//更多弹出层
      sharePop:false, //分享弹出层
      userMsg:false,//用户信息弹出层
      talkSomePages:false,//具体聊天页面的弹层
      giftwallHandlle:false,//礼物墙弹出层
      userMsgRenderJson:{ //用户信息渲染数据
        avatar:require('@/assets/icons/avatar.jpg'),
        nickname:'Jackey',
        id:'103210',
        sign:'I wanna go back,back to 1999,I wanna go back,back to 1999,I wanna go back,back to 1999'
      },
      moreRenderArr:[ //更多弹出层图标渲染数据
        {
          images:require('@/assets/icons/voice.png'),
          closeImagge:require('@/assets/icons/closeVoice.png'),
          hasToggle:true,
          text:'Voice'
        },
        {
          images:require('@/assets/icons/sound.png'),
          text:'Sound',
           hasToggle:true,

        },
        {
          images:require('@/assets/icons/setting.png'),
          text:'Room-Setting',
           hasToggle:true,
        },
        {
          images:require('@/assets/icons/roomlog.png'),
          text:'Room-Log',
           hasToggle:true,
        },
        {
          images:require('@/assets/icons/closeScreen.png'),
          text:'Close the-Public Screen',
           hasToggle:true,
        },
        {
          images:require('@/assets/icons/invite.png'),
          text:'Invite-Friend',
           hasToggle:true,
        },
        {
         images:require('@/assets/icons/reward.png'),
          text:'Reward-statistiics',
           hasToggle:true,
        },
        {
          images:require('@/assets/icons/share.png'),
          text:'Share',
           hasToggle:true,
        },
      ],
      soundBtnArr:[ //音效按钮文字
        'sound 001',
        'sound 002',
        'sound 003',
        'sound 004',
        'sound 005',
        'sound 006',
      ],
      soundPopupIsShow:false,//音效弹出层是否弹出
      giftpopup:false,//礼物弹出层
      giftArr:[
        {img:require("@/assets/icons/gift1.png"),giftName:'Rocket',price:100},
        {img:require("@/assets/icons/gift1.png"),giftName:'Rocket',price:100},
        {img:require("@/assets/icons/gift1.png"),giftName:'Rocket',price:100},
        {img:require("@/assets/icons/gift1.png"),giftName:'Rocket',price:100},
        {img:require("@/assets/icons/gift1.png"),giftName:'Rocket',price:100},
        {img:require("@/assets/icons/gift1.png"),giftName:'Rocket',price:100},
        {img:require("@/assets/icons/gift1.png"),giftName:'Rocket',price:100},
        {img:require("@/assets/icons/gift1.png"),giftName:'Rocket',price:100},
        {img:require("@/assets/icons/gift1.png"),giftName:'Rocket',price:100},
        {img:require("@/assets/icons/gift1.png"),giftName:'Rocket',price:100},

      ],
      giftCurrent:0,
      distanceX:0, //滑动的X轴方向
      distanceY:0, //滑动的Y轴方向
      soundTitle:'Hide to Talk',
      activeBtn:false,//发送声音的按钮是否高亮,
      soundTimer:null,//发送音频定时器
      rubbishTitles:'Right Side Delete',//垃圾箱提示
      rubbishcircleA:false,//垃圾箱高亮
      micsClickNum:0,
      moveType:'',//保存点击了哪个图标，控制聊天内容的显示，和是否推页面
    }
  },
  methods:{
    ...mapMutations(['SET_ONLINE_CONTROL_ALL_HIDE']),
    sendVal(event){ //发送群聊消息
      let {keyCode} = event
      if(keyCode==13){
        this.channelInputBindValue=""
      }
    },
    testS(e){
        console.log(e)
    },
    touchS(e){
      console.log('开始了')
      clearInterval(this.soundTimer)
      this.activeBtn = true;
      let time = 0;
      let  minutes = 0;
      this. soundTitle = '00 : 00'
      this.soundTimer = setInterval(()=>{
          time++;
          if(time>=60){
            time = 0;
            minutes++
          }
          this.soundTitle = (minutes<10?`0${minutes}`:`${minutes}`)+' : '+(time<10?`0${time}`:`${time}`)
      },1000)
    },
    bodyTouchMove: function(event) {
      console.log(222);

        // 只监听单指划动，多指划动不作响应
        if (event.targetTouches.length > 1) {
          return;
        }
        // console.log(event.targetTouches[0].pageX);
        // 实时计算distance
        this.distanceX = event.targetTouches[0].pageX
        this.distanceY = event.targetTouches[0].pageY 
        //console.log(this.distanceX,this.distanceY)
        // 根据distance在页面上做出反馈。这里演示通过返回按钮的背景变化作出反馈
        let offsetX =  this.distanceX * this.exchangePX
        if(offsetX>830){
          this.rubbishcircleA = true;
          this.rubbishTitles = 'Release and Cancel sending'
        }else{
           this.rubbishTitles = 'Right Side Delete'
          this.rubbishcircleA = false
        }
    },
    btnTouchEnd(){
       clearInterval(this.soundTimer)
        this. soundTitle = 'Hide to Talk'
          this.rubbishTitles = 'Right Side Delete'
        this.activeBtn = false;
         this.rubbishcircleA = false
    },
    handldTest(){
             this.BindingxAnimate(this.$refs.wocaonida, 't>200', [
                {
                    element: this.$refs.wocaonida,
                    property: 'transform.translateY',
                    expression:`0 + (0+1200)*(min(t,200)/200)`
               }
          ])
    },
    stopDownKeybroad(type){ //键盘是否落下
        let bool = false
        console.log('new',type)
        console.log('old',this.moveType)
        if(this.moveType==''){ //判断是切换了图标还是一个图标点了两次
          this.moveType = type;
        }else{
          if(this.moveType == type){
              bool = true;
              this.moveType = ''
          }else{
              bool = false
              this.moveType = type
          }
        }
        if(this.talkInputIsFocus){
           this.keybroadCanDown = false; 
           this.talkInputIsFocus = false
        }else{
            if(this.saveKeybroadHeight == 0){
              this.keybroadHeight = -260;
              this.saveKeybroadHeight = this.keybroadHeight
              this.moveUp();
              this.keybroadCanDown = false
            }else{
              this.keybroadHeight = this.saveKeybroadHeight;
               document.body.style.overflow = 'hidden'
               if(this.micsClickNum==0){
                 if(!bool)return false
                 this.startDownKeybroad()
               }else{
                  this.moveUp()
                  this.keybroadCanDown = false
               }
            }
        }
    },
    talkInputFocus(){
      this.talkInputIsFocus = true;
        this.moveType = ''
    },
    startDownKeybroad(){ //键盘可以落下
      this.downKeyBroadNum++
      this.keybroadCanDown = true; 
      this.talkInputIsFocus = false
      this.keybroadHeight = 0;
      document.body.style.overflow = ''
      if(this.downKeyBroadNum==1){ //只执行一次
        this.moveDown()
      }
      
    },
    changePageForTalkOne(){ //单聊页面和聊天页面仙音
        this.pageisShow = !this.pageisShow
        this.systemPageIsShow = false;
        this.talkSomePages = true;
        this.talkOnePopup = false
    },
    changeSystemPage(){
        this.systemPageIsShow = !this.systemPageIsShow ;
        this.pageisShow = false
    },
    resetPageState(){
      let timer = setTimeout(()=>{
           this.pageisShow = false
           this.systemPageIsShow = false
           clearInterval(timer)
      },300)
    },
    handleFocusCaculationAndroid(originalHeight){ //利用transform 模拟键盘弹出
         window.onresize=()=>{
          //键盘弹起与隐藏都会引起窗口的高度发生变化
            var resizeHeight=document.documentElement.clientHeight || document.body.clientHeight;
            let height = (this.saveKeybroadHeight*-1) * (750 / this.containerWidth);
              if(resizeHeight-0<originalHeight-0){
              //当软键盘弹起，在此处操作
                this.keybroadHeight =resizeHeight - this.containerHeight;

                this.saveKeybroadHeight =  this.keybroadHeight
                document.body.style.overflow = 'hidden'
                if(!this.keybroadCanDown){return false}
                this.moveUp()
              }else{
              //当软键盘收起，在此处操作
                //alert(resizeHeight)
                //this.testwocao = true
                if(!this.keybroadCanDown){return false}
                this.keybroadHeight = 0;
                document.body.style.overflow = '';
          
  
                   this.moveDown()
               
              }
      }
    },
    async moveUp(){
            this.downKeyBroadNum = 0;
             this.micsClickNum = 0
          //   console.log(this.containerWidth)
            let height = (this.keybroadHeight*-1) * (750 / this.containerWidth);
          //   console.log(height)
          //   await this.BindingxAnimate(this.$refs.liveContainer, 't>100', [
          //       {
          //           element: this.$refs.liveContainer,
          //           property: 'transform.translateY',
          //           expression:`0 + (0-${height})*(min(t,100)/100)`
          //      }
          // ])
              if(this.$refs.talkPageTitles!=undefined){
                    Binding.bind({
                      eventType: 'timing', //动画的模式 timing 表示是时间动画
                      exitExpression: 't>200', //动画的时间
                      props: [
                        {
                            element: this.$refs.liveContainer,
                            property: 'transform.translateY',
                            expression:`0 + (0-${height})*(min(t,200)/200)`
                        },
                          {
                            element: this.$refs.talkPageTitles,
                            property: 'transform.translateY',
                            expression:`0 + (0+${height})*(min(t,200)/200)`
                        }
                      ]
                    }, function(res) {
                      let {
                        state
                      } = res;
                      if (state == 'exit') {
                        console.log('done')
                      }
                    })
                }else{
                     this.BindingxAnimate(this.$refs.liveContainer, 't>200', [
                          {
                              element: this.$refs.liveContainer,
                              property: 'transform.translateY',
                              expression:`0 + (0-${height})*(min(t,200)/200)`
                         }
                    ])
                } 
    },
    moveDown(){
            this.micsClickNum = 1
            let height = (this.saveKeybroadHeight*-1) * (750 / this.containerWidth);
          //   console.log(height)
       
                if(this.$refs.talkPageTitles!=undefined){
                      Binding.bind({
                      eventType: 'timing', //动画的模式 timing 表示是时间动画
                      exitExpression: 't>200', //动画的时间
                      props: [
                        {
                            element: this.$refs.liveContainer,
                            property: 'transform.translateY',
                            expression:`-${height} + (${height})*(min(t,200)/200)`
                        },
                          {
                            element: this.$refs.talkPageTitles,
                            property: 'transform.translateY',
                            expression:`${height} + (-${height})*(min(t,200)/200)`
                        }
                      ]
                    }, function(res) {
                      let {
                        state
                      } = res;
                      if (state == 'exit') {
                        console.log('done')
                      }
                    })
                }else{
                         this.BindingxAnimate(this.$refs.liveContainer, 't>200', [
                            {
                                element: this.$refs.liveContainer,
                                property: 'transform.translateY',
                                expression:`-${height} + (${height})*(min(t,200)/200)`
                           }
                      ])
                }
        
    },
    BindingxAnimate(token, animateTimeStr, propsArr) { // valueName,expression
				let main_btn = token;
				return new Promise((resolve, reject) => {
					Binding.bind({
						eventType: 'timing', //动画的模式 timing 表示是时间动画
						exitExpression: animateTimeStr, //动画的时间
						props: propsArr
					}, function(res) {
						let {
							state
						} = res;
						if (state == 'exit') {
							resolve('done')
						}
					})
				})
		},
    handleTalkHandle(){
      this.talkOnePopup = true
    },
    focusBottomInput(){
       this.focusName = 'bottomInput'
    },
    talkOneFocus(){
      this.focusName = 'talkOneInput'
    },
    gotoSort(){
      this.$router.push({name:'sort'})
    },
    onChange(idx){
      this.giftCurrent = idx
    },
    selectGift(json){
      console.log(json)
    },
    testScroll(event){ //获得群聊的top值，来算出用户是否上滑
      let {clientHeight,scrollHeight,scrollTop} = event.target;
      this.channelCanBottom = scrollTop+10>scrollHeight-clientHeight;
    },
    popupGift(){
      
      this.giftwallHandlle = !this.giftwallHandlle
    },
    // testadd(){ //测试添加
    //   this.channelTalk.push(  {
    //       id:new Date().getTime(),
    //       nickname:'pranda',
    //       title:'title1',
    //       content:'Hello,just give it the try!'
    //     })
    //   this.$nextTick(()=>{
    //      let {clientHeight,scrollHeight} = this.$refs.channelbox
    //      if(this.channelCanBottom){
    //        this.$refs.channelbox.scrollTop  = scrollHeight - clientHeight
    //      }
    //   })
    // },
    // 在线人数弹出层方法
    toggleMicState(){ //切换麦克风状态，底部bar
      this.micState = !this.micState
    },
    showOnline(){ //开启在线人数弹窗
      this.onlinePopupIsShow = !this.onlinePopupIsShow;
    },
    resetStateForOnline(){//在线人数弹出遮罩关闭回调
      this.SET_ONLINE_CONTROL_ALL_HIDE();
    },
    controlHideControlPopup(event){ //控制滚动时隐藏某个项的控制弹出层
      let {scrollTop} = event.target;
      this.scroll = scrollTop;
      if(scrollTop>this.onlineSroll+20 || scrollTop<this.onlineSroll-20){
        this.SET_ONLINE_CONTROL_ALL_HIDE();
      }
    },
    getMomentScroll(){ //记录点击一瞬间scroll的值
      this.onlineSroll = this.scroll;
    },
    //更多的弹出层
    showMorePopup(){
      this.morePopupIsShow = true
    },
    showGiftPop(){ //礼物弹出层显示
      this.giftpopup = true
    },
    sendTestSvga(){
      console.log(456)
      this.$dsbridge.call('playSvgaAnim', {url:'http://www.biggold.net.cn/kingset.svga', loop:1}, function (ret) {
        console.log(ret);
      });
    },
    handleMorePopupclick(idx){ //点击了更多弹出层里面的图标
      let item = this.moreRenderArr[idx];
      item.hasToggle = !item.hasToggle;
      switch (idx) {
        case 1:
          this.soundPopupIsShow = !this.soundPopupIsShow
          break;
        case 2:
          this.$router.push({name:'roomsetting'})
          break;
        case 3:
          this.$router.push({name:'roomlog'})
          break;
        case 4:
          let booleans = item.text.slice(0,4)=='Open'?true:false;
          this.channelTalkIsShow = booleans;
          item.text = booleans?'Close the-Public Screen':'Open the-Public Screen'
          break;
         case 5:
           this.$router.push({name:'InviteFriends'})
           break
        case 6:
          this.$router.push({name:'roomlog',params: { num: 1 }})
          break;
         case 7:
           this.morePopupIsShow = false;
           this.sharePop = true;
           break;
      }
    },
    giftTabsChange(idx){ //切换tabs
      console.log(idx)
    },
    backToIndex(){ //返回首页
      this.$router.push({name:'Home'})
    }
  }
}
</script>
<style lang="scss" scoped>
    @import url('../assets/styles/emoji_sorites.css');
  .live-container{
    width: 1080px;
    height: 100vh;
    box-sizing: border-box;
    background:linear-gradient(to bottom,$bg-gradual-change-start,$bg-gradual-change-end);
    /deep/ .van-popup {
      background:rgba(60,60,60,1);
      font-size: 60px;
      color: #fff;
	  }
    /deep/ .van-popup--bottom.van-popup--round{
      border-radius: 50px 50px 0 0;
    } 
    .online-default-box{
      height: 65vh;
      .online-user-list-box{
        height: calc(65vh - 154px);
        overflow: auto;
      }
    }
    .wocaonida{
      width: 100px;
      height: 100px;
      background-color: red;
      position: fixed;
      left: 0;
      top: 100px;
      z-index: 989;
    }
    .master-row{
      width: 1080px;
      height: 300px;
      box-sizing: border-box;
      padding: $live-room-padding;
      display: flex;
      justify-content: center;
      position: relative;
      margin-top: 20px;
      .public-horn{
        width: 72px;
        height: 60px;
        margin-top: 40px;
        position: absolute;
        left: 50px;
        background: $ten-percent-black;
        border-radius: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 40px;
          height: 32px;
        }
      }
      .sort-btn{
        width: 280px;
        height: 60px;
        margin-top: 40px;
        position: absolute;
        right: 50px;
        background: $ten-percent-black;
        border-radius: 500px;
        font-size: $text-normal-size;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 18px;
        box-sizing: border-box;
        .sort-btn-left{
          display: flex;
          .music{
            width: 24px;
            height: 33px;
            margin-top: 3px;
            margin-right: 16px;
          }
        }
        .right-icon{
          width: 15px;
          height: 24px;
        }
      }
    }
    .seat-content{
      width: 1080px;
      height: 600px;

      box-sizing: border-box;
      padding: $live-room-padding;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .bottom-bar{
      width: 1080px;
      height: 156px;
      background: $ten-percent-black;
      box-sizing: border-box;
      position: absolute;
      padding: $live-room-padding;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .bottom-bar-mic-box{
        width: 48px;
        height: 60px;
        .bottom-bar-mic-turnon{
          display: block;
          width: 48px;
          height: 60px;
        }
      }
      .channel-talk-input-box{
        width: 516px;
        height: 108px;
        border-radius: 500px;
        background: $ten-percent-white;
        padding: 0 35px;
        .inputs{
          display: block;
          width: 446px;
          height: 108px;
          box-sizing: border-box;
          border: none;
          background: none;
           font-size: $text-normal-size;
            color: #fff;
            

        }
        .inputs::-webkit-input-placeholder{
          color: #fff;
          font-size: $text-normal-size;
          line-height: 108px;
        }
      }
      .gitf-icon{
        width: 60px;
        height: 60px;
      }
      .letter-icon{
        width: 60px;
        height: 54px;
      }
      .other-icon{
        width: 54px;
        height: 48px;
      }

    }
    .hide-list{
          color: #fff;
          position: absolute;
          background-color: #323232;
          z-index: 99;
          width: 1080px;
          bottom: 0;
          left: 0;
          font-size: $text-normal-size;
          .send-sound{
            width: 1080px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            .rubbish-box{
              position: absolute;
              left: 750px;
              width: 280px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              .right_way{
                   position: absolute;
                   width: 66px;
                   display: block;
                   left: -30px;
              }
              .rubbish-title{
                width: 320px;
                position: absolute;
                top: -80px;
                 color: $text-gray-normal-color;
              }
              .margins{
                top: -110px;
              }
              .rubbish-circle{
                width: 120px;
                height: 120px;
                background-color: #3c3c3c;
                border-radius: 120px;
                display: flex;
                align-items: center;
                justify-content: center;
                .rubbish{
                  width: 60px;
                  display: block;
                }
              }
              .rubbishcircleA{
                background:$violet-gradual-changes;
              }
            }
 
            .send-title{
              position: absolute;
              top: 180px;
              color: $text-gray-normal-color;
            }
            .send-btn{
              width: 240px;
              height: 240px;
              border-radius: 240px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #3c3c3c;
              .mic-full{
                width: 72px;
                height: 90px;
                display: block;
              }
            }
            .activeBtn{
              background:$violet-gradual-changes;
            }
          }
          .face-contents{
             width: 100%;
             height: 100%;
             overflow: auto;
             display: flex;
             flex-wrap: wrap;
             align-content: flex-start;
             .faceList{
               
             }
          }
      }
    .talkOneList{
        .inputss{
          position: absolute;
          bottom: 0;
          left: 0;
        }
    }
    .talk-page{
            .talk-page-title{
                width: 1080px;
                height: 154px;
                top: 0;
                left: 0;
                border-bottom: $line-default;
                box-sizing: border-box;;
                font-size: $text-normal-size;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding:$live-room-padding;
                background-color: rgba(60,60,60,1);
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
                min-height: 156px;
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
                        text-align: start;
                        border: none;
                    }
                    [contenteditable]:focus{outline: none;}
                }
            }
        }
      .testBlock{
        width: 1080px;
        height: 600px;
        background-color:red;
        position: absolute;
        z-index: 999;
        bottom: -600px;
        left: 0;
      }
    .channel-talk-content{
      width: 750px;
      height: calc(100% - 1274px);
      padding-left: 50px;
    
      overflow: scroll;
    }
    .more-popup-box{
      padding: $live-room-padding;
      padding-top: 30px;
      padding-bottom: 98px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
    }
    .sound-content{
      padding-bottom: 100px;
      .sound-title{
        color: $text-gray-color;
        font-size: $text-normal-size;
        margin-top: 50px;
        margin-bottom: 96px;
      }
      .sound-btn-box{
        padding: $live-room-padding;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: flex-start;
      }
    }
    .share-content{
      height: 400px;
      padding: $live-room-padding;
      display: flex;
      align-items: center;
    }
    .user-msg{
       height: 1460px;
       box-sizing: border-box;
    }
    .gift-walls{
      height: 1700px;
      box-sizing: border-box;
    }
    .gift-content-box{
      height: 1340px;
      .my-swipe{
        height:900px;
        .box{
          box-sizing: border-box;
          padding: 0 40px;
          padding-top: 16px;
          height: 900px;
          display: flex;
          justify-content: space-between;
          align-content: flex-start;
          flex-wrap: wrap;

        }

      }
      .circle-boxss{
            width: 1080px;
            height: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            .circle{
              width: 15px;
              height: 15px;
              background: $fifteen-percent-white;
              margin-right: 10px;
              border-radius: 15px;
            }
            .clearmargin{
              margin-right: 0;
            }
            .active{
              background: #fff;
            }
      }
      .bottom-bar-bar{
        margin-top: 60px;
        height: 144px;
        padding: 0 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left{
          display: flex;
          align-items: center;
          .gold-icon{
            width: 60px;
            height: 60px;
            display: block;
          }
          .has-money{
            font-size: $text-normal-size;
            color: $avatar-score-first-text;
            margin: 45px;
          }
        }
        .right{
          display: flex;
          align-items: center;
          .sendBtn{
            width: 228px;
            height: 84px;
            margin-left: 22px;
          }
          .blocks{
            width: 144px;
            height: 84px;
            box-sizing: border-box;
            border: $line-default;
            border-radius: 84px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: $text-normal-size;
          }
        }
      }
    }
  }
  
</style>
