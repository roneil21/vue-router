<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Aboutview from './views/AboutView.vue';
import Jobs from './views/Jobs.vue';


</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
        <RouterLink :to="{ name: 'jobs' }">Jobs</RouterLink>
      </nav>
    </div>
  </header>

  <div class="vertical-center">
    <button @click="redirectHome">Back to Home Page</button>
    <button @click="back">Back</button>
  </div>

  <RouterView />
</template>


<script>
export default {
  methods: {
    redirectHome() {
      this.$router.push('/');
    },
    back() {
      this.$router.go(-1);
    }
  }
} 
</script>


<style scoped>
header {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

a {

  text-align: center;
  padding: 20px;
  text-decoration: none;
  font-size: 2rem;
  color: blue;
}

.vertical-center {
  margin: 0;
  position: absolute;
  left: 45%;
  top: 50%; 
}
button{
  padding: 5px;
  margin-right: 10px ;
}
</style>