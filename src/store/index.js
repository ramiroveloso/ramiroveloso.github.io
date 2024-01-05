import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [], 
    filtro:'',
    cargando: false,
    notificar: null,
    contadorEliminadas: 0
  },
  mutations: {
    setTareas(state,tareas){
      state.tareas=tareas
    },
    agregarTarea(state,tarea){
      state.tareas.push(tarea)
      state.notificar= 'agregar'
    },
    removerTarea(state,index){
      state.tareas.splice(index,1)
      state.contadorEliminadas++
      state.notificar='eliminar'
    },
    modificarTarea(state,{index,tarea}){
      Vue.set(state.tareas,index,tarea)
      state.notificar='editar'
    },
    setFiltro(state,value){
      state.filtro=value
    },
    setCargando(state,value){
      state.cargando=value
    },
    setNotificar(state,val){
      state.notificar=val
    }
  },
  actions: {
    cargarTareas({commit}){
      //Simulamos request al backend
      commit('setCargando',true)
      this.cargando=true
      setTimeout(()=>{
          commit('setTareas',['Aprender Vue','Aprender Vuex','Aprender Vuetify'])
          commit('setCargando',false)
          this.cargando=false

      },750)
    },
  },
  getters: {
    obtenerTareasFiltradas(state){
      let reg = new RegExp(state.filtro,'i')
      return state.tareas.filter(tarea => reg.test(tarea))
    }  
  },
  modules: {
  }
})
