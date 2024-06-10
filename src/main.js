import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; // PrimeVue theme
import 'primevue/resources/primevue.min.css'; // Core CSS
import 'primeicons/primeicons.css'; // Icons
import 'primeflex/primeflex.css'; // Flexbox utility

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import Carousel from 'primevue/carousel';
import Breadcrumb from 'primevue/breadcrumb';

const app = createApp(App)

app.use(router)
app.use(PrimeVue);

app.component('Button', Button);
app.component('InputText', InputText);
app.component('Dialog', Dialog);
app.component('Carousel', Carousel);
app.component('Breadcrumb', Breadcrumb);

app.mount('#app')
