<template>
    <button class="v-button size-normal" :disabled="disabled"> 
        <div class="button_title">
              <slot>
        </slot>  
        </div>   
    
    </button>
    </template>
    <script setup lang="ts">
    const props = defineProps<{
    disabled?:boolean
    }>()
  
    
    
    </script>
    <style scoped lang="scss">
        @import "@/assets/transitions.mixines.scss";
.v-button{
font-family: 'merriweather';
font-weight: 700;
line-height: 21px;
color: #F4F6F9;
box-sizing: border-box;
border: none;
}  
.button_title{
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    gap: 7.2px;
}
.v-button.size-normal{
 height: 48px;
 width: 118px;   
}  

.v-button.state-normal{
    background-color: var(--default_color);
    @include common-transition;
}
.v-button.state-checked{
    background-color: var(--active_color);
    @include common-transition;
}
.v-button:hover{
    background-color: var(--hovered_color);
    @include common-transition;
    cursor: pointer;
}
.v-button:disabled{
    background-color: var(--disable_color);
    @include common-transition;
}
.v-button:active{
    background-color: var(--active_color);
    @include common-transition;
}
.v-button.state-active{
    background-color: var(--active_color);
    @include common-transition;
}

    </style>