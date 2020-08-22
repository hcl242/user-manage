import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import API from '@/util/common/ApiUtil'
import Cookie from '@/util/common/CookieUtil'
import Fetch from '@/util/common/Fetch'
import Storage from '@/util/common/Storage'

createApp(App).use(store).use(router).mount('#app')
