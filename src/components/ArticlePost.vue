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
  name: 'ArticlePost',
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

h1 {
  font-size: x-large;
}

h1, p {
margin: 0;

}

button {
  background-color: #5c2b94;
  color: aliceblue;
  height: 40px;
  border: none;
  border-radius: 20px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

button:hover {
  background-color: #4b1f74;
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(92, 43, 148, 0.4);
}

.hero-container {
  position: relative;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    background-image: url("https://cards.scryfall.io/art_crop/front/5/d/5d275f04-cc60-4e3f-95cc-3d02bc916b82.jpg?1599710280");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    margin-top: 36px;
    padding: 36px 8px;

}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.6) 90%);
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
    row-gap: 18px;

}

</style>
