<template>
<div class="container"  >
  
  <hr>   <p class="text-center " style="font-size:30px;font-weight:bold"> Espace d'etudiant  </p><hr> 
<div class="row">
    <div class="col-12    w-25 p-3 my-4" style="height:100% !important">
<div class="w-50 mx-auto shadow p-4">
    <label class="control-form my-1" style="font-size:20px">Email</label>
    <div id="alem" class="alert alert-danger" style="display:none">L'email est obligatoire </div>
    <input  v-model="$store.state.isetudiant.email" class="form-control my-1" id="em"  @keyup.enter="login;" style="height:55px" type="text" placeholder="Nom"> 
    
    <label class="control-form my-1" style="font-size:20px" >Mot de passe</label>
       <div id="alpass" class="alert alert-danger" style="display:none">Le mot de passe est obligatoire </div>
  <input  @keyup.enter="login()" id="pass" v-model="$store.state.isetudiant.password" class="form-control my-1" style="height:55px" type="password" placeholder="Mot de passe"> 
    <input type="button"  @click="login " class="btn btn-primary my-4" value="Se connecter">
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
    login :function(){
   
  var flage=false;
$('#em').val()=='' ?  $('#alem').show() : $('#alem').hide();
$('#pass').val()=='' ?  $('#alpass').show() : $('#alpass').hide(); 
this.ok=null
var  etudiant={email:this.$store.state.isetudiant.email,password:this.$store.state.isetudiant.password};    
if($('#em').val() && $('#pass').val()){
axios.post('http://127.0.0.1:8000/api/login_etudiant',etudiant).then(response =>{
localStorage.setItem("etudiant-token",response.data.token);
localStorage.setItem("etudiant-user",JSON.stringify(response.data.user));
this.$store.state.etudiant=response.data.user; 
console.log(response.data.token+ ' '+response.data.user)
if(localStorage.getItem("etudiant-token") && this.$store.state.etudiant ){
this.$router.push('/profil_etudiant');
flage=true
this.$store.state.isetudiant.email="";
this.$store.state.isetudiant.password="";}
if(!flage){this.ok="ok"}
}
).catch(error => {
      console.log(error.response)
})

/*         flage=true
       this.$router.push('/profil_etudiant'); */
      
      } 
  

    },
test(){
        alert('hello')
}
},
created:function(){
          axios.get('http://127.0.0.1:8000/api/getetudiants').then(response =>{
     this.$store.state.etudiants= response.data;
     console.log(response.data);
     }); 
}
}

</script>

