<template>
    <div class="body">
        <div class="stickyCart">
            <div class="cart">
              <button class="button">My cart</button>
               <!-- <router-link to="/cart" class="button">My Cart</router-link>
               <router-view/> -->
            </div>
            <div class="items">
                <product class="pro"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import product from './product.vue';
</script>

<style  scoped>
.items{
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  justify-content: center;
}
.pro{
  width : 100%;
}
.cart{
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
      padding: 20px;
      width: 10%;
      text-align: center;
      margin: 10px;
      position: fixed;
      bottom: 50%;
      right: 0;
    }
    .button{
        color: white;
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px;
        border-radius: 10px;
        text-decoration: none;
}
.button:hover{
    box-shadow: 
      0px 2px 10px rgba(0,0,0,0.2), 
      0px 10px 20px rgba(0,0,0,0.3), 
      0px 30px 60px 1px rgba(0,0,0,0.5);
}

</style>