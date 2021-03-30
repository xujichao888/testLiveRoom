<template>
    <div class="fans-content">
        Fans {{changeFans}}
    </div>
</template>

<script>
export default {
    props:{
        fansNum:String
    },
    computed:{
        changeFans(){
            return this.thousands(this.fansNum)
        }
    },
    methods:{
       thousands(num){
            var str = num.toString();
            var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
            console.log(str.replace(reg,"$1,"))
            return str.replace(reg,"$1,");
        }
    }
}
</script>

<style lang="scss" scoped>
    .fans-content{
         padding:3px 20px;
        background: $mic-state-btn-online;
        border-radius: 100px;
        
    }
</style>