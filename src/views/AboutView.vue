<script setup>
import { googleTokenLogin } from "vue3-google-login"
const login = () => {
  googleTokenLogin().then((response) => {
    console.log("Handle the response", response)
  })
}
</script>
<template>
  <v-card  transition="scroll-x-transition" class="mx-auto" max-width="400">
    <v-layout>
      <v-system-bar color="pink-darken-2">
        <v-spacer></v-spacer>
        <v-icon>mdi-window-minimize</v-icon>
        <v-icon>mdi-window-maximize</v-icon>
        <v-icon>mdi-close</v-icon>
      </v-system-bar>

      <v-app-bar color="pink">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>We Are Exury</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-magnify"></v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card color="pink">
                <v-card-title class="text-h5">Autonomía Financiera</v-card-title>
                <v-card-subtitle>
                  Toma el control de tu futuro financiero
                </v-card-subtitle>
                <v-card-actions>
                  <v-btn @click="login" text="Registrate" variant="text"></v-btn>
                </v-card-actions>
              </v-card>

              <v-card class="mx-auto" max-width="500" border flat>
                <v-list-item class="px-6" height="88">
                  <template v-slot:prepend>
                    <v-avatar color="surface-light" size="32">🎯</v-avatar>
                  </template>
                  <template v-slot:title>Alcanza tus metas.</template>
                  <template v-slot:append>
                    <v-btn @click="login" class="text-none" color="primary" text="Alcanzar Meta" variant="text" slim></v-btn>
                  </template>
                </v-list-item>

                <v-divider></v-divider>

                <v-card-text class="text-medium-emphasis pa-6">
                  <div class="text-h6 mb-6">Alcanza tus primeros $1000</div>
                  <div class="text-h4 font-weight-black mb-4">0%</div>
                  <v-progress-linear
                    bg-color="surface-variant"
                    class="mb-6"
                    color="primary"
                    height="10"
                    model-value="2"
                    rounded="pill"
                  ></v-progress-linear>
                  <div>$0 of $1000 earned — 7 days left</div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
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
