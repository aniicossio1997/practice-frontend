<template>
  <v-container class="grey lighten-5">
    <v-row  align="center" justify="center">
      <v-col sm="12">
        <v-alert
          v-model="alert"
          border="left"
          close-text="Close Alert"
          color="error accent-2"
          dark
          dismissible
        >
          Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut
          neque. Cras dapibus. Vivamus consectetuer hendrerit lacus. Sed mollis,
          eros et ultrices tempus
        </v-alert>
        <v-card>
          <v-date-picker
            absolute="true"
            v-model="picker"
            color="pink"
            full-width
            locale="es-ar"
            :min="minimo"
            :max="maximo"
            @change="getDolar(picker)"
          ></v-date-picker>
        </v-card>
        <v-card class="pa-2" color="pink" dark>
          <v-card-text class="display-1 white--text darken-2 text-center">
            <p>Precio de dolar: {{ valor }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  name: "Home",
  data: () => ({
    picker: new Date().toISOString().substr(0, 10),
    minimo: "1984",
    maximo: new Date().toISOString().substr(0, 10),
    valor: null,
    errors: [],
    alert: false,
  }),
  methods: {
    ...mapMutations(["mostrarLoading", "ocultarLoading"]),
    async getDolar(dia) {
      let arrayDate = dia.split("-");
      let ddmmyy = [...arrayDate].reverse().join("-");
      let other = arrayDate[2] + "-" + arrayDate[1] + "-" + arrayDate[0];
      // console.log("array fecha: " + arrayDate);
      // console.log("array reverse " + ddmmyy);
      // console.log("array other " + other);

      //axios
      // try {
      //   const response = await axios.get(
      //     `https://mindicador.cl/api/dolar/${other}`
      //   );
      //   this.valor = await response.data.serie[0].valor;
      // } catch (e) {
      //   this.errors.push(e);
      //   console.log(e)
      // }
      try {
        this.mostrarLoading({
          titulo: "Accediendo a informacion",
          color: "grey darken-4",
        });
        let datos = await axios.get(`https://mindicador.cl/api/dolar/${other}`);
        // console.log(datos.data);
        if (datos.data.serie.length > 0) {
          this.valor = await datos.data.serie[0].valor;
          this.alert = false;
        } else {
          this.alert = true;
          this.valor = "sin resultados";
        }
      } catch (e) {
        this.errors.push(e);
        console.log(e);
      } finally {
        this.ocultarLoading();
      }

      // PARA QUE ESPERE A QUE CONSULTE LA API
    },
  },
  created() {
    this.getDolar(this.picker);
  },
};
</script>
