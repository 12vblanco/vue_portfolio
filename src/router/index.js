import { createRouter, createWebHistory } from "vue-router";
import Success from "../components/contact/Success.vue";
import AboutPage from "../components/pages/AboutPage.vue";
import BlogPage from "../components/pages/BlogPage.vue";
import ContactPage from "../components/pages/ContactPage.vue";
import HomePage from "../components/pages/HomePage.vue";
import Terms from "../components/pages/Terms.vue";
import Cart from "../components/products/Cart.vue";
import ErrorPayment from "../components/products/ErrorPayment.vue";
import SuccessPayment from "../components/products/SuccessPayment.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/blog", component: BlogPage },
  { path: "/contact", component: ContactPage },
  { path: "/cart", component: Cart },
  { path: "/success", component: Success },
  { path: "/successPayment", component: SuccessPayment },
  { path: "/errorPayment", component: ErrorPayment },
  { path: "/terms", component: Terms },
];

//Scroll To Top
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
