<template>
    <div class="pub-input">
       <backTitle :names="titleName" @back="backToRoom"/>
       <div class="input-box">
           <div class="boxss">
               <input class="inputs" type="text" :placeholder="place" v-model="val">
           </div>
       </div>
       <div class="btn-box">
           <div class="btn" :class="{btnActive:!this.val==''}">Done</div>
       </div>
    </div>
</template>

<script>
import backTitle from '@/components/publicCompo/backTitle'
export default {
    components:{
        backTitle
    },
    data(){
        return{
            val:''
        }
    },
    props:{
        titleName:String,
        place:String
    },
    methods:{
       backToRoom(){
           this.$emit('back')
       }
    }
}
</script>

<style lang="scss" scoped>
    .pub-input{
        .input-box{
            height: 150px;
            margin-top: 100px;
            box-sizing: border-box;
            padding: $live-room-padding;
            .boxss{
                width: 100%;
                border-bottom: $line-default-white;
                height: 150px;
                display: flex;
                align-items: center;          
                .inputs{
                    display: block;
                    width: 100%;
                    height: 108px;
                    box-sizing: border-box;
                    border: none;
                    background: none;
                    font-size: $text-normal-size;
                    color: $text-black-normal-color;

                }
                .inputs::-webkit-input-placeholder{
                    color: $text-gray-normal-color;
                    font-size: $text-normal-size;
                    line-height: 108px;
                }
            }

        }
        .btn-box{
            width: 1080px;
            height: 144px;
            margin-top: 88px;
            display: flex;
            justify-content: center;
            .btn{
                width: 480px;
                height: 100%;
                border-radius: 200px;
                background: $popup-btn-gradual-changes;
                color: #fff;
                font-size: $text-normal-size;
                font-weight: bold;
                line-height: 144px;
                opacity: 0.5;
            }
            .btnActive{
                opacity: 1;
            }
        }
    }
</style>