<template>
    <div class="recipe">
        <div class="main">
            <h1>{{recipe.name}}</h1>
            <br>
            <div>
               <p> {{recipe.description}}</p>
            </div>
            <img :src="photopath"/>
            <br>
            <br>
            <div class="notes" v-for="note in recipe.notes" :key="note.id">
                {{note}}
                <br>
                <br>
            </div> 
            
            <script type="application/ld+json">
                    {
                    "@context": "https://schema.org/",
                    "@type": "Recipe",
                    "name": {{recipe.name}},
                    "description": "The best banana bread recipe you'll ever find! Learn how to use up all those extra bananas.",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.7",
                        "ratingCount": "123"
                    },
                    }
            </script>

            <div class="instructions">
                <div class ="instructions-header">
                    <br>
                    <img :src="photopath" class="circle-img"/>
                    <h2>{{recipe.name}}</h2>
                    <p>Posted by <em> Rachel </em> on {{recipe.date}}</p>
                    {{recipe.time}}
                </div>
                <ul>
                <h2> Ingredients </h2>
                <li v-for="ingredient in recipe.ingredients" :key="ingredient.id">
                    {{ingredient}}
                </li>
                <br>
                <h3> {{recipe.subheader}}</h3>
                <li v-for="subingredient in recipe.subingredients" :key="subingredient.id">
                    {{subingredient}}
                </li>
                </ul>
                <br>
                <ol>
                    <h2> Instructions </h2>
                    <li v-for="instruction in recipe.instructions" :key="instruction.id">
                        {{instruction}}
                    </li>
                </ol>
            </div>
        </div>

        <div class="sidebar">
            <p>Hi, I'm Rachel. Rach's Recipes started out as a way for me to practice my web programming skills.
                It kind of grew into a recipe journal from there, and now I'm able to share fun new recipes with you.  </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'RecipeIndex',
  components: {
  },
  data(){
      return {
          recipes: this.$root.$data.recipes,
          recipe:null,
          photopath: '',
      }
  },
  created(){
      this.getRecipe();
      this.photopath=this.recipe.img;
      console.log(this.photopath)
  },

  methods:{
      getRecipe(){
          console.log(this.$route.params.id)
          
          let recipes = this.$root.$data.recipes;
          recipes.forEach(value => {
            if (value.id ==this.$route.params.id){
                this.recipe = value;
                this.photopath = this.recipe.img;
                return;
            }

          
          });
      }
  },
}
</script>
<style scoped>

/*phone*/
@media only screen and (min-width: 320px) and (max-width: 599px) {
    .recipe{
        flex-direction: column;
    }
    .instructions{
        width:90%;
    }
    .main{
        width:100%;
        
    }
    .sidebar{
        width:100%;
    }
}

/* Masonry on tablet */
@media only screen and (min-width:600px) and (max-width: 899px) {
    .recipe{
        flex-direction: column;
    }
    .instructions{
        width:90%;
    }
    .main{
    width:100%;
    }
    .sidebar{
        width:100%;
    }
}
/* Masonry on desktop */
@media only screen and (min-width:900px) {
    .recipe{
        flex-direction: row;
    }
    .instructions{
        width:80%;
    }
    .main{
    width:70%;
    margin:100px;
    }

    .sidebar{
        width:20%;
    }
}



ul{
    text-align:left;

}

ol{
    text-align: left;
}
img{
    width:400px;
}

.instructions{
    display:block;
    margin-left:auto;
    margin-right:auto;
}


/* SIDEBAR STUFF */


.recipe{
    display:flex;
}

.sidebar{
    
    text-align:left;
    
}
.instructions-header{
    background-color:rgb(112, 158, 112);
    color:white;
    overflow: hidden;

}
.instructions{
    border-color: rgb(112, 158, 112);;
    border-style: solid;
}

.circle-img{
    width:200px;
    height:200px;
    border-radius: 100%;
}
.circle-img:hover{
    overflow:hidden;
    transform:scale(1.05);
    transition-duration: 1.5s;
}

</style>