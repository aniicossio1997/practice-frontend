<template>
  <div id="app" class="container mt-3 pt-2">
    <Cabecera></Cabecera>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App, este es una nueva app"/> -->
    <Lista></Lista>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Cabecera from './components/Cabecera.vue'
import Lista from './components/Lista.vue'
export default {
  name: 'App',
  components: {
    Cabecera,
    Lista
  }
}
</script>


