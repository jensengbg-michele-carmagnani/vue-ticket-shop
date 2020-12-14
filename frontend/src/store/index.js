import Vue from "vue";
import Vuex from "vuex";
import ax from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "http://localhost:3000",
    allEvents: Array,
    ticket: Object,
  },
  mutations: {
    showEvents(state, data) {
      state.allEvents = data;
    },
    setTicket(state, ticket) {
      state.ticket = ticket;
      console.log("ticket in setTicket", state.ticket);
    },
    cleanTicket(state) {
      state.ticket = {};
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
        console.log("info ticket  ", data);
        ctx.commit("setTicket", ticket);
      } catch (error) {
        console.log("Error form db ticket", error);
      }
    },
  },
  modules: {},
  getters: {
    ticket(state) {
      (id) => {
        return state.allEvents.filter((event) => event.id === id)[0];
      };
    },
    concertsCount(state) {
      return state.allEvents.length;
    },
  },
});
