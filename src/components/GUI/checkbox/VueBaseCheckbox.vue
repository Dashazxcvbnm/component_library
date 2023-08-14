<template>
    <div>

      <input
      class="checkbox-input"
      type="checkbox"
      v-bind="attributes"
      @change="$emit('update:checked', $event.target.checked)">
      
      <label
      :class="[disabled ? 'checkbox-label_disabled' : '', 'checkbox-label', checkboxSize]"
      :for="id">

      <IconBase
      :class="[checkboxIconSize, 'icon']"
      name="CheckboxCheckMark"
      width="12"
      height="10"/>
      {{ label }}</label>

    </div>
</template>

<script setup>
import IconBase from '@GUI/icons/IconBase.vue'
import { ref } from 'vue';

const props = defineProps({

  value: {
    type: String,
    default: ''
  },

  name: {
    type: String,
    default: ''
  },

  id: {
    type: String,
    default: ''
  },

  label: {
    type: String,
    default: ''
  },

  size: {
    validator(value) {
      return ['medium', 'large'].includes(value)
    }
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

defineEmits(['update:checked'])

const attributes = {
  value: props.value,
  id: props.id,
  name: props.name,
  checked: props.checked,
  disabled: props.disabled,
}

const checkboxSize = ref(`checkbox-label_size_${props.size}`)
const checkboxIconSize = ref(`icon_size_${props.size}`)
</script>

<style scoped lang="scss">

.checkbox-input {
      display: none;

      &:checked {
        &+ .checkbox-label {
          color: $basic-black;
        }

        &+ .checkbox-label .icon {
          position: absolute;
          display: inline-block;
          top: 4px;
          left: -1px;

          &_size {

            &_medium {
              top: 2px;
            }

            &_large {
              top: 1px;
            }
          }
        }

        &+ .checkbox-label:before {
          border: none;
        }

        &+ .checkbox-label_disabled {
          color: $plain-grey;
          filter: opacity(50%);
          cursor: not-allowed;

          &:before {
            border: 1px solid $plain-grey;
          }

          &:hover:before {
            border: 1px solid $plain-grey;
            cursor: not-allowed;
          }

          &:hover {
            color: $plain-grey;
          }
        }
      }
}

.checkbox-label {
    font-family: $input-font;
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
    color: $plain-grey;

    &:before {
      content:'';
      box-sizing: border-box;
      border: 1px solid $plain-grey;
      width: 10px;
      height: 10px;
      display: inline-block;
      position: relative;
      cursor: pointer;
      margin-right: 10px;
      top: -1px;
    }

    &:hover:before {
        border: 1px solid $dark-grey;
    }

    &:hover {
        color: $dark-grey;
    }

    &_disabled {
      color: $plain-grey;
      filter: opacity(50%);
      cursor: not-allowed;

      &:before {
        border: 1px solid $plain-grey;
      }

      &:hover:before {
        border: 1px solid $plain-grey;
        cursor: not-allowed;
      }

      &:hover {
        color: $plain-grey;
      }
    }

    &_size {

      &_medium {
        font-size: 17px;

        &:before {
          border: 1px solid $plain-grey;
          width: 14px;
          height: 14px;
          top: -1px;
        }
      }

      &_large {
        font-size: 19px;

        &:before {
          border: 1px solid $plain-grey;
          width: 16px;
          height: 16px;
          top: -1px;
        }
      }
}
}

.icon {
  display: none;

  &_size {
    
    &_medium {
      width: 16px;
      height: 14px;
    }

    &_large {
      width: 18px;
      height: 16px;
    }
  }
}
</style>