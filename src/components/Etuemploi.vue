
<template>

<div class="" >
                <div class="timetable-img text-center">
                    <img src="img/content/timetable.png" alt="">
                </div>
                <div class="table-responsive">
                    <table class="table table-bordered text-center" id="my-table" v-if="planing">
                        <thead style="">
                            <tr class="bg-light-gray" >
                                <th class="text-uppercase">Temps
                                </th>
                                <th class="text-uppercase"><span class="float-left"> 8:30 </span> <span class="float-right">12:15</span></th>
                                <th class="text-uppercase"><span class="float-left"> 12:30 </span> <span class="float-right">13:15</span></th>
                                <th class="text-uppercase"><span class="float-left"> 13:30 </span> <span class="float-right">17:15</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="align-middle">Lundi</td>
                                <td>
                                    <div v-if="planing[0]">
                                    <span  class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">{{planing[0].intitule}}</span>
                             
                                    <div class="font-size13 mt-1 text-dark">{{planing[0].salle}}</div>
                               </div>
                                </td>
                                <td>
                                <div >
                                    <span class="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Pause</span>
                                  </div> 
                                </td>
                                <td>
                                <div v-if="planing[1]" >
                                    <span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">{{planing[1].intitule}} </span>
                                    
                                    <div class="font-size13 text-dark"> {{planing[1].salle}} </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td class="align-middle">Mardi</td>
                                
                                <td class="bg-light-white">
                                  <div v-if="planing[2]">
                                  <span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">{{planing[2].intitule}}</span> 
                                    <div class="font-size13 text-dark mt-2">{{planing[2].salle}}</div></div>
                                </td>
                                <td>
                                  <div>
                                    <span class="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Pause</span>
                                   </div>
                                </td>
                                <td>
                                <div v-if="planing[3]">
                                    <span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">{{planing[3].intitule}}</span>
                                    
                                    <div class="font-size13 text-dark ">{{planing[3].salle}}</div>
                                    </div>
                                </td>
                            </tr>
                           

                            <tr>
                                <td class="align-middle">Mercredi</td>
                                <td class="bg-light-white" >
                                    <span v-if="planing[4]">
                                    <span  class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">{{planing[4].intitule}}</span>
                                    <div class="font-size13 text-dark mt-2">{{planing[4].salle}}</div>
                                    </span>
                                </td>
                                <td>
                                <div>
                                    <span class="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Pause</span>
                                </div> 
                                </td>
                                <td class="bg-light-white">
                                <div v-if="planing[5]">
                                <span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">{{planing[5].intitule}}</span>
                                 
                                 <div class="font-size13 text-dark mt-2">{{planing[5].salle}} </div></div>
                                </td>
                                
                            </tr>


                            <tr>
                            
                                <td class="align-middle">Jeudi</td>
                                <td class="bg-light-white">
                                <div v-if="planing[6]">
                                    <span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">{{planing[6].intitule}}</span> 
                                    <div class="font-size13 text-dark ">{{planing[6].salle}}</div></div>
                                </td>
                                
                                <td>
                                    <span class="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Pause</span>
                                   
                                </td>
                                
                                <td>
                                <div v-if="planing[7]">
                                    <span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">{{planing[7].intitule}}</span>
                                    
                                    <div class="font-size13 text-dark mt-1">{{planing[7].salle}}</div>
                                </div>
                                </td>
                            </tr>

                            <tr>
                                <td class="align-middle">Vendredi</td>
                                <td>
                                <div v-if="planing[8]">
                                    <span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">{{planing[8].intitule}}</span>
                                    
                                    <div class="font-size13 text-dark mt-1">{{planing[8].salle}}</div>
                                </div>
                                </td>
                                <td>
                                <div >
                                    <span class="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Pause</span>
                                </div>   
                                </td>
                               
                                <td>
                                <div v-if="planing[9]">
                                    <span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">{{planing[9].intitule   }}</span>
                                    
                                    <div class="font-size13 text-dark mt-1">{{planing[9].salle}}</div>
                                    </div>
                                </td>
                                
                            </tr>

                            <tr>
                                <td class="align-middle">Samedi</td>
                                <td>
                                <div v-if="planing[10]">
                                    <span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">{{planing[10].intitule}}</span>
                           
                                    <div class="font-size13 text-dark mt-1">{{planing[10].salle}}</div>
                                    </div>
                                </td>
                                <td>
                                <div>
                                    <span class="bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Pause</span>
                                 </div>  
                                </td>
                               
                                <td>
                                <div v-if="planing[11]">
                                    <span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">{{planing[11].intitule}}</span>
                                 
                                    <div class="font-size13 text-dark mt-1">{{planing[11].salle}}</div>
                                    </div>
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
</template>

<script>

import axios from 'axios'
export default {

  name: 'etuemploi',
  props:{
      msg:String
  }
,  data(){
    return{
    planing:[],
    test:null
    }
  },
  created:function(){
         axios.get('http://127.0.0.1:8000/api/getSeance/'+this.msg).then(response =>{
     this.planing= response.data;
     console.log(response.data);
     });
  },
  methods:{

  }

};
</script>
<style scoped>

body{
    margin-top:20px;
}
.bg-light-gray {
    background-color: #f7f7f7;
}
.table-bordered thead td, .table-bordered thead th {
    border-bottom-width: 2px;
}
.table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
}
.table-bordered td, .table-bordered th {
    border: 1px solid #dee2e6;
}


.bg-sky.box-shadow {
    box-shadow: 0px 5px 0px 0px #00a2a7
}

.bg-orange.box-shadow {
    box-shadow: 0px 5px 0px 0px #af4305
}

.bg-green.box-shadow {
    box-shadow: 0px 5px 0px 0px #4ca520
}

.bg-yellow.box-shadow {
    box-shadow: 0px 5px 0px 0px #dcbf02
}

.bg-pink.box-shadow {
    box-shadow: 0px 5px 0px 0px #e82d8b
}

.bg-purple.box-shadow {
    box-shadow: 0px 5px 0px 0px #8343e8
}

.bg-lightred.box-shadow {
    box-shadow: 0px 5px 0px 0px #d84213
}


.bg-sky {
    background-color: #02c2c7
}

.bg-orange {
    background-color: #e95601
}

.bg-green {
    background-color: #5bbd2a
}

.bg-yellow {
    background-color: #f0d001
}

.bg-pink {
    background-color: #ff48a4
}

.bg-purple {
    background-color: #9d60ff
}

.bg-lightred {
    background-color: #ff5722
}

.padding-15px-lr {
    padding-left: 15px;
    padding-right: 15px;
}
.padding-5px-tb {
    padding-top: 5px;
    padding-bottom: 5px;
}
.margin-10px-bottom {
    margin-bottom: 10px;
}
.border-radius-5 {
    border-radius: 5px;
}

.margin-10px-top {
    margin-top: 10px;
}
.font-size14 {
    font-size: 14px;
}

.text-light-gray {
    color: #d6d5d5;
}
.font-size13 {
    font-size: 13px;
}

.table-bordered td, .table-bordered th {
    border: 1px solid #dee2e6;
}
.table td, .table th {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}




</style>