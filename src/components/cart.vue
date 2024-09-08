<template>
    <div class="body">
        <div class="cart">
            <h1>go to pay</h1>
            <p>total is :  {{ Total }} </p>
            <button>pay</button>
        </div>
    </div>
    <div class="myCart">
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
    </div>
</template>

<script setup>
import { ref } from "vue";

let storeItem = JSON.parse(localStorage.proCart) 
// delete
function deleteItem(i) {
  proCart.splice(i, 1)
  localStorage.proCart = JSON.stringify(proCart)
  location.reload()
}
// get total
let Total = ref(0);

function getTotal(){

    for (let i = 0; i < storeItem.length; i++) {
      Total.value += storeItem[i].itemPrice;
    }

console.log('Total price:', Total.value);
}
getTotal()


</script>

<style  scoped>
.body{
    display: flex;
    justify-content: center;
}
.myCart{
    display: flex;
    justify-content: center;
}
.cart{
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
      width: 30%;
      height: 20vh;
      margin: 10px;
}
.cards{
    display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  
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