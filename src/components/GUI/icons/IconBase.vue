<!-- eslint-disable no-unused-vars -->
<template>
    <svg xmlns="http://www.w3.org/2000/svg" 
      :width="width" 
      :height="height" 
      viewBox="0 0 20 20" 
      :aria-labelledby="iconName" 
      role="presentation"
    >
      <title :id="iconName"> {{ iconName }} icon</title>
      <g :fill="fill">
        <slot />
      </g>
    </svg>
  </template>

<script setup>


defineProps({

  iconName: {
    type: String
  },

  width: {
    type: [Number, String],
    default: 18
  },

  height: {
    type: [Number, String],
    default: 18
  },

  fill: {
    type: String,
    default: 'currentColor'
  }

})

</script>
  
<style scoped>

svg {
    display: inline-block;
    vertical-align: baseline;
    margin-bottom: -2px;
}

</style>