<template>
    <v-app>
        <v-content class="light-blue darken-4" fluid>
            <v-row align="center" justify="center">
                <v-col cols="11" sm="10" md="6" xs="10" lg="4" xl="3">
                  <h1 class="text-center home_header">
                    <span class="ouc white--text">OUC</span>
                    <span class="fund blue--text">Fund</span>
                  </h1>
                  <h2 class="white--text text-center welcome_text">Welcome to OUC Zim Students Fund</h2>
                    <v-card class="elevation-12 signinup">
                        <v-window v-model="step">
                            <v-window-item :value="1">
                                <v-row>
                                    <v-col cols="12" md="12">
                                        <v-card-text class="mt-12">
                                            <h2 class="text-center white--text primary pa-4">
                                                Sign in as User
                                            </h2>
                                            <v-form>
                                                <v-text-field
                                                    label="Student Number"
                                                    name="studentId"
                                                    prepend-icon="person"
                                                    type="text"
                                                    color="primary"
                                                    v-model="studentNumber"
                                                    value="studentNumber"
                                                    
                                               />
                                                <v-text-field
                                                    label="Password"
                                                    id="password"
                                                    prepend-icon="lock"
                                                    type="password"
                                                    color="primary"
                                                    name="password"
                                                    value="pwd"
                                                    v-model="pwd"
                                               />
                                            </v-form>
                                            <h4 class="text-center mt-3" @click="step++">Sign in as Admin</h4>
                                        </v-card-text>
                                        <div class="text-center mt-3">
                                             <router-link
                                            to="/home"
                                            >
                                                <v-btn rounded color="white--text primary" @click="logIn()">SIGN IN</v-btn>
                                            </router-link>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-window-item>
                               <v-window-item :value="2">
                                <v-row>
                                    <v-col cols="12" md="12">
                                        <v-card-text class="mt-12">
                                            <h3 class="text-center lighten-2 white--text primary pa-4">
                                                Sign in as Admin
                                            </h3>
                                             <v-form>
                                                <v-text-field
                                                    label="ADMIN ID"
                                                    name="adminId"
                                                    prepend-icon="person"
                                                    type="text"
                                                    color="primary"
                                                    v-model="adminId"
                                                    value="adminId"
                                               />
                                                <v-text-field
                                                    label="ADMIN KEY"
                                                    id="password"
                                                    prepend-icon="lock"
                                                    type="password"
                                                    color="primary"
                                                    name="adminKey"
                                                    value="adminKey"
                                                    v-model="adminKey"
                                               />
                                            </v-form>
                                            <h3 class="text-center mt-3" @click="step--">Sign in as User</h3>
                                        </v-card-text>
                                        <div class="text-center mt-3">
                                            <router-link
                                            to="/students"
                                            >
                                            <v-btn rounded color="white--text primary" @click="adminLog()" >SIGN IN</v-btn>
                                            </router-link>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-window-item>
                        </v-window>
                    </v-card>
                </v-col>
            </v-row>
        </v-content>
        <Footer />
    </v-app>
    
</template>

<script>
import Footer from "../components/Footer";
import {mapState,mapActions} from 'vuex';
export default {
    components: { Footer},
    computed:{
    ...mapActions([
      'loadDetails'
    ]),
    ...mapState([
      'status',
      'student',
      'token',
      'userId',
      'wrongDetails',
      'notExist',
      'nameError',
      'studentNumber'
    ])
  },
  data() {
    return {
         step:1,
    props:{
        source:String
    },
      adminId:'BK',
      adminKey:'',
      pwd:'',
      studentNumber:'BK',
      isMember:false,
      time: '',
      bk: "BK20170",
      // student: this.$store.state.student,
      students: [],
      payments: [],
      tabs: null,
      text: "Lorem ipsu",
      payment: {},
      firstName: "",
      lastName: "",
      major: "",
      pay: ""
    };
  },
  methods: {
  setAutoLogout(milliseconds){
    setTimeout(() => {
    this.$store.state.token = null;
    this.$store.state.isAuth = false;
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
    this.$store.state.out = true
    }, milliseconds);
  },
    logIn(){
      /* eslint-disable */
      console.log(this.studentNumber);
      // this.$store.state.studentNumber =this.studentNumber;
      localStorage.setItem('studentNum', this.studentNumber);
      this.$http.post("https://fundapi.herokuapp.com/v1/login/",{
          studentId:this.studentNumber,
          password:this.pwd
        }
      )
      .then(resp=>{
        this.$store.state.status = 201;
        if(resp.status === 422){
          this.$store.state.status = 401;
          throw new Error('Validation failed!!!');
        }
        if(resp.status !== 200 && resp.status !==201){
          console.log(`Error found`);
          this.$store.state.status = 401;
          throw new Error('Could not authenticate you');
        }
        if(resp.status === 200){
          this.$store.state.status = 200;
        }
return resp.json();
        
      })
      .then(respData=>{
        console.log(respData);
        if(respData.status === 'passwordError' || respData.status=== 0){
          this.$store.state.status = 401;
         
        }else if(respData.status !== 'passwordError'){
          this.$store.state.status  = 200;
        }
        if(respData.status === 'notExist'){
          this.$store.state.status  = 401;
         
        }
        this.$store.state.token = respData.token;
        this.$store.state.userId = respData.userId;
        this.$store.state.isAuth = true;
        
        localStorage.setItem('token', respData.token);
        localStorage.setItem('userId', respData.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
        new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
        // console.log(expiryDate);
        // console.log(this.$store.state.token);
        return respData.token;
          
      })
      .then(token=>{
        this.$store.state.wrongDetails = false;
        this.searchStudent(this.studentNumber);
        // this.loadDetails;
      })
      .catch(err => {
        console.log(`err obj ${err}`);
        this.$store.state.status = 0;
        // this.$store.state.isAuth = false;
        
        
      });
      
      },
    adminLog(){
      console.log(`${this.adminId} and    ${this.adminKey}`);
      /* eslint-disable */
      this.$http.post("https://fundapi.herokuapp.com/v1/admin/",{
          adminId:this.adminId,
          adminKey:this.adminKey
        }
      )
      .then(resp=>{
        this.$store.state.status = 201;
        if(resp.status === 422){
          this.$store.state.status = 401;
          throw new Error('Validation failed!!!');
        }
        if(resp.status !== 200 && resp.status !==201){
          console.log(`Error found`);
          this.$store.state.status = 401;
          throw new Error('Could not authenticate you');
        }
        if(resp.status === 200){
          this.$store.state.status = 200;
        }
return resp.json();
        
      })
      .then(respData=>{
        // console.log(respData);
        if(respData.status === 'passwordError' || respData.status=== 0){
          this.$store.state.status = 401;
         
        }else if(respData.status !== 'passwordError'){
          this.$store.state.status  = 200;
        }
        if(respData.status === 'notExist'){
          this.$store.state.status  = 401;
         
        }
        this.$store.state.adminToken = respData.adminToken;
        this.$store.state.secretId = respData.secretId;
        this.$store.state.isAuth = true;
        
        localStorage.setItem('adminToken', respData.adminToken);
        localStorage.setItem('secretId', respData.secretId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
        new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
        // console.log(expiryDate);
        // console.log(this.$store.state.token);
        return respData.adminToken;
          
      })
      .then(token=>{
            this.loadDetails;
      })
      .catch(err => {
        console.log(err);
        this.$store.state.status = 0; 
      });
      
      },
    searchStudent(studentID){
       /* eslint-disable */ 
      fetch(`https://fundapi.herokuapp.com/v1/student/${studentID}`, {
      headers: {
        Authorization: 'Bearer ' + this.$store.state.token
      }
    })
    .then(res => {
          return res.json();
        })
        .then(([data]) => {
          localStorage.setItem('student', JSON.stringify(data));
           console.log( `Iam running every 3sec`);
          this.$store.state.student = data;
          this.$store.state.payment = data.payment;
          if (data.payment === 0) {
            this.$store.state.time =
              "According to records you are not part of the fund contact secretary for details";

          } else {
            this.$store.state.isMember = true;
            const month = Math.floor((this.payment) / 30);
            if (month === 1) {
              this.$store.state.time = `You have paid your subscriptions for only 1 month`;
            } else {
            
              this.$store.state.time= `You have paid your subscriptions for ${Math.floor(this.$store.state.payment /
                30)} months`;
            }
          }
          
        });
                  
    }
  }
};
</script>

<style scoped>

.home_header{
  margin-top:20px;
}
.welcome_text{
   margin-top:20px;
   font-weight: 400;
}

    .signinup{
        margin-top:20px;
    }

    .ouc{
      /* background-color: blue; */
      padding: 2px !important;
    }

    .fund{
      background-color: white;
      padding: 2px !important;
      border-radius: 4px;
    }

</style>