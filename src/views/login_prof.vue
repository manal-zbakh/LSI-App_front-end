<template>
<div class="container">
  
  <hr>   <p class="text-center " style="font-size:30px;font-weight:bold"> Espace d'enseignant  </p><hr> 
<div class="row">
    <div class="col-12    w-25 p-3 my-4" style="height:100% !important">
<div class="w-50 mx-auto shadow p-4">
 
    <label class="control-form my-1" style="font-size:20px">Email</label>
    <div id="alem" class="alert alert-danger" style="display:none">L'email est obligatoire </div>
    <input v-model="$store.state.isprof.email" id="em" class="form-control my-1" style="height:55px" type="text" placeholder="Nom"> 
    
    <label class="control-form my-1" style="font-size:20px" >Mot de passe</label>
       <div id="alpass" class="alert alert-danger" style="display:none">Le mot de passe est obligatoire </div>
    <input id="pass" v-model="$store.state.isprof.password" class="form-control my-1" style="height:55px" type="text" placeholder="Mot de passe"> 
   
    <input type="button" @click="loginprof" class="btn btn-primary my-4" value="Se connecter">
   <div class="alert alert-danger" v-show="ok">Email ou Mot de passe incorrecte</div>
  </div>  </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import $ from 'jquery'
export default {
  data(){
return{
  ok:null
}
  },
  
methods:{
    loginprof :function(){
var flage=false;
$('#em').val()=='' ?  $('#alem').show() : $('#alem').hide();
 $('#pass').val()=='' ?  $('#alpass').show() : $('#alpass').hide();
var  prof={email:this.$store.state.isprof.email,password:this.$store.state.isprof.password};
this.ok=null
if($('#em').val() && $('#pass').val()){
axios.post('http://127.0.0.1:8000/api/login_prof',prof).then(response =>{
localStorage.setItem("prof-token",response.data.token);
localStorage.setItem("prof-user",JSON.stringify(response.data.user));
this.$store.state.prof=response.data.user; 
console.log(response.data.token+ ' '+response.data.user)
if(localStorage.getItem("prof-token") && this.$store.state.prof ){
this.$router.push('/profil_prof');
flage=true
this.$store.state.isprof.email="";
this.$store.state.isprof.password="";}
if(!flage){this.ok="ok"}
}
).catch(error => {
      console.log(error.response)
})
            //  flage=true
      //  this.$router.push('/profil_prof');
  
      }
  
     

    },

},
created:function(){
     axios.get('http://127.0.0.1:8000/api/getprofs').then(response =>{
     this.$store.state.profs= response.data;
     console.log(response.data);
     }); 
}
}
</script>
