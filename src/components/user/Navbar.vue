
<template >
  <v-card color="grey lighten-4" flat height="70px" tile>
    <v-toolbar dense>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text ml-4">
        <span class="ouc white--text primary lighten-2">OUC</span>
                    <span class="fund blue--text">Fund</span>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-menu bottom origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn class="lighten-2 white--text primary" dark v-on="on">
            MENU
            <v-icon right>fas fa-eye</v-icon>
          </v-btn>
        </template>

        <v-list dense nav>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ link.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="primary lighten-3">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title text-center">OUC_ZIM STUDENTS</v-list-item-title>
          <v-list-item-subtitle class="text-center">Supported by CodeTrojans</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-layout column align-center>
        <v-list-item v-for="pro in profile" :key="pro.name" router :to="pro.route">
          <h5>{{pro.name}}</h5>
        </v-list-item>
        <v-flex class="mt-1">
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-1.png" />
          </v-avatar>
        </v-flex>

        <v-list dense nav>
          <v-list-item v-for="pro in payments" :key="pro.text" router :to="pro.route">
            <v-list-item-icon class="ml-0 mr-0 mb-0">
              <v-icon>{{ pro.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ pro.balance}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

         <v-flex class="mt-2 mb-3">
          <!-- <Alipay /> -->
        </v-flex>

        <v-flex class="mt-2 mb-3">
          <!-- <Wechat /> -->
        </v-flex>

      </v-layout>

      <v-list dense nav>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

       <div class="text-center signout">
        <router-link to="/">
          <v-btn rounded color="white--text primary">EXIT</v-btn>
        </router-link>
      </div>

    </v-navigation-drawer>
  </v-card>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed:{
    ...mapState([
      'student'
    ])

  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "contact_mail", 
          text: "Support", 
          route: "/support"
           },

        { icon: "dashboard", 
          text: "Exit now", 
          route: "/" 
          }
        
      ],
      payments: [{ icon: "fas fa-yen-sign", balance: "Balance" }],
      profile: [{ name: "Profile", route: "" }]
    };
  }
};
</script>

<style scoped>

 .ouc{
      padding: 2px !important;
      border-radius: 4px;
    }

    .fund{
      padding: 2px !important;
      border-radius: 4px;
    }

    .signout{
      margin-top: 20% !important;
    }

</style>