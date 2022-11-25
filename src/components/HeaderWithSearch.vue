<template>
  <div class='bar-header'>
    <div class='row-header'>
      <div class='logo-header'>
        <a href='/'>
          <img src='../assets/images/github.svg' alt='logo github' />
        </a>
        <p>GitHub Userboard</p>
      </div>
      <div class='bar-search-header'>
        <input type='text' v-model='pesquisa' />

        <img
          src='../assets/images/search.svg'
          alt='icone lupa de busca'
          id='icon-search'
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderWithSearch',
  data () {
    return {
      pesquisa: ''
    }
  },

  watch: {
    pesquisa (val) {
      if (val.length > 3) {
      }
    }
  },

  computed: {
    ...mapGetters('userMoule', { userGetter: 'searchState' })
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

.bar-search-header {
  width: 75%;
  padding-right: 5%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
}

#icon-search {
  position: absolute;
  top: 3.5vh;
  left: 67.5rem;
  width: 16px;
  z-index: 1;
}

input[type='text'] {
  width: 20%;
  height: 32px;
  background: #fff;
  border-radius: 8px;
  border: none;
  padding: 0 10px;
  font-size: 16px;
  line-height: 19px;
  color: #24292f;
  padding-left: 2.5rem;
  position: relative;
}

.logo-header img {
  width: 40px;
  height: 40px;
}

@media (max-width: 1024px) {
  #icon-search {
    top: 3.8vh;
    left: 36.5rem;
  }
}
</style>
