import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lastNum:-1, //上一次在线列表点击的下标
    onlineList:[ //在线列表
      {
        id:'01',
        nickname:'MichaelFork',
        sex:'1',
        rule:'marster',
        micState:false,
        positionIsShow:false
      },
      {
        id:'02',
        nickname:'Scarlett',
        sex:'1',
        rule:'admin',
        micState:true,
        positionIsShow:false
      },
      {
        id:'03',
        nickname:'Scarlett',
        sex:'1',
        rule:'99',
        micState:true,
        positionIsShow:false
      },
      {
        id:'04',
        nickname:'TalkTalk',
        sex:'1',
        rule:'78',
        micState:true,
        positionIsShow:false
      },
       {
        id:'05',
        nickname:'TalkTalk',
        sex:'1',
        rule:'1',
        micState:true,
        positionIsShow:false
      },
      {
        id:'06',
        nickname:'TalkTalk',
        sex:'1',
        rule:'1',
        micState:true,
        positionIsShow:false
      },
      {
        id:'07',
        nickname:'TalkTalk',
        sex:'1',
        rule:'1',
        micState:true,
        positionIsShow:false
      },
      {
        id:'08',
        nickname:'TalkTalk',
        sex:'1',
        rule:'1',
        micState:true,
        positionIsShow:false
      },
    ],
    channelTalk:[ //群聊渲染列表
      {
        id:'001',
        nickname:'pranda',
        title:'title1',
        content:'Hello,just give it the try!'
      },
      {
        id:'002',
        nickname:'pranda',
        title:'title1',
        content:'Hello,just give it the try!'
      },
      {
        id:'003',
        nickname:'pranda',
        title:'title1',
        content:'Hello,just give it the try!'
      },
      {
        id:'004',
        nickname:'pranda',
        title:'title1',
        content:'Hello,just give it the try!'
      },
      
    ],
    talkOneList:[ //聊天列表(含有未读消息)
      {
        nickname:'Nachs',
        avartar:require('@/assets/icons/testavatar.png'),
        lastOneMsg:'step into my office!',
        time:new Date().getTime(),
        notReadNum:100,
      },
      {
        nickname:'Jackey',
        avartar:require('@/assets/icons/testavatar.png'),
        lastOneMsg:'step into my office!',
        time:new Date().getTime(),
        notReadNum:1,
      },
      {
        nickname:'Jackey',
        avartar:require('@/assets/icons/testavatar.png'),
        lastOneMsg:'step into my office!',
        time:new Date().getTime(),
        notReadNum:1,
      },
      {
        nickname:'Jackey',
        avartar:require('@/assets/icons/testavatar.png'),
        lastOneMsg:'step into my office!',
        time:new Date().getTime(),
        notReadNum:1,
      },
      {
        nickname:'Jackey',
        avartar:require('@/assets/icons/testavatar.png'),
        lastOneMsg:'step into my office!',
        time:new Date().getTime(),
        notReadNum:1,
      },
      {
        nickname:'Jackey',
        avartar:require('@/assets/icons/testavatar.png'),
        lastOneMsg:'step into my office!',
        time:new Date().getTime(),
        notReadNum:1,
      },
      {
        nickname:'Jackey',
        avartar:require('@/assets/icons/testavatar.png'),
        lastOneMsg:'step into my office!',
        time:new Date().getTime(),
        notReadNum:1,
      },
      {
        nickname:'Jackey',
        avartar:require('@/assets/icons/testavatar.png'),
        lastOneMsg:'step into my office!',
        time:new Date().getTime(),
        notReadNum:1,
      },
      {
        nickname:'Jackey',
        avartar:require('@/assets/icons/testavatar.png'),
        lastOneMsg:'step into my office!',
        time:new Date().getTime(),
        notReadNum:1,
      },
      {
        nickname:'Jackey',
        avartar:require('@/assets/icons/testavatar.png'),
        lastOneMsg:'step into my office!',
        time:new Date().getTime(),
        notReadNum:1,
      },
    ]
  },
  mutations,
  actions: {
  }
})
