import Vue from 'vue';
import App from './App.vue';
import 'nes.css/css/nes.css';
import VueRouter from 'vue-router';

import NotFound from '@/components/NotFound.vue';
import Home from '@/components/Home.vue';

const router = new VueRouter({
    base: __dirname,
    routes: [
      { path:"/",name:'Home',component:Home },
      { path: '*', name: 'NotFound', component: NotFound }
    ]
  })

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
