export default [
  {
    path: '/',
    name: 'ListPage',
    component: () => import(/* webpackChunkName: "ListPage" */ `@/views/ListPage.vue`)
  },
  {
    path: '/:username',
    name: 'UserDetailsPage',
    component: () => import(/* webpackChunkName: "UserDetailsPage" */ `@/views/UserDetailsPage.vue`)
  }
]
