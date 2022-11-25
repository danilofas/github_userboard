<template>
  <div style="width: 100%;">
    <HeaderWithoutSearch />
    <div class='row-avatar-detail'>
      <div class='go-back'>
        <a href='/'>
          <img src='../assets/images/arrowleft.svg' alt='Botão voltar' />
        </a>
      </div>
      <div class='avatar-user-detail'>
        <div class='back-avatar'>
          <img :src='userDetailsPage.avatar_url' alt='Foto do usuário' v-if='isLoaded' @load="loadImage" />
          <img src='../assets/images/duck.svg' alt='Foto do usuário' v-else/>
        </div>
      </div>
    </div>
    <div class='table-details-repos'>
      <div class='data-user-name'>
        <p>{{ userDetailsPage.login }}</p>
      </div>
      <div
        v-for="repo in userDetailsRepos"
        :key="repo.id"
        class="rows-details-repos"
      >
        <div class="data-user-repo-name">
          <a :href="repo.html_url" target="_blank"
            ><p>{{ repo.name }}</p>
          </a>
        </div>
        <div class="data-user-repo-watchers">
          <img src="../assets/images/watcher.svg" alt="Ícone de olho" />
          <p>{{ repo.watchers_count }}</p>
        </div>
        <div class="data-user-repo-stareds">
          <img src="../assets/images/started.svg" alt="Ícone de estrela" />
          <p>{{ repo.stargazers_count }}</p>
        </div>
      </div>
    </div>
    <Footer class="footer-position" />
  </div>
</template>

<script>
import HeaderWithoutSearchVue from '../components/HeaderWithoutSearch.vue'
import FooterVue from '../components/Footer.vue'

export default {
  /* eslint-disable */
  components: {
    HeaderWithoutSearch: HeaderWithoutSearchVue,
    Footer: FooterVue,
  },

  name: "UserDetailsPage",

  data() {
    return {
      userDetailsPage: [],
      userDetailsRepos: [],
      isLoaded: false,
      loading: false,
      error: null,
    };
  },

  created() {
    let usernameParam = this.$route.params.username
    this.searchDetailsPageUser(usernameParam)
    this.searchDetailsReposUser(usernameParam)
    this.loadImage()
  },

  methods: {
    searchDetailsPageUser(usernameParam) {
      this.loading = true;
      return this.$httpGitUserBoard
        .get(`users/${usernameParam}`, {
          headers: {
            "content-type": "application/json"
          },
        })
        .then((response) => {
          this.userDetailsPage = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    searchDetailsReposUser(usernameParam) {
      this.loading = true;
      return this.$httpGitUserBoard
        .get(`users/${usernameParam}/repos`, {
          headers: {
            "content-type": "application/json"
          },
        })
        .then((response) => {
          this.userDetailsRepos = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    loadImage(){
      this.isLoaded = true
    }
  }
}
</script>

<style scoped>
.row-avatar-detail {
  width: 100%;
  display: flex;
  margin: 8vh 0 5vh 0;
}

.go-back {
  width: 10%;
  margin: 0 0 0 8%;
}

.avatar-user-detail {
  width: 82%;
  display: flex;
  align-items: center;
  margin-left: 26%;
}
.avatar-user-detail img {
  width: 65%;
}

.back-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #54a3ff;
  width: 300px;
  height: 300px;
  border-radius: 50%;
}

.table-details-repos {
  margin: 0 20%;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
}

.rows-details-repos {
  width: 100%;
  display: flex;
  margin-bottom: 0.7vh;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
  overflow: auto;
}

.rows-details-repos div a:hover {
  color: #54a3ff;
  cursor: pointer;
}

.data-user-name {
  width: 100%;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 40px;
  line-height: 47px;
  margin-bottom: 3vh;
}

.data-user-repo-name {
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.data-user-repo-watchers {
  width: 12.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 5%;
}

.data-user-repo-stareds {
  width: 12.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-position {
  width: 100%;
  z-index: 10;
  position: fixed;
  top: 89vh;
}

@media (max-width: 1024px) {
  .avatar-user-detail {
    margin-left: 20%;
  }

  .footer-position {
    top: 87vh;
  }
}
</style>
