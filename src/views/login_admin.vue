<template>
<div class="container">
  
  <hr>   <p class="text-center " style="font-size:30px;font-weight:bold"> Espace Admin </p><hr> 
<div class="row">
    <div class="col-12    w-25 p-3 my-4" style="height:100% !important">
<div class="w-50 mx-auto shadow p-4">
    <label class="control-form my-1" style="font-size:20px">Email</label>
    <input v-model="$store.state.isadmin.email" id="em" class="form-control my-1" style="height:55px" type="text" placeholder="Nom"> 
     <div id="alem" class="alert alert-danger" style="display:none">L'email est obligatoire </div>
    <label class="control-form my-1" style="font-size:20px" >Mot de passe</label>
  <input v-model="$store.state.isadmin.password" id="pass" class="form-control my-1" style="height:55px" type="password" placeholder="Mot de passe"> 
    <div id="alpass" class="alert alert-danger" style="display:none">Le mot de passe est obligatoire </div>
    <input type="button" @click="login() " class="btn btn-primary my-4" value="Se connecter">
  </div>  </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import $ from 'jquery'
export default {
    data(){
return{
  ok:null
}
  },
  methods:{
login(){
var flage=false;
$('#em').val()=='' ?  $('#alem').show() : $('#alem').hide();
 $('#pass').val()=='' ?  $('#alpass').show() : $('#alpass').hide();
var  admin={email:this.$store.state.isadmin.email,password:this.$store.state.isadmin.password};
if(this.$store.state.isadmin.password!="" && this.$store.state.isadmin.email!="")
axios.post('http://127.0.0.1:8000/api/login_admin',admin).then(response =>{
localStorage.setItem("admin-token",response.data.token);
localStorage.setItem("admin-user",JSON.stringify(response.data.user));
this.$store.state.admin=response.data.user; 
console.log(response.data.token+ ' '+response.data.user)
if(localStorage.getItem("admin-token")){
 this.$router.push('/profil_admin'); 
 flage=true
this.$store.state.isadmin.email="";
this.$store.state.isadmin.password="";}
if(!flage){this.ok="ok"}
}
).catch(error => {
console.log(error.response);
})


}
  },
  created:function(){
    
  }

}
</script>