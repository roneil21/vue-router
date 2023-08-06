<script>
export default{
    props: ['id']
    // data(){
    //     return {
    //         id: this.$route.params.id
    //     }
    // }
}
</script>

<template>
    <h1>Job Details Page</h1>
    <p>The job ID is {{ id }}</p>
</template>

<style scoped>
h1,p{
    text-align: center;
}
</style>