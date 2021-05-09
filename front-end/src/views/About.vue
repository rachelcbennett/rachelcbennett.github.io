<template>
  <div class="about">
      <p>Hi, I'm Rachel. Rach's Recipes started out as a way for me to practice my web programming skills.
                It kind of grew into a recipe journal from there, and now I'm able to share fun new recipes with you.  </p>
        
    
  </div>

  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'About',
  components: {
      
  },
  methods:{
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



html, body {padding:0; margin:0; height:100%;}
</style>