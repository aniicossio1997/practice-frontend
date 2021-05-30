<template>
  <div>
    <h2>GALERIA DE FOTOS:</h2>
    <div class="btn-group mb-3" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary">Left</button>
      <button type="button" class="btn btn-primary">Middle</button>
      <button type="button" class="btn btn-primary">Right</button>
    </div>
    <Foto/>
  </div>
</template>

<script>
// @ is an alias to /src
import Foto from "@/components/Foto.vue";

export default {
  name: "Galeria",
  components: {
    Foto,
  },
};
</script>
