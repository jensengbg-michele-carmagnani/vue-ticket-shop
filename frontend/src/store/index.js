import Vue from "vue";
import Vuex from "vuex";
import ax from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "http://localhost:3000",
    allEvents: Array,
    ticketObj: Object,
    user = Object,
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
    resetUser(state){
      state.user = {}
    },
    setUser(state,userInfo){
      state.user = userInfo
    }
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
    async checkState(ctx){
      if(sessionStorage.getItem('userInfo') !== null){
        ctx.commit('setUser', JSON.parse(sessionStorage.getItem('userInfo')))
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
    async login(ctx, userInfo){
      try {
        let data = await ax.post(`${ctx.state.url}/login`,{userInfo});
        console.log('data login from db', data)

        if (data.data.success){
          ctx.commit('emptyUser');
          ctx.commit('setUser', data.data)
        }else{
          alert('The email does not exist')
        }
        console.log('info')
        ctx.commit('setUser', data)
      } catch (error) {
        console.log('login error something went wrong',error)
      }
    }
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
