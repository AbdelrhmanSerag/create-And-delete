<template>
    <div class="cards">

        <div class="bodyCard">
          <div class="product" v-for="(item,i) in storeItem" :key="(item,i)">
              <img :src="item.imageUrl" alt="">
                <h3>{{ item.itemName }} </h3>
                <p>price : {{item.itemPrice}} $</p>
                <button @click="addPro(i)">Add to cart</button>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { reactive, ref } from "vue";
const storeItem = JSON.parse(localStorage.storage)
let proCart = reactive([]) 
function addPro(i){
  proCart.push(storeItem[i])
  localStorage.setItem('proCart', JSON.stringify(proCart))
  console.log(storeItem[i]);
}
</script>

<style  scoped>


.bodyCard{
  display: flex;
  flex-wrap: wrap;
  width : 100%;
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
      width: 20%;
      padding: 20px;
      margin: 20px;
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
    }
     button:hover {
      background: white;
      color: dimgray;
      transition: 0.5s;
    }
</style>