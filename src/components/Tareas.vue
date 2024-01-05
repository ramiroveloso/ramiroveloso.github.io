<template>
    <div>
        <h2> Gestion de tareas</h2>
        <span>Vigentes: {{obtenerTareasVigentes}} </span><span>Eliminadas: {{obtenerTareasEliminadas}} </span><span>Totales: {{obtenerTareasTotales}}</span>
        <br>
        <br>
        <tareas-nueva></tareas-nueva>
        <br> 
        <tareas-filtrar></tareas-filtrar>
        <div v-if="cargando" class="cargando"><br><br>Cargando...</div>
        <TareasListar v-else/>
        <tareas-notificador :notificar="notificar"></tareas-notificador>
    </div>
</template>
    
<script>
    import {mapActions,mapState,mapMutations} from 'vuex'
    import TareasNueva from './TareasNueva.vue'
    import TareasListar from './TareasListar.vue'
    import TareasFiltrar from './TareasFiltrar.vue'
    import TareasNotificador from './TareasNotificador.vue'

    export default {
        name: 'tareas-component',
        components: { TareasNueva, TareasListar, TareasFiltrar, TareasNotificador },
        mounted(){
            this.cargarTareas()
        },
        computed:{
            ...mapState(['cargando','tareas','notificar','contadorEliminadas']),// podemos usar this.cargando
            obtenerTareasVigentes(){
                return this.tareas.length
            },
            obtenerTareasEliminadas(){
                return this.contadorEliminadas
            },
            obtenerTareasTotales(){
                return this.obtenerTareasVigentes + this.contadorEliminadas
            }
        },
        watch:{
            notificar(){
                setTimeout(()=>this.setNotificar(null),1500)
            }
        },
        methods:{
            ...mapActions(['cargarTareas']),
            ...mapMutations(['setNotificar'])
        }
    }
</script>

<style>
    .cargando{
        color: blue;
    }
</style>