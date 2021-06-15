<template>
  <div class="parent-container">
    <div class="container">
      <div class="shipping">
        <div class="text">
          <p class="frakt">Fraktalternativer</p>
        </div>

        <div class="shipping__Options">
          <div class="firstName">
            <p>Fornavn</p>
            <input class="input" />
          </div>
          <div class="lastName">
            <p>Etternavn</p>
            <input class="input" />
          </div>
          <div class="adress">
            <p>Adresse</p>
            <input class="input" />
          </div>
          <div class="options">
            <pre> Fraktalternativ:</pre>
            <div class="store click">
              <div class="circle"></div>
              <p class="alt">Til Nærmeste Butikk</p>
            </div>
            <div class="storage click">
              <div class="circle"></div>
              <p class="alt">Hente på lager</p>
            </div>
            <div class="post click">
              <div class="circle"></div>
              <p class="alt">Postboks</p>
            </div>
          </div>
          <div class="sendOrder">
            <p class="send">Send Bestilling</p>
          </div>
        </div>
      </div>
      <div class="cart">
        <div class="text">
          <p class="kasse">Kasse</p>
        </div>

        <div class="cart__Options">
          <div class="item" v-for="item in cart" :key="item.id">
            <div class="title">{{ item.itemName }}</div>
            <div class="price">{{ item.price }},-</div>
            <div class="img"><img :src="item.img" class="img" /></div>
            <div class="delete">
              <h5 @click="removeFromCart(item)">Fjern</h5>
            </div>
          </div>
          <div class="total">
            <p>Total:</p>
            <p class="totalPrice">{{ calculateTotal }},-</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      items: [],
    };
  },
  computed: {
    ...mapState(["cart"]),
    calculateTotal: function() {
      if (this.cart == []) {
        return 0;
      } else {
        let total = 0;
        this.cart.forEach((item) => (total += item.price));
        return total;
      }
    },
  },
  methods: {
    ...mapMutations(["removeFromCart"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Pompiere&display=swap");</style
>;

<style lang="css" scoped>
.parent-container {
  height: 96%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}

.container {
  margin-top: 9.2%;
  height: 84%;
  width: 90%;
  background-color: #b4d8e6;
  border: solid #b4d8e6 1px;
  border-radius: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.frakt,
.kasse {
  margin-top: 4%;
  margin-bottom: 2%;
  margin-left: 15%;
}

.firstName,
.lastName,
.adress {
  height: 14%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 2%;
  margin-right: 5%;
}

.input {
  background-color: #ececec;
  height: 27%;
  width: 60%;
}

.alt {
  margin-left: 2%;
  color: white;
}

.click {
  margin-left: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 5vh;
}

.sendOrder {
  display: flex;
  align-items: center;
  height: 4%;
  padding: 10px;
  margin-top: 5%;
  margin-left: 60%;
  background-color: transparent;
  border: solid transparent 3px;
  border-radius: 5px;
}

.sendOrder:hover {
  border: rgb(151, 195, 122) solid 3px;
}

.click > p {
  font-size: 20px;
}

.circle {
  background-color: rgb(163, 163, 163);
  width: 3%;
  height: 25%;
  border: rgb(163, 163, 163) solid 3px;
  border-radius: 10px;
}

.circle:hover {
  border: rgb(151, 195, 122) solid 3px;
}

p,
pre {
  font-family: "Pompiere", cursive;
  font-size: 25px;
  text-align: start;
}

.shipping__Options > div > p,
.cart__Options > div > p,
pre {
  color: white;
}

.title,
.price,
.delete {
  color: white;
  font-family: "Pompiere", cursive;
}

.title {
  font-size: 20px;
}

.cart,
.shipping {
  min-width: 459.806px;
}

.cart__Options {
  overflow-y: scroll;
  height: 30%;
}

.item {
  background-color: #888282;
  border: solid #888282 1px;
  border-radius: 10px;
  padding-top: 7px;
  margin-top: 8px;
  margin-left: 5%;
  margin-right: 2%;
  padding-right: 8px;
  display: grid;
  height: 117px;
  width: 89.6%;
  max-width: 324px;
  grid-template-rows: 80px 24px;
  grid-template-columns: 3fr 2fr;
}

.img {
  height: 100%;
  grid-area: 1 / 2;
}

.title {
  text-align: start;
  padding-left: 8px;
}

.price {
  grid-area: 2 / 1;
  font-size: 35px;
  text-align: start;
  padding-left: 18px;
  margin-top: -6%;
}

.delete {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: 2 / 2;
  width: 90%;
  margin-left: 10px;
  margin-right: 10px;
}

h5 {
  background-color: black;
  padding: 2px;
  border: solid black 3px;
  border-radius: 10px;
  text-align: center;
}

h5:hover {
  border: solid rgb(103, 206, 72) 3px;
}

.total {
  max-width: 89%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-top: 8px;
  padding-left: 10px;
  margin-left: 5%;
  margin-right: 2%;
  background-color: #888282;
  border: solid #888282 1px;
  border-radius: 10px;
  text-align: end;
  grid-row-start: 6;
  grid-row-end: 7;
}

.totalPrice {
  text-align: end;
}

.cart__Options,
.shipping__Options {
  margin-left: 10%;
  background-color: #2f4858;
  width: 82%;
  max-height: 600px;
  height: 73%;
  border: solid #2f4858 1px;
  border-radius: 25px;
}
</style>
