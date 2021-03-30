<template>
    <div class="user-list-icon" :class="{hasBorders:hasBorders}">
        <div class="avatar-box">
            <img class="avatar" src="@/assets/icons/avatar.jpg">
        </div>
        <div class="user-content" :class="{smallBorder:!hasBorders}">
            <div class="tags-box">
                <div class="user-name" :class="{grayColor:fontColor}">{{renderJson.nickname}}</div>
                <div class="user-tags">
                    <sex-compo/>
                    <level-compo :rule="renderJson.rule" />
                    <micStateForOnline :micState="renderJson.micState"/>
                </div>
            </div>
            <div class="btn-right-radio"  @click="changeRadioState" v-if="radioIsShow">
                <img  v-if="!renderJson.radiosIsSelect" class="radios" src="@/assets/icons/circle_blur.png">
                <img v-if="renderJson.radiosIsSelect" class="radios" src="@/assets/icons/circle_focus.png">
            </div>
        </div>
    </div>
</template>

<script>
import sexCompo from '@/components/publicCompo/sexCompo'
import levelCompo from '@/components/publicCompo/levelCompo'
import micStateForOnline from '@/components/publicCompo/micStateForOnline'
export default {
    components:{
       sexCompo,
       levelCompo,
       micStateForOnline,
    },
    props:{
        renderJson:Object,
        fontColor:Boolean,
        idx:Number,
        hasBorders:Boolean,
        radioIsShow:{
            type:Boolean,
            default:true
        }
    },
    methods:{
        changeRadioState(){
              this.$emit('changeRadioState',this.idx)
        }
    }
}
</script>

<style lang="scss" scoped>
    .user-list-icon{
         padding: $live-room-padding;
        height: 210px;
        position: relative;
        display: flex;
        .avatar-box{
           width: 210px;
           height: 210px;
           display:flex;
           align-items: center;
           justify-content: flex-start;
           .avatar{
               width: 144px;
               height: 144px;
               border-radius: 300px;
           } 
        }
        .user-content{
            width: 870px;
            height: 210px;
            box-sizing:border-box;
           
            display: flex;
            align-items: center;
            justify-content: space-between;
            .tags-box{
                font-size: $text-normal-size;
                color: #fff;
                font-weight: bold;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                .user-tags{
                    display: flex;
                    margin-top: 30px;
                }
                .grayColor{
                    color: $text-black-normal-color;
                }
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
        .smallBorder{
             border-bottom: $line-default-white;
        }
    }
    .hasBorders{
        border-bottom: $line-default-white;
    }
</style>