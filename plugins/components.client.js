import Vue from 'vue'

import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import RadialProgress from 'vue-radial-progress';
import Notifications from 'vue-notification'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret, faCreditCard,  } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('vue-perfect-scrollbar', VuePerfectScrollbar);
Vue.component('vue-radial-progress', RadialProgress);
Vue.use(Notifications)

// library.add(faUserSecret)
// Vue.component('font-awesome-icon', FontAwesomeIcon)