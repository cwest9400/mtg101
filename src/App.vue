<template>
  <NavBarContent />
  <ArticlePost />
  <ArticlePost />
  <ArticlePost />
  <ArticlePost />
  <ArticlePost />
</template>

<script>
import NavBarContent from './components/navbar/NavBarContent.vue'
import ArticlePost from './components/ArticlePost.vue'

export default {
  name: 'App',
  components: {
    NavBarContent,
    ArticlePost,
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
  /* margin: 60px 24px 0px 24px; */
  padding:5% 20% 0 20%;
  
}
body {
  margin: 0;
}
</style>
