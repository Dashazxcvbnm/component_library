<template>
    <div class="radio-input_wrapper">

        <input
        type="radio"
        :class="[{ 'radio-input_disabled': disabled }, radioSize, 'radio-input']"
        v-bind="attributes"
        :checked="checked"
        @change="$emit('update:modelValue', $event.target.value)">
        
        <label
        :class="[{ 'radio-label_disabled': disabled }, radioLabelSize, 'radio-label']"
        :for="id">{{ label }}</label>

        <slot/>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({

  modelValue: {
    type: String,
  },

  value: {
    type: String,
    required: true,
    default: ''
  },

  name: {
    type: String,
    required: true,
    default: ''
  },

  id: {
    type: String,
    required: true,
    default: ''
  },

  label: {
    type: String,
    default: ''
  },

  size: {
    validator(value) {
      return ['default', 'medium', 'large'].includes(value)
    },
    default: 'default'
  },

  checked: {
    type: Boolean,
    default: false
  },

  disabled: {
    type: Boolean,
    default: false
  }

})

defineEmits(['update:modelValue'])

const attributes = {
  value: props.value,
  id: props.id,
  name: props.name,
  disabled: props.disabled
}

const radioSize = ref(`radio-input_size_${props.size}`)
const radioLabelSize = ref(`radio-label_size_${props.size}`)
</script>

<style scoped lang="scss">

.radio-input_wrapper {
    display: flex;
    align-items: center;
}

.radio-input {
    appearance: none;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    border: 1px solid $plain-grey;
    transition: 0.2s all linear;
    outline: none;
    margin: 0 5px;

    &:checked {
        border: 3px solid $basic-black;
    }

    &:checked + .radio-label {
        color: $basic-black;
    }

    &:hover {
        border-color: $dark-grey;
    }

    &_disabled {
      filter: opacity(50%);
      cursor: not-allowed;

      &:hover {
        border-color: $plain-grey;
      }

      &:checked {
        border-color: $plain-grey;
      }

      &:checked + .radio-label{
        color: $plain-grey;
      }
    }

    &_size {
        &_medium {
            width: 13px;
            height: 13px;
            
            &:checked {
                border: 4px solid $basic-black;
            }
        }

        &_large {
            width: 16px;
            height: 16px;

            &:checked {
                border: 5px solid $basic-black;
            }
        }
    }

}

.radio-label {
    font-family: $input-font;
    font-size: 14px;
    line-height: 20px;
    color: $plain-grey;

    &_size {
        &_medium {
            font-size: 17px;
        }

        &_large {
            font-size: 19px;
        } 
    }

    &:hover {
        color: $dark-grey;
    }

    &_disabled {
        filter: opacity(50%);
        cursor: not-allowed;

        &:hover {
            color: $plain-grey;
      }
    }
}
</style>