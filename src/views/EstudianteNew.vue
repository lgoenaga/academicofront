<template>
    <div class="createE">
      <h1>Vista para Estudiante Crear</h1>
    </div>
  </template>

<script>


import { cargar } from "../funciones";

export default{
  
  mounted() {
    cargar('Crear')
  }

}
</script>