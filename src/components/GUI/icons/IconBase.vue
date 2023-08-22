<template>
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    :width="width" 
    :height="height" 
    role="presentation"
  >
  <use :href="symbolId" :fill="color" />
  </svg>

</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({

  prefix: {
    type: String,
    default: 'icon',
  },

  name: {
    type: String,
    required: true,
  },

  width: {
    type: [Number, String],
    default: 20
  },

  height: {
    type: [Number, String],
    default: 20
  },

  color: {
    type: String,
    default: 'currentColor'
  }

})


const symbolId = computed(() => {
  return `#${props.prefix}-${props.name}`
})
    
</script>

<style scoped>

svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
}

</style>