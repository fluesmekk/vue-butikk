<template>
  <div class="itemcontainer">
    <img :src="item.img" alt="" class="img" />
    <div class="title-desc-price">
      <div class="inner">
        <div class="title">{{ item.itemName }}</div>
        <div class="description">{{ item.information }}</div>
        <div class="price">{{ item.price }},-</div>
      </div>
    </div>
    <div
      class="nutrients"
      v-if="item.category == 'proteinbar' || item.category == 'proteinpowder'"
    >
      <div class="information">Næring per 100g</div>
      <div class="energy box">
        <div class="info">{{ toKey(item.nutrients, 0) }}</div>
        <div class="act">{{ item.nutrients.energy }}kcal</div>
      </div>
      <div class="fats box">
        <div class="info">{{ toKey(item.nutrients, 1) }}</div>
        <div class="act">{{ item.nutrients.fat }}g</div>
      </div>
      <div class="saturatedFats box">
        <div class="info">{{ toKey(item.nutrients, 2) }}</div>
        <div class="act">{{ item.nutrients.saturatedFats }}g</div>
      </div>
      <div class="salt box">
        <div class="info">{{ toKey(item.nutrients, 3) }}</div>
        <div class="act">{{ item.nutrients.salt }}g</div>
      </div>
      <div class="carbohydrates box">
        <div class="info">{{ toKey(item.nutrients, 4) }}</div>
        <div class="act">{{ item.nutrients.carbohydrates }}g</div>
      </div>
      <div class="sugars box">
        <div class="info">{{ toKey(item.nutrients, 6) }}</div>
        <div class="act">{{ item.nutrients.sugars }}g</div>
      </div>
      <div class="protein box">
        <div class="info">{{ toKey(item.nutrients, 5) }}</div>
        <div class="act">{{ item.nutrients.protein }}g</div>
      </div>
    </div>
    <div class="button" @click="addToCart(item)">
      Legg til i kassen
    </div>
  </div>
</template>

<script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Pompiere&display=swap');
</style>;
import { mapMutations } from "vuex";

export default {
  name: "SingleItem",
  props: {
    item: Object,
  },
  methods: {
    ...mapMutations(["addToCart"]),
    toKey: function(string, i) {
      let key = Object.keys(string)[i];
      return key.charAt(0).toUpperCase() + key.slice(1);
    },
  },
};
</script>

<style lang="css" scoped>
.itemcontainer {
  margin-top: 11%;
  margin-left: -15%;
  overflow: hidden;
  display: grid;
  width: 65%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.img {
  height: 280px;
  grid-row: 1;
  grid-column: 1;
}

.title-desc-price {
  grid-row: 1;
  grid-column: 2;
}

.inner {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  height: 400px;
}

.nutrients {
  background-color: #86bbd8;
  height: 220px;
  display: grid;
  grid-template-areas: "n n n n" "e f sf s" "c hs p .";
}

.box {
  margin-right: 13px;
}

.act {
  background-color: white;
  border: solid black 1px;
  height: 25px;
  width: auto;
}

.information {
  grid-area: n;
}

.energy {
  grid-area: e;
}

.fats {
  grid-area: f;
}

.saturatedFats {
  grid-area: sf;
}

.salt {
  grid-area: s;
}

.carbohydrates {
  grid-area: c;
}

.sugars {
  grid-area: hs;
}

.protein {
  grid-area: p;
}

div {
  font-family: "Pompiere", cursive;
  font-size: 22px;
  text-align: start;
}

.title {
  grid-row: 1;
}

.description {
  grid-row: 3;
}

.price {
  grid-row: 6;
}

.button {
  margin-top: 40%;
  margin-left: 30%;
  background-color: #c4c4c4;
  border: solid #c4c4c4 4px;
  border-radius: 12px;
  height: 10%;
  text-align: center;
  padding-top: 12px;
}

.button:hover {
  border: solid #42bb3e 4px;
  border-radius: 12px;
}
</style>
