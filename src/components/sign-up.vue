<template>
    <div class="body">
        <div class="signForm">
            <h1>hello, i will glad to help you</h1>
            <form>
            <input type="text" class='text' placeholder="Your Name" v-model="firstName" required>
            <input type="email" class='text' placeholder="Your Email" v-model="Email" required>
            <input type="password" class='password' placeholder="Your Password" v-model="Password" required>
            <input type="password" class='password' placeholder="Your Password agian" required>
            <br><br>
            <input type="checkbox"  id="admin" class="admin" v-model="Admin">
            <label for="admin" class="admin">Are you admin</label><br><br>
            <router-link >
            <input type="submit" class="btn-signForm" placeholder="submit" @click="(submit)">
            </router-link>
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

    const firstName = ref('')
    const Email = ref('')
    const Password = ref('')
    const Admin = ref()
    
    let users = reactive([])
    
    function submit(){

      let person = reactive({
          name: firstName.value,
          password: Password.value,
          admin: Admin,
          email: Email.value
      })
      
        users.push(person)
        
        localStorage.setItem('users', JSON.stringify(users) )
        if(person.admin == true){
          location.pathname = '/adminPage'
        }else{
          location.pathname = '/userPage'
        }
      }
</script>

<style  scoped>
    .body{
        height: 100vh;
        display: flex;
       justify-content: center;
       align-items: center;
      }
        
    .signForm {
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
    .signForm p {
      text-align: center;
    }
    .signForm form input[type=text].text {
      border: none;
      background: none;
      box-shadow: 0px 2px 0px 0px white;
      width: 100%;
      color: white;
      font-size: 1em;
      outline: none;
      margin: 10px;
    }
    .signForm form input[type=email].text {
        margin: 10px;
      border: none;
      background: none;
      box-shadow: 0px 2px 0px 0px white;
      width: 100%;
      color: white;
      font-size: 1em;
      outline: none;
    }
    .signForm form .text::placeholder {
      color: #D3D3D3;
    }
    .signForm form input[type=password].password {
      border: none;
      background: none;
      box-shadow: 0px 2px 0px 0px white;
      width: 100%;
      color: white;
      font-size: 1em;
      outline: none;
      margin: 10px;
    }
    .signForm form .password::placeholder {
      color: #D3D3D3;
    }
    .signForm form .btn-signForm {
      background: none;
      text-decoration: none;
      color: white;
      box-shadow: 0px 0px 0px 2px white;
      border-radius: 3px;
      padding: 5px 2em;
      transition: 0.5s;
      border: none;
      float: left;
      margin: 10px;
    }
    .signForm form .btn-signForm:hover {
      background: white;
      color: dimgray;
      transition: 0.5s;
    }
    .admin{
        float: left;
    }
</style>
