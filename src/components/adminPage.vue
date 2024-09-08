<template>
  <div class="body">
    <div class="store">
      <h1>Serag Store</h1>
      <p>Create and delete products</p>
      <form class="inputs">
        <input type="text" placeholder="Product name" class="text" v-model="proName">
        <input type="number" placeholder="Product price" class="price" v-model="proPrice">
        <input type="url" placeholder="Image URL" class="url" v-model="imageUrl">
        <button class="btn-store" @click="makeItem">Create</button>
      </form>
    </div>
  </div>
  <!-- Admin product -->
   
    <div class="cards">
      <div class="bodyCard">
        <div class="product" v-for="(item, i) in storeItem" :key="item.id">
          <img :src="item.imageUrl" alt="Product Image">
          <h3>{{ item.itemName }}</h3>
          <p>Price: {{ item.itemPrice }} $</p>
          <button @click="deleteItem(i)">Delete</button>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const proName = ref('')
const proPrice = ref('')
const imageUrl = ref('https://imgs.search.brave.com/2NKr4nKGoPJocNSBAIbQ_sY8E1tg7j-izduOekZqruM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA3/MTYzMDE3L3Bob3Rv/L3BlcmZ1bWUtYm90/dGxlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0zSXBoYU4y/NzE3Uk5NVjYtQjky/dzdXQ3hDYnFycmN1/UE9CMmp3V0YzWkNR/PQ')

let items = reactive(JSON.parse(localStorage.storage) || [])

function makeItem(){

  if(proName.value != '' && proPrice.value != ''){
  
    function makeItem() {
      const newItem = {
        itemName: proName.value,
        itemPrice: proPrice.value,
        imageUrl: imageUrl.value,
      };
      items.push(newItem)
      localStorage.setItem('storage', JSON.stringify(items))
      clearInputs()
    }
    makeItem()
}
}
//clear input
function clearInputs() {
  proName.value = ''
  proPrice.value = ''
  imageUrl.value = ''
}

//delete item
let storeItem = JSON.parse(localStorage.storage) 
function deleteItem(i) {
  items.splice(i, 1)
  localStorage.storage = JSON.stringify(items)
  location.reload()
}
</script>


<style  scoped>
.store {
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
    .store p {
      text-align: center;
    }
    .store form input[type=text].text {
      border: none;
      background: none;
      box-shadow: 0px 2px 0px 0px white;
      width: 100%;
      color: white;
      font-size: 1em;
      outline: none;
    }
    .store form .text::placeholder,
    .store form .price::placeholder,
    .store form .url::placeholder{
      color: #D3D3D3;
    }
    .store form input[type=number].price {
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
    .store form input[type=url] {
      border: none;
      background: none;
      box-shadow: 0px 2px 0px 0px white;
      width: 100%;
      color: white;
      font-size: 1em;
      outline: none;
      margin-bottom: 20px;
    } 
    .store form .btn-store {
      background: none;
      text-decoration: none;
      color: white;
      box-shadow: 0px 0px 0px 2px white;
      border-radius: 3px;
      padding: 5px 2em;
      transition: 0.5s;
      border: none;
      float: left;
      margin: 5px;
    }
    .store form .btn-store:hover {
      background: white;
      color: dimgray;
      transition: 0.5s;
    }
    .store .sign {
      text-decoration: none;
      color: white;
      float: right;
    }
    input#file-uplaod-button{
        background: none;
      text-decoration: none;
      color: white;
      box-shadow: 0px 0px 0px 2px white;
      border-radius: 3px;
      padding: 5px 2em;
      transition: 0.5s;
      border: none;
      float: left;
      margin: 5px;
    }
    .cards{
    display: flex;
  flex-wrap: wrap;
}

.bodyCard{
    width : 100%;
    margin-left: 10%;
    margin-top: 10%;
}
    .product {
      color: white;
      background:  #136a8a;
      background: 
        -webkit-linear-gradient(to right, #267871, #136a8a);
      background: 
        linear-gradient(to right, #267871, #136a8a);
      box-shadow: 
        0px 2px 10px rgba(0,0,0,0.2), 
        0px 10px 20px rgba(0,0,0,0.3), 
        0px 30px 60px 1px rgba(0,0,0,0.5);
      border-radius: 8px;
      text-align: center;
      width: 15%;
      padding: 20px;
      margin: 20px;
      display: inline-block;
    }
    img{
        width: 50%;
        height: 50%;
        margin-top: 5px;
    }
    button {
      background: none;
      text-decoration: none;
      color: white;
      box-shadow: 0px 0px 0px 2px white;
      border-radius: 3px;
      padding: 5px 2em;
      transition: 0.5s;
      border: none;
      margin: 5px;
    }
     button:hover {
      background: white;
      color: dimgray;
      transition: 0.5s;
    }
</style>