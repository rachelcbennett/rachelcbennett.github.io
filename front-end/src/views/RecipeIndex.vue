<template>
    <div class="masonry">
        <div class="masonry-item" v-for="recipe in recipes" :key="recipe.id">
                <router-link :to="{ name: 'recipe', params: { id: recipe.id }}"><img class="masonry-pic" :src=recipe.img /></router-link>
                <a href = ""></a>
                
                <router-link :to="{ name: 'recipe', params: { id: recipe.id }}"><h3>{{recipe.name}}</h3></router-link>
                
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
      }
  }
}
</script>

<style scoped>

ol{
    text-align:left;
}

.ingredient{
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
 .masonry {
        column-count: 5;
}
</style>
