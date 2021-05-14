<template>
  <div class="grid-container">
    <SideBar class="side-bar"></SideBar>
    <MusicSection class="music-section"></MusicSection>
    <ActivityBar class="activity-bar"></ActivityBar>
    <MusicControls class="music-control"></MusicControls>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import ActivityBar from "../components/ActivityBar";
import MusicSection from "../components/MusicSection";
import MusicControls from "../components/MusicControls";

export default {
  name: "WebPlayer",
  components: {
    SideBar,
    ActivityBar,
    MusicSection,
    MusicControls,
  },
};
</script>

<style lang="scss" scoped>
.grid-container {
  width: 100%;
  height: 100vh;
  display: grid;
  // background: yellow;
  grid-template-columns: 0.2fr 1fr 0.2fr;
  grid-template-rows: 89vh 11vh;
}

.music-control {
  grid-column: 1 / -1;
  position: relative;
  z-index: 100;

}
</style>
