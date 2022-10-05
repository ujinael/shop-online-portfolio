<template>
   <nav class="navigation-wrapper">
        <ul class="navigation_menu">
      <li class="navigation_menu--item" v-for="route in routes">
        <router-link :to="route.path">{{route.meta.label}}</router-link>
      </li> 
    </ul>  
    </nav>
</template>
<script setup lang="ts">
import {routes} from "@/router"
</script>
<style scoped lang="scss">
    .navigation-wrapper{
height: 100%;
display: none;
justify-content: center;
    }
.navigation_menu{
  width: 100%;
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    gap:48px;
    text-decoration: none;
}
.navigation_menu--item>a{
  white-space: nowrap;
   font-family: 'Merriweather'; 
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-decoration: none;
    transition: color .3s ease;
 color: #555555;
}
.navigation_menu--item>a:active{
    color: gray;
    text-decoration: none;
    transition: color .3s ease;

}
.navigation_menu--item>a:visited{
    color: gray;
    text-decoration: none;
    transition: color .3s ease;

}
.navigation_menu--item>a:hover{
    color: gray;
    transition: color .3s ease;
}
@media(min-width:599px){
  .navigation-wrapper{
    display: flex;

}
}
</style>