<template>
  <div class="grid-container-activity-bar">
    <div class="welcome"><h2>Friend Activity</h2></div>
    <div class="recent-played">
      <div>
        <p>Alan Walker - <span>Online</span></p>
        <p>Current Listening - Justin Bieber</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.grid-container-activity-bar {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 7% 93%;
  overflow-y: auto;
  background-color: #000;

  .welcome {
    h2 {
      color: #fff;
      display: inline-block;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: -0.04em;
      line-height: 36px;
      text-transform: none;
      padding: 0px 18px;
    }
  }
  .recent-played {
    div {
      p {
        color: #fff;
        display: inline-block;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: -0.04em;
        line-height: 36px;
        text-transform: none;
        padding: 0px 18px;

        span {
          color: $color-secondary;
        }
      }
    }
  }
}
</style>
