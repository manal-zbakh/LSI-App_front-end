<template>
  <div class="mx-auto">
    <h1 class="text-center">La gestion des profs</h1>
    <table class="table  w-75 text-center table-bordered">
        <tr>
            <th>Nom Prenom</th>
              <th>Actions</th>
        </tr>
        <tr v-for="(pro,key) in prof " :key="key">
            <td>{{pro.nom +" "+ pro.prenom}}</td>
            <td><button class="btn btn-success mx-2" @click="edit(key)" data-bs-toggle="modal" data-bs-target="#Ajouter"><i class="fas fa-edit"></i></button><button @click="supp(pro.id)" class="btn btn-danger
            mx-2"><i class="fas fa-user-minus"></i></button></td>
        </tr>
    </table>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Ajouter" @click="add()"><i class="fas fa-plus-circle"></i> Ajouter</button>

  <div class="modal fade" id="Ajouter" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ajouter un element au tableau</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
         <form>
           <div class="row">
             <div class="col-6">
             <label>Nom</label>
             <input class="form-control" v-model="p.nom" type="text">
             <label>Prenom</label>
             <input class="form-control" type="text" v-model="p.prenom">
             <label>CIN</label>
             <input class="form-control" type="text" v-model="p.cin">
             <label>Telephone</label>
             <input class="form-control" type="text" v-model="p.tel">
             <label>Adresse</label>
             <input class="form-control" type="text" v-model="p.adresse">
           </div>
           <div class="col-6">
             <label>Date de naissance</label>
             <input class="form-control" type="date" v-model="p.date_naissance">
              <label>Email</label>
             <input class="form-control" type="text" v-model="p.email">
             <label>Lieu de naissance</label>
             <input class="form-control" type="text" v-model="p.lieu_naissance">
             <label>Mot de passe</label>
             <input class="form-control" type="text" v-model="p.password">
             </div>
             </div>
         </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
          <button type="button" @click="valider()" class="btn btn-warning mx-1" v-if="show" data-bs-dismiss="modal" id="update" >Modifier</button>
          <button type="button" @click="confirmer()" class="btn btn-warning mx-1" v-else data-bs-dismiss="modal" id="update" >Valider</button>
        </div>
      </div>()
    </div>
  </div>
  
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'gprof',
  props: {
    msg: String
  },
  data(){
      return{
        show:null,
      prof :[],
      p:{
        id:"",
        nom:"",
        prenom:"",
        cin:"",
        tel:"",
        email:"",
        password:"",
        date_naissance:"",
        lieu_naissance:"",
        adresse:""
      }
      }
  },
  methods:{
add(){
this.show=null
this.p.id=null;
this.p.nom="";
this.p.prenom="";
this.p.tel="";
this.p.cin="";
this.p.lieu_naissance="";
this.p.date_naissance="";
this.p.adresse="";
this.p.password="";
this.p.email="";
},
confirmer(){
 axios.post('http://127.0.0.1:8000/api/addprof',this.p).then(response =>{
this.afficher();
this.p.id="";
this.p.nom="";
this.p.prenom="";
this.p.tel="";
this.p.cin="";
this.p.lieu_naissance="";
this.p.date_naissance="";
this.p.adresse="";
this.p.password="";
this.p.email="";
console.log(response)
 }).catch(error=>{console.log(error)})
},
supp(i){
         axios.get('http://127.0.0.1:8000/api/deleteprof/'+i).then(response =>{
     this.afficher();
     console.log(response.data);
     });
},
afficher(){
           axios.get('http://127.0.0.1:8000/api/getprofs').then(response =>{
     this.prof= response.data;
     console.log(response.data);
     });
},
edit(id){
this.show="show"
this.p.id=this.prof[id].id;
this.p.nom=this.prof[id].nom;
this.p.prenom=this.prof[id].prenom;
this.p.tel=this.prof[id].tel;
this.p.cin=this.prof[id].cin;
this.p.lieu_naissance=this.prof[id].lieu_naissance;
this.p.date_naissance=this.prof[id].date_naissance;
this.p.adresse=this.prof[id].adresse;
this.p.password=this.prof[id].password;
this.p.email=this.prof[id].email;
},
valider(){
 axios.post('http://127.0.0.1:8000/api/updateprof', this.p).then(response =>{
this.afficher();
this.p.id="";
this.p.nom="";
this.p.prenom="";
this.p.tel="";
this.p.cin="";
this.p.lieu_naissance="";
this.p.date_naissance="";
this.p.adresse="";
this.p.password="";
this.p.email="";
console.log(response)
 }) 
}
  },
  created:function(){
         axios.get('http://127.0.0.1:8000/api/getprofs').then(response =>{
     this.prof= response.data;
     console.log(response.data);
     });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
