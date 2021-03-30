<template>
    <div class="create-room" :style="{height:containerHeight+'px'}">
        <div class="create-room-title">
            <img src="@/assets/icons/close_white_big.png" class="icon" @click="backtoHome">
            <div class="title">Create Voice Room</div>
        </div>
        
        <div class="upload-room-img" @click="uploadImage">
            <img src="@/assets/icons/camera.png" class="camera">
        </div>
        <div class="input-voice-name">
            <div class="boxss">
                <div class="room-title">Name Your Voice Room</div>
                <input class="inputs" type="text" placeholder="Maximum 30 letters">
            </div>
        </div>
        <div class="input-voice-name">
            <div class="boxss">
                <div class="room-title">Select the Label</div>
                <input ref="inputLabel" class="inputs" v-model="labelVal" type="text" placeholder="Enter Keywords" @keyup.13="confirm">
            </div>
        </div>
        <div class="tags">
            <div class="tag" v-for="(item,index) in tags" :key="index" >
                <div class="title">{{item}}</div>
                <img class="img" src="@/assets/icons/close_white.png" @click="clearSome(index)">
            </div>
        </div>
        <div class="btns">
            <pubBtn :isActive="true" text="Create" :pinkBg="true" @click.native="gotoLive"/>
        </div>
          <pub-toast ref="toast"/>
    </div>
</template>

<script>
import pubToast from '@/components/publicCompo/pubToast';
import pubBtn from '@/components/publicCompo/pubBtn'
export default {
    components:{
        pubBtn,
        pubToast
    },
    data(){
        return{
            tags:[
                
            ],
            labelVal:'',
            imas:'',
            containerHeight:0
        }
    },
    mounted(){
    console.log(this.$route.params)
    this.containerHeight = document.documentElement.clientHeight
    },
    methods:{
        backtoHome(){
            this.$router.push({name:'Home'})
        },
         afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
        },
        tests(){
            dsbridge.call('playSvgaAnim', {url:'http://www.biggold.net.cn/kingset.svga', loop:1}, function (ret) {
                console.log(ret);
            });
        },
        gotoLive(){
            this.$router.push({name:'liveroom'})
        },
        uploadImage(){
            let that = this
            this.$dsbridge.call('selectImageFromAlbum');
            this.$dsbridge.register('onAlbumListener', function (ret) {
                let result = JSON.parse(ret);
            });
            
        },
        confirm(){
            if(this.labelVal!=''){
                this.tags.push(this.labelVal)
                this.labelVal = ''
                this.$refs.inputLabel.blur()
            }else{
                this.$refs.toast.show('Label content cannot be empty')
            }
            
        },
        clearSome(idx){
            console.log(idx)
            this.tags.splice(idx,1)
        }

    }
}
</script>

<style lang="scss" scoped>
    .create-room{
        width: 1080px;
        box-sizing: border-box;
        background: $bg-gradual-change-all;
        font-size: $text-large-size;
        position: absolute;
        .create-room-title{
            height: 140px;
            padding: $live-room-padding;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            .icon{
                width: 36px;
                height: 36px;
                display: block;
                position: absolute;
                left: 50px;
                top: 50%;
                transform: translateY(-50%);
            }
            .title{
                font-weight: bolder;
                color: #fff;
            }
        }
        .upload-room-img{
            width: 432px;
            height: 432px;
            border-radius: 432px;
            background: $gray-unActive-btn;
            margin: 0 auto;
            margin-top: 110px;
            position: relative;
            .camera{
                width: 120px;
                height: 120px;
                display: block;
                position: absolute;
                right: 0;
                bottom: 0;
            }
        }
        .input-voice-name{
            margin-top: 110px;
            height: 184px;
            padding: $live-room-padding;
            text-align: start;
            color: $text-pink-white-normal;
            .boxss{
                font-size: $text-normal-size;
                height: 100%;
                border-bottom: $line-default-opcaty-white;
                .inputs{
                     border: none;
                    background: none;
                    height: 100px;
                    margin-top: 20px;
                }
                .inputs::-webkit-input-placeholder{
                    color: #d5b8e6;
                    font-size: $text-normal-size;
                    line-height: 108px;
                }
            }
        }
        .tags{
            margin-top: 40px;
            padding: $live-room-padding;
            display: flex;
            flex-wrap: wrap;
            .tag{
                color: #fff;
                background: rgba(255,255,255,0.15);
                padding: 24px;
                border-radius: 100px;
                font-size: $text-normal-size;
                display: flex;
                align-items: center;
                margin-right: 20px;
                .img{
                    width: 24px;
                    height: 24px;
                    display: block;
                    margin-left: 20px;
                }
            }
        }
        .btns{
            width: 980px;
            height: 144px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 50px;
        }
    }
</style>