<template>
    <div class="edit-room-name">
        <pubInputPage titleName="Room Name" @back="back" place="input the Room Name"/>
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