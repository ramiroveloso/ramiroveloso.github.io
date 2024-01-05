<template>
    <div>
        <label >Filtrar Tareas:</label>
        <input type="text" v-model="filtro">
    </div>
</template>


<script>
    import {mapMutations} from 'vuex'
    export default{
        name: "TareasFiltrar",
        computed:{
            filtro:{
                get(){
                    return this.value
                },
                set(val){
                    this.setFiltro(val)
                }
            }
        },
        methods:{
            ...mapMutations(['setFiltro']) //posible usar this.setFiltro
        }
    }
</script>


<style>
</style>