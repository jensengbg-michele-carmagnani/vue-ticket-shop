import Vue from "vue";
import Vuex from "vuex";
import ax from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "http://localhost:3000",
    allEvents: Array,
    ticketObj: Object,
  },
  mutations: {
    showEvents(state, data) {
      state.allEvents = data;
    },
    setTicket(state, ticket) {
      state.ticketObj = ticket.data;
      console.log("ticket in setTicket obj", ticket.data);
    },
    cleanTicket(state) {
      state.ticketObj = {};
    },
  },
  actions: {
    async fetchEvents(ctx) {
      try {
        let events = await ax.get(`${ctx.state.url}/events`);
        console.log("events ", events.data.events);
        ctx.commit("showEvents", events.data.events);
      } catch (error) {
        console.log("error", error);
      }
    },
    async buyTicket(ctx, data) {
      try {
        let ticket = await ax.post(`${ctx.state.url}/ticket`, data);
        console.log(" info ticket to buy  ", data);
        ctx.commit("setTicket", ticket);
      } catch (error) {
        console.log("Error form db ticket", error);
      }
    },
  },
  modules: {},
  getters: {
    ticket(state) {
      return state.ticketObj
    },
    concertsCount(state) {
      return state.allEvents.length;
    },
    ticketNumber(state) {
      return state.ticketObj;
    },
  },
});
