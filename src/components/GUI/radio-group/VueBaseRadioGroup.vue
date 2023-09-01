<template>
    <div
    :class="[{'radio-group_wrapper': direcrion === 'horizontal'}]">

        <VueBaseRadio
        v-for="button in buttons" :key="button.id"
        :class="[{'radio_wrapper': direcrion === 'horizontal'}]"
        :label="button.label"
        :id="button.id"
        :value="button.value"
        :checked="button.checked"
        :disabled="button.disabled ? button.disabled : disabled"
        v-bind="attributes"
        @change="$emit('update:modelValue', button.value)"></VueBaseRadio>

    </div>
</template>

<script setup>
import VueBaseRadio from '../radio/VueBaseRadio.vue';

const props = defineProps({
  buttons: {
    type: Array,
    required: true,
    validator(value) {
      return value.every((button) => Object.keys(button).includes('label' && 'id' && 'value'))
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