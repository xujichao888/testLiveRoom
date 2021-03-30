<template>
    <div class="sort-awesome" :class="{bigsize:bigSize}" v-if="renderJson!=undefined">
        <img class="avatar" :class="{bigavatar:bigSize}" :src="renderJson.avatar">
        <div class="some-msg">
            <div>{{renderJson.nickname}}</div>
            <div class="sex-level">
                <div class="sex">
                    <sexCompo/>
                </div>
                <div class="level">
                    <levelCompo :rule="renderJson.level"/>
                </div>
            </div>
            <div class="power">
                <img src="@/assets/icons/gold_money.png" class="gold-icon">
                <div class="power-num">{{renderJson.power}}</div>
            </div>
        </div>
        <img class="bg" :src="arr[idx]">
    </div>
</template>

<script>
import sexCompo from '@/components/publicCompo/sexCompo';
import levelCompo from '@/components/publicCompo/levelCompo'

export default {
    components:{
        sexCompo,
        levelCompo
    },
    data(){
        return{
            arr:[
                require('@/assets/icons/first.png'),
                require('@/assets/icons/third.png'),
                 require('@/assets/icons/second.png'),
            ]
        }
    },
    props:{
        bigSize:Boolean,
        idx:Number,
        renderJson:Object
    }
}
</script>

<style lang="scss" scoped>
    .sort-awesome{
        width: 312px;
        height: 426px;
        position: relative;
        .avatar{
            width: 180px;
            height: 180px;
            display: block;
            border-radius: 180px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1;
        }
        .bg{
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
        }
        .bigavatar{
            width: 216px;
            height: 216px;
            display: block;
        }
        .some-msg{
            width: 100%;
            position: absolute;
            z-index: 1;
            bottom: 34px;
            color: #fff;
            font-weight: bold;
            font-size: $text-normal-size;
            .sex-level{
                display: flex;
                justify-content: center;
                 margin-top: 20px;
                .sex{
                    width: 26px;
                    margin-right: 30px;
                }
            }
            .power{
                margin-top: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                .gold-icon{
                    width: 48px;
                    display: block;
                    margin-right: 15px;
                }
            }
        }
    }
    .bigsize{
        height: 462px;
        align-self: flex-start;
    }
</style>