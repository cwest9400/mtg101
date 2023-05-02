<template>
  <div class="hero-container">

    <div class="most-recent-post">
      <h1>Title of this really cool new blog post</h1>
      <p>by Magic Wizard</p>
      <button>Read Now</button>
    </div>
  </div>
</template>
<script>
</script>

<style>
* {
  box-sizing: border-box;
}

h1, p {
margin: 0;
}
.hero-container {
    background-color: aqua;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 200px;
    background-image: url("https://cards.scryfall.io/art_crop/front/1/8/181ed588-5b9e-4160-967c-ed927b7e0048.jpg?1562544319");
    background-repeat: no-repeat;
    background-size: contain;
   
}
.most-recent-post {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding-top: 24px;
    border: solid 3px purple;
    color: white;
    
 
}
</style>
