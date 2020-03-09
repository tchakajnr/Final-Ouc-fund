import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

 export const store = new Vuex.Store({
    state:{
        students:[],
        student:[],
        time:'',
        isMember:false,
        payment:0,
        interval:1000,
        pwd:'',
        studentNumber:'BK',
        token:'',
        status:'',
        userId:'',
        isAuth:false,
        wrongDetails: false,
        out: false,
        stat:'',
        errorStatement:'Loading....',
        head:'',
        adminToken:'',
        secretId:''
         
        

        
    },
    actions:{
        loadDetails({commit}){
            fetch('https://fundapi.herokuapp.com/v1/payments/'
            ,{
            headers: {
              Authorization: 'Bearer ' + this.state.adminToken
            }
          }
          )
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
                    localStorage.setItem('students', JSON.stringify(students));
                    console.log( `Iam running from store`);
                    commit('SET_STUDENTS',students);
                    
                
                  }); 
        },

    },
    mutations:{
        SET_STUDENTS(state,students){
            state.students = students
        }

    }
});