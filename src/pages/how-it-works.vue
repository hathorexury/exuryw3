<template>
  <div class="discover-wrapper">
    <div class="title-wrapper">
      <div class="title" @click="onStart">
        <b class="card-title">Header</b>
        <div class="subtitle-wrapper">
          <div class="subtitle">
            Lorem ipsum dolor sit amet consectetur. Ullamcorpermalesuada vel
            platea vehicula libero.
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
    position: relative;
    height: fit-content;
    width: 100%;
    max-width: 100%;
    gap: 10px;
    z-index: 1;
    font-size: 2.5em;
    margin-top: 10px;
    .title-wrapper {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: end;
      height: fit-content;
      overflow-y: hidden;
      margin-top: 20px;
      min-height: fit-content;
      width: 100%;
      .title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 8px;
        width: 100%;
        min-height: fit-content;
        .card-title{
          height: fit-content;
        }
      }
      .subtitle-wrapper {
        margin-bottom: 0;
        width: 100%;
        position: relative;
        display: flex;
        align-items: start;
        justify-content: space-between;
        .subtitle {

          font-size: 0.45em;
          letter-spacing: 0.5px;

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
  }
}
@media (max-width: $screen-md) {
}
</style>
