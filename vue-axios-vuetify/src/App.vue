<template>
  <v-app>
    <NavBar/>
    <v-main>
<v-container>
      <router-view/>

      <Dialog/>
</v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Dialog from "./components/Dialog.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    Dialog,
  },
  data: () => ({
    //
  }),

};
</script>
