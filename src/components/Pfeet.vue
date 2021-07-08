<template>
    <div class="container">
        <table class="table text-center table-bordered">
  <thead>
    <tr>
      <th scope="col">Encadrant</th>
      <th scope="col">Sujet</th>
      <th scope="col">Date de soutenance</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>{{Pfe.nom}} {{Pfe.prenom}} </td>
      <td>{{Pfe.sujet}}</td>
      <td>{{Pfe.date}}</td>
    </tr>
  
  </tbody>
</table>
    </div>
</template>
<script>
import axios from 'axios'

export default {
name : 'pfe',
data(){
    return{
        Pfe:[]
    }

},
    methods:{
        
    },
     created:function(){
     axios.get('http://127.0.0.1:8000/api/getpfetu/'+ this.$store.state.etudiant.id ).then(response =>{
     this.Pfe= response.data;
     console.log(response.data);
     });
    }
}

</script>
<style>

</style>