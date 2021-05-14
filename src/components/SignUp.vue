<template>
  <div class="page">
    <div class="signup">
      <div class="welcome">
        <img src="../assets/spotify-signup.svg" alt="" srcset="" />

        <h2>Sign up for free to start listening.</h2>
      </div>
      <div class="fb-div">
        <router-link to="/"
          ><button class="btn-pill-pry-ld fb">
            Sign up with Facebook
          </button></router-link
        >
      </div>
      <p>
        By clicking on sign-up, you agree to the
        <a href="https://www.spotify.com/ng/legal/end-user-agreement/"
          >Spotify Terms and Conditions</a
        >
        and
        <a href="https://www.spotify.com/ng/legal/privacy-policy/"
          >Privacy Policy</a
        >.
      </p>
      <span> or </span>
      <form action="POST">
        <div>
          <label for="email" class="label">What's your email?</label>
          <input
            type="text"
            id="email"
            name="email"
            class="input-init input"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label for="confirmEmail" class="label">Confirm your email</label>
          <input
            type="text"
            id="confirmEmail"
            name="email"
            class="input-init input"
            placeholder="Enter your email again"
          />
        </div>
        <div>
          <label for="email" class="label">Create a password</label>
          <input
            type="text"
            id="password"
            name="email"
            class="input-init input"
            placeholder="Create a password"
          />
        </div>
        <div>
          <label for="email" class="label">Confirm password</label>
          <input
            type="text"
            id="ConfirmPassword"
            name="email"
            class="input-init input"
            placeholder="Confirm password"
          />
        </div>
        <div>
          <input type="radio" id="one" value="One" v-model="picked" />
          <label for="one" class="radio">Male</label>
          <input type="radio" id="two" value="Two" v-model="picked" />
          <label for="two" class="radio">Female</label>
        </div>
        <div>
          <input type="checkbox" id="checkbox" v-model="checked" />
          <label for="checkbox" class="radio">
            I would prefer not to receive marketing messages from Spotify</label
          >
        </div>
        <div>
          <input type="checkbox" id="checkbox" v-model="checked" />
          <label for="checkbox" class="radio">
            Share my registration data with Spotify's content providers for
            marketing purposes.</label
          >
        </div>
        <div class="footer">
          <p>
            By clicking on sign-up, you agree to the
            <a href="https://www.spotify.com/ng/legal/end-user-agreement/"
              >Spotify Terms and Conditions</a
            >
            and
            <a href="https://www.spotify.com/ng/legal/privacy-policy/"
              >Privacy Policy</a
            >.
          </p>
          <div>
            <router-link to="/"
              ><button class="btn-pill-pry-ld">
                Sign Up
              </button></router-link
            >
          </div>
          <p class="login">Have an account? <a href="/">Log in.</a></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.page {
  box-sizing: border-box;
}

.signup {
  max-width: 450px;
  margin: 0px auto;
  padding-bottom: 130px;
}

.welcome {
  padding: 40px 0px 32px;
  display: flex;
  flex-direction: column;

  img {
    text-align: center;
    height: 27px;
  }

  h2 {
    text-align: center;
    line-height: 60px;
    letter-spacing: -0.04em;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
    padding: 30px 0px 0px 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 28px;
    letter-spacing: -0.25px;
    line-height: 36px;
    color: inherit;
    font-weight: 700;
  }
}
.fb {
  background: #1877f2;
  color: white;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  text-transform: none;
  letter-spacing: normal;

  &:hover {
  background: #1877f2;
  }
}
input {
  @include border-radius;
  border: 10px;
  background: transparent;

  ::-webkit-input-placeholder {
    /* Edge */
    color: $color-placeholder;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: $color-placeholder;
  }
  ::placeholder {
    color: $color-placeholder;
  }
}
// Input default
.input-init {
  @include border;
  @include padding-sm;
  width: 100%;
}
div {
  padding: 10px 0px;
}
p {
}
.radio {
  display: inline;
  color: $color-label;
  padding: 20px 20px 20px 4px;
}

p {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  display: block;
  padding: 0px 0px 1em;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.25px;
  color: inherit;

  a {
    color: $color-secondary;
  }
}

span {
  display: table;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 2px;
  margin: 0px auto 1em;
  color: rgb(127, 127, 127);
  position: relative;
  text-align: center;
  width: 85%;

  ::before,
  ::after {
    box-sizing: border-box;
    border-top: 1px solid rgb(204, 204, 204);
    content: "";
    display: table-cell;
    position: relative;
    top: 0.8em;
    width: 42%;
  }
}

form {
  display: block;
  margin-top: 0em;

  div {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    padding-bottom: 24px;

    .label {
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.25px;
      -webkit-box-align: center;
      align-items: center;
      display: flex;
      font-weight: 700;
      width: 100%;
      padding-bottom: 8px;
    }

    .input {
      appearance: none;
      background-image: none;
      border: 0px;
      display: block;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0px;
      width: 100%;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      margin-top: 0px;
      margin-bottom: 0px;
      border-radius: 4px;
      padding: 14px;
      background-color: var(--background-base, #ffffff);
      box-shadow: inset 0 0 0 1px var(--essential-subdued, #868686);
      color: var(--text-base, #000000);
    }
  }
}

.footer {
  text-align: center;
  font-weight: 700;

  p {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
    padding: 0px 0px 1em;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.25px;
    color: inherit;
  }

  div {
    display: flex;
    justify-content: space-around;
    margin-bottom: 24px;
    font-weight: 700;
  }

  .login {
    box-sizing: border-box;
    font-family: spotify-circular, Helvetica, Arial, sans-serif;
    -webkit-tap-highlight-color: transparent;
    display: block;
    padding: 0px 0px 1em;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    color: inherit;
  }
}

.fb-div {
  display: flex;
  justify-content: space-around;
  margin-bottom: 22px;

  button {
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    text-transform: none;
    letter-spacing: normal;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    border: 0px;
    display: inline-block;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    transition-duration: 33ms;
    transition-property: background-color, border-color, color, box-shadow,
      filter, transform;
    vertical-align: middle;
    align-self: center;
  }
}
</style>
