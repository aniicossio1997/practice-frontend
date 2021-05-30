<template>
  <div>
    <ul>
      <button class="btn btn-outline-primary">Ordenar por cantidad</button>
      <li
        v-for="(item, index) of arrayOrdenado"
        :key="item.id"
        @click="aumentar(index)"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        Index: {{ index }} - {{ item.nombre }} - Object: {{ item }}
        <span class="badge badge-primary badge-pill">{{ item.cantidad }}</span>
      </li>
      <button class="btn btn-dark btn-block" @click="reniciar">reniciar</button>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Lista",
  computed: {
    ...mapState(["frutas"]),
    arrayOrdenado(state) {
      return state.frutas.sort((a, b) => b.cantidad - a.cantidad);
    },
  },
  methods: {
    ...mapMutations(["aumentar", "reniciar"]),
  },
};
</script>
