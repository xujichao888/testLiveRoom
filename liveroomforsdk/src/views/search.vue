<template>
  <div class="search-content">
      <!-- 搜索框 -->
      <div class="search-row">
        <div class="back-box" @click="backToRoom">
            <img class="back-img" src="@/assets/icons/back-black.png">
        </div>
        <inputForSearch @bindingChildVal="setInputVal" @confirm="confirmSearch"/>
        <div class="search-btn" @click="confirmSearch">
            <img class="search-icon" src="@/assets/icons/search_white.png">
        </div>
      </div>
      <!-- 搜索后分类 -->
      <div class="type-bar">
          <div class="btn" v-for="(item,index) in arr" :key="index" @click="changeSearchRoom(index)">
              <pub-btn :text="item.name" :num="item.num" :isActive="current==index" />
          </div>
      </div>
      <!-- 搜索结果  btnType="2" :isShowIcon="false"-->
      <div class="search-after-content" v-if="current==0">
          <grayList leftTtile="Friend"/>
          <personList :avatar="testAvatar" :isShowFollow="true" :isFollow="follow1" @change="changeFollow"  :isShowIcon="true"/> 
      </div>
      <div class="search-after-content" v-if="current==1">
          <grayList leftTtile="Follow"/>
          <roomMessageList @change="changeRoomFollow" :isFollow="follow2" :avatar="testAvatar"/>
      </div>
      <pub-toast ref="toast"/>
  </div>
</template>

<script>
import pubToast from '@/components/publicCompo/pubToast';
import grayList from '@/components/publicCompo/grayList';
import inputForSearch from '@/components/searchCompo/inputForSearch';
import pubBtn from '@/components/publicCompo/pubBtn';
import personList from '@/components/publicCompo/personList';
import roomMessageList from '@/components/publicCompo/roomMessageList'
export default {
    components:{
        inputForSearch,
        pubToast,
        pubBtn,
        grayList,
        personList,
        roomMessageList
    },
    data(){
        return{
            inputVal:'',
            toast:false,
            arr:[
                {name:'People',num:0},
                {name:'Room',num:0}
            ],
            current:0,
            testAvatar:require('@/assets/icons/avatar.jpg'),
            testAvatar2:require('@/assets/icons/testavatar.png'),
            follow1:false,
            follow2:false
        }
    },
    methods:{
        backToRoom(){
            this.$router.push({name:'Home'})
        },
        setInputVal(str){
            this.inputVal = str
        },
        confirmSearch(){
            if(this.inputVal.length == 0){
                this.$refs.toast.show('Search content cannot be empty')
            }
           
        },
        changeSearchRoom(idx){
            this.current = idx
        },
        changeFollow(bool){
            let {follow} = bool
            this.follow1 = follow
        },
        changeRoomFollow(bool){
            console.log(bool)
            this.follow2 = bool
        }
    }
}
</script>

<style lang="scss" scoped>
    .search-content{
        width: 1080px;
        height: 100vh;
        font-size: $text-normal-size;
        color: $text-black-normal-color;
        .search-row{
            height: 158px;
            padding:  $live-room-padding;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .back-box{
                width: 54px;
                height: 100px;
                display: flex;
                align-items: center;
                .back-img{
                    width: 54px;
                }
            }
            .search-btn{
                width: 120px;
                height: 108px;
                background: $popup-btn-gradual-changes;
                border-radius: 108px;
                display: flex;
                align-items: center;
                justify-content: center;
                .search-icon{
                    width: 60px;
                    display: block;
                }
            }
        }
        .type-bar{
            margin-top: 72px;
            margin-bottom: 50px;
            padding: $live-room-padding;
            height: 84px;
            display: flex;
            .btn{
                width: 274px;
                height: 84px;
                margin-right: 18px;
            }
        }
    }
</style>