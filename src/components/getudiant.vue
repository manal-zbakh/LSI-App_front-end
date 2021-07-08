<template>
  <div class="mx-auto">
<!--     <div v-if="msg">{{msg}}</div>
    <h1 class="text-center">Gestion Etudiant</h1>
    <table class="table container w-75 text-center table-bordered">
        <tr>
            <th>Nom Prenom</th>
              <th>Actions</th>
        </tr>
        <tr v-for="et in etudiants " :key="et.id">
            <td>{{et.nom +" "+ et.prenom}}</td>
            <td><button class="btn btn-success mx-2">Modifier</button><button class="btn btn-danger
            mx-2">Supprimer</button></td>
        </tr>
    </table> -->


<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modifier</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        <button type="button" class="btn btn-primary">Enregistrer les modifications</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
/* import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css" */
export default {
  name: 'getudiant',
/*   props: {
    msg: String
  }, */
    created:function(){
/*          axios.get('http://127.0.0.1:8000/api/getetudiantsby/'+this.msg).then(response =>{
     this.etudiants= response.data;
     console.log(response.data);
     }); */
  },
  data(){
      return{
/*
etudiants :[],
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
} */
      }
  },
  methods:{

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
