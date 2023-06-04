<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          REGISTRAR ESTUDIANTE
        </div>
        <div class="card-body">
          <form v-on:submit="guardar">
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
              <input type="text" v-model="firstName" id="firstName" placeholder="Ingrese el nombre" class="form-control"
                maxlength="50" required>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="fa-solid fa-user"></i>
              </span>
              <input type="text" v-model="lastName" id="lastName" placeholder="Ingrese el apellido" class="form-control"
                maxlength="50" required>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="fa-solid fa-camera"></i>
              </span>
              <input type="file" v-on:change="previewPhoto" class="form-control"
                accept="image/png, image/jpeg, image/gif">
            </div>
            <div class="d-grid col-6 mx-auto mb-3">
              <button class="btn btn-success">
                <i class="fa-solid fa-floppy-disk"></i>
                Guardar
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


export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      photo: '',
      URI: 'http://localhost:8000/api/estudiantes',
      cargando: false,

    };
  },

  mounted() {
    cargar('Crear')
  },


  methods: {
    guardar() {
      
      event.preventDefault();     
      var miPhoto = document.getElementById('photoimg');
      this.photo = miPhoto.src;


      if(this.firstName.trim()===''){
        mostrarAlerta('Campo nombre en blanco', 'warning', 'firstName');
      }else{
        if(this.lastName.trim()===''){
        mostrarAlerta('Campo apellido en blanco', 'warning', 'lastName');
      }else{
          var parametros = {firstName:this.firstName.trim(), lastName:this.lastName.trim(), photo:this.photo.trim()}
     
        enviarSolicitud('POST', parametros, this.URI, 'Estudiante registrado')
          this.$router.push({ name: 'listarE' });
      }
      }
      
    },
    previewPhoto(event) {
      var readerFile = new FileReader();
      readerFile.readAsDataURL(event.target.files[0]);
      readerFile.onload = function () {
        var miPhoto = document.getElementById('photoimg');
        miPhoto.src = readerFile.result;
        this.photo = miPhoto.src;

      }
    }

  },
};
</script>

<style>
.photoimg {
  margin: 0 auto;
}
</style>