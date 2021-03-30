<template>
  <div class="person-list">
      <div class="person-left">
          <img class="imgs" :src="avatar">
         
      </div>
      <div class="boxx">
         <div class="person-message">
              <div class="name-row">
                  <div class="nickname">Jack</div>
                  <sexCompo/>
              </div>
              <div class="id">
                  ID:110606
              </div>
          </div>
            <div class="btn-right" v-if="isShowFollow">
                <follow-btn :hasBeenFollow="isFollow" @click.native="change" :types="btnType" :isShowIcon="isShowIcon"/>
            </div>
            <div class="btn-right-radio" v-if="!isShowFollow" @click="changeRadioState">
                <img  v-if="!radiosIsSelect" class="radios" src="@/assets/icons/circle_blur.png">
                <img v-if="radiosIsSelect" class="radios" src="@/assets/icons/circle_focus.png">
            </div>
    </div>

  </div>
</template>

<script>
import sexCompo from '@/components/publicCompo/sexCompo';
import followBtn from '@/components/publicCompo/followBtn'
export default {
    props:{
        avatar:String,
        nickname:String,
        sex:String,
        userId:String,
        isShowFollow:Boolean,
        isFollow:Boolean,
        btnType:String,
        isShowIcon:Boolean,
        idx:Number,
        radiosIsSelect:Boolean
    },
    components:{
        sexCompo,
        followBtn,
    },
    methods:{
        change(){
            this.$emit('change',{follow:!this.isFollow,idx:this.idx})
        },
        changeRadioState(){
            this.$emit('changeRadioState',this.idx)
        }
    }
}
</script>

<style lang="scss" scoped>
    .person-list{
        height: 214px;
        padding: $live-room-padding;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: $text-normal-size;
        .person-left{
            display: flex;
            align-items: center;
            .imgs{
                width: 144px;
                height: 144px;
                border-radius: 144px;
                display: block;
                margin-right: 22px;
            }
   
        }
        .boxx{
            width: 900px;
            height: 214px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: $line-default-white;
            .person-message{
                .name-row{
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                    .nickname{
                        margin-right: 12px;
                    }
                }
                .id{
                    color: $text-gray-normal-color;
                }
            }
            .btn-right{
                width: 236px;
                height: 84px;
            }
            .btn-right-radio{
                width: 60px;
                height: 60px;
                .radios{
                    display: block;
                    width: 60px;
                }
            } 
        }
              
    }
</style>