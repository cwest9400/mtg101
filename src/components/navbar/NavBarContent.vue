<template>
<nav class="navbar">
    <div class="navbar-firstrow-content">
        <h1 class="title">
            six6wurm
        </h1>
        <div class="navbar-hamburger" @click="showMenu = !showMenu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        </div>
    </div>
</nav>
</template>

<script>
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  right:0;
  left:0;
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

</style>