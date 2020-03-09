<template>
  <div class="financialreports">
    <h1 class="subheading grey--text">Projects</h1>

      <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-forward</v-icon>
      </template>
    </v-breadcrumbs>
  </div>

    <div class="text-center">
    <v-btn rounded color="lighten-2 white--text primary mr-3 mx-0 mb-3" light
    @click="loadPayments"
    >Load Payments</v-btn>
  </div>
    <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Student_ID</th>
          <th class="text-left">Jan</th>
          <th class="text-left">Feb</th>
          <th class="text-left">Mar</th>
          <th class="text-left">Apr</th>
          <th class="text-left">May</th>
          <th class="text-left">Jun</th>
          <th class="text-left">Jul</th>
          <th class="text-left">Aug</th>
          <th class="text-left">Sept</th>
          <th class="text-left">Oct</th>
          <th class="text-left">Nov</th>
          <th class="text-left">Dec</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="payment in payments" :key="payment.id">
           <td>{{payment.studentID }}</td>
           <td>{{payment.January }}</td>
           <td>{{payment.February }}</td>
           <td>{{payment.March }}</td>
           <td>{{payment.April }}</td>
           <td>{{payment.May }}</td>
           <td>{{payment.June }}</td>
           <td>{{payment.July }}</td>
           <td>{{payment.August }}</td>
           <td>{{payment.September }}</td>
           <td>{{payment.October }}</td>
           <td>{{payment.November }}</td>
           <td>{{payment.December }}</td>

           
    
        </tr>
      </tbody>
    </template>
  </v-simple-table>

  </div>
</template>

<script>
export default {
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
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Financial Reports',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
       isMember:false,
      time: '',
      bk: "BK20170",
      post: "https://fundapi.herokuapp.com/v1/student/",
      student: 0,
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
     searchStudent: async function(studentID) {
      fetch(`https://fundapi.herokuapp.com/v1/student/${studentID}`)
        .then(res => {
          return res.json();
        })
        .then(([data]) => {
          this.firstName = data.firstName;
          this.lastName = data.lastName;
          this.major = data.major;
          this.pay = data.payment;
          if (data.payment === 0) {
            this.time =
              "According to records you are not part of the fund contact secretary for details";
          } else {
            this.isMember = true;
            const month = (this.payment) / 30;
            if (month === 1) {
              this.time = `You have paid your subscriptions for only 1 month`;
            } else {
              this.time = `You have paid your subscriptions for ${data.payment /
                30} months`;
            }
          }
          
        });
    },
    loadPayments(){
      this.$http.get('https://fundapi.herokuapp.com/v1/payments/')
                .then(resp=>{
                  return resp.json()
                  /* eslint-disable */
                }).then(data =>{
                  const pay =[];
                  for(let key in data){
                    pay.push(data[key]);
                  }
                  this.payments = pay;

                });
            

    },
    loadDetails(){
      this.$http.get('https://fundapi.herokuapp.com/v1/payments/')
                  .then(response=>{
                    return response.json();
                    /* eslint-disable */
                  })
                  .then(data=> {
                    const studentsRecieved =[];
                    for(let key in data){
                      studentsRecieved.push(data[key]);
                    }
                    this.students = studentsRecieved;
                    
                  });         

    },
    addPayment(studentID){
      this.$http.get(`https://fundapi.herokuapp.com/v1/student/${studentID}.json`)
      

    },
    getId(st) {
      this.$http
        .post(`https://fundapi.herokuapp.com/v1/payments/${st}`, {})
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