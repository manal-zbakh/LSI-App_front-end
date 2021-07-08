<template>
   <div class="container">
       <table class="table table-bordered text-center">
  <thead>
    <tr>
      <th scope="col">Module</th>
      <th scope="col">Note</th>
      <th scope="col">Resultat</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(note,key) in Notes" :key="key">
      <th scope="row">{{note.module}}</th>
      <td>{{note.note}}</td>
      <td><span v-if="note.note>=12" style="color:green;font-weight:bold">Validé</span> <span style="color:orange;font-weight:bold" v-else-if="note.note<12 && note.note>8">RATT</span> <span v-else style="color:red;font-weight:bold">Non validé</span></td>
     
    </tr>


  </tbody>
</table>
       
       </div> 
</template>

<script>
import axios from 'axios'
   export default{

name :'Etunote'  , 
data(){
return{
    Notes:[]
}
}  ,
methods:{

} ,
created:function(){
         axios.get('http://127.0.0.1:8000/api/getNotees/'+this.$store.state.etudiant.id).then(response =>{
     this.Notes= response.data;
     console.log(response.data);
     });
} 
   } 
</script> 

<style>

</style>