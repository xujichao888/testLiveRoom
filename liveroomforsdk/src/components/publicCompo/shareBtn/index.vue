<template>
    <div class="share-btn">
        <img :src="catchType" class="imgs">
        <div class="texts">{{texts}}</div>
    </div>
</template>

<script>
export default {
    props:{
        type:String,
        texts:String
    },
    computed:{
        catchType(){
            switch (this.type) {
                 case "1":
                     return this.icon1
                 case "2":
                    return this.icon2
                 case "3":
                   return this.icon3
                default:
                    return this.icon1
            }
        }

    },
    data(){
        return{
            icon1:require('@/assets/icons/icons1.png'),
            icon2:require('@/assets/icons/icons2.png'),
            icon3:require('@/assets/icons/icons3.png')
        }
    }
}
</script>

<style lang="scss" scoped>
    .share-btn{
        width: 210px;
        height: 210px;
        display: flex;
        margin-right: 86px;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .imgs{
            width: 144px;
            display: block;
        }
        .texts{
            font-size: $text-normal-size;
            color: $text-gray-color;
        }
    }
</style>