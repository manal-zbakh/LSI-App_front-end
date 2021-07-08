<template>
  <div  class="hello">
  
    <ul class="list-group my-3">
      <div class="text-center bg-white w-50 mx-auto" > <h1> Modules</h1></div>
  <li  class="list-group-item w-50 mx-auto " :id="'s'+key"  @click="getAll(module.id,key);" v-for="module in modules" :key="module.id">{{module.intitule}}</li>

</ul>
<div class="my-2" v-if="Notes">
      <form class="row ml-1">
      <input class="form-control col-4 mr-2" type="search" placeholder="Search" v-model="searchQuery" aria-label="Search">
      <button class="btn btn-outline-success col-2" type="submit">Chercher</button>
    </form>
</div>
 <table v-show="Notes" class="table table-bordered text-center ">
   <thead> <tr>
         <th>Nom</th>
         <th>Note</th>
     </tr>
     </thead> 
     <tbody class="tableau">
<tr v-for="(note,key) in resultQuery" :key="key">
<td>{{note.nom}} {{note.prenom}}</td>
<td class="note"><span> {{note.note}}</span><input type="text"  v-model="manote" style="display:none"></td>
<td>
<input type="button"  value="Modifier" v-show="!test" :id="'b'+key" class="btn btn-success bedit" @click="edit('b'+key)"  >
<input type="button"  value="Valider" class="btn btn-primary bval" @click="valider(key);" style="display:none">
</td>
</tr>
</tbody>
</table>  

  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
export default {
  name: 'Note',
  props:['id'],

  data(){
      return{
      Notes:null,
      searchQuery:null,
    modules:[], 
    manote:0,
    test:null,
    objet:{
      id:1,
      note:6
    }
      }
  },
  created :function(){
         axios.get('http://127.0.0.1:8000/api/getcours/'+ this.$store.state.prof.id ).then(response =>{
     this.modules= response.data;
     console.log(response.data);
     });
  },
  methods:{
      getAll:function($id,key){
      
    axios.get('http://127.0.0.1:8000/api/getNotes/'+$id).then(response =>{
     this.Notes= response.data;
     console.log(response.data);
 $('li').removeClass('active');
 $('#s'+key).addClass('active');
     });    
      },
      edit(test){
/* this.current.note=this.Notes[index].note;
this.current.nom=this.Notes[index].nom +" "+ this.Notes[index].prenom; */
var html=$('#'+test).parent('td').parent('tr').children('.note').children(':first-child').html();
this.manote=html;
this.test=test
$('#'+test).parent('td').parent('tr').children('.note').children(':first-child').hide()
$('#'+test).parent('td').parent('tr').children('.note').children(':last-child').show()
this.manote=html;
$('#'+test).parent('td').children(':first-child').hide()
$('#'+test).parent('td').children(':last-child').show()
      },
      valider(id){
console.log(id);



this.objet.id=this.Notes[id].id;
this.objet.note=this.manote;
 axios.post('http://127.0.0.1:8000/api/setnote', this.objet).then(response =>{
this.getAll(this.$store.state.prof.id);
this.test=null
console.log(response)
 }) 
$('#'+this.test).parent('td').parent('tr').children('.note').children(':first-child').show()
$('#'+this.test).parent('td').parent('tr').children('.note').children(':last-child').hide()
$('#'+this.test).parent('td').children(':first-child').show()
$('#'+this.test).parent('td').children(':last-child').hide()

      }

    },
      computed: {
    resultQuery(){
      if(this.searchQuery){
      return this.Notes.filter((item)=>{
        return item.nom.toLowerCase().match(this.searchQuery.toLowerCase()) || item.prenom.toLowerCase().match(this.searchQuery.toLowerCase()) ;
      })
      }else{
        return this.Notes;
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group-item:hover{
  cursor: pointer;
  color: aqua;
}

</style>
