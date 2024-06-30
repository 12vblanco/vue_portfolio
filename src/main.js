import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { useProvideCart } from "./utils/CartContext";

const app = createApp(App);

app.use(router);
useProvideCart();
app.mount("#app");
