<template>
  <div id="app">
    <div class='head'>
    </div> 
    <div id="nav">
    
      <div class="pure-menu pure-menu-horizontal">
        <a href="#" class="pure-menu-heading pure-menu-link">BRAND</a>
        <ul class="pure-menu-list">
            <li class="pure-menu-item">
               <router-link to="/">Home</router-link> 
            </li>
            <li class="pure-menu-item">
                <router-link to="/recipe-index">      Recipes</router-link> 
            </li>
            <li class="pure-menu-item">
                <a href="#" class="pure-menu-link">FAQ</a>
            </li>
        </ul>
      </div>      
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
 
    </div>

    <router-view/>
    <footer>
        <div class='icons'> 
            <a href="#"><img class='icon' src="./assets/email.png"></a>
            <a href= "https://www.instagram.com/rach_recipes/"><img class='icon' src="./assets/insta.png"></a>
            <a href="https://www.pinterest.com/rachrecipes/_created/"><img class='icon' src="./assets/pin.png"></a>
        </div> 
        Copyright 2021
        
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: black;
  /*#42b983;*/
}


#nav a:hover {
  font-weight: bold;
  color: #f5de11;
  transition-duration: .2s;
}

.head{
    height:5px;
    background-color:rgb(112, 158, 112);
}

footer{
    height:50px;
    bottom:0;
    left:0;
    right:0;
    padding:20px;
    margin:20px;
    margin-bottom: 50px;
}

html, body {padding:0; margin:0; height:100%;}

.icon{
    width:25px;
    height:25px;
    margin:16px;
    margin-left:16px;
}
.icon:hover{
    transform:rotate(360deg);
    transition-duration: .8s;
}

.pure-menu-item{
    margin:10px;
}
</style>
