<template>
    <div class="body">
    <div class="content">
        <h1>Hello, do you want to buy anything?</h1><br><br><br><br><br>
        <!-- <div class="routers"> -->
            <router-link class="router" to="/login" >Login</router-link>
            <router-link class="router" to="/sign-up" >Sign Up</router-link>
            <router-view/>
        <!-- </div> -->
    </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>


<style  scoped>
.body{
        height: 100vh;
        display: flex;
       justify-content: center;
       align-items: center;
      }
.content{
    height: 40vh;
    border: solid ;
    border-radius: 20px;
    background:  #136a8a;
    background: 
    -webkit-linear-gradient( #267871, #136a8a);
    background: 
    linear-gradient( #267871, #136a8a);
    box-shadow: 
    0px 2px 10px rgba(0,0,0,0.2), 
    0px 10px 20px rgba(0,0,0,0.3), 
    0px 30px 60px 1px rgba(0,0,0,0.5);
    height: 35%;
}
h1{
    margin: 30px;
}
.router{
    color: white;
    text-decoration: none;
    border: solid white ;
    border-radius: 20px ;
    padding: 30px;
    margin: 15%;
    align-self: center;
}
.router:hover{
    box-shadow: 
    0px 2px 10px rgba(0,0,0,0.2), 
    0px 10px 20px rgba(0,0,0,0.3), 
    0px 30px 60px 1px rgba(0,0,0,0.5);
}

</style>