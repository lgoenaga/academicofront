<template>
<nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">GESTIÓN ACADÉMICA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">Inicio</router-link>         
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Estudiante
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <router-link to="/createE" class="dropdown-item">Crear</router-link>

            </li>

            <li>
              <router-link to="/listarE" class="dropdown-item" >Listar</router-link>
     
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container-fluid">
  <router-view/>
</div>

</template>

<style>

nav.navbar {
    background-color: DarkSlateGrey;
}

.slow-animation-show {
  animation: swal2-show 4s;
}

.slow-animation-hide {
  animation: swal2-hide 4s; 
}

</style>
