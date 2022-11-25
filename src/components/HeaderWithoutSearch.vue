<template>
  <div class="bar-header">
    <div class="row-header">
      <div class="logo-header">
        <a href="/">
          <img src="../assets/images/github.svg" alt="logo github" />
        </a>
        <p>GitHub Userboard</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderWithoutSearch',
  data () {
    return {}
  }
}
</script>

<style scoped>
@import '../assets/base.scss';

p {
  font-weight: 700;
  font-size: 20px;
  line-height: 23.5px;
  color: #fff;
}

.row-header {
  display: flex;
}
.bar-header {
  background: #24292f;
  height: 80px;
  box-shadow: 0px 12px 36px rgba(204, 204, 204, 0.25);
}
.logo-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  width: 25%;
  padding-left: 5%;
}

.logo-header img {
  width: 40px;
  height: 40px;
}

/* @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  } */
</style>
