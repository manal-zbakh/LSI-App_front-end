<template>

    <div class="mystle">
    <div class="main-body">
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3">
                      <h4>{{$store.state.prof.nom}} {{$store.state.prof.prenom}}</h4>
                      <p class="text-secondary mb-1">Professeur</p>
                      <p class="text-muted font-size-sm">{{$store.state.prof.email}}</p>
                      <button class="btn btn-outline-primary " @click="logout">Se déconnecter <i class="fas fa-sign-out-alt"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><i class="fas fa-user-alt"></i>  Mes information personnels</h6>
                  </li>
                  <li @click="goto('emploi');" class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><i class="fas fa-calendar-week"></i>  Mon emploi de temps</h6>
                 </li>
                  <li @click="goto('note');" class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><i class="far fa-sticky-note"></i>  Consulter les notes</h6>
                   </li>
                  <li @click="goto('pfe');" class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><i class="fas fa-tasks"></i>  Consulter les pfes</h6>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Nom et prenom</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{$store.state.prof.nom}} {{$store.state.prof.prenom}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{$store.state.prof.email}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">tele</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{$store.state.prof.tel}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">CNE</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{$store.state.prof.cin}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Addresse</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{$store.state.prof.adresse}}
                    </div>
                  </div>
                </div>
              </div>
      <div class="row gutters-sm" >
                <div class="col-sm-4 mb-3" >
               <a href="#cpm" @click="goto('note');">
                  <div class="card h-100">
                    <div class="card-body">
                 <div class="card-box bg-green">
                <div class="inner">
                    <h3 class="text-center"> Les Notes </h3>
                    <p class="text-center"> Consulter Mes Notes </p>
                </div>
                <div class="icon">
                   <i class="far fa-sticky-note"></i>
                </div>
                <a href="#" class="card-box-footer">View More <i class="fa fa-arrow-circle-right"></i></a>
            </div>
                    </div>
                  </div>
               </a> 
                </div>
                     <div class="col-sm-4 mb-3" >
               <a href="#cpm" @click="goto('emploi');">
                  <div class="card h-100">
                    <div class="card-body">
                 <div class="card-box bg-warning">
                <div class="inner">
                    <h3 class="text-center"> Emploi du temps </h3>
                    <p class="text-center"> Consulter Mon emploi </p>
                </div>
                <div class="icon">
                  <i class="fas fa-calendar-week"></i>
                </div>
                <a href="#" class="card-box-footer">Voir plus<i class="fa fa-arrow-circle-right"></i></a>
            </div>
                    </div>
                  </div>
               </a> 
                </div>  
                 <div class="col-sm-4 mb-3" >
               <a href="#cpm" @click="goto('pfe');">
                  <div class="card h-100">
                    <div class="card-body">
                 <div class="card-box bg-primary">
                <div class="inner">
                    <h3 class="text-center"> PFE </h3>
                    <p class="text-center"> Consulter Les PFES </p>
                </div>
                <div class="icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <a href="#" class="card-box-footer">Voir plus<i class="fa fa-arrow-circle-right"></i></a>
            </div>
                    </div>
                  </div>
               </a> 
                </div>  


      </div>

            </div>
          </div>

        </div>
        <div v-if="show=='emploi'"><Emploi/></div>
              <div v-else-if="show=='note'"><Note/></div>
                  <div v-else-if="show=='pfe'"><Pfe/></div>
    </div>
</template>

<script>
import Emploi from '../components/Emploi.vue';
import Note from '@/components/Note.vue'
import Pfe from '@/components/Pfe.vue'
import axios from 'axios'

 export default {
 
   components:{
  Note,Emploi,Pfe
 },
data(){
    return{
    show:"Emploi",
    }
},
methods: {
    logout(){
     
      this.$store.state.prof=null;
      localStorage.removeItem('prof-user');
      localStorage.removeItem('prof-token');
       this.$router.push('/login_prof'); 
    },
        goto(cmp){
      this.show=cmp;
   
    }
},

created:function(){
this.$store.state.admin=JSON.parse(localStorage.getItem("prof-user"));
axios.defaults.headers.common['authToken']=localStorage.getItem("prof-token");
    if(!this.$store.getters.islogedprof){
this.$router.push('/login_prof');
}




}}
</script>

<style scoped>
body{
    margin-top:20px;
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;    
}
.main-body {
    padding: 15px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}
.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.bg-gray-300 {
    background-color: #e2e8f0;
}
.h-100 {
    height: 100%!important;
}
.shadow-none {
    box-shadow: none!important;
}

.card-box {
    position: relative;
    color: #fff;
    padding: 20px 10px 40px;
    margin: 20px 0px;
}
.card-box:hover {
    text-decoration: none;
    color: #f1f1f1;
    cursor: pointer;
}
.card-box:hover .icon i {
    font-size: 100px;
    transition: 1s;
    -webkit-transition: 1s;
}
.card-box .inner {
    padding: 5px 10px 0 10px;
}
.card-box h3 {
    font-size: 27px;
    font-weight: bold;
    margin: 0 0 8px 0;
    white-space: nowrap;
    padding: 0;
    text-align: left;
}
.card-box p {
    font-size: 15px;
}
.card-box .icon {
    position: absolute;
    top: auto;
    bottom: 5px;
    right: 5px;
    z-index: 0;
    font-size: 72px;
    color: rgba(0, 0, 0, 0.15);
}
.card-box .card-box-footer {
    position: absolute;
    left: 0px;
    bottom: 0px;
    text-align: center;
    padding: 3px 0;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    text-decoration: none;
}
.card-box:hover .card-box-footer {
    background: rgba(0, 0, 0, 0.3);
}
.bg-blue {
    background-color: #00c0ef !important;
}
.bg-green {
    background-color: #00a65a !important;
}
a:hover{
  text-decoration: none;

}
.list-group-item:hover h6{
  color:#00c0ef;
  cursor: pointer;
}
.mystle{
  width:90%;
  margin :0 auto
}
</style>