<template>
  <div class="row">
    <div>
      <div class="table-responsive">
        <div class="row">
          <table class="table table-hover table-bordered">
            <thead class="titulos-tabla">
              <tr class="titulos">
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">CURSO</th>
                <th scope="col">FECHA</th>
                <th scope="col">ACCION</th>
                <th scope="col">ESTUDIANTES</th>
              </tr>
            </thead>
            <tbody class="table-group-divider" id="contenido">
              <tr v-if="this.cargando">
                <td colspan="7">
                  <h3>Cargando.....</h3>
                </td>
              </tr>

              <tr class="filas" v-else v-for="(course, indicec) in  this.cursos " :key="course.id"
                v-show="(pagc - 1) * NUM_RESULTSC <= indicec && pagc * NUM_RESULTSC > indicec">

                <td class="centrar" v-text="indicec + 1"></td>
                <td class="centrar" v-text="course.id"></td>

                <td v-text="course.name"></td>

                <td class="centrar" v-text="new Date(course.updated_at).toLocaleString('es-ES')"></td>
                <td>
                  <div class="botones">
                    &nbsp;
                    <router-link :to="{ path: 'editC/' + course.id }" class="btn btn-warning">
                      <i class="fa-solid fa-user-pen"></i>
                    </router-link>
                    &nbsp;

                    <button class="btn btn-danger" v-on:click="($event) =>
                      eliminar(
                        course.id,
                        course.name,
                        this.image,
                      )
                      ">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
                <div class="row">
                  <table class="table table-hover table-bordered">
                    <thead class="titulos-tabla">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">ESTUDIANTE</th>
                        <th scope="col">ACCION</th>
                      </tr>
                    </thead>

                    <tbody class="table-group-divider" id="contenido">

                      <tr v-if="this.cargando">
                        <td colspan="7">
                          <h3>Cargando.....</h3>
                        </td>
                      </tr>


                      <tr v-for="(est, i) in  this.cursosestudiantes " :key="est.id"
                        v-show="(pagce - 1) * NUM_RESULTSCE <= i && pagce * NUM_RESULTSCE > i">

                        <td v-if="est.curso_id === course.id" class="centrar" v-text="i + 1"></td>
                        <td v-if="est.curso_id === course.id" v-text="est.estudiante_id"></td>
                        <td v-if="est.curso_id === course.id">
                          <button class="btn btn-danger" v-on:click="($event) =>
                            eliminarC(
                              est.id,

                              this.image ) ">
                              <i class=" fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <section class="page">
                      <nav aria-label="Page navigation" class="text-center">
                        <ul class="pagination text-center">
                          <li>
                            <a href="#" aria-label="Previous" v-show=" pagce != 1" @click.prevent="pagce -= 1">
                              <button class="btn btn-success" aria-hidden="true">Anterior</button>
                            </a>
                          </li>
                          <li>
                            <a aria-label="Previous" v-show=" pagce != 0" @click.prevent="pagce -= 1">
                              <span aria-hidden="true">pagina {{ pagce }} de {{ this.NoPagce }} </span>
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Next" v-show=" page * NUM_RESULTSCE / totalItemsce < 1"
                              @click.prevent="page += 1">
                              <button class="btn btn-success" aria-hidden="true">Siguiente</button>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </section>
                  </table>
                </div>
              </tr>
            </tbody>
          </table>
        </div>


      </div>
      <section class="page">
        <nav aria-label="Page navigation" class="text-center">
          <ul class="pagination text-center">
            <li>
              <a href="#" aria-label="Previous" v-show=" pagc != 1" @click.prevent="pagc -= 1">
                <button class="btn btn-success" aria-hidden="true">Anterior</button>
              </a>
            </li>
            <li>
              <a aria-label="Previous" v-show=" pagc != 0" @click.prevent="pagc -= 1">
                <span aria-hidden="true">pagina {{ pagc }} de {{ this.NoPagc }} </span>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Next" v-show=" pagc * NUM_RESULTSC / totalItemsc < 1" @click.prevent="pagc += 1">
                <button class="btn btn-success" aria-hidden="true">Siguiente</button>
              </a>
            </li>
          </ul>
        </nav>
      </section>


    </div>
  </div>
</template>


<script>

import axios from "axios";
import { confirmar, cargar } from "../../funciones";

export default {

  data() {

    return {
      cursos: null,
      estudiantes: null,
      cursosestudiantes: null,
      cargando: false,
      totalItemse: 1,
      NUM_RESULTSE: 10,
      NoPage: 1,
      page: 1,
      totalItemsc: 1,
      NUM_RESULTSC: 1,
      NoPagc: 1,
      pagc: 1,
      NUM_RESULTSCE: null,
      NoPagce: 1,
      pagce: 1,
      totalItemsce: 1,
      image: "",
    };
  },
  computed: {

  },
  mounted() {
    cargar("Cursos y estudiantes");
    this.getCursos();
    this.getEstudiates();
    this.getCursosEstudiantes();
  },


  methods: {
    getCursos() {
      axios.get("http://localhost:8000/api/cursos").then((res) => {
        this.cursos = res.data;
        this.cargando = false;
        const newArrayc = this.cursos.map(a => ({ ...a }));
        this.totalItemsc = newArrayc.length;
        this.NoPagc = Math.ceil(this.totalItemsc / this.NUM_RESULTSC);
        return this.cursos;
      });
    },

    getCursosEstudiantes() {
      axios.get("http://localhost:8000/api/cursos_estudiantes").then((res) => {
        this.cursosestudiantes = res.data;
        const newArrayce = this.cursosestudiantes.map(a => ({ ...a }));
        this.totalItemsce = 1;
        this.NUM_RESULTSCE = newArrayce.length;
        this.NoPagce = Math.ceil(this.totalItemsce / this.NUM_RESULTSCE);
        return this.cursosestudiantes;
      });
    },

    getEstudiates() {
      axios.get("http://localhost:8000/api/estudiantes").then((res) => {
        this.estudiantes = res.data;
        this.cargando = false;
        const newArraye = this.estudiantes.map(a => ({ ...a }));
        this.totalItemse = newArraye.length;
        this.NoPage = Math.ceil(this.totalItemse / this.NUM_RESULTSE);
        return this.estudiantes;
      });
    },

    eliminar(id, curso, image) {
      confirmar(
        "http://localhost:8000/api/cursos",
        id,
        image,
        "Eliminar Registro",
        "Realmente desea eliminar a " + curso + " ?",

      );
      this.cargando = false;
    },

    eliminarC(id, image) {
      confirmar(
        "http://localhost:8000/api/cursos_estudiantes",
        id,   
        image,
         "Eliminar Registro",
        "Realmente desea eliminar el registro ?",

      );
      if (this.cargando){
        window.location.reload();
      }
      this.cargando = false;

    },
  },
};
</script>
<style>
.pagination {
  display: flex;
  justify-content: space-between;

}

thead .titulos-tabla,
.centrar {
  margin: 0 auto;
  text-align: center;
}

.botones {
  display: flex;
  justify-content: center;
  align-items: center;

}

#contenido tr {
  vertical-align: middle;
}

a.btn.btn-info {
  background-color: rgb(0, 153, 255);
}

.filas .botones {
  height: 70px;


}

tr .filas {
  display: flex;
}
</style>
