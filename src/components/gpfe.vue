<template>
<div>
<table class="table text-center table-bordered" >
<tr>
  <th>Nom et Prenom</th>
  <th> </th>
</tr>
<tr v-for="(et,key) in etudiants" :key="et.id">
<td>{{et.nom}} {{et.prenom}}</td>
<td><button data-bs-toggle="modal" data-bs-target="#exampleModal" @click="add(key)"  class="btn btn-success">Ajouter Encardrant</button></td>
</tr>
</table>

       <table class="table-responsive  table text-center table-bordered">
  <thead>
    <tr>
      <th scope="col">Etudiant</th>
       <th scope="col">Encadrant</th>
      <th scope="col">Sujet</th>
      <th scope="col">Date de soutenance</th>
      <th > Modifier ou supprimer </th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="(pfe,key) in pfes" :key="key">
      <td>{{pfe.nom}} {{pfe.prenom}} </td>
      <td>{{pfe.nomp}} {{pfe.prenomp}}</td>
      <td>{{pfe.sujet}}</td>
      <td>{{pfe.date}}</td>
      <td><button class="btn btn-danger" @click="delet(pfe.id)"><i class="fas fa-user-minus"></i></button> <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="edit(key)"><i class="fas fa-edit"></i></button> </td>
    </tr> 
  
  </tbody>
</table> 


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modifier</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <label type="text" class="form-control" >{{pfe.nom}} {{pfe.prenom}}</label>
      <input type="date" class="form-control" v-model="pfe.date" placeholder="date de soutenance">
      <input type="text" class="form-control" v-model="pfe.sujet" placeholder="sujet">
      <select class="form-select form-select-lg" id="profs">
        <option v-for="(p,key) in profs" :value="p.id" :key="key" >{{p.nom}} {{p.prenom}}</option>
      </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        <button type="button" v-if="show" class="btn btn-primary" data-bs-dismiss="modal" @click="valider">Enregisterr le modifications</button>
        <button type="button" v-else id="update" class="btn btn-primary" data-bs-dismiss="modal" @click="update">Modifier</button>
     
      </div>
    </div> 
  </div>
</div>

</div>

</template>
<script >
import axios from 'axios'
 import $ from 'jquery'
export default ({
  name :"gpfe",
 
data(){
    return{
    pfes:[],
    etudiants:[],
    profs:[],
    pfe:{
      id:"",
      pid:"",
      eid:"",
      nom:"",
      prenom:"",
      date:"",
      sujet:""
    },
    show:null
    }
},
created:function(){
         axios.get('http://127.0.0.1:8000/api/getprofs').then(response =>{
     this.profs= response.data;
     console.log(response.data);
     });
     axios.get('http://127.0.0.1:8000/api/getnotpfe').then(response =>{
     this.etudiants= response.data;
     console.log(response.data);
     });
          axios.get('http://127.0.0.1:8000/api/getpf/0').then(response =>{
     this.pfes= response.data;
     console.log(response.data);
     });
     
},
methods:{
  refresh(){
         axios.get('http://127.0.0.1:8000/api/getprofs').then(response =>{
     this.profs= response.data;
     console.log(response.data);
     });
     axios.get('http://127.0.0.1:8000/api/getnotpfe').then(response =>{
     this.etudiants= response.data;
     console.log(response.data);
     });
          axios.get('http://127.0.0.1:8000/api/getpf/0').then(response =>{
     this.pfes= response.data;
     console.log(response.data);
     });
  },
add(key){
    alert(this.etudiants[key].prenom)
  this.pfe.eid=this.etudiants[key].id;
  this.pfe.nom=this.etudiants[key].nom;
  this.pfe.prenom=this.etudiants[key].prenom;

this.show="show";
},
valider(){
this.pfe.pid=$('#profs').val()
 axios.post('http://127.0.0.1:8000/api/addpfe', this.pfe).then(response =>{
   this.refresh();
console.log(response)
 }) 
},
delet(id){
           axios.get('http://127.0.0.1:8000/api/delpfe/'+id).then(response =>{
     this.refresh();
     console.log(response.data);
     }); 
},
update(){
  this.pfe.pid=$('#profs').val()
 axios.post('http://127.0.0.1:8000/api/updatepfe', this.pfe).then(response =>{
   this.refresh();
console.log(response)

 }) 
},
edit(key){
 
  this.pfe.id=this.pfes[key].id;
  this.pfe.eid=this.pfes[key].eid;
   this.pfe.pid=this.pfes[key].pid;
  this.pfe.date=this.pfes[key].date;
  this.pfe.sujet=this.pfes[key].sujet;
  this.pfe.nom=this.pfes[key].nom;
  this.pfe.prenom=this.pfes[key].prenom;
    $('#profs option').removeAttr('selected');
   $('select option[value='+this.pfe.pid+']').attr('selected','selected');

  this.show=null;
  console.log(key)
}
},

})
</script>
<style scoped>

</style>
