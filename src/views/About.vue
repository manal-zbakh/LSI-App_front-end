<template>
  <!-- <div class="about">
    <div class="body">
      <div class="login-box">
        <h1 class="p-3 ml-3">Ingenieurs Logiciels et Systèmes Intelligents</h1>
        <div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          OBJECTIFS ET DEBOUCHES
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione voluptate saepe cumque, rem laudantium praesentium! Perspiciatis, qui vero. Officia incidunt libero praesentium eaque cum temporibus ut excepturi nesciunt vero.</div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          MODALITE D'ACCES 
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit tempore dolorem dolores nihil nemo maxime dolore dicta saepe veniam amet eaque commodi ab pariatur modi porro corporis, eveniet ex!</div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          LIEUX DE LA FORMATION
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deleniti, in asperiores hic vel facilis voluptatibus ipsum, harum explicabo, quidem omnis similique quo quos aut neque sed delectus. Vel, maxime!</div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          ENVIRENEMENT DE RECHERCHE
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique rem odit maxime sunt ut facilis maiores omnis facere temporibus dolorem dolores, velit sequi tenetur debitis amet. Eveniet saepe incidunt ullam.</div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div> -->
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title"></h6>
                    <div id="content">
                        <ul class="timeline">
                            <li class="event" data-date="Objectifs">
                                <h3>Registration</h3>
                                <p>Former des ingénieurs informatiques spécialisés dans les techniques avancées du développement logiciel, notamment le développement et la validation &amp; vérification des systèmes en réseau (spé. Ingénierie Systèmes et Logiciels) Concepteur, architecte et développeur logiciel ; Métiers du Cycle de Vie des Applications : responsable de systèmes applicatifs et ingénieur validation ; Ingénieur d’études et développement ; Gestionnaire et intégrateur d’applications ; Chef de projet informatique (après quelques années d’expérience) ; Métiers de la recherche en Informatique, avec une poursuite d’études en Doctorat</p>
                            </li>
                            <li class="event" data-date="Les conditions">
                                <h3>Conditions d'admission</h3>
                                <p><ul><li>Être titulaire d’un DUT ou d’une Licence scientifique (math, math-info) ;</li>
                                <li>Une expérience professionnelle dans le secteur du numérique est souhaitée ;</li>
                                <li>Avoir un bon niveau anglais ;</li></ul></p>
                            </li>
                            <li class="event" data-date="5:00 - 8:00pm">
                                <h3>Diplomation - Certification</h3>
                                <p>Ingenieur d'etat</p>
                            </li>
                            <li class="event" data-date="8:30 - 9:30pm">
                                <h3>Closing Ceremony</h3>
                                <p>See how is the victor and who are the losers. The big stage is where the winners bask in their own glory.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import "bootstrap/dist/css/bootstrap.min.css"
export default {
  name: 'About',
}
</script>
<style scoped>
/* .body{
  font-family: sans-serif;

}
.login-box{
  width: 700px;
  position: absolute;
  color: #F6C523;
  top :100px;
  background: #007580;
  left: 10px;
  border-radius: 10px;
}
.card-header{
  background: #F6C523;
}
.btn{
  background: none;
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
}
.card-body{
  color: black;
} */
@import"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css";
body{margin-top:20px;}
.timeline {
    border-left: 3px solid #727cf5;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    background: rgba(114, 124, 245, 0.09);
    margin: 0 auto;
    letter-spacing: 0.2px;
    position: relative;
    line-height: 1.4em;
    font-size: 1.03em;
    padding: 50px;
    list-style: none;
    text-align: left;
    max-width: 40%;
}

@media (max-width: 767px) {
    .timeline {
        max-width: 98%;
        padding: 25px;
    }
}

.timeline h1 {
    font-weight: 300;
    font-size: 1.4em;
}

.timeline h2,
.timeline h3 {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 10px;
}

.timeline .event {
    border-bottom: 1px dashed #e8ebf1;
    padding-bottom: 25px;
    margin-bottom: 25px;
    position: relative;
}

@media (max-width: 767px) {
    .timeline .event {
        padding-top: 30px;
    }
}

.timeline .event:last-of-type {
    padding-bottom: 0;
    margin-bottom: 0;
    border: none;
}

.timeline .event:before,
.timeline .event:after {
    position: absolute;
    display: block;
    top: 0;
}

.timeline .event:before {
    left: -207px;
    content: attr(data-date);
    text-align: right;
    font-weight: 100;
    font-size: 0.9em;
    min-width: 120px;
}

@media (max-width: 767px) {
    .timeline .event:before {
        left: 0px;
        text-align: left;
    }
}

.timeline .event:after {
    -webkit-box-shadow: 0 0 0 3px #727cf5;
    box-shadow: 0 0 0 3px #727cf5;
    left: -55.8px;
    background: #fff;
    border-radius: 50%;
    height: 9px;
    width: 9px;
    content: "";
    top: 5px;
}

@media (max-width: 767px) {
    .timeline .event:after {
        left: -31.8px;
    }
}

.rtl .timeline {
    border-left: 0;
    text-align: right;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-right: 3px solid #727cf5;
}

.rtl .timeline .event::before {
    left: 0;
    right: -170px;
}

.rtl .timeline .event::after {
    left: 0;
    right: -55.8px;
}
</style>
