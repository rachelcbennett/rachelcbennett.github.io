<template>
  <div class="home">
      <div class='latest'>
        <div class="pic-ctn">
            <p class='sideways'> Latest Recipe...</p>
            <div class="left">
                <img src = "../assets/goldframe2.png" alt="" class="gold-frame">
                <!--<img src = "../assets/leaf1.png" alt="" class="leaf1">-->
                <img src="../assets/italiantacos.jpg"  alt="" class="pic">
            </div>
            <div class='right'> 
                <h2>Italian Tacos with Guacamole</h2>
                <button class="pure-button pure-button-primary" @click.prevent='viewRecipe("Hello")'> Read more...</button>
            </div>
        </div>
    </div>
    <br>
    <br>
        <div class="masonry">
            
            
            <div class="masonry-item">
                    <a href = ""><img class="masonry-pic" src = "../assets/pizza.jpg"></a>
                    <h3>Homemade "Brick Oven" Pizza</h3>
            </div>
            <div class="masonry-item">
                    <router-link to="/recipe/302"><img class="masonry-pic" src = "../assets/laksa.jpg"></router-link> 
                    <router-link to="/recipe/302"><h3>Malaysian Laksa Curry Soup</h3></router-link> 
            </div>
            <div class="masonry-item">
                    <a href = "/pages/laksa.html"><img class="masonry-pic" src = "../assets/carbonara.jpg"></a>
                    <h3>Spaghetti Carbonara</h3>
            </div>
        </div>
    <br>
  <br>
  <br>
  <br>
  </div>

  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
      
  },
  methods:{
      viewRecipe(recipe){
        console.log("HELLO");
        this.$router.push({ name: recipe + '.vue'});
        return;
      }
  }
}
</script>










<style scoped>

/* MOBILE */
@media only screen and (min-width: 320px) and (max-width: 599px) {
    .masonry {
        column-count: 3;
    }
    .pic-ctn{
        min-height:750px;
        flex-direction: column;
    }
    .left{
        width:100%;
    }


    .pic{
    
        width: 325px;
        height: 425px;
        margin:10px;
        position: absolute;
        left: 0px;
        top: 50px;
    }  
    .gold-frame{
        position:absolute;
        left:40px;
        top:20px;
        z-index:0;
        width:350px;
        height: 450px;
    }

    .sideways{

        position:absolute;

        font-family: 'Get Show';
        font-size: 75px;
        letter-spacing: 0;
        position: absolute;
        left: 15px;
        top: 420px;
        font-family: 'Cookie', cursive;
        color:black;
        z-index:10;
    }
    
}
/* Masonry on tablet */
@media only screen and (min-width:600px) and (max-width: 899px) {

  .masonry {
      column-count:3;
      
    }
    .pic-ctn{
        min-height:750px;
        flex-direction: column;
    }
    .left{
        width:100%;
    }


    .pic{
    
        width: 325px;
        height: 425px;
        margin:10px;
        position: absolute;
        left: 200px;
        top: 50px;
    }  
    .gold-frame{
        position:absolute;
        left:235px;
        top:20px;
        z-index:0;
        width:350px;
        height: 450px;
    }


    .sideways{

    position:absolute;

    font-family:'Get Show';
    font-size: 75px;
    letter-spacing: 0;
    position: absolute;
    left: 0px;
    top: 190px;
    transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    font-family: 'Cookie', cursive;
    color:black;
    z-index:10;
    }
}

/* Masonry on desktop */
@media only screen and (min-width:900px) {
    .masonry {
        column-count: 3;
        margin-left:80px;
        margin-right:100px;
    }
    .pic-ctn{
        min-height:500px;
        flex-direction: row;
    }
    .left{
        width:50%;
    }
    .pic{
    
    width: 325px;
    height: 425px;
    margin:10px;
    position: absolute;
    left: 100px;
    top: 50px;
    }       
    .gold-frame{
        position:absolute;
        left:135px;
        top:20px;
        z-index:0;
        width:350px;
        height: 450px;
    }

    .sideways{

        position:absolute;

        font-family:'Get Show';
        font-size: 75px;
        letter-spacing: 0;
        position: absolute;
        left: -90px;
        top: 190px;
        transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg);
        font-family: 'Cookie', cursive;
        color:black;
        z-index:10;
    }
    
}
.masonry-pic{
   width:100%;
}

.masonry-item {
   
    padding:10px;
    
    display: inline-block;
    padding:10px;
    
    width:100%;

    border: 40px;
    display: inline-block;


}





@keyframes display {
  0% {
    transform: translateX(0);
    opacity: 0;
   
  }
  15%{
    opacity: 1;
  }
  100% {
      transform:translateX(0);
      opacity:0;
  }
}

.pic-ctn {
  position: relative;
  margin-top: 15vh;
  display:flex;
  
  margin-left:auto;
  margin-right:auto;

  /*background-color:rgb(152, 192, 152);*/

  justify-content: space-between;
    -ms-justify-content: space-between;
    -webkit-justify-content: space-between;

}

.pic-ctn > .feature {
  position: absolute;
  top: 0;
  left: calc(50% - 100px);
  opacity:0;
  animation: display 15s infinite;
}

.feature:nth-child(2) {
  animation-delay: 5s;
}
.feature:nth-child(3) {
  animation-delay: 10s;
}
.feature:nth-child(4) {
  animation-delay: 15s;
}
img:nth-child(5) {
  animation-delay: 8s;
}


.pic:hover{
     transform: scale(1.05);
     transition-duration: 2.5s;
}
.latest{
    position:relative;
    display:block;
    margin-left:auto;
    margin-right:auto;
    max-width:900px;
}
.right{
    position:relative;
    margin-left:auto;
    margin-right:auto;
    width:50%;
}


.leaf1{
    
    

}

.leaf1:hover{
    transform: scale(1.04);
    transition-duration: 2.5s;
    
}


h2{
    color: black;
}

button{
    background-color:rgb(112, 158, 112);
    height:40px;
}

button:hover{
    color:rgb(255, 224, 47);
    transition-duration:1s;
}

.latest{
    background-color:rgb(250, 246, 246);

}

.label{
    width:200px;
    height:100px;
    position:relative;
    top:-68px;
    left:0px;
    margin-left:auto;
    margin-right:auto;
    display:block;
    background-color:turquoise;
    opacity:0.84;

}


.masonry-pic:hover{
   
    transition-duration: .02s;
    opacity:.75;
}

a{
    text-decoration: none;
}

html, body {padding:0; margin:0; height:100%;}
</style>