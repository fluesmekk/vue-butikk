<template>
  <div class="parent-container">
    <div class="selector"></div>
    <div class="container" v-if="!selectedItem">
      <div
        class="item"
        v-for="item in currentItems"
        :key="item.id"
        @click="selectedItem = item"
      >
        <img class="img" :src="item.img" />
        <p class="price">{{ item.price }},-</p>
        <p class="text">{{ item.itemName }}</p>
      </div>
    </div>
    <SingleItem v-if="selectedItem" :item="selectedItem" />
  </div>
</template>

<script>
import SingleItem from "../components/single-item.vue";
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { mapGetters } from 'vuex';
var _ = require('lodash');

export default {
  name: "Store",
  async created() {
    await this.getItemsAction();
    this.currentItems = _.cloneDeep(this.items)
  },
  props: {
    category: {
      type: String,
      default: "",
    },
  },
  methods: {
    ...mapActions(["getItemsAction"]),
  },
  components: {
    SingleItem,
  },
  data() {
    return {
      currentItems: [],
      selectedItem: undefined,
      chosenCategory: this.category,
    };
  },
  computed: {
    ...mapGetters(['getItemsByCategory']),
    ...mapState(["items"]),
  },
  watch: {
    category() {
      console.log(this.currentItems);
      this.chosenCategory = this.category;
      this.currentItems = this.getItemsByCategory(this.chosenCategory);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Pompiere&display=swap");</style
>;

<style lang="css" scoped>
.parent-container {
  display: flex;
  justify-content: center;
  height: 60%;
  width: 100%;
}

.container {
  margin-top: 7.6%;
  overflow-y: auto;
  /* Dette må bli grid for å fylle riktig! */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  margin-left: 30px;
}

.single-item {
  display: grid;
  grid-template-areas:
    "a b"
    "c d";
}

div > p {
  font-family: "Pompiere", cursive;
  font-size: 20px;
}

.item {
  border: solid #92d7ec 20px;
  border-radius: 25px;
  background-color: #92d7ec;
  margin-top: 20px;
  margin-bottom: 50px;
  margin-right: 110px;
  position: relative;
  width: 230px;
  height: 210px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 5fr 2fr 1fr;
}

.text {
  margin-left: 6px;
  text-align: start;
  grid-row: 3 / 4;
  grid-column: 1 / 1;
}

.img {
  height: 100%;
  grid-row: 1 / 3;
  grid-column: 1 / 2;
}

.price {
  left: 10px;
  position: absolute;
  top: -10px;
  grid-row: 2 / 2;
  grid-column: 2;
}
</style>
