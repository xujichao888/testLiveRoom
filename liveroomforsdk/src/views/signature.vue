<template>
    <div class="signature-box">
        <pubInputPage titleName="Signature" @back="back" place="input the Room Name"/>
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
            this.$router.push({path:'profileedit'})
        }
    }
}
</script>

<style lang="scss" scoped>

</style>