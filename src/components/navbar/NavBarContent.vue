<template>
  <nav class="navbar">
    <div class="navbar-firstrow-content">
      <h1 class="title">six6wurm</h1>
      <div class="navbar-hamburger" @click="showMenu = !showMenu">
        <!-- "Hamburger" icon if menu inactive -->
        <svg
          v-if="!showMenu"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <!-- "X" icon if menu active -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
      <div class="navbar-menu" :class="{ 'navbar-menu-visible': showMenu }">
        <!-- Menu items -->
        <p>About</p>
        <p>Articles</p>
        <p>Decks</p>
        <p>Set Reviews</p>
      </div>
    </div>
    <div class="menu-overlay" :class="{ 'menu-overlay-visible': showMenu }"></div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
p {
  padding: 8px;
}
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #ffffff;
  box-shadow: 0 2px 0px rgba(0, 0, 0, 0.1);
  z-index: 999;
  padding: 0 10% 0 10%;
  height: 80px;
  display: flex;
  justify-content: center;
}
.navbar-firstrow-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.navbar-hamburger {
  display: flex;
  align-items: center;
}

.title {
  margin: 0;
}
.tagline {
  margin: 0;
}
.navbar-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  z-index: 998;
  opacity: 0; /* start with opacity 0 */
  transform: translateX(100%);
  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: auto;
  padding: 16px 24px;
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  

}

.navbar-menu-visible {
  opacity: 1; /* change opacity to 1 to show the menu */
  transform: translateX(0);
  -webkit-transform: translateX(0);
}

.menu-overlay {
  position: fixed;
  top: 80px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #1a092a;
  z-index: 997;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: opacity 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
}

.menu-overlay-visible {
  opacity: .4;
  pointer-events: none;
}

</style>
