<template>
    <div class="box" :class="notificar">
        {{mensaje}}
    </div>
</template>
<script>
    let types=['eliminar','editar','agregar']
    export default{
         name:"TareasNotificador",
         props:{
            notificar:{type:String,validator: value=>types.includes(value)}
        },
        computed:{
            mensaje(){
                switch(this.notificar){
                    case'eliminar':
                        return'Se elimino una tarea'
                    case'editar':
                        return'Se edito una tarea'
                    case'agregar':
                        return'se agrego una tarea'
                    default:
                        return ''
                }
            }
        }
    }
</script>

<style scoped>
    .box{    
        position:absolute;
        top:1%;
        left:45%;
        width:10%;
        padding:10px;
    }
    .eliminar{
        border:1px solid grey;
        background-color:red;
        color:white;
    }
    .editar{
        border:1px solid grey;
        background-color:blue;
        color:white;
    }
    .agregar{
        border: 1px solid grey;
        background-color:green;
        color:white;
    }                   
    </style>
