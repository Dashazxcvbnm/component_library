<template>
    <div
    :class="[{'checkbox-group_wrapper': direcrion === 'horizontal'}]">

    <VueBaseCheckbox
    v-for="button in buttonsCopy" :key="button.id"
    :class="[{'checkbox_wrapper': direcrion === 'horizontal'}]"
    :label="button.label"
    :id="button.id"
    :value="button.value"
    :disabled="button.disabled"
    v-bind="attributes"
    v-model="button.checked"/>

    </div>
</template>

<script setup>
import VueBaseCheckbox from '../checkbox/VueBaseCheckbox.vue';

import { watch, reactive } from 'vue';

const props = defineProps({
  buttons: {
    type: Array,
    required: true,
    validator(value) {
      return value.every((button) => Object.keys(button).includes('label' && 'id' && 'checked' && 'value'))
    }
  },

  modelValue: {
    type: Array
  },
  
  name: {
    type: String,
    required: true
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
  }

})

const emits = defineEmits(['update:modelValue'])

const attributes = {
  size: props.size,
  name: props.name
}

const buttonsCopy = reactive(JSON.parse(JSON.stringify(props.buttons)))

watch(buttonsCopy, () => {
  emits('update:modelValue', buttonsCopy.map((button) => {
    if(button.checked) {
      return button.value
    }
  }).filter((value) => value)
  )
})

</script>

<style scoped lang="scss">

.checkbox-group_wrapper {
  display: flex;
  flex-wrap: wrap;
}

.checkbox_wrapper {
  margin-right: 10px;
}
</style>