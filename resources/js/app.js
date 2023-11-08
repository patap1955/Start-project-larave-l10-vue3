import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import '@/assets/scss/_index.scss';
import App from "@/components/App.vue";
import Router from "@/router/router.js";

// console.log(Router)

const app = createApp(App);

app.use(Router);
app.mount("#app");
