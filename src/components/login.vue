<template>
    <div class="bodys">
    <section class='login' id='login'>
      <div>
      <h1 >serag store</h1>
      </div>
      <p >Welcome back</p>
      
        <form>
      <input type="text" placeholder='Username' class='text' id='username' required v-model="username"><br>
      <input type="password" placeholder='Password' class='password' required v-model="password"><br>
      <!-- <router-link to="/adminPage" v-if="hello"> -->
        <input type="submit" class="btn-login" value="login" @click="hello" >
        <!-- </router-link> -->
      <button to="/sign-up" class="sign">Don't have an account ?</button>
      <!-- <router-link to="/sign-up" class="sign">Don't have an account ?</router-link> -->
      <!-- <router-view/> -->
        </form>
      
    </section>
    </div>
    </template>
    
    <script setup>
      import { RouterLink } from 'vue-router';
    import { reactive, ref } from 'vue';
    
    const username = ref('');
    const password = ref('');
    
    function hello() {
  const storedUsers = JSON.parse(localStorage.getItem("users"));

  for (let i = 0; i < storedUsers.length; i++) {
    if (password.value === storedUsers[i].password) {
      if (username.value === storedUsers[i].name) {
        console.log(`Hello ${username.value}`)
      }
    }
  }
}

    
    </script>
    
    <style scoped>
 .bodys{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
   }
        
    .login {
      color: white;
      background:  #136a8a;
      background: 
        -webkit-linear-gradient(to right, #267871, #136a8a);
      background: 
        linear-gradient(to right, #267871, #136a8a);
      margin: auto;
      box-shadow: 
        0px 2px 10px rgba(0,0,0,0.2), 
        0px 10px 20px rgba(0,0,0,0.3), 
        0px 30px 60px 1px rgba(0,0,0,0.5);
      border-radius: 8px;
      padding: 50px;
      width: 50%;
      text-align: center;
    }
    h1 {
      font-size: 2.2em;
    }
    .login p {
      text-align: center;
    }
    .login form input[type=text].text {
      border: none;
      background: none;
      box-shadow: 0px 2px 0px 0px white;
      width: 100%;
      color: white;
      font-size: 1em;
      outline: none;
    }
    .login form .text::placeholder {
      color: #D3D3D3;
    }
    .login form input[type=password].password {
      border: none;
      background: none;
      box-shadow: 0px 2px 0px 0px white;
      width: 100%;
      color: white;
      font-size: 1em;
      outline: none;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    .login form .password::placeholder {
      color: #D3D3D3;
    }
    .login form .btn-login {
      background: none;
      text-decoration: none;
      color: white;
      box-shadow: 0px 0px 0px 2px white;
      border-radius: 3px;
      padding: 5px 2em;
      transition: 0.5s;
      border: none;
      float: left;
    }
    .login form .btn-login:hover {
      background: white;
      color: dimgray;
      transition: 0.5s;
    }
    .login .sign {
      text-decoration: none;
      color: white;
      float: right;
      background: none;
      border: none;
    }
    </style>