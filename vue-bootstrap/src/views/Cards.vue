<template>
  <div>
    <b-button variant="outline-primary">texto</b-button>
    <b-button variant="outline-info">texto</b-button>
    <b-button variant="outline-secondary">texto</b-button>
    <b-button variant="outline-success">texto</b-button>
    <b-button variant="outline-danger">texto</b-button>
    <b-button variant="outline-warning">texto</b-button>
    <b-button variant="light">texto</b-button>

    <b-row>
      <b-col
      class="mt-5" sm="12" md="6" lg="3"
      v-for="(item, index) of fotosArray"
      :key="index">
        <div >
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "Cards",
  data() {
    return {
      fotosArray: [1, 2, 3,4],
    };
  },
};
</script>
