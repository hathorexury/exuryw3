<script lang="ts" setup>
import { watch, ref, onMounted } from "vue";
import { SIDEBAR_LINKS } from "@/domain/constants/sidebar.constant";
import { useAppStore } from "@/infraestructure/stores/app";
import router from "@/infraestructure/router";
const route = useRoute();
const currentPageIcon = ref("");
const appStore = useAppStore();
watch(route, (newRoute) => {
  currentPageIcon.value = SIDEBAR_LINKS.find(
    (link) => link.route === newRoute.path,
  ).icon;
});
onMounted(() => {
  currentPageIcon.value = SIDEBAR_LINKS.find(
    (link) => link.route === route.path,
  ).icon;
});
</script>
<template>
<!--  <h1>-->
<!--    <v-icon>{{ currentPageIcon || appStore.getPageIcon }}</v-icon>-->
<!--    {{ appStore.getActivePage }} page-->
<!--  </h1>-->
  <div class="empty-page-wrapper">
    <img src="/image5.png"/>
    <h2>Proximamente!</h2>
    <p>
      The page you are looking for might it's been developing.
    </p>
    <v-btn color="primary" rounded @click="router.push('/home')">Volver al Home</v-btn>
    <a href="https://www.google.com">Saber más</a>
  </div>
</template>
<style lang="scss">
@import '@/styles/variables.scss';
.empty-page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 300px);
  text-align: center;
  padding: 16px;
}
.empty-page-wrapper img {
  width: 200px;
  height: 200px;
}
.empty-page-wrapper h2 {
  font-size: 24px;
  margin: 20px 0 -20px 0;
  color: $primary-color;
}
.empty-page-wrapper p {
  font-size: 16px;
  margin: 32px 0;
}
.empty-page-wrapper a {
  color: #42b983;
  text-decoration: none;
  margin-top: 10px;
}
@media (max-width: $screen-sm) {
  .empty-page-wrapper {
    height: calc(100vh - 120px);
  }
}
</style>
<route lang="yaml">
meta:
  layouts: default
</route>
