
<template>

<div class="container " style="border:1px solid blue">
    <h3 class="text-center">La réservation da la salle </h3>
    <div class="row text-center mx-auto">
        <div class="col-2">Le jour</div>
        <div class="col-5">Le Module</div>
        <div class="col-3">Matin/soire</div>
        <div class="col-2">La salle</div>
    </div>
    <div class="row text-center mx-auto">
      <!-- jours -->
        <div class="col-2" ><select :id="'select'+msg" @change="show();getsalle()">
            <option :value="day.id" v-for="(day,key) in planing" :key="key">{{day.jour}}</option>
        
            </select>
            
            </div>
        <div class="col-5">
           <!-- modules -->
            <select :id="'md'+msg" >
            <option @change="show()" :value="j.id" v-for="(j,key) in modules" :key="key">{{j.intitule}}</option>
            </select>
        </div>
              <div class="col-3" >
                 <!-- heure_debut -->
                <select :id="'date'+msg" @change="getsalle()" >
            <option :value="ja" v-for="(ja,key) in jour" :key="key">{{time[ja].val}}</option>
            </select>
        </div>
                     <div class="col-2" >
                        <!-- salle -->
                       <select :id="'salle'+msg">
            <option :value="s.id"  v-for="(s,key) in salles" :key="key">{{s.intitule}}</option>
            </select>
        </div>
       <button class="container my-2 mx-auto text-center btn btn-primary" @click="valider()">Reserver</button>
    </div>





            </div>
</template>

<script>

import axios from 'axios'
import $ from 'jquery'

export default {
  name: 'reserver',
  props:{
      msg:String
  },
  data(){
    return{
    planing:[{id:1,jour:"Lundi"},{id:2,jour:"Mardi"},{id:3,jour:"Mercredi"},{id:4,jour:"Jeudi"},{id:5,jour:"Vendredi"},{id:6,jour:"Samedi"}],
    time:[{},{id:1,val:"matin"},{id:2,val:"soire"}],
    jour:[],
    modules:[],
    salles:[],
    seance:{
        heure:"",
        module:""
    },
    avoir:{
        seance_id:"",
        date:"",
        salle:""

    },
    }
  },


  methods:{
show(){
    console.log('select day '+$('#select'+this.msg).val()+' horaire '+$('#md'+this.msg).val());
          axios.get('http://127.0.0.1:8000/api/checkdate/' +$('#select'+this.msg).val()+'/'+this.msg).then(response =>{
     this.jour= response.data;
     console.log(response.data);
     }); 
},
getsalle(){
if($('#select'+this.msg).val() )
 console.log('select day '+$('#select'+this.msg).val()+' horaire '+$('#md'+this.msg).val());
           axios.get('http://127.0.0.1:8000/api/getlibre/'+$('#select'+this.msg).val()+'/'+$('#date'+this.msg).val()).then(response =>{
     this.salles= response.data;
     console.log(response.data);
     });  
},
valider(){
this.seance.heure=$('#date'+this.msg).val();
this.seance.module=$('#md'+this.msg).val();
axios.post('http://127.0.0.1:8000/api/seanceadd', this.seance).then(response =>{
this.avoir.seance_id=response.data[0]
this.avoir.date=$('#select'+this.msg).val();
this.avoir.salle=$('#salle'+this.msg).val();
 axios.post('http://127.0.0.1:8000/api/avoiradd', this.avoir).then(response =>{
console.log(response)
 });  
 });
 
   // alert('Le jour '+$('#select'+this.msg).val() + ' heure : '+$('#date'+this.msg).val()+' La salle '+$('#salle'+this.msg).val() +' Module '+$('#md'+this.msg).val()) ;
}
  },
created: function(){
          axios.get('http://127.0.0.1:8000/api/getmoduleby/'+this.msg).then(response =>{
     this.modules= response.data;
     console.log(response.data);
     }); 
}
}


</script>
<style scoped>






</style>