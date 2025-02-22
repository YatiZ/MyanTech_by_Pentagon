import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductsView from '../views/ProductsView.vue';
import ProductDetailsView from '../views/ProductDetailsView.vue';
import SupportView from '../views/SupportView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
import CheckoutView from "../views/CheckoutView.vue"
import OrdersView from "../views/OrdersView.vue"
import OrderDetailsView from '../views/OrderDetailsView.vue';

const routes = [
  { path: '/', name:"home", component: HomeView },
  { path: '/products', name:"products", component: ProductsView },
  { path: '/products/:id', name:"product-details", component: ProductDetailsView },
  { path: '/support', name:"support", component: SupportView },
  { path: '/auth/login', name:"login", component: LoginView },
  { path: '/auth/signup', name:"signup", component: SignupView },
  { path: '/checkout', name:"checkout", component: CheckoutView },
  { path: '/history', name:"history", component: OrdersView },
  { path: '/history/:id', name:"history-details", component: OrderDetailsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;