<template>
  <NavBarContent />
  <MostRecentPost />
</template>

<script>
import NavBarContent from './components/navbar/NavBarContent.vue'
import MostRecentPost from './components/MostRecentPost.vue'

export default {
  name: 'App',
  components: {
    NavBarContent,
    MostRecentPost,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 24px 0px 24px;
  
}
</style>
