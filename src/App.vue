<template>
  <div class="container-fluid">
    <navbar />
  </div>
  <div class="container-fluid">
    <router-view />
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'

export default {
  components: {
    navbar
  }
}
</script>




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
