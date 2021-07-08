<template>
<div class="all">
  <!-- header -->
      <div class="header mb-2 ">
        <div class="container">
        <div class="logo mb-5 "> <a href="#" style="font-size: 30px;" >
        <span class="badge bg-light text-dark" style="font-size: larger;">L</span>SI</a>
        </div>
        <ul>
      <router-link to="/" tag="li">
      <a href="">Home</a>
      </router-link> 
      <router-link to="/about" tag="li">
      <a href="">About</a>
      </router-link>   
    </ul>
 </div>
    

  </div>
  <router-view/>
  <!-- Foteer -->
  <div class="footer-dark">
    <footer>
      <div class="container">
        <dir class="row">
   
          <div class="col-sm-4 col-md-4 item">
            <h3>LIEN UTILISE</h3>
            <ul>
                 <li><a href="#">Site officiel de FSTT</a></li>
                 <li><a href="#">Enseignement Supérieur</a></li>
                 <li><a href="#"></a></li>
            </ul>
          </div>
          <div class="col-md-8 item text">
            <h1>FSTT</h1>
            <p>
            Ancienne Route de l’Aéroport, Km 10, Ziaten. BP : 416. Tanger - Maroc <br>
             + 212 (0) 5 39 39 39 54 / 55 <br>
            administration@fstt.ac.ma <br>
            Faculté des Sciences et Techniques de Tanger - Université Abdelmalek Essaâdi - www.fstt.ac.ma</p>
          </div>
        </dir>
        <p class="copyright">Company Name c 2021</p>

      </div>
    </footer>
   </div> 
  </div>
 
</template>
<script>


export default ({

})
</script>

<style  scoped>
.all{
  background-color:lavender;
}
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}

 a:hover{
  color:white;
  text-decoration: none;

} 
.header{
  background-color:#007580 ;
  color: #FFF;
  overflow: hidden;
  width: 100%;
  height: 70px;

}
.logo{
  font-size: 24px;
  padding: 9px;
  float: left;
  width: 200px;
}
ul{
  float: right;
  width: calc(100%-200%);
  margin: 0%;
}


li{
    display: inline-block;
    margin: 0 8px;
    line-height: 70px;
  }
a{
   color: #FFF;
   font-size: 18px;
   text-transform: uppercase;
   border: 1px solid transparent;
   padding: 7px 10px;
   border-radius: 3px;
  }
  .router-link-exact-active a{
    border: 1px solid white;
    transition: .5s;
  }
.footer-dark{
  padding: 50px 0;
  color: #FFF;
  background-color: #007580;
}
.footer-dark h3{
  margin-top: 0;
  margin-bottom:12px ;
  font-weight: bold;
  font-size: 16px;
}
.footer-dark ul{
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-dark ul a{
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}
.footer-dark ul a:hover{
  opacity: 0.8;
}
@media(max-width: 767px){
.footer-dark .item:not(.social){
  text-align: center;
  padding-bottom: 20px;
}
}
.footer-dark .item.text p{
  opacity: 0.6;
  margin-bottom: 0;
}
.footer-dark .item.social{
  text-align: center;
}
@media(max-width:767px){
.footer-dark .item.social{
  text-align: center;
  margin-top:20px ;
}
}
.footer-dark .item.social>a{
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  box-shadow: 0 0 0 1px rgb(255, 255, 255,0.4);
  margin: 0 8px;
  color: #FFF;
  opacity:0.75;
}
.footer-dark .item.social> a:hover{
  opacity: 0.9;
}
.footer-dark .copyright{
  text-align: center;
  padding-top: 24px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}
</style>
