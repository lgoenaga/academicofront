<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-hover table-bordered">
          <thead class="titulos-tabla">
            <tr class="titulos">
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">CURSO</th>
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
            <tr class="filas" v-else v-for="(course, indice) in this.cursos" :key="course.id"
              v-show="(pag - 1) * NUM_RESULTS <= indice && pag * NUM_RESULTS > indice">
              <td class="centrar" v-text="indice + 1"></td>
              <td class="centrar" v-text="course.id"></td>
              
              <td v-text="course.name"></td>
              <td class="centrar" v-text="new Date(course.updated_at).toLocaleString('es-ES')"></td>

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
            </tr>
          </tbody>
        </table>
      </div>
      <section class="page">
        <nav aria-label="Page navigation" class="text-center">
          <ul class="pagination text-center">
            <li>
              <a href="#" aria-label="Previous" v-show="pag != 1" @click.prevent="pag -= 1">
                <button class="btn btn-success" aria-hidden="true">Anterior</button>
              </a>
            </li>
            <li>
              <a aria-label="Previous" v-show="pag != 0" @click.prevent="pag -= 1">
                <span aria-hidden="true">pagina {{pag}} de {{ this.NoPag }} </span>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Next" v-show="pag * NUM_RESULTS / totalItems < 1" @click.prevent="pag += 1">
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
      cargando: false,
      totalItems: 1,
      NUM_RESULTS: 8,
      NoPag:1,
      pag: 1,
      image: "fa-solid fa-trash"  
    };
  },
  computed: {

  },
  mounted() {
    cargar("Inicio");
    this.getCursos();
  },


  methods: {
    getCursos() {
      axios.get("http://localhost:8000/api/cursos").then((res) => {
        this.cursos = res.data;
        this.cargando = false;
        const newArray = this.cursos.map(a => ({ ...a }));
        this.totalItems = newArray.length;
        this.NoPag = Math.ceil(this.totalItems / this.NUM_RESULTS);
        return this.Nopag;
      });
    },

    eliminar(id, nombre, image) {
      confirmar(
        "http://localhost:8000/api/cursos",
        id,
        image,
        "Eliminar Registro",
        "Realmente desea eliminar a " + nombre + " ?",

      );
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

.titulos-tabla,
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

.filas .botones{
 height: 70px;

}

</style>
