<template>
    <v-app>
        <v-content class="light-blue darken-4" fluid>
             <v-card class="mx-auto profile" max-width="600">
                 <div align="center" justify="center" class="pt-10">
                     <h1 class="danger">ERROR!!!</h1>
                     <h5 class="font-italic danger">Name and password does not match, click the button below to login again!!</h5>
                </div>
                <div class="text-center signout pb-10">
                    <router-link to="/">
                        <v-btn @click="refresh()" rounded color="white--text primary">LogIn</v-btn>
                    </router-link>
                </div>
            </v-card>
        </v-content>
        <Footer />
    </v-app>
    
</template>

<script>
import Footer from "./Footer";
export default {
     components: { Footer },
     methods:{
         refresh(){
             this.$store.state.status = null;
         }
     }
};
</script>

<style scoped>

.error{
  margin-top:20vh;
}

 .signout{
      margin-top: 10% !important;
    }

    .profile{
        margin-top:10vh;
    }
.danger{
    color: red;
}
</style>