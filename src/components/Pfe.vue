<template>
    <div>
        <table class="table text-center table-bordered">
  <thead>
    <tr>
      <th scope="col">Etudiant</th>
      <th scope="col">Sujet</th>
      <th scope="col">Date de soutenance</th>
     
    </tr>
  </thead>
  <tbody>
    <tr v-for="(pfe,key) in Pfe" :key="key">
      
      <td>{{pfe.nom}} {{pfe.prenom}} </td>
      <td>{{pfe.sujet}}</td>
      <td>{{pfe.date}}</td>
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
                 axios.get('http://127.0.0.1:8000/api/getpf/'+ this.$store.state.prof.id ).then(response =>{
     this.Pfe= response.data;
     console.log(response.data);
     });
    }
}

</script>
<style>

</style>