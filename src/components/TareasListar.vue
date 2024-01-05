<template>
    <ul>
        <li v-for="(tarea,index) in obtenerTareasFiltradas" :key="index">
            
            <template v-if="editando === index">
                <input type="text" v-model="texto"/>
                <button @click="emitirTareaEditada" @keyup.enter="emitirTareaEditada">confirmar</button>
            </template>
            <template v-else>
                {{tarea}}
                <button class="editar" @click="editarTarea(index,tarea)">editar</button>
                <button class="eliminar" @click="removerTarea(index)">eliminar</button>
            </template>                        
            
        </li>
    </ul>        
</template>
<script>
    import {mapGetters,mapMutations} from 'vuex'
    export default{
        name:'TareasListar',
        data(){
            return{
                editando: null,
                texto:''
            }
        },
        computed:{
            ...mapGetters(['obtenerTareasFiltradas'])
        },
        methods:{
            ...mapMutations(['removerTarea','modificarTarea']),
            editarTarea(index,tarea){
                this.editando=index
                this.texto=tarea
            },
            emitirTareaEditada(){
                this.modificarTarea({index: this.editando, tarea: this.texto})
                this.editando= null
                this.tarea=''
            }
        }
    }
</script>

<style>
    .eliminar{
        border:white;
        background-color: transparent;
        color: red;

    }
    .editar{
        border:none;
        background-color: transparent;
        color:blue;

    }
</style>