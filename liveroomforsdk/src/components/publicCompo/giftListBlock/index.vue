<template>
    <div class="gift-list-block" :class="{opacity:renderJsonIsEmpty}">
        <div class="img-box" :class="{active:renderJson.active}">
            <div class="cententss">
                <img class="imgs" :src="renderJson.giftImage">
                <div class="gift-num"> {{renderJson.giftnum}}</div>
            </div>
        </div>
        <div class="gift-name">
            {{renderJson.giftname}}
        </div>
    </div>
</template>

<script>
export default {
    props:{
        isMiniSize:Boolean,
        isActive:Boolean,
        renderJson:Object,
    },
    computed:{
        renderJsonIsEmpty(){ //判断空对象
            return JSON.stringify(this.renderJson) == "{}";
        }
    },
}
</script>

<style lang="scss" scoped>
    .gift-list-block{
        width: 228px;
        height: 337px;
        margin-bottom: 70px;
        font-size: $text-normal-size;
        .img-box{
            width: 228px;
            height: 228px;
            background:rgba(60,60,60,1);
            border-radius: 30px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            .cententss{
                width: 223px;
                height: 223px;
                border-radius: 30px;
                background:rgba(60,60,60,1);
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                .imgs{
                    width: 70%;
                    display: block;
                }
                .gift-num{
                    position: absolute;
                    right: 10px;
                    bottom: 10px;
                    padding: 10px 20px;
                    border-radius: 100px;
                    font-size: 28px;
                    background-color: rgba(0,0,0,0.6);
                }
            }
        }
         .active{
              background: $popup-btn-gradual-changes;
        }
        .gift-name{
            margin-top: 15px;
        }
    }
    .opacity{
        opacity: 0;
    }
</style>