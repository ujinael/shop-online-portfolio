<template>
<div class="page">
    <div class="page_title">
        <h1>{{pageTitle}}</h1>
    </div>
    <!-- <div class="products_wrapper"> -->
<ul class="cards">
  <transition-group name="fade">
    <li class="product" v-for="(product, index) in store.getProductsFilteredByTitle" :key="index">
    <VProductCard :product="product"></VProductCard>
  </li>
  </transition-group>

</ul>
    <!-- </div> -->
</div>
</template>
<script setup lang="ts">
import { useProductsStore } from '@/stores/modules/products/use-products.store';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import VProductCard from './components/VProductCard.vue';

const route = useRoute()
const pageTitle = computed(()=>{
return route.meta.title || 'Продукты'

})
const store = useProductsStore()
const onClick=()=>{
}
onMounted(()=>{
  store.getAllProducts()
})
</script>
<style scoped lang="scss">
    @import "@/assets/show-animation.scss";
    .page{
        box-sizing: border-box;
        padding: 45px 0;
        width: 100%;
    }
  .page_title{
    text-align: left;
  }
  .products_wrapper{
    width: 100%;

  }
  .cards{
    width: 100%;
    box-sizing: border-box;
    display: grid;
    justify-content: center;
  }
  @media(min-width:599px){
    .cards{
grid-template-columns: repeat(auto-fit,minmax(380px,1fr)); 
   justify-content: center;
   justify-items: center;
   gap: 1rem;
}
  }
  @media(min-width:1200px){
.cards{

grid-template-columns: repeat(4,min-content); 
justify-content: space-between;

}
  }
</style>