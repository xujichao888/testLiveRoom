<template>
    <div class="talk-msg-list">
        <div class="avatar-box">
            <img :src="renderJson.avartar" class="avatar">
        </div>
        <div class="content-box">
            <div class="left">
                <div class="nickname">
                    {{renderJson.nickname}}
                </div>
                <div class="last-content">
                    {{renderJson.lastOneMsg}}
                </div>
            </div>
            <div class="right">
                <div class="time">{{getTime}}</div>
                <div class="not-read" :style="{opacity:getNoteRead==0?0:1}">{{getNoteRead}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        renderJson:Object
    },
    computed:{
        getTime(){
            return this.formatDate(this.renderJson.time)
        },
        getNoteRead(){
            return this.renderJson?this.renderJson.notReadNum>0?this.renderJson.notReadNum>99?"+99":this.renderJson.notReadNum:0:0
        }
    },
    methods:{
        
    formatDate(millinSeconds){
        var date = new Date(millinSeconds);
        var monthArr = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec");
        var suffix = new Array("st","nd","rd","th");
        
        var year = date.getFullYear(); //年
        var month = monthArr[date.getMonth()]; //月
        var ddate = date.getDate(); //日
        
        if(ddate % 10 < 1 || ddate % 10 > 3) {
            ddate = ddate + suffix[3];
        }else if(ddate % 10 == 1) {
            ddate = ddate + suffix[0];
        } else if(ddate % 10 == 2) {
            ddate = ddate + suffix[1];
        }else {
            ddate = ddate + suffix[2];
        }
        if((new Date().getTime()-millinSeconds) <(1000*60*60*24)){
            return (date.getHours()>12?date.getHours()-12+':'+date.getMinutes()+' PM':date.getHours()+':'+date.getMinutes()+' AM') ;
        }
        return month + " "+ ddate + "," + year;
        
        }
    }
}
</script>

<style lang="scss" scoped>
    .talk-msg-list{
        font-size: $text-normal-size;
        height: 208px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: $live-room-padding;
        .avatar-box{
            width: 144px;
            height: 144px;
            .avatar{
                width: 144px;
                display: block;
                border-radius: 144px;
            }
        }
        .content-box{
            width: 800px;

            height: 208px;
            box-sizing: border-box;
            border-bottom: $line-default;
            display: flex;
            .left{
                width: 520px;
                height: 100%;
    
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: start;
                .nickname{
                    font-weight: bold;
                    margin-bottom: 30px;
                }
                .last-content{
                    width: 100%;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    color: $text-gray-normal-color;
                }
            }
            .right{
                  font-size: $text-normal-size;
                width: 300px;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: center;
                 color: $text-gray-normal-color;
                .time{
                    margin-bottom: 24px;
                }
                .not-read{
                    padding: 5px 20px;
                    background: $violet-gradual-changes;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    border-radius: 110px;
                }
            }
        }
    }
</style>