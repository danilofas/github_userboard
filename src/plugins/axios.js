import Vue from 'vue'
import axios from 'axios'

Vue.use({
  install (Vue) {
    Vue.prototype.$httpGitUserBoard = axios.create({
      baseURL: 'https://api.github.com/'
    })
  }
})
