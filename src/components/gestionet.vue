<template>
        <div >
    <h1 class="text-center">Gestion Etudiant</h1>
    <table class="table container  text-center table-bordered">
        <tr>
            <th>Nom Prenom</th>
              <th>Actions</th>
        </tr>
        <tr v-for="(et,key) in etudiants " :key="et.id">
            <td>{{et.nom +" "+ et.prenom}}</td>
            <td><button class="btn btn-success mx-2" @click="edit(key)" data-bs-toggle="modal" :data-bs-target="'#'+monis"><i class="fas fa-edit"></i></button><button class="btn btn-danger
            mx-2" @click="delet(et.id)"><i class="fas fa-user-minus"></i></button></td>
        </tr>
    </table> 
    
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" @click="show='hello'" data-bs-toggle="modal" :data-bs-target="'#'+monis">
 <i class="fas fa-plus"></i> Ajouter
</button>

<!-- Modal -->
<div class="modal fade" :id="monis" tabindex="-1" aria-labelledby="ajouterModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" :id="monis">Modifier</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <div class="row">
           <div class="col-12">
             <label class="form-label" style="font-size:20px">nom</label>
               <input class="form-control my-1" style="height:55px" type="text"   placeholder="nom"  v-model="etudiant.nom">
               <label class="form-label" style="font-size:20px">prenom</label>
               <input class="form-control my-1" style="height:55px" type="text"  placeholder="prenom"  v-model="etudiant.prenom">
               <label class="form-label" style="font-size:20px">email</label>
               <input class="form-control my-1" style="height:55px"  type="text"  placeholder="email"  v-model="etudiant.email">
               <label class="form-label" style="font-size:20px">date de naissance</label>
               <input class="form-control my-1" style="height:55px"  type="date"  placeholder="date de naissance"  v-model="etudiant.date_naissance">
               <label class="form-label" style="font-size:20px">lieu de naissance</label>
               <input  class="form-control my-1" style="height:55px" type="text"  placeholder="lieu de naissance"  v-model="etudiant.lieu_naissance">
               <label class="form-label" style="font-size:20px">telephone</label>
               <input class="form-control my-1" style="height:55px"  type="text"  placeholder="telephone"  v-model="etudiant.tel">
               <label class="form-label" style="font-size:20px">cin</label>
               <input class="form-control my-1" style="height:55px"  type="text"  placeholder="cin"  v-model="etudiant.cin">
               <label class="form-label" style="font-size:20px">cne</label>
               <input class="form-control my-1" style="height:55px"  type="text"  placeholder="cne"  v-model="etudiant.cne">
               <label class="form-label" style="font-size:20px">adresse</label>
               <input class="form-control my-1" style="height:55px"  type="text"  placeholder="adresse" v-model="etudiant.adresse">
               <label class="form-label" style="font-size:20px">password</label>
               <input class="form-control my-1" style="height:55px"  type="text"  placeholder="password"  v-model="etudiant.password">

           </div>
          
       </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" v-if="show" class="btn btn-primary" @click="add">Save changes</button>
        <button type="button" v-else class="btn btn-primary" data-bs-dismiss="modal" @click="update">Update</button>
      </div>
    </div>
  </div>
</div>


    </div>
</template>
<script>
import axios from 'axios'
export default {
name:"gestionET",
   props: {
    msg: String
  }, 
data(){
    return{
etudiants:[],
etudiant:{
  id:"",
  nom:"",
  prenom:"",
  email:"",
  date_naissance:"",
  lieu_naissance:"",
  tel:"",
  cne:"",
  cin:"",
  password:"",
  adresse:"",
  semestre_id:"",
} ,
show:null,
monis:"hello"+this.msg
    }
    
},
methods:{
add(){
   axios.post('http://127.0.0.1:8000/api/addetu', this.etudiant).then(response =>{
console.log(response)
 })   
},
delet(id){
          axios.get('http://127.0.0.1:8000/api/deletetu/'+id).then(response =>{
     this.etudiants= response.data;
     console.log(response.data);
     }); 
},
edit(key){
  this.etudiant.id=this.etudiants[key].id;
  this.etudiant.nom=this.etudiants[key].nom;
  this.etudiant.prenom=this.etudiants[key].prenom;
  this.etudiant.email=this.etudiants[key].email;
  this.etudiant.date_naissance=this.etudiants[key].date_naissance;
  this.etudiant.lieu_naissance=this.etudiants[key].lieu_naissance;
  this.etudiant.tel=this.etudiants[key].tel;
  this.etudiant.cne=this.etudiants[key].cne;
  this.etudiant.cin=this.etudiants[key].cin;
  this.etudiant.password=this.etudiants[key].password;
  this.etudiant.adresse=this.etudiants[key].adresse;
  this.show=null
},
update(){
this.show="hello"
axios.post('http://127.0.0.1:8000/api/updateetu', this.etudiant).then(response =>{
this.refresh();
console.log(response)
 })  
  
}
},
    created:function(){
          axios.get('http://127.0.0.1:8000/api/getetudiantsby/'+this.msg).then(response =>{
     this.etudiants= response.data;
     console.log(response.data);
     }); 
  },
}
</script>
<style scoped>

</style>