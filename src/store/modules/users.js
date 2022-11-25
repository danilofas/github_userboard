import Vue from 'vue'
/* eslint-disable */
const getDefaultState = () => {
    return {
        login: '',
        id: '',
        node_id: '',
        avatar_url: '',
        gravatar_id: '',
        url: '',
        html_url: '',
        followers_url: '',
        following_url: '',
        gists_url: '',
        starred_url: '',
        subscriptions_url: '',
        organizations_url: '',
        repos_url: '',
        events_url: '',
        received_events_url: '',
        type: '',
        site_admin: false
    }
}

const state = getDefaultState()

const actions = {
    getUser ({ commit }, userlogin) {
        return Vue.prototype.$httpGitUserBoard
            .get(`${userlogin}`, {
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => {
                commit('saveState', response.data)
                return response.data
            }).catch(error => {
                console.log(error)
            })
    }
}

const mutations = {
  saveState: (state, newValue) => {
    Object.assign(state, newValue)
  }
}

const getters = {
    searchState: (state) => {
        return state
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
