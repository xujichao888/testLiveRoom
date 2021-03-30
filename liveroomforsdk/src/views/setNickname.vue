<template>
    <div>
        <pubInputPage titleName="Nick Name" place="input Something" @back="back"/>
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