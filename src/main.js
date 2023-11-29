import { createApp } from "vue";
import App from "./App.vue";
import MaskInputLibrary from "./lib";

const app = createApp(App);

app.use(MaskInputLibrary);

app.mount("#app");
