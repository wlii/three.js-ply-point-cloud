import Vue from 'vue'
import Router from 'vue-router'
import plyPointcloud from '@/pages/ply-pointcloud'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path: '/ply-pointcloud',name: 'plyPointcloud',component: plyPointcloud},
  ]
})
