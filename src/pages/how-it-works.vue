<template>
  <div class="discover-wrapper">
    <div class="title-wrapper">
      <div class="title" @click="onStart">
        <b class="card-title">Header</b>
        <div class="subtitle">
          Lorem ipsum dolor sit amet consectetur. Ullamcorpermalesuada vel
          platea vehicula libero.
        </div>
      </div>
      <div class="button-wrapper">
        <v-btn
          rounded
          variant="outlined"
          class="btn-label text-capitalize"
          @click="onStart"
          >Empezar</v-btn
        >
      </div>
    </div>
    <OnBoardingCardGroup />
  </div>
</template>

<script lang="ts" setup>
import OnBoardingCardGroup from "@/components/cards/OnBoardingCardGroup.vue";

const onStart = () => {
  console.log("Start");
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@media (max-width: $screen-base) {
  .discover-wrapper {
    align-self: stretch;
    flex: 1;
    overflow-y: hidden;
    height: 100%;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    z-index: 1;
    font-size: 2.5em;
  }
  .title-wrapper {
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    align-items: end;
    height: fit-content;
    overflow-y: scroll;
    margin-top: 20px;
    .subtitle {
      align-self: stretch;
      position: relative;
      font-size: 0.45em;
      letter-spacing: 0.5px;
      margin-bottom: 0;
      width: 100%;
    }
    .title {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 8px;
    }
    .button-wrapper {
      z-index: 1000;
      display: flex;
      align-items: end;
      justify-content: end;
      margin-right: 16px;
      .btn-label {
        border: 0.1px solid white;
        color: #1cba75;
      }
    }
  }
}
@media (max-width: $screen-md) {
  .discover-wrapper {
    font-size: 2rem;
    .title-wrapper {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
      gap: 24px;
      height: fit-content;
      overflow-y: scroll;
      margin-top: 8px;
      padding: 16px 16px 0 16px;
      .subtitle {
        align-self: stretch;
        position: relative;
        font-size: 1rem;
        letter-spacing: 0.5px;
        margin-bottom: 0;
        width: 100%;
      }
      .title {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 8px;
      }
      .button-wrapper {
        display: flex;
        align-items: end;
        justify-content: end;
        margin-bottom: 24px;
        .btn-label {
          color: #1cba75;
          border-color: white;
          height: 40px;
        }
      }
    }
  }
}
</style>
