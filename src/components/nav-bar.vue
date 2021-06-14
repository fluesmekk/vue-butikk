<template>
  <div class="container">
    <div class="nav-bar">
      <img
        class="text"
        src="https://cdn.discordapp.com/attachments/798198287693905933/852458904851578880/unknown.png"
      />
      <div class="buttons">
        <div
          @click="changePage('check-out')"
          :class="selectedPage('check-out')"
        >
          Produkter
        </div>
        <div @click="changePage('about')" :class="selectedPage('about')">
          Om oss
        </div>
        <div @click="changePage('cart')" :class="selectedPage('cart')">
          Kasse
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      chosenPage: "",
    };
  },
  methods: {
    changePage(param) {
      console.log(this.$route.path);
      this.$router.push(param);
      this.chosenPage = param;
    },
    selectedPage(page) {
      return this.chosenPage == page ? "nav-button-selected" : "nav-button";
    },
  },
  computed: {},
  watch: {
    '$route': function() {
      this.chosenPage = this.$route.path.substring(1);
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap");
</style>

<style lang="css" scoped>
.nav-bar {
  width: 100%;
  position: fixed;
  z-index: 1;
  display: grid;
  background-color: #336699;
  height: 78px;
  border-radius: 0px 0px 35px 0px;
}

.text {
  z-index: 1;
  position: absolute;
  width: 25%;
  left: 10px;
}

.nav-button {
  z-index: 1;
  font-family: Reenie Beanie;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  margin-right: 16%;
  margin-top: 15px;
  background-color: #c4c4c4;
  margin-bottom: 15px;
  padding-top: 0.2%;
  border: solid #c4c4c4 4px;
  border-radius: 10px;
}

.nav-button-selected {
  z-index: 1;
  font-family: Reenie Beanie;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  margin-right: 16%;
  margin-top: 15px;
  background-color: #ebebeb;
  margin-bottom: 15px;
  padding-top: 0.2%;
  border: solid #ebebeb 4px;
  border-radius: 10px;
}

.nav-button:hover,
.nav-button-selected:hover {
  color: #336699;
}

.buttons {
  z-index: 1;
  margin-left: clamp(30%, 50%, 60%);
  display: flex;
  align-content: center;
}

.nav-button .nav-button-selected {
  font-size: clamp(20px, 32px, 32px);
}
</style>
