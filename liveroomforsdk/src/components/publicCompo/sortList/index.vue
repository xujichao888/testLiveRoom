<template>
    <div class="sort-list-content" v-if="renderJson!=undefined">
        <div class="lefts">
            <div class="idx">{{idx+4}}</div>
            <img class="avatar" :src="renderJson.avatar">
        </div>
        <div class="right">
            <div class="box">
                <div class="left">
                    <div class="nickname">{{renderJson.nickname}}</div>
                    <div class="tags">
                        <div class="sex">
                            <sexCompo/>
                        </div>
                        <levelCompo :rule="renderJson.level"/>
                    </div>
                </div>
                <div class="rights">
                    <img class="icon" src="@/assets/icons/gold_money.png" >
                    <div>{{renderJson.power}}</div>
                </div>
            </div>
        </div>
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
    props:{
        renderJson:Object,
        idx:Number
    }
}
</script>

<style lang="scss" scoped>
    .sort-list-content{
        color: $text-black-normal-color;
        font-size: $text-normal-size;
        padding: $live-room-padding;
        height: 216px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .lefts{
            display: flex;
            align-items: center;
            .avatar{
                width: 144px;
                height: 144px;
                border-radius: 144px;
                margin-left: 60px;
            }
        }
        .right{
            margin-left: 24px;
            height: 216px;
            flex: 1;
            border-bottom: $line-default-white;
            display: flex;
            align-items: center;
            .box{
                width: 100%;
                height: 144px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .left{
                    .nickname{
                        text-align: start;
                        margin-bottom: 20px;
                    }
                    .tags{
                        display: flex;
                        .sex{
                            margin-right: 5px;
                        }
                    }
                }
                .rights{
                    display: flex;
                    align-items: center;
                    .icon{
                        width: 48px;
                        height: 48px;
                        display: block;
                        margin-right: 10px;
                    }
                }

            }
        }
    }
</style>