<template>
  <div class="grid-container-side-bar">
    <div class="logo">
      <img src="../assets/spotify-webplayer-sidebar.svg" alt="" srcset="" />
    </div>
    <div class="welcome">
      <ul>
        <li>
          <a href="">
            <div class="main"><span> Home </span></div>
          </a>
        </li>
        <li>
          <a href=""><span> Search </span></a>
        </li>
        <li>
          <a href=""><span> Your Library </span></a>
        </li>
      </ul>
      <div>
        <hr />
        <div></div>
      </div>
      <ul>
        <li>
          <a href=""><span> Create Playlist </span></a>
        </li>
        <li>
          <a href=""><span> Liked Songs </span></a>
        </li>
      </ul>
    </div>
    <div class="recent-played">
      <ul>
        <li>
          <a href=""><span> My Shazam Track </span></a>
        </li>
        <li>
          <a href=""><span> Nigeria Top 100 </span></a>
        </li>
        <li>
          <a href=""><span> Top Pop Music 2021 </span></a>
        </li>
        <li>
          <a href=""><span> Rap UK </span></a>
        </li>
        <li>
          <a href=""><span> Instrumentals </span></a>
        </li>
        <li>
          <a href=""><span> Pop Culture </span></a>
        </li>
        <li>
          <a href=""><span> Quiet Hours </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
        <li>
          <a href=""><span> Good Vibes </span></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.grid-container-side-bar {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 5% 30% 65%;
  padding-top: 24px;
  background-color: #000;
  z-index: 3;

  .logo {
    width: 100%;
    justify-content: space-between;
    display: flex;
    border: 0;
    margin: 0;
    padding: 0;
    text-transform: none;
    line-height: 1.6;
  }

  .welcome {
    div {
      position: relative;
      display: block;

      hr {
        background-color: #000;
        display: block;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
        margin-inline-start: auto;
        margin-inline-end: auto;
        overflow: hidden;
      }
    }
    ul {
      text-transform: none;
      line-height: 1.6;

      li {
        padding: 0 8px;
        border: 0;
        margin: 0;
        vertical-align: baseline;
        display: list-item;

        a {
          color: #fff;
          align-items: center;
          border-radius: 4px;
          display: flex;
          height: 40px;
          padding: 0 16px;
          color: #b3b3b3;
          text-decoration: none;
          // background-color: #282828;

          .main {
            color: #fff;
            width: 100%;
            border-radius: 4px;
            display: flex;
            color: #b3b3b3;
            text-decoration: none;
            background-color: #282828;
          }

          div {
            .icon {
              margin-right: 16px;
              display: block;
              height: 24px;
              width: 24px;
              border: 0;
              margin: 0;
              padding: 0;
            }

            span {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 14px;
              font-weight: 700;
              letter-spacing: normal;
              line-height: 16px;
              text-transform: none;
              border: 0;
              margin: 0;
              padding: 0;
              vertical-align: baseline;
            }
          }
        }
      }
    }
  }
  .recent-played {
    overflow-y: auto;
    // overflow: hidden !important;
    // overscroll-behavior-y: contain;
    // height: 100%;
    // padding: 8px 0;
    // margin: -8px 0px;
    // width: 240px;
    // height: 146px;

    ul {
      text-transform: none;
      line-height: 1.6;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 4px;

      li {
        padding: 0 8px;
        border: 0;
        margin: 0;
        vertical-align: baseline;
        display: list-item;

        a {
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
        }
      }
    }
  }
}
div {
  // background: grey;
}
</style>
