import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listMahasiswa: [
      {
        npm: "0001",
        nama: "Nobita",
        alamat: "Ciendog",
        ipk: "3.8",
      },
      {
        npm: "0002",
        nama: "Doraemon",
        alamat: "Cibarengkok",
        ipk: "4.0",
      },
      {
        npm: "0003",
        nama: "Suneo",
        alamat: "Cipaheut",
        ipk: "3.9",
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getListMahasiswa: (state) => state.listMahasiswa,
  },
  modules: {},
});
