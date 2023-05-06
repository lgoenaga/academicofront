<template>
    <div class="editE">
      <h1>Vista para Estudiante Editar</h1>
    </div>
  </template>

<script>


import { cargar } from "../funciones";

export default{
  
  mounted() {
    cargar('Editar')
  }

}
</script>