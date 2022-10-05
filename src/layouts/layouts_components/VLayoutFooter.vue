<template>
<footer class="layout_footer">
    <div class="layout_footer--content">
<VNavMenu></VNavMenu>
<VAddress></VAddress>
    </div>
</footer>
</template>
<script setup lang="ts">
import VNavMenu from './VNavMenu.vue';
import VAddress from './VAddress.vue'
</script>
<style scoped lang="scss">
.layout_footer{
    height:96px;
    width: 100%;
    box-sizing: border-box;
    background-color: #ECEAEA;
    display: flex;
justify-content: center; 
box-sizing: border-box;
}
.layout_footer--content{
height: 100%;
width: var(--main_width);
padding:37px 0;
display: grid; 
// grid-template-columns: 1fr min-content;
grid-auto-flow: column;
align-content: center;
}

@media (min-width: 599px){
    .layout_footer--content{
    grid-auto-flow: row;
    gap: 1rem;
}
}
@media (min-width: 1000px){
    .layout_footer--content{
    grid-auto-flow: column;
    gap: 0;
grid-template-columns: 1fr min-content;
}
}
</style>