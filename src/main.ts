import { createApp } from 'vue';
import App from './App.vue';
import './styles/global.scss';
import 'animate.css';
import { router } from './router';
import './samples/node-api';

createApp(App)
    .use(router)
    .mount('#app')
    .$nextTick(() => {
        postMessage({ payload: 'removeLoading' }, '*');
    })
    .then();
