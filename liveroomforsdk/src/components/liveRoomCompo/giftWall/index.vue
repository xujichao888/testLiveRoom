<template>
    <div class="gift-wall-content">
        <div class="gift-title-box">
            <div class="icon-box" @click="close">
                <img class="icons" src="@/assets/icons/btn_fanhui.png" >
            </div>
            <div class="texts">Gifts Wall</div>
        </div>
        <div class="gift-list-box">
            <giftListBlock v-for="(item,index) in setBlockArr" :key="index" :renderJson="item"/>
        </div>
    </div>
</template>

<script>
import giftListBlock from '@/components/publicCompo/giftListBlock'
export default {
    components:{
        giftListBlock
    },
    data(){
        return{
            giftBlockArr:[
                {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift1.png'),active:false},
                {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift2.png'),active:false},
                {giftname:'Colorful Cat',giftnum:'78',giftImage:require('@/assets/icons/gift1.png'),active:false},
                {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift2.png'),active:false},
                {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift1.png'),active:false},
                {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift1.png'),active:false},
                 {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift2.png'),active:false},
                {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift1.png'),active:false},
                {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift2.png'),active:false},
                {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift1.png'),active:false},
                {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift1.png'),active:false},
                    {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift2.png'),active:false},
                {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift1.png'),active:false},
                {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift1.png'),active:false},
                 {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift2.png'),active:false},
                {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift1.png'),active:false},
                {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift2.png'),active:false},
                {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift1.png'),active:false},
                {giftname:'Colorful Cat',giftnum:'100',giftImage:require('@/assets/icons/gift1.png'),active:false},
            ]
        }
    },
    computed:{
        setBlockArr(){
            if(this.giftBlockArr.length%4 == 0){
                return this.giftBlockArr
            }else{
                let num = 4- this.giftBlockArr.length % 4;
                for(let i=0;i<num;i++){
                      this.giftBlockArr.push({})
                }
                 return this.giftBlockArr
            }
            
        }
    },
    methods:{
        close(){
            this.$emit('closeWall')
        }
    }
}
</script>

<style lang="scss" scoped>
    .gift-wall-content{
        width: 100%;
        height: 100%;
        .gift-title-box{
            height: 156px;
            box-sizing: border-box;
            border-bottom: $line-default;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            .icon-box{
                width: 100px;
                height: 156px;
                position: absolute;
                left: 50px;
                display: flex;
                align-items: center;
            }
            .icons{
                width: 54px;
                display: block;
            }
            .texts{
                padding: $live-room-padding;
                font-size: $text-normal-size;
            }
        }
        .gift-list-box{
            height: calc(100% - 156px);
           
            overflow: auto;
            padding: $live-room-padding;
             padding-top: 70px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-content: flex-start;
        }
    }
</style>