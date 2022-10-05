<template>
    <transition :name="direction" mode="out-in">
    <div v-if="visibleSlide === index" class="carousel_slide">    
            <img class="carousel_slide-img" :src="getURL" alt="Фото"/>
        </div>
    </transition>
    </template>
    <script setup lang="ts">
import { computed } from 'vue';

    const props = defineProps<{
    visibleSlide:number
    index:number  
    direction:'next'|'prev'  
    url:string
    }>()
    const getURL = computed(()=>{
        return new URL(`/src/assets/${props.url}.png`, import.meta.url).toString()
    })
    </script>
    <style scoped lang="scss">
    .carousel_slide{
        width: 100%;
height: auto;
        position: absolute;
        top:0;
        left:0;
        right: 0;
        bottom: 0;
        box-sizing: border-box;
    }
    .carousel_slide-img{
      width: 100%;
      height: 300px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      object-fit:cover;
      }
    .prev-enter-active{
    animation: prevInAnimation .4s ease-in-out;
    }
    .prev-leave-active{
    animation: prevOutAnimation .4s ease-in-out;
    }
    @keyframes prevInAnimation {
     from{transform:translateX(-100%);  }
     to{transform: translateX(0%);}
    }
    @keyframes prevOutAnimation {
        from{transform:translateX(0%);  }
     to{transform: translateX(+100%);}
    }
    .next-enter-active{
    animation: nextInAnimation .4s ease-in-out;
    }
    .next-leave-active{
    animation: nextOutAnimation .4s ease-in-out;
    }
    @keyframes nextInAnimation {
     from{transform:translateX(100%);  }
     to{transform: translateX(0%);}
    }
    @keyframes nextOutAnimation {
        from{transform:translateX(0%);  }
     to{transform: translateX(-100%);}
    }
    </style>