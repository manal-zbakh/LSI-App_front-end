import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prof:null,
    profs:[],
    isprof:{
    email:"",
    password:""
    },
    etudiant:null,
    etudiants:[],
    isetudiant:{
    email:"",
    password:""
    },
    admin:null,
    admins:[],
    isadmin:{
    email:"",
    password:""
    },

  },
  actions: {
/*     loginprf(context){
  
      for(var i=0;i<context.state.profs.length;i++){
    
        if(context.state.profs[i].email==context.state.isprof.email && context.state.profs[i].password==context.state.isprof.password){
        context.state.prof=  context.state.profs[i]  ;
        localStorage.setItem('prof', JSON.stringify(context.state.prof));
        context.state.isprof.email="";
        context.state.isprof.password="";
       
        }
  
      }
    }, */

    login(context){
  
      for(var i=0;i<context.state.etudiants.length;i++){
    
        if(context.state.etudiants[i].email==context.state.isetudiant.email && context.state.etudiants[i].password==context.state.isetudiant.password){
        context.state.etudiant=  context.state.etudiants[i]  ;
        localStorage.setItem('etudiant', JSON.stringify(context.state.etudiant));
        context.state.isetudiant.email="";
        context.state.isetudiant.password="";
    
        }
  
      }
    },

    loginadmin(context){
  
      for(var i=0;i<context.state.admins.length;i++){
    
        if(context.state.admins[i].email==context.state.isadmin.email && context.state.admins[i].password==context.state.isadmin.password){
        context.state.admin=  context.state.admins[i]  ;
        localStorage.setItem('admin', JSON.stringify(context.state.admin));
        context.state.isadmin.email="";
        context.state.isadmin.password="";
    
        }
  
      }
    }
  },
  mutations: {
  },
  modules: {
  },
  getters:{
    isloged(state){
      return !!state.etudiant;
    },
    islogedprof(state){
      return !!state.prof;
    },
    islogedadmin(state){
      return !!state.admin;
    }
      }
  
})
