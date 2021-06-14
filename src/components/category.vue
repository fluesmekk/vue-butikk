<template>
  <div class="content">
    <div class="grid">
      <div @click="selectCategory()" class="g1">Alle varer</div>
      <div @click="selectCategory('proteinbar')" class="g2">Proteinbarer</div>
      <div @click="selectCategory('proteinpowder')" class="g3">
        Proteinpulver
      </div>
      <div @click="selectCategory('equipment')" class="g4">Utstyr</div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Pompiere&display=swap");
</style>
<script>
export default {
  name: "Category",
  methods: {
    selectCategory: function (category) {
      this.$emit('sort', category);
    }
  },
};
</script>

<style lang="css" scoped>
.content {
  z-index: 0;
  position: fixed;
  float: right;
  right: 0;
  top: 0;
  height: 100%;
  background-color: #86bbd8;
  width: 167px;
  animation-name: slide;
  animation-duration: 0.7s;
}

.grid {
  padding-left: 40px;
  margin-top: 150px;
  height: 70%;
  display: grid;
  grid-template: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr / 1fr;
}

div {
  text-align: left;
}

div > .g1:hover,
.g2:hover,
.g3:hover,
.g4:hover {
  color: azure;
}

.g1,
.g2,
.g3,
.g4 {
  font-family: "Pompiere", cursive;
  font-size: 22px;
}

.g1 {
  grid-row: 1;
}

.g2 {
  grid-row: 3;
}

.g3 {
  grid-row: 5;
}

.g4 {
  grid-row: 7;
}

@keyframes slide {
  from {
    width: 0px;
  }
  to {
    width: 167px;
  }
}
</style>
