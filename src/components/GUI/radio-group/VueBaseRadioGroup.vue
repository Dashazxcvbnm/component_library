<template>
    <div
    :class="[{'radio-group_wrapper': direcrion === 'horizontal'}]">

        <VueBaseRadio
        v-for="option in buttons" :key="option.id"
        :class="[{'radio_wrapper': direcrion === 'horizontal'}]"
        :label="option.label"
        :id="option.id"
        :value="option.value"
        :checked="option.checked"
        :disabled="option.disabled ? option.disabled : disabled"
        v-bind="attributes"
        @change="$emit('update:modelValue', option.value)"></VueBaseRadio>

    </div>
</template>

<script setup>
import VueBaseRadio from '../radio/VueBaseRadio.vue';

const props = defineProps({
  buttons: {
    type: Array,
    required: true,
    validator(value) {
      return value.every((option) => Object.keys(option).includes('label' && 'id' && 'value'))
    }
  },

  modelValue: {
    type: String
  },
  
  name: {
    type: String,
    required: true
  },

  checked: {
    type: Boolean,
    default: false
  },

  size: {
    validator(value) {
      return ['default', 'medium', 'large'].includes(value)
    },
    default: 'default'
  },

  direcrion: {
    validator(value) {
      return ['vertical', 'horizontal'].includes(value)
    },
    default: 'vertical'
  },

  disabled: {
    type: Boolean,
    default: false
  }

})

defineEmits(['update:modelValue'])

const attributes = {
  name: props.name,
  size: props.size
}

</script>

<style scoped lang="scss">

.radio-group_wrapper {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.radio_wrapper {
    margin-right: 5px;
}
</style>