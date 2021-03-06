import Vue from 'vue'
import Router from 'vue-router'
import DashboardIndex from './views/dashboard/Index.vue'
import HomeIndex from './views/dashboard/children/homes/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: 'dashboard_path', component: DashboardIndex,
      children: [
        { path: '/', name: 'home_path', component: HomeIndex }
      ]
    }
  ]
})
