<script lang="ts" setup>
// import CoinModel from "@/components/coin/CoinModel.vue";
// import CoinGroupModel from "@/components/coin/CoinGroupModel.vue";
// import CoinScene from "@/components/coin/CoinScene.vue";
//const appStore = useAppStore();
</script>
<template>
  <div class="home-wrapper">
    <div class="main-content">
<!--      <img-->
<!--        class="image-coins"-->
<!--        alt=""-->
<!--        src="/Homeimagecoinscircle-exury.png"-->
<!--      />-->
      <div class="coins-wrapper">
<!--        <CoinModel></CoinModel>-->
<!--        <CoinGroupModel></CoinGroupModel>-->
        <CoinScene />
      </div>
      <div class="content-wrapper">
        <div class="title-wrapper">
          <p class="title-top">
            Gana más, arriesga menos. <span class="title-accent">¡Descubre el 1er
            exchange sin custodia!</span>
          </p>
        </div>
        <div class="paragraph-wrapper">
          <p class="loremIpsum">
            En Exury, el único sonido que escucharás es el de tu inversión creciendo. Cambia hoy euros por stablecoins y siente la libertad de tener el control sobre dónde almacenarlos.
          </p>
        </div>
        <div class="buttons-wrapper">
          <v-btn rounded variant="outlined" class="btn-how-it-works text-capitalize">How it works</v-btn>
          <v-btn rounded color="primary" class="btn-buy-crypto text-capitalize">Buy Crypto</v-btn>
        </div>
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
  font-size: 64px;
  position: relative;
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    top: -56px;
    width: 100%;
    min-height: calc(100% + 56px);
    gap: 8px;
    .content-wrapper {
      width: 100%;
      max-height: fit-content;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      .title-wrapper {
        position: relative;
        letter-spacing: 0.5px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        font-weight: normal;
        width: 65%;
        .title-top {
          display: flex;
          flex-direction: column;
          margin: 0;
          line-height: 1.2em;
          font-size: 64px;
          width: 90%;
        }
        .title-accent {
          font-weight: 800;
          color: #f2f2f2;
          line-height: 1.2em;
        }
      }
      .paragraph-wrapper {
        width: 70%;
        align-self: stretch;
        position: relative;
        font-size: 24px;
        line-height: 1.2em;
        letter-spacing: 0.5px;
        z-index: 2;
      }
      .buttons-wrapper {
        margin-top: 32px;
        width: 255px;
        height: fit-content;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 16px;
        text-align: center;
        font-size: 14px;
        color: #1cba75;
      }
    }
  }

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
  background:red;
}
.sponsorship-wrapper {
  margin: 0 !important;
  position: absolute;
  width: 100%;
  bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  background: green;
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
  height: 100%;
  display: flex;
  align-items: center;
}
@media (max-width: $screen-md) {
  .home-wrapper {
    align-items: flex-end;
    justify-content: end;
    font-size: 3.3rem;
    gap: 0;
    padding: 0 16px;
  }
  .main-content {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: 8px;
    margin-bottom: 32px;
    padding: 0 16px;
  }
  .coins-wrapper {
    position: absolute;
    top: -640px;
    left: -150px;
  }
  .title-wrapper {
    position: relative;
    letter-spacing: 0.5px;
    z-index: 1;
    display: block;

    .title-top {
      width: 100%;
      margin: 0;
      line-height: 4rem;
      display: inline-block;
      font-size: 48px;
    }

    .title-accent {
      display: inline-block;
      font-size: 48px;
    }
  }
  .paragraph-wrapper {
    width: 100%;
    align-self: stretch;
    position: relative;
    font-size: 1rem;
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
  .btn-how-it-works, .btn-buy-crypto {
    width: 100%;
    height: 50px;
  }
  .sponsorship-wrapper {
    left: 16px;
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
  .title-top, .title-middle {
    font-size: 48px;
    display: block;
    height: fit-content;
  }

  .title-accent {
    font-size: 48px;
    display: inline-block;
  }
}
</style>
