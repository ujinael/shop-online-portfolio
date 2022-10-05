<template>
    <div class="layout" id="layout">
    <VLayoutHeader> 

    </VLayoutHeader>
    <div class="main_wrapper">
       <main class="main">
          <router-view/>
    </main>  
    </div>
   <VLayoutFooter></VLayoutFooter>
    </div>
    </template>
    <script lang="ts">
    export default {
        name:'main-layout'
    }
    </script>
    <script setup lang="ts">
    import VLayoutHeader from './layouts_components/VLayoutHeader.vue';
    import VLayoutFooter from './layouts_components/VLayoutFooter.vue'
    </script>
    <style lang="scss" scoped>
        .layout{
        width: 100vw;
        height: 100vh;
        display: grid; 
        justify-content: center;
      grid-template-rows: min-content 1fr min-content; 
        }
      
        .main_wrapper{
            width: inherit;
            display: grid;
            justify-content: center;
        }
        .main{     
            width:var(--main_width);
        }
    </style>