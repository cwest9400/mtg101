<template>
  <div class="hero-container">
<div class="gradient-overlay"></div>
    <div class="most-recent-post">
      <h1>Title of this really cool new blog post</h1>
      <p>by Magic Wizard</p>
      <button>Read Now</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MostRecentPost',
}
</script>

<style>
* {
  box-sizing: border-box;
}

h1 {
  font-size: larger;
}

h1, p {
margin: 0;

}

.hero-container {
  position: relative;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 200px;
    background-image: url("https://cards.scryfall.io/art_crop/front/5/d/5d275f04-cc60-4e3f-95cc-3d02bc916b82.jpg?1599710280");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right top;
    margin-top: 36px;
   
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0.4220281862745098) 85%);
  pointer-events: none; /* allows clicking through the overlay */
}

.most-recent-post {
  position: relative;
  z-index: 1;
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
