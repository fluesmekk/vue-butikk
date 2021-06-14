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
              <p>Send Bestilling</p>
          </div>
        </div>
      </div>
      <div class="cart">
        <div class="text">
          <p class="kasse">Kasse</p>
        </div>

        <div class="cart__Options"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      items: [],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Pompiere&display=swap");</style
>;

<style lang="css" scoped>
.parent-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}

.container {
  margin-top: 9.2%;
  height: 80%;
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
    background-color: #C4C4C4;
    border: solid #C4C4C4 3px;
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

.cart__Options {
}

.cart__Options,
.shipping__Options {
  margin-left: 10%;
  background-color: #2f4858;
  width: 80%;
  height: 80%;
  border: solid #2f4858 1px;
  border-radius: 25px;
}
</style>
