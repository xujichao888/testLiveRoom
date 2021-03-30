<template>
    <div class="room-message-list">
        <div class="left">
            <div class="img-box">
                <img class="images" src="@/assets/icons/testavatar.png">
                <div class="circle-music">
                    <img class="imgages" src="@/assets/icons/music.png">
                </div>
            </div>
            <div class='nickname-box'>
                <div class="nickname">There is wine and story and what</div>
                <div class="btn-box">
                    <div class="btn1">Dating</div>
                    <div class="btn2">
                        <div class="box">
                            <img class="imgages" src="@/assets/icons/person_num.png" >
                            <div class="room-num">226</div>
                        </div>
                    </div>
                </div>
                <div class="id">ID:16161616</div>
            </div>
        </div>
      <div class="btn-right" v-if="true">
          <follow-btn :hasBeenFollow="isFollow" @click.native="change"/>
      </div>
    </div>
</template>

<script>
import followBtn from '@/components/publicCompo/followBtn'
export default {
    components:{
        followBtn
    },
    props:{
        isShowFollow:Boolean,
        isFollow:Boolean,
        avatar:String,
        roomName:String,
        tagName:String,
        PersonNum:Number,
        id:Number
    },
    methods:{
        change(){
            console.log()
            this.$emit('change',!this.isFollow)
        }
    }
}
</script>

<style lang="scss" scoped>
    .room-message-list{
        height: 246px;
        padding: $live-room-padding;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: $text-normal-size;
        .left{
            height: 168px;
            width: 682px;
            display: flex;
            .img-box{
                width: 144px;
                height: 144px;
                position: relative;
                .circle-music{
                    width: 48px;
                    height: 48px;
                    background: #aa7dff;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    border-radius: 48px;
                    box-sizing: border-box;
                    border: solid 3px #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .imgages{
                        width: 22px;
                        display: block;
                    }
                }
                .images{
                    width: 144px;
                    height: 144px;
                    border-radius: 20px;
                    display: block;
                }
            }
            .nickname-box{
                margin-left: 22px;
                width: 682px;
                height: 168px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
                .nickname{
                    width: 500px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                .btn-box{
                    font-size: $text-normal-mini-size;
                    display: flex;
                    .btn1{
                        width: 152px;
                        height: 48px;
                        border-radius: 48px;
                        background: #aa7dff;
                        color: #fff;
                        text-align: center;
                        line-height: 48px;
                        margin-right: 12px;
                    }
                    .btn2{
                        width: 128px;
                        height: 48px;
                        border-radius: 48px;
                        background: $mic-state-btn-online;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .box{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: #fff;
                            .imgages{
                                width: 20px;
                                display: block;
                                margin-right: 10px;
                            }
                        }

                    }
                }
                .id{
                    color: $text-gray-normal-color;
                }
            }

        }
        .btn-right{
            margin-left: 62px;
            width: 236px;
            height: 84px;
        }
    }
</style>