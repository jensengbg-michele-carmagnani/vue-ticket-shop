import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/allevents",
    name: "AllEvents",
    component: () => import("@/views/AllEvents.vue"),
  },
  {
    path: "/allevents/:id",
    name: "InfoTicket",
    component: () => import("@/views/InfoTicket.vue"),
  },
  {
    path:"/ticket",
    name:"Ticket",
    component:() =>import('@/views/Ticket.vue')
  }
];

const router = new VueRouter({
  routes,
});

export default router;
