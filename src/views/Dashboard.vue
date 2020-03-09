<template>
 
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

     <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-forward</v-icon>
      </template>
    </v-breadcrumbs>
  </div>

  <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
          <v-card class="elevation-12">
              <v-toolbar
                color="orangered"
                flat
                class="text-center"
                
        justify="center"
              >
              <div align="center" justify="center">
  <router-link to="/" class="router" >
  <v-btn  color="error">LOGOUT NOW</v-btn>
  </router-link>
  <h5>PERSONAL ACCOUNT</h5>
              </div>
             
              </v-toolbar>
            </v-card>



            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
               <v-row  align="center">
              <v-avatar color="indigo">
      <v-icon dark  align="left" >mdi-account-circle</v-icon>
              </v-avatar>
        <h3 class="float-right"
        align="center"
        ml-lg-4
        ml-2
      
        >{{student.firstName}}</h3>
               </v-row>
                   
              </v-toolbar>
            </v-card>
        
        <v-card class="elevation-12">
              <v-toolbar
                color="white"
                flat
                class="text-center"
                align="center"
        justify="center"
              >
        <h3 class="font-weight-black "
        align="center"
        justify="center"
        
         
        >Hello  {{student.firstName}}  welcome to OUC_ZIM fund inquiry</h3>
            <br><br><br>           
              </v-toolbar>
            </v-card>

            <v-card class="elevation-12">
              <v-toolbar
                color="white"
                flat
                class="text-center"
                align="center"
        justify="center"
              >
        <h4 class="font-weight-black red--text "
        align="center"
        justify="center"
        
        >Your total subscriptions balance is: {{student.payment}} yuan only. </h4>
            <br><br><br>   
          <h3></h3>         
              </v-toolbar>
            </v-card>
            <v-card class="elevation-12"
            v-if="isMember"
            >
              <v-toolbar
                color="white"
                flat
                class="text-center"
                align="center"
        justify="center"
              >
        <h5 class="font-weight-black "
        align="center"
        justify="center"
        >{{time}} </h5>
            <br><br><br>   
          <h3></h3>         
              </v-toolbar>
            </v-card>

            
           
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

     
  </div>
</template>

<script>
 import {mapState} from 'vuex';
export default {
  computed:{
    ...mapState([
      'student',
      'isMember',
      'time',
      'payment'
    ])

  },
  data() {
    return {
      items: [
        {
          text: 'Dashboard',
          disabled: true,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Students',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Financial Reports',
          disabled: false,
          href: 'breadcrumbs_link_2',
        },
      ],
      students:[],
      payments:[],
      tabs: null,
      text: 'Lorem ipsu'
       
    };
  }
};
</script>

<style>
.router{
    text-decoration: none !important;
}

</style>