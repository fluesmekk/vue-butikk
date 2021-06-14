<template>
  <div class="cointainer">
    <img
      src="https://cdn.discordapp.com/attachments/798198287693905933/852154451937722428/relative_widen_4fc7df341dd976d5af32c2017c5c339e.jpg"
    />
    <img
      class="text"
      src="https://cdn.discordapp.com/attachments/798198287693905933/852458904851578880/unknown.png"
    />
    <div class="about">
      <p>
        Vi startet opp i 2017, med en eksplosiv vekst innen løsninger og
        produkter til trening. Vi har en gullstandard innen kundeservice.
      </p>
    </div>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Pompiere&display=swap');
</style>

<script>


export default {
  name: "About",
};
</script>

<style lang="css" scoped>
img {
  margin-top: 70px;
  height: 100%;
  margin-left: 12%;
  padding-top: 7%;
}
.cointainer {
  height: 100%;
  display: grid;
  grid-template: 40% 40%/ 50% 50%;
}

.text {
  height: 30%;
  grid-column: 2;
  grid-row: 1;
}

.about {
  font-family: 'Pompiere', cursive;
  text-align: start;
  font-size: 20px;
  border: solid #ffffff 1px;
  border-radius: 10px;
  grid-column: 2;
  background-color: #8bc7f8;
  height: 110px;
  width: 78%;
  padding-left: 12px;
}

p {
  color: black;
  opacity: 100%;
}
</style>
