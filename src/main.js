import { createApp } from "vue";
import BootStrap from "@/bootstrap";
import App from "@/App.vue";

const app = createApp(App);
app.use(BootStrap);
app.mount("#app");
