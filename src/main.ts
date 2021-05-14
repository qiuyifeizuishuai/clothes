import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
import './assets/style/style.css'
import './assets/style/styleM.css'
import router from "./router";
app.use(router)

app.mount('#app')
