<template>
    <div class="background"></div>
    <NavBar />
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
}

body {

  padding: 0;
  margin: 0;
}
</style>
