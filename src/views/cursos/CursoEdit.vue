<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          EDITAR CURSO
        </div>
        <div class="card-body">
          <form v-on:submit="actualizar">

            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="fa-solid fa-user"></i>
              </span>
              <input type="text" v-model="name" id="name" placeholder="Ingrese el curso" class="form-control"
                maxlength="50" required>
            </div>
            <div class="d-grid col-6 mx-auto mb-3">
              <button class="btn btn-success">
                <i class="fa-solid fa-floppy-disk"></i>
                Actualizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {cargar,  mostrarAlerta, enviarSolicitud} from "../../funciones";
import { useRoute } from "vue-router";
import axios from "axios";



export default {
  data() {
    return {
      id:0,
      name: '',
      URI: 'http://localhost:8000/api/cursos',
      cargando: false,

    };
  },

  mounted() {
    cargar('Editar')
    const ruta = useRoute();

    this.id =  ruta.params.id;
    this.URI += '/'+this.id;
    this.getCurso();
  },

  methods: {

    getCurso(){

      axios.get(this.URI).then(
        res=>{
       
          this.name = res.data.data.name;
        }
      );
 
    },

    actualizar() {
      
      event.preventDefault();     


      if(this.name.trim()===''){
        mostrarAlerta('Campo curso en blanco', 'warning', 'name');
      }else{
          var parametros = {name:this.name.trim()}
     
        enviarSolicitud('PUT', parametros, this.URI, 'Curso actualizado');
        this.$router.push({ name: 'listarC' });
      }
      
    },

  },
};
</script>

<style>

</style>