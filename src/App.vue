<template>
  <div class="background">
  <div class="not-background">
    <NavBar class="navbar"/>
    <!-- <About /> -->
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
import NavBar from "./components/nav-bar.vue";

export default {
  name: "App",
  components: {
    NavBar,  
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

body {
  overflow-y: scroll;
  padding: 0;
  margin: 0;
  height: 100%;
}

.background {
  overflow: auto;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background-color: #8fb2be;
  opacity: 74;
}

.not-background {
  z-index: 0;
  height: 100%;
}

.navbar {
  z-index: 1;
}
</style>
