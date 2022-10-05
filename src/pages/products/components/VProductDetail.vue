<template>
<div class="product_detail">
<VCarosel :slides="products.map(p=>({url:p.img}))"
  :slides-count="3"
  >

</VCarosel>
<div class="product_detai-content">
<div class="description">
  <h5>Описание</h5>
<dfn>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Neque quod sapiente debitis amet, quam voluptatum ratione 
  veritatis exercitationem veniam repudiandae molestiae, 
  aperiam fugiat deserunt vero temporibus, unde consectetur maiores ea!
</dfn>

</div>
<div class="coast">
  <h4>
    цена: {{priceFormatter(product.coast)}}&nbsp;$
  </h4>
</div>
</div>
</div>
</template>
<script setup lang="ts">
import { useProductsStore } from '@/stores/modules';
import { Product } from '@/stores/modules/products/entity/product';
import { storeToRefs } from 'pinia';
import VCarosel from '@/components/carousel/VCarosel.vue';
import { useStringUtils } from '@/composition';

defineProps<{
product:Product
}>()

const store = useProductsStore()
const {products} = storeToRefs(store)
const {priceFormatter} = useStringUtils()

</script>
<style scoped lang="scss">
 .product_detail{
display: grid;
box-sizing: border-box;
padding: 10px;
 }
 .product_detai-content{
  display: grid;
} 
    @media(min-width: 600px){
    .product_detail{
width: 600px;
height: 600px;
grid-template-rows: min-content 1fr;
gap: 1rem;
}   
.product_detai-content{
  // align-self:flex-start;
  align-content: space-between;

} 

    }


</style>