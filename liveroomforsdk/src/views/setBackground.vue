<template>
    <div class="set-background">
         <backTitle names="Background" @back="backToRoom"/>
         <div class="positions">
             <div class="boxsss">
                   <pubBtnBorder text="Preview"/>
             </div>
             <div class="boxsss">
                 <pubBtn  :isActive="true" text="Done"/>
             </div>
         </div>
    </div>
</template>

<script>
import backTitle from '@/components/publicCompo/backTitle'
import pubBtn from '@/components/publicCompo/pubBtn';
import pubBtnBorder from '@/components/publicCompo/pubBtnBorder';
export default {
    components:{
        backTitle,
        pubBtn,
        pubBtnBorder
    },
    methods:{
        backToRoom(){
            this.$router.push({path:'roomsetting'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .set-background{
        position: relative;
        width: 1080px;
        height: 100vh;
        overflow: auto;
         font-size: $text-normal-size;
        .positions{
            position: absolute;
            padding: $live-room-padding;
            width: 1080px;
            height: 240px;
            box-sizing: border-box;
            left: 0;
            bottom: 0;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .boxsss{
                width: 480px;
                height: 144px;
            }
            .left{
                background: $popup-btn-gradual-changes;
                border-radius: 300px;
                display: flex;
                align-items: center;
                justify-content: center;
                .center{
                    width: 475px;
                    height: 139px;
                    background-color: #fff;
                     border-radius: 300px;
                }
            }
        }
    }
</style>