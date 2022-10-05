<template>
<address class="contacts">
    <a class="phone" href="tel:+7 (812) 555-55-55">
        <VPhoneIco/>
        +7 (812) 555-55-55</a>
   <a href="#" class="address">
    <VMarkDownIco/>
        г. Санкт-Петербург, ул. Ефимова,&nbsp;3
    </a> 
    
</address>
</template>
<script setup lang="ts">
    import VPhoneIco from '@/components/icons/VPhoneIco.vue';
import VMarkDownIco from '@/components/icons/VMarkDownIco.vue';

</script>
<style scoped lang="scss">
    .contacts{
    font-family: 'merriweather';
    font-style: normal;
    text-decoration: none;
        display: grid;
        box-sizing: border-box;
        justify-content: center;
gap:1rem;
}
.contacts>a{
    color: #555555;
    font-size: 14px;
    text-decoration: none;

white-space:nowrap;    
    box-sizing: border-box;
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    gap:9px;
}
.contacts>a:visited{
    text-decoration: none;
    color: #555555;;
}
@media(min-width:599px){
    .contacts{
        grid-auto-flow: column;
        // gap:15px;
    }
}
@media(min-width:1200px){
    .contacts{
        gap:54px;
    }
}
</style>