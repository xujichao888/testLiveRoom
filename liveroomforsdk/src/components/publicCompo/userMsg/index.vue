<template>
  <div class="user-msg">
      <div class="back-bg">
          <img class="img" :src="backBG">
      </div>
      <div class="avatar-nickname">
          <div class="avatar-btn-box">
              <div class="avatar-box">
                  <img class="images" :src="avatar">
              </div>
              <div class="btn-box">
                  <div class="btn" @click="clickEdit">
                      <img class="edit" src="@/assets/icons/edit.png">
                      <div>Edit 80%</div>
                  </div>
              </div>
          </div>
          <div class="nickname-age-sex">
              <div class="user-msg-box">
                <div class="nickname">{{nickName}}</div>
                <div class="id">ID:{{id}}</div>
                <div class="tags">
                    <sexCompo :age="age"/>
                    <levelCompo :rule="level"/>
                </div>
              </div>
              <div class="user-content-box">
                  {{userSign}}
              </div>
          </div>
      </div>
 
  </div>
</template>

<script>
import sexCompo from '@/components/publicCompo/sexCompo'
import levelCompo from '@/components/publicCompo/levelCompo'
export default {
    components:{
        levelCompo,
        sexCompo
    },
    props:{
        backBG:String,
        avatar:String,
        level:String,
        nickName:String,
        id:String,
        age:String,
        userSign:String
    },
    methods:{
        clickEdit(){
           this.$router.push({name:'profileedit'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .user-msg{
        width: 1080px;
        font-size: $text-normal-size;
        .back-bg{
            height: 368px;
            background: $text-gradual-active-color;
            overflow: hidden;
            .img{
                width: 100%;
            }
        }
        .avatar-nickname{
            height: 582px;
            background: #fff;
            position: relative;
            padding: $live-room-padding;
            .avatar-btn-box{
                height: 202px;
                display: flex;
                justify-content: flex-end;
                .avatar-box{
                    width: 282px;
                    height: 282px;
                    border-radius: 282px;
                    background:#fff ;
                    position: absolute;
                    top: -80px;
                    left: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .images{
                        width: 262px;
                        height: 262px;
                        border-radius: 262px;
                    }
                }
                .btn-box{
                    width: 672px;
                    height: 202px;
                    display: flex;
                    align-items: center;
                    .btn{
                        width: 672px;
                        height: 120px;
                        background: $popup-btn-gradual-changes;
                        border-radius: 122px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                    }
                    .edit{
                        width: 60px;
                        display: block;
                        margin-right: 20px;
                    }
                }
            }
          
        }
        .nickname-age-sex{
            margin-top: 41px;
            height: 290px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            .user-msg-box{
                width: 100%;
                height: 60%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                .nickname{
                    font-weight: bolder;
                }
                .id{
                    color: $text-gray-normal-color;
                }
                .tags{
                    display: flex;
                }
            }
 
            .user-content-box{
                text-align: start;
                 text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
    }
</style>