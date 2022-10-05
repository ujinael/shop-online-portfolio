<template>
    <transition name="fade">
      <div class="v-modal v-modal-wrapper" v-if="value" @click="onCloseModal">
        <div class="v-modal-content" @click.stop>
          <div class="v-modal-header noselect">
            <h3 class="v-modal-title">{{ title }}</h3>
            <div class="v-modal-close_btn" @click.stop="onCloseModal">
              &times;
            </div>
          </div>
          <div class="v-modal-body">
            <slot> </slot>
          </div>
        </div>
      </div>
    </transition>
  </template>
  <script setup lang="ts">
  import { computed } from "vue";
  const props = defineProps<{
    title?: string;
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
  const onCloseModal = () => {
    value.value = false;
  };
  </script>
  <style scoped lang="scss">
  @import "@/assets/show-animation.scss";
  @import "@/assets/main.scss";
  .v-modal {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.391);
    z-index: var(--z_index-modal);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(6px);
    font-family: 'merriweather';
  }
  .v-modal-wrapper {
    display: grid;
    justify-content: center;
    align-content: center;
    background-clip: border-box;
  
  }
  .v-modal-content {
      height: 100vh;
    width: 100vw;
    background-color: whitesmoke;
    box-sizing: border-box;
    background-clip: border-box;
  
  }
  .v-modal-header {
    display: grid;
    grid-template-columns: 1fr 80% 1fr;
    box-sizing: border-box;
    padding:.4rem .2rem;
    background-clip: border-box;
    color: white;
  }
  .v-modal-title {
    grid-area: 1/2/2/3;
  }
  .v-modal-close_btn {
    color: slategray;
    justify-self: flex-end;
    grid-area: 1/3/2/4;
    font-size: xx-large;
    line-height: 1rem;
    height: 1rem;
    width: auto;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  .v-modal-close_btn:hover {
transform: scale(1.2);
    transition: all 0.2s ease;
  }
  .v-modal-close_btn:active {
    transform: scale(1.5);
    transition: all 0.2s ease;
  }
  
  @media (min-width:599px) {
      .v-modal-content{
         height: fit-content;
         width: fit-content;                                                         
      }
  }
  </style>
  