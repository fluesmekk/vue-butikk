<template>
  <div class="nav-bar">
    <img
      class="text"
      src="https://cdn.discordapp.com/attachments/798198287693905933/852458904851578880/unknown.png"
    />
    <div class="buttons">
      <div class="nav-button">Produkter</div>
      <div class="nav-button-selected">Om oss</div>
      <div class="nav-button">Kasse</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap");
</style>

<style lang="css" scoped>
.nav-bar {
  z-index: 0;
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
  margin-top: 4%;
  background-color: #c4c4c4;
  margin-bottom: 2%;
  padding-top: 0.2%;
  border: solid #c4c4c4 4px;
  border-radius: 10px;
  width: 100%;
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
  margin-top: 4%;
  background-color: #dddddd;
  margin-bottom: 2%;
  padding-top: 0.2%;
  border: solid #dddddd 4px;
  border-radius: 10px;
  width: 100%;
}

.buttons {
  z-index: 1;
  margin-left: 50%;
  display: flex;
  align-content: center;
}
</style>
