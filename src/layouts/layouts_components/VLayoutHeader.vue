<template>
  <header class="layout_header">
    <div class="layout_header--content">
      <teleport to="#app">
<v-aside v-model="elementVisible">

</v-aside>
      </teleport>
      <div class="menu_button" @click="toggleElement">
        &equiv;
    </div>
  <v-nav-menu></v-nav-menu>
 <v-search-form></v-search-form>
 </div>
  </header>
</template>
<script setup lang="ts">
import VSearchForm from './VSearchForm.vue';
import VNavMenu from './VNavMenu.vue'
import VAside from './VAside.vue';
import { useToggle } from '@/composition';
const {elementVisible,toggleElement}= useToggle()
</script>
<style lang="scss">
@import '@/assets/transitions.mixines.scss';
.layout_header{
height: 96px; 
width: inherit;
display: flex;
justify-content: center; 
box-sizing: border-box;
border-bottom: 1px solid #E1E1E1;
}
.layout_header--content{
height: 100%;
width: var(--main_width);
padding:37px 15px;
display: grid; 
gap:15px;
grid-auto-flow: column;
align-content: center;
}
.menu_button{
  display: inline;
  height: 100%;
  width: 48px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--default_color);
  font-size: x-large;
  color: white;
  @include common-transition;
}

.menu_button:hover{
    background-color: var(--hovered_color);
    @include common-transition;
    cursor: pointer;
}
@media (min-width: 599px){
  .menu_button{
    display: none;
  }
  .layout_header--content{
    padding:37px 0;
    grid-auto-flow: row;
}
}

@media(min-width: 1000px){
  .layout_header--content{
grid-template-columns: 1fr min-content;
}
}
</style>