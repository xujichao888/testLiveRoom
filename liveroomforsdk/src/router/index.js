import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: () => import( '../views/search.vue')
  },
  {
    path: '/liveroom',
    name: 'liveroom',
    component: () => import('../views/liveRoom.vue'),
  },
  {
    path: '/roomlog',
    name: 'roomlog',
    component: () => import('../views/roomlog.vue')
  },
  {
    path: '/roomsetting',
    name: 'roomsetting',
    component: () => import( '../views/roomsetting.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import( '../views/edit.vue')
  },
  {
    path: '/profileedit',
    name: 'profileedit',
    component: () => import( '../views/profileedit.vue')
  },
  {
    path: '/blocklist',
    name: 'blocklist',
    component: () => import( '../views/blocklist.vue')
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: () => import( '../views/wallet.vue')
  },
  {
    path: '/bill',
    name: 'bill',
    component: () => import( '../views/bill.vue')
  },
  {
    path: '/pack',
    name: 'pack',
    component: () => import( '../views/pack.vue')
  },
  {
    path: '/recucling',
    name: 'recucling',
    component: () => import( '../views/recucling.vue')
  },
  {
    path: '/follow',
    name: 'follow',
    component: () => import( '../views/follow.vue')
  },
  {
    path: '/followedroom',
    name: 'followedroom',
    component: () => import( '../views/followedroom.vue')
  },
  {
    path: '/createroom',
    name: 'createroom',
    component: () => import( '../views/createroom.vue')
  },
  {
    path: '/sort',
    name: 'sort',
    component: () => import( '../views/sort.vue')
  },
  {
    path: '/editroomname',
    name: 'editroomname',
    component: () => import( '../views/editroomname.vue')
  },
  {
    path: '/setRoomPassword',
    name: 'setRoomPassword',
    component: () => import( '../views/setRoomPassword.vue')
  },
  {
    path: '/roomAnnouncement',
    name: 'roomAnnouncement',
    component: () => import( '../views/roomAnnouncement.vue')
  },
  {
    path: '/setNickname',
    name: 'setNickname',
    component: () => import( '../views/setNickname.vue')
  },
  {
    path: '/signature',
    name: 'signature',
    component: () => import( '../views/signature.vue')
  },
  {
    path: '/administrators',
    name: 'administrators',
    component: () => import( '../views/administrators.vue')
  },
  {
    path: '/addadmin',
    name: 'addadmin',
    component: () => import( '../views/addadmin.vue')
  },
  {
    path: '/roomFans',
    name: 'roomFans',
    component: () => import( '../views/roomFans.vue')
  },
  {
    path: '/InviteFriends',
    name: 'InviteFriends',
    component: () => import( '../views/InviteFriends.vue')
  },
  {
    path: '/setBackground',
    name: 'setBackground',
    component: () => import( '../views/setBackground.vue')
  },
  {
    path: '/roomblocklist',
    name: 'roomblocklist',
    component: () => import( '../views/roomblocklist.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
