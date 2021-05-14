<template>
  <div class="grid-container-music-section">
    <div class="current-playing">
      <div>
        <div class="info-box">
          <div class="card-title">
            <div class="lx-s">
              <img src="../assets/FCMB.png" alt="card-img" />
            </div>
            <div class="lm">
              <a href=""><p>Rap UK</p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="controls">
      <div><img src="../assets/spotify-play.png" alt=""></div>
    </div>
    <div class="settings">
      <div><img src="../assets/spotify-setting.png" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.grid-container-music-section {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 0.3fr 1fr 0.3fr;

  background-color: #181818;
  border-top: 1px solid #282828;
  align-items: center;
  justify-content: space-between;
  height: auto;
  min-width: 620px;

  a {
    color: white;
    text-decoration: none;
    align-items: center;
    border-bottom: none;
    display: flex;
    flex: 1;
    justify-content: flex-start;
    overflow: hidden;
    align-items: center;

    p {
      align-items: center;
      padding: 0px 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      white-space: normal;
      word-break: break-word;
      // font-size: 16px;
      font-weight: 700;
      letter-spacing: normal;
      line-height: 24px;
      text-transform: none;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
  }

  .current-playing {
    min-width: 380px;
    width: 30%;

    .info-box {
      width: 90%;
      // @include padding-sm;
      padding: 0;
      border-radius: 4px;
      height: 100px;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .card-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .lx-s {
          min-height: 70px;
          min-width: 70px;
          border-radius: 4px;
          // padding-bottom: 100%;
          position: relative;
          width: 40%;
          border-radius: 2px;
          left: 0;
          top: 0;

          .lm {
            align-items: center;
            display: flex;
            flex: 1;
            justify-content: space-between;
            padding: 16px;
            bottom: 0;
            cursor: pointer;
            left: 0;
            overflow: hidden;
            right: 10px;
            text-indent: 100%;
            top: 0;
            white-space: nowrap;

            a {
              color: #fff;
              text-decoration: none;
              color: #b3b3b3;
              cursor: default;
              text-decoration: none;
              align-items: center;
              border-bottom: none;
              display: flex;
              -ms-flex: 1;
              flex: 1;
              justify-content: flex-start;
              overflow: hidden;

              p {
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                white-space: normal;
                word-break: break-word;
                font-size: 16px;
                font-weight: 700;
                letter-spacing: normal;
                line-height: 24px;
                text-transform: none;
                margin-block-start: 1em;
                margin-block-end: 1em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
              }
            }
          }
        }
      }
    }
  }

}
</style>
