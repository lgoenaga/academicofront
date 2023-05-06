<template>
    <div class="viewE">
      <h1>Vista para Estudiante Detalle</h1>
    </div>
  </template>

<script>


import { cargar } from "../funciones";

export default{
  
  mounted() {
    cargar('Detalle')
  }

}
</script>