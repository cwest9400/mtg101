<template>
    
    <ArticlePost />
    <div class="card-container">
      <AllDecks />
      <AllArticles />
  
    </div>
    
  </template>
  
  <script>
  
  import ArticlePost from './ArticlePost.vue'
  import AllDecks from './categoryContainer/AllDecks.vue'
  import AllArticles from './categoryContainer/AllArticles.vue'
  
  export default {
    name: 'HomePage',
    components: {
      ArticlePost,
      AllDecks,
      AllArticles,
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
    padding:5% 10% 0 10%;
    
  }
  body {
    margin: 0;
  }
  @media (min-width: 500px) {
    .card-container {
      display: flex;
      flex-direction: row;
      column-gap: 5%;
    }
  }
  </style>