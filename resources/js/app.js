require('./bootstrap')

import Vue from 'vue'
import App from './views/App'
import router from './routes'

// import validate from './vee-validate'
// import rules from './rules-vee-validate'
// import element from './element'
// import component from './registercomponent'
// import store from './store'

const app = new Vue({
  el: '#app',
  components: { App },
  router
});
