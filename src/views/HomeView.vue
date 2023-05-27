<template>
  <!-- Section: Design Block -->
  <section class="background-radial-gradient overflow-hidden fullHeight">
    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5" style="padding: 0;">
      <div class="row gx-lg-5 align-items-center mb-5">
        <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
          <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
            GESTIÓN ACADÉMICA <br />
            <span style="color: hsl(218, 81%, 75%)">for student</span>
          </h1>

        </div>

        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
</template>

<script>

</script>

<style>
div.container-fluid {
  margin: 0 auto;
  padding: 0;
}

.fullHeight {
  height: 94vh;
}

h1 {
  position: absolute;
  margin: 0;
  padding: 0;

  top: 40%;
  left: 40%;

  text-align: center;
}

.background-radial-gradient {

  background-color: hsl(218, 41%, 15%);
  background-image: radial-gradient(650px circle at 0% 0%,
      hsl(143, 41%, 35%) 15%,
      hsl(147, 51%, 18%) 35%,
      hsl(174, 61%, 9%) 75%,
      hsl(167, 100%, 23%) 80%,
      transparent 100%),
    radial-gradient(1250px circle at 100% 100%,
      hsl(218, 41%, 45%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%);
}

#radius-shape-1 {
  height: 220px;
  width: 220px;
  top: -60px;
  left: -130px;
  background: radial-gradient(#44006b, #ad1fff);
  overflow: hidden;
}

#radius-shape-2 {
  border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
  bottom: -60px;
  right: -110px;
  width: 300px;
  height: 300px;
  background: radial-gradient(#44006b, #ad1fff);
  overflow: hidden;
}

.bg-glass {
  background-color: hsla(0, 0%, 100%, 0.9) !important;
  backdrop-filter: saturate(200%) blur(25px);
}
</style>