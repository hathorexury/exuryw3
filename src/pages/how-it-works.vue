<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

const currentFrame = ref(0);
const isInsideCardGroup = ref(false);
const cardWrapper = ref<HTMLElement | null>(null);
const scrollPosition = ref(0);

const frames = ref([
  {
    title: "Header",
    description:
      "Lorem ipsum dolor sit amet consectetur. Non tellus consectetur auctor risus orci ut mollis. Tincidunt dictum ut aliquet lacus id vitae. Rutrum sit sed pretium quam condimentum elit a. Et id eleifend faucibus et mi ut amet massa vitae. Ultricies rhoncus habitasse erat vel id sapien.",
    image: "/image5.png",
  },
  {
    title: "Header 2",
    description:
        "Lorem ipsum dolor sit amet consectetur. Non tellus consectetur auctor risus orci ut mollis. Tincidunt dictum ut aliquet lacus id vitae. Rutrum sit sed pretium quam condimentum elit a. Et id eleifend faucibus et mi ut amet massa vitae. Ultricies rhoncus habitasse erat vel id sapien.",
    image: "/image5.png",
  },
  {
    title: "Header 3",
    description:
        "Lorem ipsum dolor sit amet consectetur. Non tellus consectetur auctor risus orci ut mollis. Tincidunt dictum ut aliquet lacus id vitae. Rutrum sit sed pretium quam condimentum elit a. Et id eleifend faucibus et mi ut amet massa vitae. Ultricies rhoncus habitasse erat vel id sapien.",
    image: "/image5.png",
  },
  {
    title: "Header 3",
    description:
        "Lorem ipsum dolor sit amet consectetur. Non tellus consectetur auctor risus orci ut mollis. Tincidunt dictum ut aliquet lacus id vitae. Rutrum sit sed pretium quam condimentum elit a. Et id eleifend faucibus et mi ut amet massa vitae. Ultricies rhoncus habitasse erat vel id sapien.",
    image: "/image5.png",
  },
]);

const nextFrame = () => {
  if (currentFrame.value >= 1) {
    scrollToRight();
  }
  currentFrame.value = (currentFrame.value + 1) % frames.value.length;
};

const prevFrame = () => {
  if (currentFrame.value <= frames.value.length - 1 && currentFrame.value >= 1) {
    scrollToLeft();
  }
  currentFrame.value = (currentFrame.value - 1 + frames.value.length) % frames.value.length;
};

const setFrame = (index: number) => {
  currentFrame.value = index;
};

const scrollToRight = () => {
  const container = document.querySelector('.cards-transition-group');
  const card = document.querySelector('.card-selected') as HTMLElement;
  if (container && card) {
    container.scrollBy({ left: card.offsetWidth, behavior: 'smooth' });
  }
}

const scrollToLeft = () => {
  const container = document.querySelector('.cards-transition-group');
  const card = document.querySelector('.card-selected') as HTMLElement;
  if (container && card) {
    container.scrollBy({ left: (-card.offsetWidth + 100), behavior: 'smooth' });
  }
}

const mouseEnterCardGroup = () => {
  isInsideCardGroup.value = true;
}

const mouseLeaveCardGroup = () => {
  isInsideCardGroup.value = false;
}

const checkCurrentFrame = (value: number) => {
  if (value <= 180) {
    currentFrame.value = 0;
  }
  if (value >= 180 && value <= 420) {
    currentFrame.value = 1;
  }
  if (value >= 420 && value <= 650) {
    currentFrame.value = 2;
  }
  if (value >= 650) {
    currentFrame.value = 3;
  }
};

const handleScroll = () => {
  if (cardWrapper.value) {
    scrollPosition.value = cardWrapper.value.scrollLeft;
  }
};

onMounted(() => {
  if (window.innerWidth < 500) {
    cardWrapper.value = document.querySelector('.cards-transition-group');
    if (cardWrapper.value) {
      cardWrapper.value.addEventListener('scroll', handleScroll);
    }
  }
});

watch(scrollPosition, () => {
  if (window.innerWidth < 500) {
    checkCurrentFrame(scrollPosition.value);
  }
});

const onStart = () => {
  console.log('Start');
}
</script>

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
        <v-btn rounded variant="outlined" class="btn-label text-capitalize" @click="onStart">Empezar</v-btn>
      </div>
    </div>
    <div class="cards-wrapper" @mouseenter="mouseEnterCardGroup" @mouseleave="mouseLeaveCardGroup">
      <transition-group
          name="slide-fade"
          tag="div"
          class="cards-transition-group"
      >
        <div
            v-for="(frame, index) in frames"
            :key="index"
            :id="`card-${index}`"
            :ref="`frame-${index}`"
            :class="
            index === currentFrame ? 'card-selected' : 'card'
            "
        >
          <div class="card-content">
            <img class="card-image" alt="" :src="frame.image" />
            <div class="card-text-wrapper">
              <b class="card-title">{{ frame.title }}</b>
              <div
                  :class="
                  index === currentFrame
                    ? 'description-selected'
                    : 'description'
                "
              >
                {{ frame.description }}
              </div>
            </div>
          </div>
        </div>
      </transition-group>
      <div class="dotParent">
        <div
            v-for="(_, index) in frames"
            :key="index"
            :class="
            index === currentFrame ? 'dotActive' : 'dotInactive'
          "
            @click="setFrame(index)"
        >
          <div class="dotItem" />
        </div>
      </div>
      <div class="card-left-navigation-wrapper" v-if="isInsideCardGroup">
        <v-btn icon="mdi-chevron-left" @click="prevFrame" v-if="currentFrame > 0">
        </v-btn>
      </div>
      <div class="card-right-navigation-wrapper" v-if="isInsideCardGroup">
        <v-btn
            icon="mdi-chevron-right"
            @click="nextFrame"
            v-if="currentFrame < frames.length - 1"
        >
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
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
.cards-wrapper {
  margin-top: 15px;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 10px;
  font-size: 25.03px;
  color: #1cba75;
  height: 80%;
  max-height: 80%;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  .cards-transition-group::-webkit-scrollbar {
    display: none;
  }
  .cards-transition-group {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: flex-start;
    gap: 8px;
    padding: 20px 30px 20px 0;
    height: fit-content;
    min-height: 680px;
    width: 100%;
    max-width: 100%;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    .card {
      border-radius: 28px;
      background-color: #0d1513;
      border: 1px solid #2d4740;
      box-sizing: border-box;
      //height: calc(60vh - 100px);
      //width: calc((60vh - 120px) * 0.75);
      //min-width: calc((60vh - 120px) * 0.75);
      height: 574.9px;
      width: 405px;
      min-width: 405px;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 36px;
      opacity: 0.7;
      transition: transform 0.3s, opacity 0.3s;
    }
    .card-selected {
      border-radius: 28px;
      background-color: #0D1513;
      border: 1px solid #2d4740;
      box-sizing: border-box;
      //height: calc(60vh - 100px);
      //width: calc((60vh - 120px) * 0.75);
      //min-width: calc((60vh - 120px) * 0.75);
      height: 609px;
      width: 453px;
      min-width: 453px;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 36px;
      margin-top: -16px;
      opacity: 1;
      transition: transform 0.3s, opacity 0.3s;
    }
  }
  .card-left-navigation-wrapper {
    position: absolute;
    top: calc(45% - 20px);
    left: 10px;
  }
  .card-right-navigation-wrapper {
    position: absolute;
    top: calc(45% - 20px);
    right: 10px;
  }
}
.card-content {
  align-self: stretch;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .card-image {
    width: 237px;
    position: relative;
    object-fit: cover;
  }
  .card-text-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    .card-title {
      position: relative;
      letter-spacing: -0.02em;
      line-height: 1.1em;
      margin-top: 20px;
    }
    .description-selected {
      align-self: stretch;
      position: relative;
      font-size: 0.55em;
      line-height: 1.1em;
      letter-spacing: 0.45px;
      color: #c7d4cf;
    }
    .description {
      align-self: stretch;
      position: relative;
      font-size: 0.55em;
      line-height: 1.1em;
      letter-spacing: 0.45px;
      color: #c7d4cf;
    }
  }
}
.dotActive {
  width: 24px;
  position: relative;
  border-radius: 33px;
  height: 8px;
  overflow: hidden;
  flex-shrink: 0;
  background-color: #1cba75;
  cursor: pointer;
}
.dotInactive {
  width: 8px;
  position: relative;
  border-radius: 33px;
  height: 8px;
  overflow: hidden;
  flex-shrink: 0;
  background-color: #ededed;
  cursor: pointer;
}
.dotItem {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
}
.dotParent {
  position: absolute;
  bottom: 8px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  z-index: 3;
}
@media(max-width: $screen-base) {
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
  .cards-wrapper {
    margin-top: 15px;
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 10px;
    font-size: 25.03px;
    color: #1cba75;
    height: 80%;
    max-height: 80%;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    .cards-transition-group::-webkit-scrollbar {
      display: none;
    }
    .cards-transition-group {
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: flex-start;
      gap: 8px;
      padding: 20px 30px 20px 0;
      height: fit-content;
      min-height: 680px;
      width: 100%;
      max-width: 100%;
      overflow: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      .card {
        border-radius: 28px;
        background-color: #0d1513;
        border: 1px solid #2d4740;
        box-sizing: border-box;
        //height: calc(60vh - 100px);
        //width: calc((60vh - 120px) * 0.75);
        //min-width: calc((60vh - 120px) * 0.75);
        height: 574.9px;
        width: 405px;
        min-width: 405px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 36px;
        opacity: 0.7;
        transition: transform 0.3s, opacity 0.3s;
      }
      .card-selected {
        border-radius: 28px;
        background-color: #0D1513;
        border: 1px solid #2d4740;
        box-sizing: border-box;
        //height: calc(60vh - 100px);
        //width: calc((60vh - 120px) * 0.75);
        //min-width: calc((60vh - 120px) * 0.75);
        height: 609px;
        width: 453px;
        min-width: 453px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 36px;
        margin-top: -16px;
        opacity: 1;
        transition: transform 0.3s, opacity 0.3s;
      }
    }
    .card-left-navigation-wrapper {
      position: absolute;
      top: calc(45% - 20px);
      left: 10px;
    }
    .card-right-navigation-wrapper {
      position: absolute;
      top: calc(45% - 20px);
      right: 10px;
    }
  }
  .card-content {
    align-self: stretch;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    .card-image {
      width: 237px;
      position: relative;
      object-fit: cover;
    }
    .card-text-wrapper {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      .card-title {
        position: relative;
        letter-spacing: -0.02em;
        line-height: 1.1em;
        margin-top: 20px;
      }
      .description-selected {
        align-self: stretch;
        position: relative;
        font-size: 0.55em;
        line-height: 1.1em;
        letter-spacing: 0.45px;
        color: #c7d4cf;
      }
      .description {
        align-self: stretch;
        position: relative;
        font-size: 0.55em;
        line-height: 1.1em;
        letter-spacing: 0.45px;
        color: #c7d4cf;
      }
    }
  }
  .dotActive {
    width: 24px;
    position: relative;
    border-radius: 33px;
    height: 8px;
    overflow: hidden;
    flex-shrink: 0;
    background-color: #1cba75;
    cursor: pointer;
  }
  .dotInactive {
    width: 8px;
    position: relative;
    border-radius: 33px;
    height: 8px;
    overflow: hidden;
    flex-shrink: 0;
    background-color: #ededed;
    cursor: pointer;
  }
  .dotItem {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
  }
  .dotParent {
    position: absolute;
    bottom: 8px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
    z-index: 3;
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
      margin-top: 20px;
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
        margin-bottom: 16px;
        .btn-label {
          color: #1cba75;
          border-color: white;
          height: 40px;
        }
      }
    }
    .cards-wrapper {
      max-height: 600px;
      margin-top: -55px;
      .cards-transition-group {
        padding: 60px 20px 20px 20px;
        .card {
          margin-top: 40px;
          border-radius: 28px;
          background-color: #0d1513;
          border: 1px solid #2d4740;
          box-sizing: border-box;
          //height: calc(60vh - 80px);
          //width: calc((60vh - 180px) * 0.75);
          //min-width: calc((60vh - 180px) * 0.75);
          height: 411.7px;
          width: 245px;
          min-width: 245px;
          overflow: hidden;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 36px;
          opacity: 0.7;
          transition: margin 1s, width 0.5s, height 0.5s, opacity 1s;

        }
        .card-selected {
          border-radius: 28px;
          background-color: #0d1513;
          border: 1px solid #2d4740;
          box-sizing: border-box;
          //height: calc(60vh - 80px);
          //width: calc((60vh - 180px) * 0.75);
          //min-width: calc((60vh - 180px) * 0.75);
          height: 495px;
          width: 270px;
          min-width: 270px;
          overflow: hidden;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 36px;
          opacity: 1;
          transition: margin 1s, width 0.5s, height 0.5s, opacity 1s;
        }
      }
    }
    .card-left-navigation-wrapper {
      display: none;
    }
    .card-right-navigation-wrapper {
      display: none;
    }
    .card-image {
      width: 142px;
      position: relative;
      object-fit: cover;
    }
    .description-selected {
      font-size: 16px;
    }
    .description {
      font-size: 16px;
    }
  }

  .dotActive {
    width: 24px;
    position: relative;
    border-radius: 33px;
    height: 8px;
    overflow: hidden;
    flex-shrink: 0;
    background-color: #1cba75;
    cursor: pointer;
  }
  .dotInactive {
    width: 8px;
    position: relative;
    border-radius: 33px;
    height: 8px;
    overflow: hidden;
    flex-shrink: 0;
    background-color: #ededed;
    cursor: pointer;
  }
  .dotItem {
    position: absolute;
    height: 100%;
    width: 100%;
    top: -20px;
    right: 0;
    left: 0;
  }
  .dotParent {
    position: absolute;
    top: -40px;
    right: 16px;
    width: fit-content;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
}
</style>
