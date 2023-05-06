<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-hover table-bordered">
          <thead class="titulos-tabla">
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">FOTO</th>
              <th scope="col">NOMBRE</th>
              <th scope="col">APELLIDO</th>
              <th scope="col">FECHA</th>
              <th scope="col">ACCION</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="this.cargando">
              <td colspan="7">
                <h3>Cargando.....</h3>
              </td>
            </tr>
            <tr v-else v-for="(est, i) in this.estudiantes" :key="est.id">
              <td class="centrar" v-text="i + 1"></td>
              <td class="centrar" v-text="est.id"></td>
              <td>
                <img v-if="est.photo" class="img-thumbnail" style="width: 150px !important" :src="est.photo"
                  alt="foto-estudiante" />
                <img v-else class="img-thumbnail"
                  src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-48.png" alt="foto-default" />
              </td>
              <td v-text="est.firstName"></td>
              <td v-text="est.lastName"></td>
              <td class="centrar" v-text="new Date(est.created_at).toLocaleString()"></td>
              <div class="botones">
                <router-link :to="{ path: 'viewE/' + est.id }" class="btn btn-info">
                  <i class="fa-sharp fa-solid fa-eye"></i>
                </router-link>
                &nbsp;
                <router-link :to="{ path: 'editE/' + est.id }" class="btn btn-warning">
                  <i class="fa-solid fa-user-pen"></i>
                </router-link>
                &nbsp;
                <button v-if="est.photo" class="btn btn-danger" v-on:click="($event) =>
                    eliminar(
                      est.id,
                      est.firstName,
                      est.photo
                    )
                  ">
                  </button>
                  <button v-else class="btn btn-danger" v-on:click="($event) =>
                    eliminar(
                      est.id,
                      est.firstName,
                      'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-48.png'
                    )
                  ">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { confirmar, cargar } from "../funciones";

export default {
  data() {
    return {
      estudiantes: null,
      cargando: false,
    };
  },

  mounted() {
    this.getEstudiantes();
    cargar("Inicio");
  },

  methods: {
    getEstudiantes() {
      this.estudiantes = true;
      axios.get("http://localhost:8000/api/estudiantes").then((res) => {
        this.estudiantes = res.data;
        this.cargando = false;
      });
    },

    eliminar(id, nombre, imagen) {
      confirmar(
        "http://localhost:8000/api/estudiantes",
        id,
        imagen,
        "Eliminar Registro",
        "Realmente desea eliminar a " + nombre + " ?",
        
      );
      this.cargando = false;
    },
  },
};
</script>
<style>
.titulos-tabla,
.centrar {
  margin: 0 auto;
  text-align: center;
}

.botones {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 74px;
}

#contenido tr {
  vertical-align: middle;
}

.img-thumbnail {
  display: block;
  margin: 0 auto;
  text-align: center;
  
}
</style>
