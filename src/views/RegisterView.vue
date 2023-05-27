<template>
  <section class="vh-100 bg-image"
    style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px;">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                <form @submit.prevent="saveData">

                  <div class="form-outline mb-4">
                    <input type="text" v-model="users.name" id="name" name="name" class="form-control form-control-lg" />
                    <label class="form-label" for="name">Your Name</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="email" v-model="users.email" id="email" name="email"
                      class="form-control form-control-lg" />
                    <label class="form-label" for="email">Your Email</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" v-model="users.password" id="password" name="password"
                      class="form-control form-control-lg" />
                    <label class="form-label" for="password">Password</label>
                  </div>

                  <div class="d-flex justify-content-center">
                    <button type="submit"
                      class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                  </div>

                  <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
                      class="fw-bold text-body"><u>Login here</u></a></p>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { cargar, mostrarAlerta } from "../funciones.js";

export default {
  name: 'register',
  data() {
    return {
      result: {},
      users: {
        name: '',
        email: '',
        password: ''
      },
      cargando: false,
      URI: "http://localhost:8000/api/login"
    }
  },
  create() {
     cargar('Register')
  },
  mounted() {
      cargar('Register')
  },

  methods: {
    saveData() {

      if (this.users.email.trim() === '') {
        mostrarAlerta('Campo email en blanco', 'warning', 'email');
      } else {
        if (this.users.password.trim() === '') {
          mostrarAlerta('Campo password en blanco', 'warning', 'password');
        } else {

          try {

            axios.post("http://localhost:8000/api/register", this.users).then(
              ({ data }) => {
                try {
                  if (data.status){
                    mostrarAlerta('Success Regsiter', 'info', '');
                    this.$router.push({ name: 'home' });
                  }else{
                    mostrarAlerta('Failed register', 'error', '');
                    this.$router.push({ name: 'register' });
                  }

                } catch (error) {
                  mostrarAlerta('Failed register', 'error', '');
                  this.$router.push({ name: 'register' });
                }
              }
            )
            
          } catch (error) {
            mostrarAlerta('Failed register', 'error', '');
            this.$router.push({ name: 'register' });
          }


        }
      }
    },
  },


};


</script>

<style>
.gradient-custom-3 {
  /* fallback for old browsers */
  background: #84fab0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
}

.gradient-custom-4 {
  /* fallback for old browsers */
  background: #84fab0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))
}
</style>
