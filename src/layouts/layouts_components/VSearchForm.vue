<template>
<form @submit.prevent="onSearchClick" class="search_form">
  <input class="search_form--input"
   placeholder="Поиск по названию картины" 
   type="text"
   v-model="searchTerm"
   >
  <VButton  class="search_form--button state-normal">Найти</VButton>
</form>
</template>
<script setup lang="ts">
import VButton from '@/components/VButton.vue';
import { useProductsStore } from '@/stores/modules/products/use-products.store';
import { ref } from 'vue';
const searchTerm = ref('')
const store = useProductsStore()
const onSearchClick = ()=>{
store.searchTerm = searchTerm.value
}
</script>
<style scoped lang="scss">
    .search_form{
      justify-self: right;
        display: grid;
        grid-template-columns: 1fr min-content;
        justify-content: flex-end;
        width:100%;
        box-sizing: border-box;
    }
  .search_form--input{
    box-sizing: border-box;
    padding: 0 16px;
    color: #343030;
    font-family: 'Merriweaser';
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    font-size: 17px;
    border: 1px solid #E1E1E1;
    border-right: none;
    background-color: transparent;
  }
  .search_form--input::placeholder{
    color:#9F9F9F;
  }
  .search_form--input:focus{
    outline: none;
  }
  @media(min-width: 599px){
    .search_form{
          justify-self: center;
          width:416px;
    }
  }
  @media(min-width: 1000px){
    .search_form{
          justify-self: flex-end;
          width:416px;
    }
  }
</style>