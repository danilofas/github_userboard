<template>
  <div style="width: 100%">
    <HeaderWithSearch />
    <div class="list-users-dashboard">
      <p class="title-list-users">Top Users</p>
      <div class="list-users-internal">
        <div class="user-item" v-for="user in listUsers" :key="user.id">
          <div class="avatar-user">
              <img :src="user.avatar_url" alt="avatar" v-if='isLoaded' @load="loadImage" />
              <img src='../assets/images/duck.svg' alt='Foto do usuário' v-else/>
          </div>
          <div class="user-data">
            <a :href="base_url + user.login" target="_self">
              <p>{{ user.login }}</p>
            </a>
            <img src="../assets/images/clip.svg" alt="clip" />
            <a :href="user.html_url" target="_blank">github</a>
          </div>
        </div>
      </div>
    </div>
    <Footer class="footer-position" />
  </div>
</template>

<script>
import HeaderWithSearchVue from '../components/HeaderWithSearch.vue'
import FooterVue from '../components/Footer.vue'

export default {
  components: {
    HeaderWithSearch: HeaderWithSearchVue,
    Footer: FooterVue
  },

  name: 'ListPage',

  data () {
    return {
      listUsers: [],
      isLoaded: false,
      loading: false,
      error: null
    }
  },

  created () {
    this.listAllUsers()
    this.loadImage()
    this.base_url = 'http://localhost:8080/'
  },

  methods: {
    listAllUsers () {
      this.loading = true
      return this.$httpGitUserBoard
        .get(`users?per_page=200`, {
          headers: {
            'content-type': 'application/json'
          }
        })
        .then((response) => {
          this.listUsers = response.data
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.loading = false
        })
    },
    loadImage () {
      this.isLoaded = true
    }
  }
}
</script>

<style scoped>
.list-users-dashboard {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  width: 100%;
  padding-top: 5vh;
  overflow: auto;
}

.list-users-internal {
  display: flex;
  height: 100%;
  width: 1024px;
  flex-wrap: wrap;
}

.list-users-dashboard .list-users-internal .user-item img {
  max-width: 90px;
}

.title-list-users {
  font-weight: 800;
  font-size: 48px;
  line-height: 23.5px;
  color: #24292f;
  text-align: center;
  margin: 3vh auto;
}

.user-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.5vh 3rem;
}

.user-data {
  text-align: center;
}

.user-data a:hover {
  color: #54a3ff !important;
  cursor: pointer;
}
.avatar-user {
  background-color: rgba(84, 163, 255, 1);
  border-radius: 10px;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer-position {
  width: 100%;
  z-index: 10;
  position: fixed;
  top: 89vh;
}

@media (max-width: 1024px) {
  .footer-position {
    top: 87vh;
  }
}
</style>
