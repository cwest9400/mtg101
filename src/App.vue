<template>
  <NavBarContent />
  <RouterView>

  </RouterView>
  
</template>

<script>
import NavBarContent from './components/navbar/NavBarContent.vue'
// import HomePage from './components/HomePage.vue'


export default {
  name: 'App',
  components: {
    NavBarContent,

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
a {
  text-decoration: none;
  color: #2c3e50;
}
a:visited {
  text-decoration: none;
  color: #2c3e50;
}

@media (min-width: 500px) {
  .card-container {
    display: flex;
    flex-direction: row;
    column-gap: 5%;
  }
}
</style>
