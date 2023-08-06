<script>
export default {
    data() {
        return {
            jobs: [
                {
                    title: 'Job 1', id: 1
                }, {
                    title: 'Job 2', id: 2
                }, {
                    title: 'Job 3', id: 3
                }
            ]
        }
    }
}
</script>

<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
        <RouterLink :to="{ name: 'Details', params: { id: job.id } }">
            <h2>
                {{ job.title }}
            </h2>
        </RouterLink>
    </div>
</template>

<style>
h1 {
    text-align: center;
}

h2 {
    text-align: center;
    color: blue;
}

a {
    text-decoration: none;
}
</style>