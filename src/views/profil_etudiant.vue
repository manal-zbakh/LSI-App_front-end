<template>
<div>
<div class="container">
    <div class="main-body">
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3" v-if="$store.state.etudiant">
                      <h4>{{$store.state.etudiant.nom}} {{$store.state.etudiant.prenom}}</h4>
                      <p class="text-secondary mb-1">Etudiant LSI</p>
                      <p class="text-muted font-size-sm">{{$store.state.etudiant.email}}</p>
                      <button class="btn btn-outline-primary " @click="logout">Se déconnecter <i class="fas fa-sign-out-alt"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3" >
                
              <ul class="list-group list-group-flush" >
                  <li v-if="$store.state.etudiant.semestre_id!=6"  class="list-group-item d-flex justify-content-between align-items-center flex-wrap" style="cursor:pointer" >
                    <h6 class="mb-0"> <i class="fas fa-user-alt"></i> Mes informations personnels</h6>
                    
                  </li>
                
                  <li v-if="$store.state.etudiant.semestre_id!=6" class="list-group-item d-flex justify-content-between align-items-center flex-wrap" style="cursor:pointer">
  
                    <h6 class="mb-0"> <i class="fas fa-calendar-week"></i> Mon Emploi du temps</h6>
                    
                  </li>
                  <li v-if="$store.state.etudiant.semestre_id!=6" class="list-group-item d-flex justify-content-between align-items-center flex-wrap" style="cursor:pointer">
                    <h6 class="mb-0"> <i class="far fa-sticky-note"></i> Mes Notes</h6>
                  
                  </li>
                       <li v-if="$store.state.etudiant.semestre_id==6" class="list-group-item d-flex justify-content-between align-items-center flex-wrap" style="cursor:pointer">
                    <h6 class="mb-0">  <i class="fas fa-graduation-cap"></i> Mon PFE</h6>
                  
                  </li>
         
           
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Nom et prénom</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{$store.state.etudiant.nom}} {{$store.state.etudiant.prenom}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{$store.state.etudiant.email}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Télé</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     {{$store.state.etudiant.tel}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">CNE</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     {{$store.state.etudiant.cne}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Addresse</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     {{$store.state.etudiant.adresse}}
                    </div>
                  </div>
                
   
                </div>
              </div>

              <div class="row gutters-sm text-center" >
                <div v-if="$store.state.etudiant.semestre_id!=6" class="col-sm-6 mb-3 text-center">
                  <a href="#cpm" @click="goto('note');">
                  <div class="card h-100">
                    <div class="card-body">
                 <div class="card-box bg-blue">
                <div class="inner">
                    <h3 class="text-center"> Mes notes </h3>
                    <p> Consulter Mes notes </p>
                </div>
                <div class="icon">
                    <i class="far fa-sticky-note"></i>
                </div>
                <a href="#" class="card-box-footer">Voir plus <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        
                    </div>
                  </div>
                  </a>
                </div>
<!-- Pfe  -->
                <div v-if="$store.state.etudiant.semestre_id==6" class="col-sm-6 mb-3 text-center">
                  <a href="#cpm" @click="goto('pfe');">
                  <div class="card h-100">
                    <div class="card-body">
                 <div class="card-box bg-blue">
                <div class="inner">
                    <h3 class="text-center"> PFE </h3>
                    <p> Consulter Mon PFE </p>
                </div>
                <div class="icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <a href="#" class="card-box-footer">Voir plus <i class="fa fa-arrow-circle-right"></i></a>
            </div>
        
                    </div>
                  </div>
                  </a>
                </div>

                <div class="col-sm-6 mb-3" >
               <a v-if="$store.state.etudiant.semestre_id!=6" @click="goto('emploi');">
                  <div class="card h-100">
                    <div class="card-body">
                 <div class="card-box bg-green">
                <div class="inner">
                    <h3 class="text-center"> Emploi du temps </h3>
                    <p class="text-center"> Consulter Mon emploi </p>
                </div>
                <div class="icon">
                    <i class="fas fa-calendar-week"></i>
                </div>
                <a href="#" class="card-box-footer">Voir plus <i class="fa fa-arrow-circle-right"></i></a>
            </div>
                    </div>
                  </div>
               </a> 
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>  

<etunote v-if="show=='note'" />
<etuemploi v-else-if="show=='emploi'"  :msg="$store.state.etudiant.semestre_id" />
 <pfeet v-if="$store.state.etudiant.semestre_id==6 && show=='pfe'" />
</div>

    
</template>

<script>
import Etuemploi from '@/components/Etuemploi.vue'
import Etunote from '@/components/Etunote.vue'
import Pfeet from '@/components/Pfeet.vue'
  import axios from 'axios'
export default {

  components:{
          Etuemploi,Etunote,Pfeet

          },
          data(){
            return{
              show:null,
            }
          },
  
methods: {
    logout(){
      this.$router.push('/login_etudiant'); 
      this.$store.state.etudiant=null;
      localStorage.removeItem('etudiant-token');
       localStorage.removeItem('etudiant-user');
    },
    goto(cmp){
      this.show=cmp;
   
    }

},
created:function(){
  this.$store.state.etudiant=JSON.parse(localStorage.getItem("etudiant-user"));
axios.defaults.headers.common['authToken']=localStorage.getItem("etudiant-token");
    if(!this.$store.getters.isloged){
    this.$router.push('/login_etudiant');
    }
}
}
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
</style>