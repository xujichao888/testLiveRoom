<template>
    <div class="recucling-box">
        <div class="title-back">
            <div class="back-box" @click="backToRoom">
                 <img class="back-img" src="@/assets/icons/back-black.png">
            </div>
            <div class="title">Recycling Gift</div>
        </div>
        <recyclingBar 
            v-for="(item,index) in renderArr" 
            :key="index" 
            :renderJson="item" 
            :idx="index"
            @changeSelect="changeSelectState"
            @plus="plus"
            @minus="minus"
            @changeNum="changeNum"
            @blur="blur"
        />
        <div class="bottom">
            <div class="left">
                <div>Total:</div>
                <img class="icon" src="@/assets/icons/Diamonds.png">
                <div class="all-total">{{caculationAllTotal}}</div>
            </div>
            <div class="right">
                <pubBtn :isActive="caculationAllTotal>0" text="Exchange"/>
            </div>
        </div>
    </div>
</template>

<script>
import recyclingBar from '@/components/packCompo/recyclingBar';
import pubBtn from '@/components/publicCompo/pubBtn'
export default {
    components:{
        recyclingBar,
        pubBtn
    },
    data(){
        return{
            renderArr:[
               {
                    isSelect:true,
                    gift:require('@/assets/icons/gift1.png'),
                    giftname:'Colorful Cat',
                    giftType:'Recycling',
                    price:360,
                    num:2
                },
                {
                    isSelect:false,
                    gift:require('@/assets/icons/gift1.png'),
                    giftname:'Colorful Cat',
                    giftType:'Recycling',
                    price:100,
                    num:1
                }  
            ]
        }
    },
    computed:{
        caculationAllTotal(){ //计算总价
           return  this.renderArr.reduce((total,json)=>{
               if(json.isSelect){
                   return total+  (json.price*json.num)
               }else{
                   return total
               }
            },0)
        }
    },
    methods:{
        backToRoom(){
            this.$router.push({name:'pack'})
        },
        changeSelectState(idx){
            this.renderArr[idx].isSelect = !this.renderArr[idx].isSelect
        },
        plus(idx){
            this.renderArr[idx].num++
        },
        minus(idx){
             this.renderArr[idx].num--
        },
        changeNum(json){
            let{idx,value} = json;
        
            this.renderArr[idx].num = value==''?1:parseInt(value)
        },
        blur(idx){
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .recucling-box{
        .title-back{
            padding: $live-room-padding;
            box-sizing: border-box;
            height: 150px;
            display: flex;
            align-items: center;
            .back-box{
                width: 100px;
                height: 100px;
                display: flex;
                align-items: center;
                .back-img{
                    width: 54px;
                }
            }
            .title{
                font-size: $text-normal-size;
                font-weight: bold;
                color: $text-black-normal-color;
            }
        }
        .bottom{
            position: absolute;
            left: 0;
            bottom: 30px;
            width: 1080px;
            height: 156px;
            box-sizing: border-box;
            border-top: $line-default-white;
            display: flex;
            align-items: center;
            padding: $live-room-padding;
            justify-content: space-between;
            .left{
                display: flex;
                align-items: center;
                font-size: $text-normal-size;
                color: $text-black-normal-color;
                font-weight: bold;
                .icon{
                    width: 58px;
                    height: 57px;
                    display: block;
                    margin: 0 10px;
                }
                .all-total{
                   color:  $text-gradual-active-color;
                }
            }
            .right{
                width: 312px;
                height: 120px;
            }
        }
    }
</style>