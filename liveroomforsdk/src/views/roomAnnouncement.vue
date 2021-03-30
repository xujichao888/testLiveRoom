<template>
      <div class="annoucement">
        <pubInputPage titleName="Room Announcement" place="input Something" @back="back"/>
    </div>
</template>

<script>
import pubInputPage from '@/components/publicCompo/pubInputPage'
export default {
    components:{
        pubInputPage
    },
    methods:{
        back(){
            this.$router.push({path:'roomsetting'})
        }
    }
}
</script>

<style lang="scss" scoped>

</style>