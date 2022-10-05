<template>
<div class="product_card" :class="{'not-available':product.status ===ProductStatus.NOT_AVAILABLE}">
<VModal :title="product.title" v-model="detailVisible">
    <VProductDetail :product="product"></VProductDetail>
</VModal>
    <img :src="imgPath" 
    @click="showDetail"
    alt="продукт" 
    class="product_card-image">
    <div class="product_card-content">
    <div class="card_title" @click="showDetail">
     <h2>&laquo;{{product.title}}&raquo;<br>{{product.author}}</h2>
  </div>  
 
<div class="card-control status-available" v-if="product.status === ProductStatus.AVAILABLE">

      <div class="card-price">
<div class="card-coast" :class="{discounted:product.discount}"> {{priceFormatter(product.coast)}}&nbsp;&dollar;</div>
       
       <div v-if="product.discount" class="card-discount">{{priceFormatter(product.discountCoast)}}&nbsp;&dollar;</div>
    </div>
     <VButton
     :disabled="buttonStatus === 'disabled' "
       :class="{'state-normal':!onBacket,'state-checked':onBacket}"
     @click="onSaleButtonClick"
     >
     <VCheckedIco v-if="buttonStatus == 'checked'"/>
        {{buttonTitles[buttonStatus]}}
    </VButton>
</div>
<div class="card-control status-not_available" v-else>
    Продана на аукционе
</div> 
 </div>
</div>

</template>
<script setup lang="ts">
import { Product, ProductStatus } from '@/stores/models';
import { computed, onMounted, ref } from 'vue';
import VCheckedIco from '@/components/icons/VCheckedIco.vue'
import VButton from '@/components/VButton.vue';
import { useProductsStore } from '@/stores/modules';
import { storeToRefs } from 'pinia';
import VModal from '@/components/VModal.vue';
import { useStringUtils, useToggle } from '@/composition';
import VProductDetail from './VProductDetail.vue';

const props = defineProps<{
product:Product
}>()
const store = useProductsStore()
const {backet} = storeToRefs(store)
const imgPath = computed(()=>{
    return new URL(`/src/assets/${props.product.img}.png`, import.meta.url).toString()
})

const onBacket = computed(()=>{
return backet.value.find(id=>id === props.product.id)
})

const buttonStatus = ref<"normal"|"checked"|"disabled">("normal")
const buttonTitles = {
normal:"Купить",
checked:"В корзине",
disabled:"Обрабатывается"
}
const {elementVisible:detailVisible,toggleElement:toggleDetail} = useToggle()
const {priceFormatter} = useStringUtils()
const showDetail = ()=>{
if(props.product.status === ProductStatus.AVAILABLE)
toggleDetail()
}
const onSaleButtonClick=()=>{
    buttonStatus.value = "disabled"
    setTimeout(()=>{
    store.setProductToBacket(props.product.id)
    if(onBacket.value)buttonStatus.value = "checked"
    else buttonStatus.value = "normal"
    },2000)
}

onMounted(()=>{
    if(onBacket.value)buttonStatus.value = "checked"
    else buttonStatus.value = "normal"
})
</script>
<style scoped lang="scss">
    .product_card{
    width: min-content;
    height: 328px;
    box-sizing: border-box;
    border: 1px solid #E1E1E1;
    display: grid;
grid-template-rows: min-content 1fr;    
}
    .product_card.not-available{
        opacity: .4;
    }
    h2{
        font-weight: 400;
        line-height: 27px;
    }
    .product_card-image{
        width: 280px;
        height: auto;
    }
    .product_card-image:hover, .card_title:hover{
cursor: pointer;
    }
    .product_card-content{
        display: grid;
        grid-template-rows: min-content max-content;
        box-sizing: border-box;
        gap:24px;
        padding-top: 20px;
        padding-bottom: 24px;
    } 

    .card-control{
    height: 48px;
    font-family: 'merriweather';
    display: grid;
    grid-auto-flow: column;
    box-sizing: border-box;
    padding:  0 24px;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    }
      .card-control.status-not_available{
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #343030;
    }
    .card-discount, .card-coast{
font-style: normal;
font-weight: 700;
font-size: 16px;
color: #343030;  
line-height: 150%;
    }
   .card-coast.discounted{
font-weight: 300;
font-size: 14px;
text-decoration: line-through;
color: #A0A0A0;

    }
</style>