<template>
<nav class="navbar">
    <div class="navbar-firstrow-content">
        <h1 class="title">
            six6wurm
        </h1>

    </div>
    <div class="navbar-secondrow-content">
        <h4 class="tagline">
            A blog about magic deck building
        </h4>
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
    width: 100%;
}
.navbar-secondrow-content {
    display: flex;
    width: 100%;
    font-weight: 300 ;
}

.title {
    margin: 0;
}
.tagline {
    margin: 0;
}

</style>