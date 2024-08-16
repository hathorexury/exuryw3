<script lang="ts" setup>
const isAnimationV2 = ref(false);
</script>
<template>
  <div class="home-wrapper">
    <div class="main-content">
      <div class="coins-wrapper">
        <CoinGroupModel v-if="!isAnimationV2" />
        <CoinScene v-if="isAnimationV2" />
      </div>
      <div class="title-wrapper">
        <p class="title-top">
          <br />
          Gana más<br />
          Arriesga Menos.<br />
          <span class="title-accent">Descube el 1º Exchange sin custodia</span><br />
        </p>
        <div class="paragraph-wrapper">
          <p>
            En Exury el único sonido que escucharás es el de tu inversión creciendo. Cambia hoy tus euros a stable coins y experimienta la tranquilidad de saber que tu dinero esta bajo tu control.
          </p>
        </div>
      </div>
      <div class="buttons-wrapper">
        <v-btn
          rounded
          variant="outlined"
          class="btn-how-it-works text-capitalize"
          >How it works</v-btn
        >
        <v-btn
          rounded
          color="primary"
          class="btn-buy-crypto text-capitalize"
          @click="isAnimationV2 = !isAnimationV2"
          >Buy Crypto</v-btn
        >
      </div>
    </div>
  </div>
  <div class="sponsorship-wrapper">
    <img
      class="sponsor-left"
      alt=""
      src="/EN_Funded_by_European_Union_vert_RGB_NEG.png"
    />
    <img class="sponsor-right" alt="" src="/banco-de-espana-white.png" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.home-wrapper {
  margin: 0 !important;
  min-height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  padding: 0 0 24px;
  box-sizing: border-box;
  gap: 32px;
  z-index: 1;
  font-size: 100px;
}
.main-content {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
}
.image-coins {
  width: 622.1px;
  position: absolute;
  margin: 0 !important;
  top: -50px;
  right: 70px;
  height: 623px;
  object-fit: cover;
  z-index: 0;
}
.title-wrapper {
  display: flex;
  width: 976px;
  padding-bottom: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  letter-spacing: 0.5px;
  z-index: 1;
  margin-top: 97px;
  font-weight: normal;
  .title-top {
    display: flex;
    flex-direction: column;
    margin: 0;
    line-height: 1em;
    font-size: 0.8em;
    width: 90%;
  }
  .title-accent {
    font-weight: 800;
    color: #f2f2f2;
    line-height: 0.9em;
    font-size: 1em;
  }
}
.paragraph-wrapper {
  width: 70%;
  align-self: stretch;
  position: relative;
  font-size: 22px;
  letter-spacing: 0.5px;
  z-index: 2;
}
.button {
  border-radius: 100px;
  border: 1px #919c97;
  box-sizing: border-box;
  height: 40px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.button1 {
  border-radius: 100px;
  background-color: #1cba75;
  height: 40px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.buttons-wrapper {
  width: 255px;
  height: 56px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  text-align: center;
  font-size: 14px;
  color: #1cba75;
}
.sponsorship-wrapper {
  margin: 0 !important;
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 32px;
  z-index: 2;
  text-align: center;
  color: #fff;
  .sponsor-left {
    width: 124px;
    position: relative;
    height: 104px;
    object-fit: cover;
    filter: brightness(1000%);
  }
  .sponsor-right {
    width: 220px;
    position: relative;
    height: 48.6px;
    object-fit: cover;
  }
}
.frameParent {
  align-self: stretch;
  width: 1025px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  gap: 32px;
  z-index: 1;
}
.stateLayer13 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
}
.labelText {
  position: relative;
  letter-spacing: 0.1px;
  line-height: 20px;
  font-weight: 500;
}
.coins-wrapper {
  position: absolute;
  top: 0;
  right: -50px;
  width: fit-content;
  height: fit-content;
}
@media (max-width: $screen-md) {
  .home-wrapper {
    align-items: flex-end;
    justify-content: end;
    font-size: 3.3rem;
    gap: 0;
    flex-direction: column;
    padding-top: 147px;
  }
  .main-content {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    margin-bottom: 32px;
    padding: 0;
  }
  .coins-wrapper {
    position: absolute;
    top: -640px;
    left: -150px;
  }
  .title-wrapper {
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: relative;
    letter-spacing: 0.5px;
    margin-top: 120px;
    z-index: 1;
    width: 100%;
    display: flex;
    gap: 8px;

    .title-top,

    .title-accent {
      display: inline-block;
      font-size: 40px;
    }
  }
  .paragraph-wrapper {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    align-self: stretch;
    position: relative;
    letter-spacing: 0.5px;
    z-index: 2;
  }
  .buttons-wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    text-align: center;
    font-size: 14px;
    color: #1cba75;
    margin-bottom: 113px;
  }
  .btn-how-it-works,
  .btn-buy-crypto {
    width: 100%;
    height: 50px;
  }
  .sponsorship-wrapper {
    justify-content: flex-start;
    bottom: 0;
    .sponsor-left {
      width: 76px;
      position: relative;
      height: 64px;
      object-fit: cover;
    }
    .sponsor-right {
      width: 136px;
      position: relative;
      height: 30px;
      object-fit: cover;
    }
  }
}
@media (max-width: $screen-xs) {
  .title-top,
  .title-middle {
    font-size: 38px;
    display: inline-block;
    height: fit-content;
  }

  .title-accent {
    font-size: 38px;
    display: inline-block;
  }
}
</style>
