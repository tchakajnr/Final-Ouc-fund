<template>
  <v-container>

    <Navbar />

    <v-parallax
    class="parallax"
     height="100%"
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <!-- <Profile /> -->
      </v-col>
      <v-col class="text-center" cols="12">
        <Profile />
      </v-col>
    </v-row>
  </v-parallax>

        <Footer />

  </v-container>
</template>

<script>
import {mapState} from "vuex";
import Navbar from "../components/user/Navbar";
import Footer from "../components/Footer";
import Profile from "../components/user/Profile";

  export default {
    components: { Navbar, Footer, Profile },
    computed:{
      ...mapState([
        'status'
      ])
    }

   
  }
</script>

<style scoped>
  .parallax {
   min-height: 80vh !important;
}
</style>