<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/" active-class="active" exact>Home</b-nav-item>
            <b-nav-item :to="{ name: 'About' }" active-class="active"
              >About</b-nav-item
            >
            <b-nav-item :to="{ name: 'Grid' }" active-class="active"
              >Grid</b-nav-item
            >
            <b-nav-item :to="{ name: 'Cards' }" active-class="active"
              >Cards</b-nav-item
            >
            <b-nav-item :to="{ name: 'Formulario' }" active-class="active"
              >Formulario</b-nav-item
            >
            <!-- <router-link to="/about" custom v-slot="{ navigate }">
  <span @click="navigate" @keypress.enter="navigate" role="link">About Us</span>
</router-link> -->
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <b-container class="mt-5">
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
  // methods:{
  //   navegation(){
  //     this.$route
  //   }
  // }
};
</script>
