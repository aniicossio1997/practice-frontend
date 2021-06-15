<!-- <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group> -->
<template>
  <div>
    <h1>Formulario</h1>

    <b-form>
      <b-row>
        <b-col md="4">
          <b-form-input
            type="text"
            placeholder="Enter your name"
            v-model="texto"
            :state="comprobar"
          ></b-form-input>
        </b-col>
        <b-col md="4">
          <b-form-select v-model="select" :options="animales"> </b-form-select>
          <p>select: {{ select }}</p>
        </b-col>
        <b-col md="4">
          <b-form-radio-group
            id="radio-group-1"
            v-model="radio"
            :options="animalesRadio"
          ></b-form-radio-group>
          <p>Radio: {{ radio }}</p>
        </b-col>

        <b-col md="12">
          <b-form-checkbox-group
            id="checkbox-group-1"
            v-model="checkbox"
            :options="options"
          ></b-form-checkbox-group>
          <div>
            Checkbox: <strong>{{ checkbox }}</strong>
          </div>
        </b-col>

        <b-col md="12">
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-col>
      </b-row>
    </b-form>
    <p>texto: {{ texto }}</p>
  </div>
</template>
<script>
export default {
  name: "Formulario",
  data() {
    return {
      texto: "",
      select: null,
      radio: null,
      checkbox: [],
      animales: [
        { value: null, text: "seleccione un animal" },
        { value: "perro", text: "gua gua" },
        { value: "gato", text: "Miua" },
        { value: "pato", text: "Cuack" },
      ],
      animalesRadio: [
        { value: "leon", text: "1" },
        { value: "oso", text: "2" },
        { value: "pajaro", text: "3" },
      ],
      options: [
        { text: "Orange", value: "orange" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
      ],
    };
  },
  computed: {
    comprobar() {
      return this.texto.length > 2 ? true : false;
    },
  },
};
</script>
