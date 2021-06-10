<template>
  <div class="text-center position-relative" align="center" justify="center" >
    <v-dialog
      v-model="loading.estado"
      hide-overlay
      persistent
      width="400"
      class="position-relative"
    >
      <v-card :color="loading.color" dark>
        <v-card-text class="text-center">
          {{ loading.titulo }}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Dialog",
  computed: {
    ...mapState(["loading"]),
  },
};
</script>
