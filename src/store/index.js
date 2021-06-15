import axios from 'axios';
import { createStore } from 'vuex'


const state = {
  items: [],
  cart: [],
};

const mutations = {
  getItems(state, items) {
    state.items = items;
  },
  addToCart(state, item) {
    state.cart.push(item);
  },
  removeFromCart(state, item) {
    let index = state.cart.indexOf(item);
    state.cart.splice(index, 1);
  }
};

const actions = {
  async getItemsAction({commit}) {
    const response = await axios.get('http://localhost:3000/items');
    commit('getItems', response.data);
  },
};

const getters = {
  getItemsByCategory: (state) => (category) => {
    console.log(category)
    if (category == '') return state.items;
     return state.items.filter(i => i.category == category)
  },
  getCart: state => {
    return state.cart
  }
};

export default createStore({
  state,
  mutations,
  actions,
  getters
})
