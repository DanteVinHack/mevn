import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import message from '@/plugins/message';
import components from './components/UI';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize';

const app = createApp(App);

components.forEach(component => app.component(component.name, component))

window.M = M;

app
  .use(store)
  .use(router)
  .use(message)
  .mount('#app')
