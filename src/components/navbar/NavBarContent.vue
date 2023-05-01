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
        <p>Articles</p>
        <p>Decks</p>
        <p>Packages</p>
        <p>Set Reviews</p>
      </div>
    </div>
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
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #ffffff;
  box-shadow: 0 2px 0px rgba(0, 0, 0, 0.1);
  z-index: 999;
  padding: 16px;
}
.navbar-firstrow-content {
  display: flex;
  justify-content: space-between;
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
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out; /* add opacity transition */
  width: 75%;
}

.navbar-menu-visible {
  opacity: 1; /* change opacity to 1 to show the menu */
  transform: translateX(0);
}
</style>
