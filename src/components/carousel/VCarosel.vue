<template>
    <div class="carousel">
    <div class="content">
      <VCarouselSlide v-for="(item, index) 
        in slides" 
        :key="item.url"
        :visibleSlide="visibleSlide"
        :index="index"
        :direction="direction"
        :url="item.url"
        >
        </VCarouselSlide>  
    </div>
    <button @click="prev"   class="prev">
    &LeftAngleBracket;</button>
    
    <button @click="next"  class="next">
    &RightAngleBracket;</button>
    </div>
    </template>
    <script setup lang="ts">
    import { ref } from 'vue';
    import VCarouselSlide from './VCarouselSlide.vue';
    const props = defineProps<{
    slides:{url:string}[],
    slidesCount:number
    }>()
    const visibleSlide = ref(0)
    const direction = ref<'next'|'prev'>('next')
    const currentLeft = ref(0)
    const prev = ()=>{
    direction.value = 'prev'
    visibleSlide.value = visibleSlide.value - 1 < 0 ? 0 : visibleSlide.value - 1
    }
    const next = ()=>{
      direction.value = 'next'
      visibleSlide.value = visibleSlide.value + 1 > props.slides.length-1 ? props.slides.length - 1 : visibleSlide.value + 1
    var hiddenElement = document.getElementById(`slide_${visibleSlide.value}`);
     hiddenElement?.scrollIntoView({block: "nearest", behavior: "smooth"});
    }
    const timer = ref<any>(null)
    const onScroll = (ev:Event)=>{
      if(timer.value!=null)clearTimeout(timer.value)
     timer.value = setTimeout(()=>{
     let scrollLeft = (ev.target as HTMLDivElement).scrollLeft
    direction.value = (currentLeft.value - scrollLeft)<0?'next':'prev'
    currentLeft.value = scrollLeft
    if(direction.value === 'next'){
      visibleSlide.value = visibleSlide.value + 1 > props.slides.length-1 ? props.slides.length - 1 : visibleSlide.value + 1
    }else{
    visibleSlide.value = visibleSlide.value - 1 < 0 ? 0 : visibleSlide.value - 1
    }
      },200)
     
    }
    </script>
    <style scoped lang="scss">
  
    .carousel{
      width: 100%;
      height: 300px;
      position: relative;
      box-sizing: border-box;
      // padding: 1rem;
      background-color: aquamarine;
    }
    .content{
      position: relative;

      width: 100%;
      height: 100%;
    }
    button{
    background-color: transparent;
    color: white;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid transparent;
    opacity: .4;
    padding: 1rem;
    height: 4rem;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top:calc(50% - 2rem);
    }
    a{
    width: 4rem;
    height: 4rem;
    }
    button:hover{
    opacity: .5;  
    cursor: pointer;
    }
     .prev {
      left:0px;
      font-size: xx-large;
      font-weight: bold;
    }
     .next {
      right: 0;
      font-size: xx-large;
      font-weight: bold;

    }
    @media(min-width:499px) {
      .carousel{
        width: auto;
      }
    }
    </style>