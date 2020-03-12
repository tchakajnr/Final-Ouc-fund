<template>
<div>
   <div  v-if="!status || status ===0 || status!==200 && status!==401">
     <v-parallax
    class="parallax"
     height="100%"
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
  <div class="text-center err">
  <h1>{{errorStatement}}</h1>
  <h3 v-if="token" class="warning ">{{head}}</h3>
  <h5 class="red--text">Check your network connection !!!</h5>
  <v-progress-linear
      color="red lighten-2"
      buffer-value="0"
      stream
    ></v-progress-linear> <br/>
    <router-link to="/">
          <v-btn @click="refresh()" rounded color="white--text primary">Login</v-btn>
    </router-link>
    </div>
     </v-parallax>
  </div>
  <Error v-if="status===401"/>
    <v-row 
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <!-- <Profile /> -->
      
 </v-col>
      <!-- <v-col class="text-center" cols="12">
        <Profile />
      </v-col> -->
    </v-row>
  
<div class="students" v-if="students || status===200 " >
    <!-- <h1 class="subheading grey--text">ADMIN</h1> -->

     <div>
    <!-- <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-forward</v-icon>
      </template>
    </v-breadcrumbs> -->
  </div>

 <div class="text-center" v-if="students && status !==0 && status!==401">
   <h1 class="subheading primary--text">ADMIN PAGE</h1>
   <router-link
    to="/"
    >
    <v-btn class="button" @click="exiting" rounded  color="white--text primary"
    >LOGOUT</v-btn>
   </router-link>
  </div>

     <v-simple-table fixed-header height="300px" v-if="students" >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left red--text">First Name</th>
          <!-- <th class="text-left">Last Name</th> -->
          <th class="text-left red--text">Student_ID</th>
          <!-- <th class="text-left">Major</th> -->
          <th class="text-left red--text">Total amt paid</th>
          <th class="text-left red--text">Topup</th>

        </tr>
      </thead>
       <tbody>
          <tr v-for="student in students" :key="student.major">
            <td v-if="student.firstName">{{ student.firstName }}</td>
            <!-- <td>{{student.lastName}}</td> -->
            <td v-if="student.studentID">{{ student.studentID }}</td>
            <!-- <td>{{student.major}}</td> -->
            <td v-if="student.firstName">{{ student.payment }}</td>
            <td>
   
    <v-expansion-panels>
      <v-expansion-panel
        
      >
        <v-expansion-panel-header>
          <!-- <v-icon class="mx-2" light center fab dark color="success">fa-caret-down</v-icon> -->
        </v-expansion-panel-header>
        <v-expansion-panel-content>
      <h5>{{student.studentID}}</h5>
      <v-row class="light--text" >
      <v-col cols="12" sm="3">
        <v-btn class="mx-2" fab dark color="indigo" @click="addThirty(student.id)">
            +30
          </v-btn>
      </v-col>
      <v-col cols="12" sm="3">
        <v-btn class="mx-2" fab dark color="indigo" @click="addBig(student.id)">
            +120
          </v-btn>
      </v-col>
      <v-col cols="12" sm="3" v-if="student.payment>=30">
        <v-btn class="mx-0" fab dark color="indigo" @click="subtractThirty(student.id)">
            -30
          </v-btn>
      </v-col>
      <v-col cols="12" sm="3" v-if="student.payment>=120">
        <v-btn class="mx-0" fab dark color="indigo" @click="subtractBig(student.id)">
            -120
          </v-btn>
      </v-col>
      <v-col cols="12" sm="3" v-if="student.payment>=360">
        <v-btn class="mx-0" fab dark color="indigo" @click="reset(student.id)">
            Reset
          </v-btn>
      </v-col>
    </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  
            </td>
          </tr>
        </tbody>
    </template>
  </v-simple-table>
  </div>
</div>
  
</template>

<script>
import Error from "../components/Error";
import openSocket from 'socket.io-client';
import {mapState, mapActions} from 'vuex';

export default {
  components: { 
    Error
     },
  data() {
    return {
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Students',
          disabled: true,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Financial Reports',
          disabled: false,
          href: 'breadcrumbs_link_2',
        },
      ],
       isMember:false,
      time: '',
      student: 0,
      tabs: null,
      text: "Lorem ipsu",
      payment: {},
      firstName: "",
      lastName: "",
      major: "",
      pay: "",
      
       
    };
  },
  mounted() {
   const students = JSON.parse(localStorage.getItem('students'));
   this.$store.state.students = students;
   if(students){
     this.$store.state.status = 200;
    //  console.log(students);
   } 
   setTimeout(()=>{
     this.$store.state.errorStatement = '';
     this.$store.state.head='OOPS! SOMETHING WENT WRONG.'
   },5000);
   const socket = openSocket('https://fundapi.herokuapp.com');
    socket.on('addition',data=>{
      if(data.action === 'payment'){
        this.load();
      }
    })
    // console.log(`admin token ${adminToken}`);
       
    },
  computed:{
    ...mapState([
      'students',
      'adminToken',
      'secretId',
      'status',
      'students',
      'errorStatement',
      'head'
    ]),
    ...mapActions([
      'loadDetails'
    ])
    
  },
  methods: {
    exiting(){
      localStorage.removeItem('studentNum');
      this.$store.state.token = null;
      this.$store.state.isAuth = false;
      this.$store.state.studentNumber = 'BK';
      localStorage.clear();
      // localStorage.removeItem('token');
      // localStorage.removeItem('expiryDate');
      // localStorage.removeItem('userId');
      // localStorage.removeItem('studentNum');
      this.$store.state.student = null;
      // console.log(`exiting token now ${this.$store.state.token}`);
      
    },
    refresh(){
             this.$store.state.status = null;
         },
    load(){
      fetch('https://fundapi.herokuapp.com/v1/payments/',{
            headers: {
              Authorization: 'Bearer ' + this.$store.state.adminToken
            }
          })
                  .then(response=>{
                    return response.json();
                    /* eslint-disable */
                  })
                  .then(data=> {
                    const studentsRecieved =[];
                    for(let key in data){
                      studentsRecieved.push(data[key]);
                    }
                    // this.students = studentsRecieved;
                    
                    
                    let students=[];
                    students = studentsRecieved;
                    this.$store.state.students = students;
                    // commit('SET_STUDENTS',students);
                    
                
                  }); 
    }
    ,
    reset(st) {
      this.$http
        .post(`https://fundapi.herokuapp.com/v1/reset/${st}`, {})
        .then(
          response => {
            /* eslint-disable */
            console.log(response);  // eslint-disable-next-line
          },
          error => {
            console.log(error);
          }
        );
    },
    addThirty(st) {
      this.$http
        .post(`https://fundapi.herokuapp.com/v1/payments/${st}`, {})
        .then(
          response => {
            /* eslint-disable */
            console.log(response);  // eslint-disable-next-line
          },
          error => {
            console.log(error);
          }
        );
    },
    addBig(st){
      this.$http
        .post(`https://fundapi.herokuapp.com/v1/payments100/${st}`, {})
        .then(
          response => {
            /* eslint-disable */
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );

    },
    subtractThirty(st){
      this.$http
        .post(`https://fundapi.herokuapp.com/v1/subtract30/${st}`, {})
        .then(
          response => {
            /* eslint-disable */
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );

    },
    subtractBig(st){
      this.$http
        .post(`https://fundapi.herokuapp.com/v1/subtract100/${st}`, {})
        .then(
          response => {
            /* eslint-disable */
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );

    }
  
  }
};
</script>
 <style scoped>
 .students{
   margin:10px;
   padding:20px;
 }
  .parallax {
   min-height: 110vh !important;
   min-width: 105vw;
   padding: -2rem;
   margin-left: -5rem;
}

.button{
  margin-bottom: 2rem;
}

.err{
  margin: 20vh 10vw;
}
 </style>
