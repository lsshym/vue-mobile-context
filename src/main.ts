import { createApp } from "vue";
import App from "./App.vue";
import "amfe-flexible";

import "@/assets/css/initialize.css";
import VConsole from "vconsole";
import { initPlugin } from "vue-vconsole-devtools";

const app = createApp(App);


app.mount("#app");
// initPlugin(new VConsole());
