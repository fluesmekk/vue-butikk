<template>
  <div>
    <Category @sort="changeCategory" />
    <Store :category="selectedCategory"/>
  </div>
</template>

<script>
import Category from "../components/category.vue";
import Store from "../components/store.vue";

export default {
  name: "CheckOut",
  components: {
    Category,
    Store,
  },
  data() {
    return {
      selectedCategory: '',
    }
  },
  methods: {
    changeCategory: function (category) {
      this.selectedCategory = category;
    }
  },
};
</script>

<style lang="css" scoped></style>
