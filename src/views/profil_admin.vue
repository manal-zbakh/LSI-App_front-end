<template>
<div class="container">
    <div class="main-body">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3">
                      <h4>{{$store.state.admin.nom}}</h4>
                       <div class="profile-label">
                       <span class="label label-danger">Admin</span>
                       </div>
                      <p class="text-muted font-size-sm"> {{$store.state.admin.nom}} {{$store.state.admin.prenom}}</p>
                      <button class="btn btn-outline-primary " @click="logout()">Se déconnecter <i class="fas fa-sign-out-alt"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" style="color:blue;">
                    <h6 class="mb-0"><i class="fas fa-user-tie"></i>    Mes tache</h6>
                  </li>
                  
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><i class="fas fa-chalkboard-teacher"></i>  La gestionne des profs</h6>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><i class="fas fa-user-graduate"></i>  La gestionne des eutidiants</h6>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><i class="fas fa-tasks"></i>  La gestionne des pfes</h6>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><i class="fas fa-table"></i>  La gestionne des emplois de temps</h6>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><i class="fas fa-graduation-cap"></i>  L'affectation des modules</h6>
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
                      {{$store.state.admin.nom}} {{$store.state.admin.prenom}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{$store.state.admin.email}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Télé</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{$store.state.admin.tel}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">CIN</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{$store.state.admin.cin}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                       {{$store.state.admin.adresse}} 
                    </div>
                  </div>
                </div>
              </div>
<!-- nav scroll -->
              <div class="row gutters-sm">

                  <div class="tabs-wrapper profile-tabs">
                    <ul class="nav nav-tabs">
                        <li class=" nav-item"><a class="nav-link active" href="#tab-activity" data-toggle="tab">Les profes</a></li>
                        <li class="nav-item"><a class="nav-link" href="#tab-friends" data-toggle="tab">Les etudiants</a></li>
                        <li class="nav-item"><a class="nav-link" href="#tab-chat" data-toggle="tab">Les pfes</a></li>
                        <li class="nav-item"><a class="nav-link" href="#tab-emploi" data-toggle="tab">Les emplois de temps</a></li>
                        <li class="nav-item"><a class="nav-link" href="#tab-modules" data-toggle="tab">Les modules</a></li>
                    </ul>

                    <div class="tab-content">
                        <!-- les prof -->
                        <div class="tab-pane fade in active" id="tab-activity">
                            <gprof/>
                              
                        </div>

<!-- les etudiant -->
                        <div class="tab-pane fade" id="tab-friends">
                            
                            <br>

                    <div class="row gutters-sm">
                    <div class="tabs-wrapper profile-tabs">
                    <ul class="nav nav-tabs">
                        <li class=" nav-item"><a class="nav-link active" href="#tab-s1" data-toggle="tab">S1</a></li>
                        <li class="nav-item"><a class="nav-link" href="#tab-s2" data-toggle="tab">S2</a></li>
                        <li class="nav-item"><a class="nav-link" href="#tab-s3" data-toggle="tab">S3</a></li>
                        <li class="nav-item"><a class="nav-link" href="#tab-s4" data-toggle="tab">S4</a></li>
                        <li class="nav-item"><a class="nav-link" href="#tab-s5" data-toggle="tab">S5</a></li>
                        <li class="nav-item"><a class="nav-link" href="#tab-s6" data-toggle="tab">S6</a></li>
                    </ul>
                    <div class="tab-content">
                      
                        <!-- les eutidiants de s1 -->
                        <div class="tab-pane fade in active" id="tab-s1">
                            <br>
                          <gestionet msg="1"/>
                           
                        </div>
                        <!-- les eutidiants de s2 -->
                         <div class="tab-pane fade in active" id="tab-s2">
                            <br>
                         <gestionet msg="2"/>
                            
                        </div>
                         <!-- les eutidiants de s3 -->
                         <div class="tab-pane fade in active" id="tab-s3">
                           <br> 
                           <gestionet msg="3"/>
                        
                          
                        </div>
                        <!-- les eutidiants de s4 -->
                        <div class="tab-pane fade in active" id="tab-s4">
                      <gestionet msg="4"/>
                            <br>
                            
                            
                        </div>
                        <!-- les eutidiants de s5 -->
                        <div class="tab-pane fade in active" id="tab-s5">
                            <br>
                       <gestionet msg="5"/>
                            
                        </div>
                        <!-- les eutidiants de s6 -->
                        <div class="tab-pane fade in active" id="tab-s6">
                            <br>
                        <gestionet msg="6"/>
                        </div>
                    </div>
                    </div>
                     </div>

                        </div>

<!-- les pfes -->
                        <div class="tab-pane fade" id="tab-chat">
                            <h1 style="text-align:center">La gestion des pfes</h1>
                            <br>
                            <gpfe/>


                        </div>
<!-- l'emploi -->
                        <div class="tab-pane fade" id="tab-emploi">
                            <h1>La gestion des emplois de temps</h1>
                            <br>

                            <div class="row gutters-sm">
                    <div class="tabs-wrapper profile-tabs">
                    <ul class="nav nav-tabs">
                        <li class=" nav-item"><a class="nav-link active" href="#tab-S1" data-toggle="tab">S1</a></li>
                         <li class="nav-item"><a class="nav-link" href="#tab-S2" data-toggle="tab">S2</a></li>
                        <li class="nav-item"><a class="nav-link" href="#tab-S3" data-toggle="tab">S3</a></li>
                        <li class="nav-item"><a class="nav-link" href="#tab-S4" data-toggle="tab">S4</a></li>
                        <li class="nav-item"><a class="nav-link" href="#tab-S5" data-toggle="tab">S5</a></li>
                    </ul>
                    <div class="tab-content">
                        <!-- l'emlpoi de s1 -->
                        <div class="tab-pane fade in active" id="tab-S1">
                            <br>
                            <etuemploi msg="1" />
                            <reserver msg="1" />
                        </div>
                        <!-- l'emploi de s2 -->
                         <div class="tab-pane fade in active" id="tab-S2">
                            <br>
                          <etuemploi msg="2" />
                          <reserver msg="2" />
                        </div>
                        <!-- l'emploi de s3 -->
                         <div class="tab-pane fade in active" id="tab-S3"> 
                            <br>
                          <etuemploi msg="3" />
                          <reserver msg="3" />
                        </div>
                        <!-- l'emploi de s4 -->
                        <div class="tab-pane fade in active" id="tab-S4"> 
                            <br>
                        <etuemploi msg="4" />
                        <reserver msg="4" />
                        </div>
                        <!-- l'emploi de s5 -->
                        <div class="tab-pane fade in active" id="tab-S5">
                            <br>
                        <etuemploi msg="5" />
                        <reserver msg="5" />
                        </div>
                    </div>
                    </div>
                     </div>

                        </div>


                    <!-- les  modules -->

                        <div class="tab-pane fade" id="tab-modules">
                            <h1 style="text-align:center">L'affectation des modules</h1>
                            <br>

                            <div class="row gutters-sm">
                    <div class="tabs-wrapper profile-tabs">
                    <ul class="nav nav-tabs">
                        <li class=" nav-item"><a class="nav-link active" href="#tab-m1" data-toggle="tab">S1</a></li>
                        <li class="nav-item"><a class="nav-link" href="#tab-m2" data-toggle="tab">S2</a></li>
                        <li class="nav-item"><a class="nav-link" href="#tab-m3" data-toggle="tab">S3</a></li>
                        <li class="nav-item"><a class="nav-link" href="#tab-m4" data-toggle="tab">S4</a></li>
                        <li class="nav-item"><a class="nav-link" href="#tab-m5" data-toggle="tab">S5</a></li>
                    </ul>
                    <div class="tab-content">
                        <!-- Les modules de s1 -->
                        <div class="tab-pane fade in active" id="tab-m1">
                            <br>
                           <gmodule msg="1" />
                        </div>
<!-- l'emploi de s2 -->
                         <div class="tab-pane fade in active" id="tab-m2">
                            <br>
                           <gmodule msg="2" />
                        </div>
                        <!-- les modules de s3 -->
                         <div class="tab-pane fade in active" id="tab-m3">
                            <br>
                           <gmodule msg="3" />
                        </div>
                        <!-- l'emploi de s4 -->
                        <div class="tab-pane fade in active" id="tab-m4">
                            <br>
                           <gmodule msg="4" />
                        </div>
                        <!-- l'emploi de s5 -->
                        <div class="tab-pane fade in active" id="tab-m5">
                            <br>
                             <gmodule msg="5" />
                              </div>
                        
                    </div>
                    </div>
                     </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
              </div>




    </div>
</template>


 <script>
import Gestionet from '@/components/gestionet.vue'
import Gprof from '@/components/gprof.vue'
import Gpfe from '@/components/gpfe.vue'
import Gmodule from '@/components/gmodule.vue'
import Etuemploi from '@/components/Etuemploi.vue'
import Reserver from '@/components/reserver.vue'
import axios from 'axios'

export default {
  components:{
   Gestionet,
   Gprof,Gpfe,Gmodule,Etuemploi,Reserver
  },


methods: {
    logout(){
      this.$store.state.admin=null;
      localStorage.removeItem('admin-token');
      localStorage.removeItem('admin-user');
      if(localStorage.getItem("admin-token"))
      this.$store.state.admin=null;
      this.$router.push('/admin'); 
    }
},
created:function(){
  
   this.$store.state.admin=JSON.parse(localStorage.getItem("admin-user"));
   axios.defaults.headers.common['authToken']=localStorage.getItem("admin-token");
   //if(localStorage.getItem('admin-token'))
   console.log(this.$store.getters.islogedadmin)
   if(!this.$store.getters.islogedadmin){
   this.$router.push('/admin');
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


/* body{margin-top:20px;
background:#eee;
} */

h2 {
    clear: both;
    font-size: 1.8em;
    margin-bottom: 10px;
    padding: 10px 0 10px 30px;
}

h3 > span {
    border-bottom: 2px solid #C2C2C2;
    display: inline-block;
    padding: 0 5px 5px;
}

/* USER PROFILE */
#user-profile h2 {
    padding-right: 15px;
}
#user-profile .profile-status {
	font-size: 0.75em;
	padding-left: 12px;
	margin-top: -10px;
	padding-bottom: 10px;
	color: #8dc859;
}
#user-profile .profile-status.offline {
	color: #fe635f;
}
#user-profile .profile-img {
	border: 1px solid #e1e1e1;
	padding: 4px;
	margin-top: 10px;
	margin-bottom: 10px;
}
#user-profile .profile-label {
	text-align: center;
	padding: 5px 0;
}
#user-profile .profile-label .label {
	padding: 5px 15px;
	font-size: 1em;
}
#user-profile .profile-stars {
	color: #FABA03;
	padding: 7px 0;
	text-align: center;
}
#user-profile .profile-stars > i {
	margin-left: -2px;
}
#user-profile .profile-since {
	text-align: center;
	margin-top: -5px;
}
#user-profile .profile-details {
	padding: 15px 0;
	border-top: 1px solid #e1e1e1;
	border-bottom: 1px solid #e1e1e1;
	margin: 15px 0;
}
#user-profile .profile-details ul {
	padding: 0;
	margin-top: 0;
	margin-bottom: 0;
	margin-left: 40px;
}
#user-profile .profile-details ul > li {
	margin: 3px 0;
	line-height: 1.5;
}
#user-profile .profile-details ul > li > i {
	padding-top: 2px;
}
#user-profile .profile-details ul > li > span {
	color: #34d1be;
}
#user-profile .profile-header {
	position: relative;
}
#user-profile .profile-header > h3 {
	margin-top: 10px
}
#user-profile .profile-header .edit-profile {
	margin-top: -6px;
	position: absolute;
	right: 0;
	top: 0;
}
#user-profile .profile-tabs {
	margin-top: 30px;
}
#user-profile .profile-user-info {
	padding-bottom: 20px;
}
#user-profile .profile-user-info .profile-user-details {
	position: relative;
	padding: 4px 0;
}
#user-profile .profile-user-info .profile-user-details .profile-user-details-label {
	width: 110px;
	float: left;
	bottom: 0;
	font-weight: bold;
	left: 0;
	position: absolute;
	text-align: right;
	top: 0;
	width: 110px;
	padding-top: 4px;
}
#user-profile .profile-user-info .profile-user-details .profile-user-details-value {
	margin-left: 120px;
}
#user-profile .profile-social li {
	padding: 4px 0;
}
#user-profile .profile-social li > i {
	padding-top: 6px;
}
@media only screen and (max-width: 767px) {
	#user-profile .profile-user-info .profile-user-details .profile-user-details-label {
		float: none;
		position: relative;
		text-align: left;
	}
	#user-profile .profile-user-info .profile-user-details .profile-user-details-value {
		margin-left: 0;
	}
	#user-profile .profile-social {
		margin-top: 20px;
	}
}
@media only screen and (max-width: 420px) {
	#user-profile .profile-header .edit-profile {
		display: block;
		position: relative;
		margin-bottom: 15px;
	}
	#user-profile .profile-message-btn .btn {
		display: block;
	}
}


.main-box {
    background: #FFFFFF;
    -webkit-box-shadow: 1px 1px 2px 0 #CCCCCC;
    -moz-box-shadow: 1px 1px 2px 0 #CCCCCC;
    -o-box-shadow: 1px 1px 2px 0 #CCCCCC;
    -ms-box-shadow: 1px 1px 2px 0 #CCCCCC;
    box-shadow: 1px 1px 2px 0 #CCCCCC;
    margin-bottom: 16px;
    padding: 20px;
}
.main-box h2 {
    margin: 0 0 15px -20px;
    padding: 5px 0 5px 20px;
    border-left: 10px solid #c2c2c2; /*7e8c8d*/
}

.btn {
    border: none;
	padding: 6px 12px;
	border-bottom: 4px solid;
	-webkit-transition: border-color 0.1s ease-in-out 0s, background-color 0.1s ease-in-out 0s;
	transition: border-color 0.1s ease-in-out 0s, background-color 0.1s ease-in-out 0s;
	outline: none;
}
.btn-default,
.wizard-cancel,
.wizard-back {
	background-color: #7e8c8d;
	border-color: #626f70;
	color: #fff;
}
.btn-default:hover,
.btn-default:focus,
.btn-default:active,
.btn-default.active, 
.open .dropdown-toggle.btn-default,
.wizard-cancel:hover,
.wizard-cancel:focus,
.wizard-cancel:active,
.wizard-cancel.active,
.wizard-back:hover,
.wizard-back:focus,
.wizard-back:active,
.wizard-back.active {
	background-color: #949e9f;
	border-color: #748182;
	color: #fff;
}
.btn-default .caret {
	border-top-color: #FFFFFF;
}
.btn-info {
	background-color: #5daee7;
	border-color: #4c95c9;
}
.btn-info:hover,
.btn-info:focus,
.btn-info:active,
.btn-info.active, 
.open .dropdown-toggle.btn-info {
	background-color: #4c95c9;
	border-color: #3f80af;
}
.btn-link {
	border: none;
}
.btn-primary {
	background-color: #3fcfbb;
	border-color: #2fb2a0;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active, 
.open .dropdown-toggle.btn-primary {
	background-color: #38c2af;
	border-color: #2aa493;
}
.btn-success {
	background-color: #8dc859;
	border-color: #77ab49;
}
.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active, 
.open .dropdown-toggle.btn-success {
	background-color: #77ab49;
}
.btn-danger {
	background-color: #fe635f;
	border-color: #dd504c;
}
.btn-danger:hover,
.btn-danger:focus,
.btn-danger:active,
.btn-danger.active, 
.open .dropdown-toggle.btn-danger {
	background-color: #dd504c;
}
.btn-warning {
	background-color: #f1c40f;
	border-color: #d5ac08;
}
.btn-warning:hover,
.btn-warning:focus,
.btn-warning:active,
.btn-warning.active, 
.open .dropdown-toggle.btn-warning {
	background-color: #e0b50a;
	border-color: #bd9804;
}


.icon-box .btn {
	border: 1px solid #e1e1e1;
	margin-left: 3px;
	margin-right: 0;
}
.icon-box .btn:hover {
	background-color: #eee;
	color: #2BB6A3;
}

a {
    color: #2bb6a3;
	outline: none !important;
}
a:hover,
a:focus {
	color: #2bb6a3;
}

.daterange-filter {
	background: none repeat scroll 0 0 #FFFFFF;
	border: 1px solid #CCCCCC;
	cursor: pointer;
	padding: 5px 10px;
}
.filter-block .form-group {
	margin-right: 10px;
	position: relative;
}
.filter-block .form-group .form-control {
	height: 36px;
}
.filter-block .form-group .search-icon {
	position: absolute;
	color: #707070;
	right: 8px;
	top: 11px;
}
.filter-block .btn {
	margin-left: 5px;
}
@media only screen and (max-width: 440px) {
	.filter-block {
		float: none !important;
		clear: both
	}
	.filter-block .form-group {
		float: none !important;
		margin-right: 0;
	}
	.filter-block .btn {
		display: block;
		float: none !important;
		margin-bottom: 15px;
		margin-left: 0;
	}
	#reportrange {
		clear: both;
		float: none !important;
		margin-bottom: 15px;
	}
}


.tabs-wrapper .tab-content {
    margin-bottom: 20px;
    padding: 0 10px;
}

/* RECENT - USERS */
.widget-users {
    list-style: none;
	margin: 0;
	padding: 0;
}
.widget-users li {
	border-bottom: 1px solid #ebebeb;
	padding: 15px 0;
	height: 96px;
}
.widget-users li > .img {
	float: left;
	margin-top: 8px;
	width: 50px;
	height: 50px;
	overflow: hidden;
	border-radius: 50%;
}
.widget-users li > .details {
	margin-left: 60px;
}
.widget-users li > .details > .name {
	font-weight: 600;
}
.widget-users li > .details > .name > a {
	color: #344644;
}
.widget-users li > .details > .name > a:hover {
	color: #2bb6a3;
}
.widget-users li > .details > .time {
	color: #2bb6a3;
	font-size: 0.75em;
	padding-bottom: 7px;
}
.widget-users li > .details > .time.online {
	color: #8dc859;
}


/* CONVERSATION */
.conversation-inner {
    padding: 0 0 5px 0;
	margin-right: 10px;
}
.conversation-item {
	padding: 5px 0;
	position: relative;
}
.conversation-user {
	width: 50px;
	height: 50px;
	overflow: hidden;
	float: left;
	border-radius: 50%;
	margin-top: 6px;
}
.conversation-body {
	background: #f5f5f5;
	font-size: 0.875em;
	width: auto;
	margin-left: 60px;
	padding: 8px 10px;
	position: relative;
}
.conversation-body:before {
	border-color: transparent #f5f5f5 transparent transparent;
	border-style: solid;
	border-width: 6px;
	content: "";
	cursor: pointer;
	left: -12px;
	position: absolute;
	top: 25px;
}
.conversation-item.item-right .conversation-body {
	background: #dcfffa;
}
.conversation-item.item-right .conversation-body:before {
	border-color: transparent transparent transparent #dcfffa;
	left: auto;
	right: -12px;
}
.conversation-item.item-right .conversation-user {
	float: right;
}
.conversation-item.item-right .conversation-body {
	margin-left: 0;
	margin-right: 60px;
}
.conversation-body > .name {
	font-weight: 600;
	font-size: 1.125em;
}
.conversation-body > .time {
	position: absolute;
	font-size: 0.875em;
	right: 10px;
	top: 0;
	margin-top: 10px;
	color: #605f5f;
	font-weight: 300;
}
.conversation-body > .time:before {
	content: "\f017";
	font-family: FontAwesome;
	font-style: normal;
	font-weight: normal;
	text-decoration: inherit;
	margin-top: 4px;
	font-size: 0.875em;
}
.conversation-body > .text {
	padding-top: 6px;
}
.conversation-new-message {
	padding-top: 10px;
}

textarea.form-control {
    height: auto;
}
.form-control {
    border-radius: 0px;
    border-color: #e1e1e1;
    box-shadow: none;
    -webkit-box-shadow: none;
}


</style>