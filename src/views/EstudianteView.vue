<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          DETALLE DEL ESTUDIANTE
        </div>
        <div class="card-body">
          <form v-on:submit="detalle">
            <div class="d-grid col-6 mx-auto mb-3">
              <img v-if="this.photo" class="photoimg" height="300" :src="this.photo" id="photoimg"
                alt="foto-estudiante" />
              <img v-else class="photoimg" height="300"
                src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png" alt="foto-default"
                id="photoimg" />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="fa-solid fa-user"></i>
              </span>
              <input type="text" v-model="firstName" id="firstName" class="form-control"
                disabled>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="fa-solid fa-user"></i>
              </span>
              <input type="text" v-model="lastName" id="lastName"  class="form-control"
                disabled>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="fa-solid fa-user"></i>
              </span>
              <input type="text" v-model="created_at" id="created_at"  class="form-control"
                disabled>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="fa-solid fa-user"></i>
              </span>
              <input type="text" v-model="updated_at" id="updated_at"  class="form-control"
                disabled>
            </div>
            <div class="d-grid col-6 mx-auto mb-3">
              <button class="btn btn-success">
                <i class="fa-solid fa-floppy-disk"></i>
                Regresar
              </button>
            </div>
            <div class="d-grid col-6 mx-auto mb-3">
            
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {cargar,  mostrarAlerta, enviarSolicitud} from "../funciones";
import { useRoute } from "vue-router";
import axios from "axios";



export default {
  data() {
    return {
      id:0,
      firstName: '',
      lastName: '',
      photo: '',
      created_at:'',
      updated_at:'',
      URI: 'http://localhost:8000/api/estudiantes',
      cargando: false,

    };
  },

  mounted() {
    cargar('Detalle')
    const ruta = useRoute();

    this.id =  ruta.params.id;
    this.URI += '/'+this.id;
    this.getEstudiante();
  },

  methods: {

    getEstudiante(){

      axios.get(this.URI).then(
        res=>{
       
          this.firstName = res.data.data.firstName;
          this.lastName = res.data.data.lastName;
          this.photo = res.data.data.photo;
          this.created_at = new Date(res.data.data.created_at).toLocaleString('es-ES');   
          this.updated_at = new Date(res.data.data.updated_at).toLocaleString('es-ES');
        }
      );
 
    },

    detalle() {
      
      event.preventDefault();     
      window.location.href = "/";

      }
      


  },
};
</script>

<style>
.photoimg {
  margin: 0 auto;
}
</style>