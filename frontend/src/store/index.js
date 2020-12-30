import Vue from "vue";
import Vuex from "vuex";
import ax from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "http://localhost:3000",
    allEvents: Array,
    ticketObj: Object,
    user: Object,
    token: Object,
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
    resetUser(state) {
      state.user = {};
    },
    setUser(state, userInfo) {
      state.user = userInfo;
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
    async checkState(ctx) {
      const user = sessionStorage.getItem("userInfo")
      if ( user !== null) {
        ctx.commit("setUser", user);
        
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
    async login(ctx,loginInfo) {
      try {
        let userInfo = await ax.post(`${ctx.state.url}/login`,loginInfo);
        console.log("data login from db", userInfo.data.succes);

        if (userInfo.data.succes) {
          ctx.commit("resetUser");
          //set session
          sessionStorage.setItem("userInfo", JSON.stringify(userInfo.data));
          //set user info
          ctx.commit("setUser", userInfo.data);

          
        } else {
          alert("Password or username not correct");
        }
      } catch (error) {
        console.log("Something went wrong", error);
      }
    },
  },
  modules: {},
  getters: {
    ticket(state) {
      return state.ticketObj;
    },
    concertsCount(state) {
      return state.allEvents.length;
    },
    ticketNumber(state) {
      return state.ticketObj;
    },
    getUserRole(state) {
      return state.user.role
    }
  },
});
