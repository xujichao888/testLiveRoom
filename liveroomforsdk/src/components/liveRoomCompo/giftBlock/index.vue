<template>
    <div class="gift-block" :class="{opacity:renderJsonIsEmpty}" @click="select">
        <div class="img-box" :class="{active:isActive}">
            <div class="img-small-box">
                <img :src="renderJson.img" class="img" >
            </div>
            
        </div>
        <div class="giftname">{{renderJson.giftName}}</div>
        <div class="price-box">
            <img src="@/assets/icons/gold_money.png" class="icon" >
            <div class="price">{{renderJson.price}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        renderJson:Object,
        row:Number,
        idx:Number,
        isActive:Boolean
    },
    computed:{
        renderJsonIsEmpty(){ //判断空对象
            return JSON.stringify(this.renderJson) == "{}";
        }
    },
    methods:{
        select(){
            if(this.renderJsonIsEmpty)return false;
            this.$emit('select',{row:this.row,idx:this.idx})
        }
    }
}
</script>

<style lang="scss" scoped>
    .gift-block{
        width: 238px;
        height: 349px;
        margin-top: 48px;
        font-size: $text-normal-size;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      
        .img-box{
            width: 238px;
            height: 238px;
            display: flex;
            align-items: center;
            justify-content: center;
                    background-color: #3c3c3c;
              border-radius: 30px;
            .img-small-box{
                width: 234px;
                height: 234px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #3c3c3c;
                   border-radius: 30px;
                .img{
                    width: 75%;
                }
            }
         
        }
        .active{
            background: $violet-gradual-changes;
      
        }
        .price-box{
            display: flex;
            align-items: center;
            justify-content: center;
            .icon{
                width: 48px;
                display: block;
                margin-right: 5px;
            }
            .price{
                color: #d97b12;
            }
        }
    }
    .opacity{
        opacity: 0;
    }

</style>