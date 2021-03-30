<template>
    <div class="set-password">
           <backTitle names="Password Setting" @back="backToRoom"/>
           <div class="set-password">
               <input type="tel" class="inputss" v-model="val"  @focus="focuss" maxlength="6">
               <div class="number-block" v-for="(item,index) in arr" :key="index" :class="{numberblockactive:item.state==1}">
                   <div class="center-block" >
                       <div class="line" v-if="item.state==1"></div>
                       <div class="texts">{{item.val}}</div>
                   </div>
               </div>
           </div>
            <div class="btn-box">
                <div class="btn" :class="{btnActive:this.val.length==6}">Done</div>
            </div>
    </div>
</template>

<script>
import backTitle from '@/components/publicCompo/backTitle'
export default {
    components:{
        backTitle
    },
    data(){
        return{
           arr: [
               {state:0,val:''},
               {state:0,val:''},
               {state:0,val:''},
               {state:0,val:''},
               {state:0,val:''},
               {state:0,val:''},
               ],
           val:'',
        }
    },
    watch:{
        val(newV,oldV){ 
            console.log(newV)
            if(newV.length == 0){
                this.arr[0].state = 1
            }
            if(newV.length>0){
                if(newV.length>oldV.length){
                    this.clearState()
                    if(newV.length<6){
                        this.arr[newV.length].state = 1
                        this.arr[newV.length-1].val = newV[newV.length-1]
                    }else{
                        this.arr[5].val = newV[newV.length-1]
                        this.clearState()
                    }
                }else{
                    this.clearState()
                    this.arr[newV.length].val = '';
                    this.arr[newV.length].state = 1
                }
            }else{
                this.arr[0].val =''
                this.clearState();
                this.arr[0].state = 1;
            }
        }
    },
    methods:{
        clearState(){
            this.arr.forEach(item=>{
                item.state = 0
            })
        },
        backToRoom(){
            this.$router.push({name:'roomsetting'})
        },
        focuss(){
            if(this.val==''){
                this.arr[0].state = 1
            }else{
                this.arr[this.val.length].state = 1
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .set-password{
        .set-password{
            height: 156px;
            padding: $live-room-padding;
            position: relative;
            margin-top: 104px;
            display: flex;
            justify-content: space-between;
            .inputss{
                display: block;
                position: absolute;
                width: 2160px;
                left: -1130px;
                top: 50%;
                transform: translateY(-50%);
                border:none;
                background: none;
            }
            .number-block{
                width: 144px;
                height: 156px;
                border-radius: 30px;
                background: #e1e1e1;
                display: flex;
                align-items: center;
                justify-content: center;
                .center-block{
                    width: 138px;
                     border-radius: 28px;
                    height: 150px;
                    background: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .line{
                        width: 4px;
                        height: 60px;
                        background: #aa7dff;
                        animation-name: example;
                        animation-duration: 1s;
                         animation-iteration-count: infinite;
                    }
                    @keyframes example {
                        0% {opacity: 1;}
                        25% {opacity: 1;}
                        50% {opacity: 0;}
                        75% {opacity: 0;}
                        100% {opacity: 1;}
                    }
                    .texts{
                        font-size: $text-normal-size;
                    }
                }
            }
            .numberblockactive{
                background: $popup-btn-gradual-changes;
            }
        }
        .btn-box{
            width: 1080px;
            height: 144px;
            margin-top: 88px;
            display: flex;
            justify-content: center;
            .btn{
                width: 480px;
                height: 100%;
                border-radius: 200px;
                background: $popup-btn-gradual-changes;
                color: #fff;
                font-size: $text-normal-size;
                font-weight: bold;
                line-height: 144px;
                opacity: 0.5;
            }
            .btnActive{
                opacity: 1;
            }
        }
    }
</style>