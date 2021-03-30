import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
import publicJS from './assets/js/publicJS';
import Vconsole from 'vconsole'
import LongPress from './assets/js/longPress'
Vue.use(LongPress, {time: 1000})
let vConsole = new Vconsole()
Vue.use(vConsole)
import dsbridge from 'dsbridge';
Vue.prototype.$dsbridge = dsbridge;
Vue.use(publicJS)
Vue.config.productionTip = false
import {
        Button,
        Popup, 
        Swipe, 
        SwipeItem,
        PullRefresh,
        Cell,
        List,
        Tab,
        Tabs, 
        DropdownMenu,
         DropdownItem,
         Uploader 
  } from 'vant';
  
Vue.use(Button);
Vue.use(Popup);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(PullRefresh);
Vue.use(Cell);
Vue.use(List);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Uploader);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
