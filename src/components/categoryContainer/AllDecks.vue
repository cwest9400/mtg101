<template>
    <div class="hero-container">
  <div class="gradient-overlay"></div>
      <div class="most-recent-post">
        <h1>Decks</h1>
        
        <button>View</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AllDecks',
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
      background-color: black;
      display: flex;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      margin-top: 36px;
      padding: 36px 8px;
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
      /* border: solid 3px purple; */
      color: white;
      row-gap: 18px;
  
  }
  
  </style>
  