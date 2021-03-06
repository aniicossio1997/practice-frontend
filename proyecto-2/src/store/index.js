import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[
      {nombre: 'Manzana', cantidad: 0},
      {nombre: 'Naranja', cantidad: 0},
      {nombre: 'Kiwi', cantidad: 0},
    ]
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad ++
    },
    reniciar(state){
      state.frutas.map(each => (each.cantidad =0));

      // state.frutas.forEach(item => {
      //   item.cantidad = 0
      // })
    }
  },
  actions: {
  },
  modules: {
  }
})
