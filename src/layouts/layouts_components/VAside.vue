<template>
    <aside class="aside_wrapper" :class="classes" @click="value = false">
      <div class="aside_content" :class="classes">
        <ul>
          <li class="aside_item close_btn">&times;</li>
          <li
            class="aside_item"
            :class="{active:item.path === route.path}" 
            v-for="(item, index) in routes"
            :key="index"
            :title="item.meta.title"
          >
            <router-link class="aside_item_content"
             :class="{active:item.path === route.path}" 
             :to="item.path">
            <span class="title" :class="classes">{{ item.meta.label }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </aside> 
  </template>
  <script setup lang="ts">
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  import {routes} from "@/router"
  const props = defineProps<{
    modelValue: boolean;
  }>();
  const emit = defineEmits(["update:modelValue"]);
  const value = computed<boolean>({
    get() {
      return props.modelValue;
    },
    set(v) {
      emit("update:modelValue", v);
    },
  });
  const classes = computed(() => {
    return {
      open: value.value,
      close: !value.value,
    };
  });
  const route = useRoute()


  </script>
  <style scoped lang="scss">
  .aside_wrapper {
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: rgba(122, 122, 122, 0.4);
    backdrop-filter: blur(2px);
    left: 0px;
    top: 0px;
    z-index: var(--aside-z_index);
  }
  .aside_wrapper.open {
    display: block;
  }
  .aside_wrapper.close {
    display: none;
  }
  .aside_content {
    background-color: var(--default_color);
    height: 100%;
  }

  ul{
      list-style: none;
      display: grid;
      // gap: .3rem;
  }
  .aside_item:hover:not(.close_btn){
    background-color: var(--hovered_color);
  }
  .aside_item{
    height: 40px;
      padding: 0 .4rem;
  }
  .aside_item.active{
    background-color: var(--active_color);
  }
  .aside_item.close_btn{
  justify-self: right;
  font-size: x-large;
  color: white;
  cursor: pointer;
  }
  .aside_item_content {
    display: grid;
    height: inherit;
    grid-auto-flow: column;
    font-family: 'merriweasure';
    align-items: center;
    justify-content: left;
    gap: .4rem;
    text-decoration: none;
  }
  .aside_content.open {
    width: 250px;
    transition: all .2s ease;
  
  }
  .aside_content.close {
    width: min-content;
    transition: all .2s ease;
  }
  .title {
    text-align: left;
    color: white;
    font-size:medium;
  }

  </style>
  