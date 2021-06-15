<template>
  <div>
    <h2>GALERIA DE FOTOS:</h2>
    <ul class="list-group list-group-horizontal mb-3">
      <router-link
        v-for="(item, index) of fotosArray"
        :key="index"
        :to="{ name: 'galeria', params: { id: item } }"
        class="list-group-item"
      >
        {{ item }}
      </router-link>
    </ul>
    <Foto />
    <button class="btn btn-primary" @click="home">home</button>
    <br/>
    <h4> con history:</h4>
    <button class="btn btn-success" @click="anterior">anterior</button>
    <button class="btn btn-success" @click="siguiente">siguiente</button>
    <br/>

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
  data() {
    return {
      fotosArray: [1, 2, 3],
    };
  },
  methods:{
    home(){
      this.$router.push("/")
    },
    anterior(){
      this.$router.go(-1)
    },
    siguiente(){
      this.$router.go(1)
    },
    avanzar(index){
      this.$router.push("/galeria/:id={{index}}")
    }
  }
};
</script>
