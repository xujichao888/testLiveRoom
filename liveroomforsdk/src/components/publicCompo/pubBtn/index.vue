<template>
    <div class="pub-btn"  :class="{active:isActive,pinkBg:pinkBg}">
        {{text}} <span> {{exchangeNum}}</span>
    </div>
</template>

<script>
export default {
    props:{
        isActive:Boolean,
        text:String,
        num:Number,
        pinkBg:Boolean,
    },
    computed:{
        exchangeNum(){
            return this.num!=undefined? `(${this.num})`:''
        }
    }
}
</script>

<style lang="scss" scoped>
    .pub-btn{
        width: 100%;
        height: 100%;
        background: $gray-unActive-btn;
        color: $text-gray-normal-color;
        font-size: $text-normal-size;
        border-radius: 600px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .active{
        color: #fff;
        background: $popup-btn-gradual-changes;
    }
    .pinkBg{
        background: $violet-gradual-changes;
    }
</style>