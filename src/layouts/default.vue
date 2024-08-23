<template>
  <v-app>
    <v-main id="main" class="fill-width overflow-hidden position-relative text-left d-flex justify-center align-center">
      <div id="mainContainer" class="rounded-circle" />
      <div id="list">
        <!-- Sidebar with padding -->
        <div id="sidebarWrapper">
          <SideBar />
        </div>
        <!-- Main content area -->
        <div id="listInner">
          <div id="top-bar-wrapper">
            <div id="searchBarWrapper">
              <div id="searchBar">
                <v-text-field
                  v-model="searchQuery"
                  label="Search"
                  single-line
                  hide-details
                  @input="onSearch"
                  class="custom-search-bar"
                >
                  <template v-slot:prepend-inner>
                    <v-icon color="#2A2A2AFF">mdi-magnify</v-icon>
                  </template>
                </v-text-field>
              </div>
              <v-btn
                class="btn-search"
              >
                <v-icon style="font-size: 28px; opacity: 0.8" color="white">mdi-magnify</v-icon>
              </v-btn>
            </div>
            <div id="iconButtonParent">
              <div id="menu">
                <div id="container">
                  <div id="stateLayer">
                    <v-icon icon="mdi-bell-outline"></v-icon>
                  </div>
                </div>
              </div>
              <AvatarMenu />
            </div>
          </div>
          <div class="flex fill-width fill-height">
            <transition name="scroll-x-transition" mode="out-in">
              <router-view />
            </transition>
          </div>
        </div>
        <img
          id="logoExury"
          alt=""
          src="/LogoExury1.png"
        />
        <div id="whatsapp-wrapper">
          <div id="stateLayer">
            <v-icon id="maskGroupIcon" icon="mdi-whatsapp"></v-icon>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
#main {
  background-color: #141218;
  font-size: 16px;
  color: #c7d4cf;
  margin: 0 !important;
  padding: 0 !important;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
#mainContainer {
  position: absolute;
  top: 10%;
  left: 28%;
  filter: blur(400px);
  background-color: #1f866c;
  width: 940px;
  height: 450px;
  transform: rotate(30deg);
  transform-origin: 0 0;
  mix-blend-mode: normal;
}
#list {
  backdrop-filter: blur(4px);
  border-radius: 16px;
  background-color: rgba(13, 21, 19, 0.5);
  border: 1px solid #2d4740;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px 0 16px 16px;
  gap: 60px;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  top: 80px;
  left: 80px;
  width: calc(100% - 160px);
  height:calc(100% - 160px);
  #whatsapp-wrapper {
    position: absolute;
    bottom: 40px;
    right: 40px;
    border-radius: 100px;
    background-color: #1cba75;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 1;
    #stateLayer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 8px;
    }
  }
}
#sidebarWrapper {
  flex-shrink: 0;
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-right: 44px;
}
#listInner {
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 1;
  overflow: hidden;
}
#icon {
  width: 24px;
  position: relative;
  height: 24px;
}
#container {
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
#menu {
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#menuFab {
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
#icon1 {
  width: 24px;
  position: relative;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
}
#stateLayer1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
#container1 {
  border-radius: 100px;
  background-color: #d5ffed;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
#navItem1 {
  align-self: stretch;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
#divider {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #cac4d0;
  box-sizing: border-box;
  height: 1px;
}
#divider1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 16px;
}
#navItem5 {
  width: 80px;
  height: 56px;
  display: none;
}
#destinations {
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#fab {
  box-shadow:
      0px 4px 8px 3px rgba(0, 0, 0, 0.15),
      0px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  background-color: #1cba75;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
#destinationsParent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
#supportingText {
  position: relative;
  letter-spacing: 0.5px;
  line-height: 24px;
}
#content1 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
#trailingElements {
  width: 48px;
  height: 48px;
}
#stateLayer10 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 4px;
  gap: 4px;
}
#searchBar {
  width: 360px;
  border-radius: 28px;
  background-color: #f6f6f7;
  height: 56px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-width: 360px;
  max-width: 720px;
}
#searchBarWrapper {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.btn-search {
  display: none;
}
#genericAvatarIcon {
  width: 40px;
  position: relative;
  border-radius: 100px;
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
}
#iconButtonParent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
#top-bar-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;
}
#logoExury {
  width: 103px;
  position: absolute;
  margin: 0 !important;
  top: 28px;
  left: 98px;
  height: 35.2px;
  object-fit: cover;
  z-index: 1000;
}
#maskGroupIcon {
  width: 24px;
  position: relative;
  height: 24px;
  object-fit: contain;
}

@media (max-width: $screen-md) {
  #content {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    #list {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: start;
      padding: 16px 0 0 0;
      gap: 120px;
      overflow: hidden;
      position: absolute;
      top: 48px;
      left: 16px;
      width: calc(100% - 32px);
      height: calc(100% - 64px);
      #logoExury {
        width: 103px;
        position: absolute;
        margin: 0 !important;
        top: 28px;
        left: 100px;
        height: 35.2px;
        object-fit: cover;
        z-index: 1000;
      }
      #listInner {
        height: 100%;
        min-height: 100%;
        width: 100%;
        max-width: 100%;
        #top-bar-wrapper {
          z-index: 2;
          #searchBarWrapper {
            display: flex;
            justify-content: flex-end;
            margin-left: 20px;
            margin-right: -15px;
            height: 56px;
            width: clamp(56px, 10vw, 56px);
            #searchBar {
              display: none;
            }
            .btn-search {
              margin-top: 2px;
              display: block;
              background-color: transparent;
              box-shadow: none;
            }
          }
        }
      }
      #whatsapp-wrapper {
        position: absolute;
        bottom: 40px;
        right: 20px;
        height: 49px;
        width: 49px;
        border-radius: 100%;
        background-color: #1cba75;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        z-index: 1;
        #stateLayer {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 8px;
          #maskGroupIcon {
            font-size: 35px;
          }
        }
      }
    }
  }
  #sidebarWrapper {
    width: 100%;
    padding-right: 0;
  }
}

</style>

<script lang="ts" setup>
//
import AvatarMenu from "@/components/AvatarMenu.vue";
import { ref } from "vue";
const searchQuery = ref("");
const onSearch = (value: string) => {
  console.log(value);
};
</script>
