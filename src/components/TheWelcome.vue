<script>
export default {
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        { title: 'First', content: 'the first slide' },
        { title: 'Second', content: 'the second slide' },
        { title: 'Third', content: 'the third slide ' },
        { title: 'Fourth', content: 'the fourth slide' },
        { title: 'Fifth', content: 'the fifth slide' },
      ],
    };
  },
};

</script>

<script setup>
import { googleTokenLogin } from "vue3-google-login"
const login = () => {
  googleTokenLogin().then((response) => {
    console.log("Handle the response", response)
  })
}
</script>


<template>
  
  <v-carousel
    height="400"
    show-arrows="hover"
    cycle
    hide-delimiter-background
    interval="1000" 
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-card flat color="transparent">
        <v-card-text class="text-h2 font-weight-bold">{{ slide.title }}</v-card-text>
        <v-card-text>{{ slide.content }}</v-card-text>
      </v-card>
    </v-carousel-item>
  </v-carousel>
  <v-btn block @click="login">Registrate</v-btn>

</template>

<style>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    justify-content: center;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>