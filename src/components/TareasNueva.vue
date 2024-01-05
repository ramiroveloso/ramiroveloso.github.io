<template>
    <div>
    <label>Nueva Tareas:</label>
    <input type="text" v-model="tarea" @keyup.enter="nuevaTarea"/>
    <button @click="nuevaTarea" >Agregar</button>
    </div>
</template>
    
<script>
    import {mapMutations} from 'vuex'
    export default {
        name: 'tareas-nueva',
        data(){
            return{
                tarea:''
            }
        },
        methods:{
            ...mapMutations(['agregarTarea']),
            nuevaTarea(){
                if(this.tarea.length>0){
                    this.agregarTarea(this.tarea)
                    this.tarea=''
                }else{
                    alert('La tarea no puede estar vacia')
                }
            }
        }
    }
</script>

<style>
</style>