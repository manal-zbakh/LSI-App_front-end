<template>
    <div>
<table class="table text-center table-bordered">
  <tr>
<th>Intitule</th>
<th>coef</th>
<th>Enseignant</th>
  </tr>
  <tr v-for="(m,key) in modules" :key="key">
<td>{{m.intitule}}</td>
<td>{{m.coef}}</td>
<td>{{m.prof}}</td>
<td><button class="btn btn-success" data-bs-toggle="modal" :data-bs-target="'#'+id" @click="edit(key)"><i class="fas fa-edit"></i></button>
<button class="btn btn-danger mx-3" @click="supprimer(m.id)"><i class="fas fa-user-minus"></i></button>
</td>
  </tr>
</table>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#'+id">
<i class="fas fa-plus"></i>  Ajouter
</button>

<!-- Modal -->
<div class="modal fade" :id="id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modifier</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label class="control-form my-1" style="font-size:20px">module</label>
        <input v-model="module.intitule" class="form-control my-1" style="height:55px" type="text" placeholder="module"> <br>
        <label class="control-form my-1" style="font-size:20px">Coeficient</label>
        <input v-model="module.coef" class="form-control my-1" style="height:55px" type="text" placeholder="coeficient"> <br>
        <!-- <input type="text" v-model="module.intitule"><br> -->
        <!-- <input type="text" v-model="module.coef"><br> -->
        <select class="form-select" aria-label="Default select example" id="prf">
          <option   v-for="(p,key) in profs" :key="key" :value="p.id">{{p.nom}} {{p.prenom}}</option>
        </select>
      </div>
      <div class="modal-footer">

        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        <button type="button" class="btn btn-primary" v-if="show" data-bs-dismiss="modal" @click="add">Ajouter</button>
        <button type="button" class="btn btn-primary" v-else data-bs-dismiss="modal" @click="valider()">Enregistrer les modifications</button>
 
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
import axios from 'axios'
import $ from 'jquery'
export default {
name:"gmodule",
  props: {
    msg: String
  },
  data(){
return {
    show:null,
    profs:[],
    modules:[],
    module:{
      id:"",
      intitule:"",
      coef:"",
      prof_id:"",
      semestre_id:""
    },
    id:"myid"+this.msg
}

  },
methods:{
  add(){
       this.module.semestre_id=this.msg
   this.module.prof_id=$('#prf').val()
 axios.post('http://127.0.0.1:8000/api/addmodule', this.module).then(response =>{
console.log(response)

  })},
    edit(key){
      this.module.id=this.modules[key].id;
      this.module.intitule=this.modules[key].intitule;
      this.module.coef=this.modules[key].coef;
      this.module.prof_id=this.modules[key].prof_id;
      this.module.semestre_id=this.msg
    $('#prf option').removeAttr('selected');
    $('select option[value='+this.module.prof_id+']').attr('selected','selected');
    },
    valider(){   
this.module.prof_id=$('#prf').val()
 axios.post('http://127.0.0.1:8000/api/updatemodule', this.module).then(response =>{
console.log(response)})
},
supprimer(id){
axios.get('http://127.0.0.1:8000/api/deletemodule/'+id).then(
  response=>{
    console.log(response);
    
  }
)
}
},
created:function(){
     axios.get('http://127.0.0.1:8000/api/getprofs').then(response =>{
     this.profs= response.data;
     console.log(response.data);
     });   
     // api/getmoduleby/
       axios.get('http://127.0.0.1:8000/api/getmoduleby/'+this.msg).then(response =>{
     this.modules= response.data;
     console.log(response.data);
     });     
}

}
</script>
<style scoped>

</style>