<template>
    <div :class="[{ 'input-form-wrapper_position': label },
    { 'input-form-wrapper_position_column': labelTop },
    label ? inputWrapperSize : inputSize,
    labelTop ? inputSize : inputWrapperSize]">

        <div>
            <label :for="idForInput" :class="[{ 'label_mode_dark': darkTheme },
            fieldMark ? markForLabel : false, 'label']" v-if="label">{{ label }}</label>
        </div>

        <div :class="[{ 'inner-input_wrapper_position': label && !size }]">

            <div :class="[{ 'slot-container_prefix': prefixElement },
            { 'slot-container_suffix': isLastElementExist },
            { 'slot-container_mode_dark' : isinputItemsExist && darkTheme },
            { 'slot-container_prefix_success': prefixElement && isNotificationSuccessThemeExist },
            { 'slot-container_prefix_danger': prefixElement && isNotificationDangerThemeExist },
            { 'slot-container_suffix_success': isLastElementExist && isNotificationSuccessThemeExist },
            { 'slot-container_suffix_danger': isLastElementExist && isNotificationDangerThemeExist },
            'slot-container', inputSize]">

                <div v-if="isinputItemsExist"
                :class="[{ 'slot_wrapper_suffix': isLastElementExist },
                { 'slot_wrapper_prefix': prefixElement }, 'slot_wrapper']">

                    <slot />

                    <div
                    :class="[{ 'password-control_icon-show': showPassword }, 'password-control']"
                    v-if="showPassword"
                    @click.prevent="showOrHidePassword">

                      <icon-base
                      :class="[darkTheme ? 'password-control_icon-show_color_mode_dark' : 'password-control_icon-show_color']"
                      :name="iconForPassword">
                      </icon-base>

                    </div>

                </div>

                <input
                :class="[{ 'input-form_mode_dark': darkTheme },
                { 'input-form_mode_disabled': disabled },
                { 'notification_field_prefix': prefixElement },
                { 'notification_field_suffix': isLastElementExist },
                notificationBorderStyle, 'input-form']"
                ref="input"
                :id="idForInput"
                :value="modelValue"
                v-bind="attributes"
                @input="$emit('update:modelValue', $event.target.value)" />

            </div>

            <div :class="[notificationStyle, notificationStaticStyle, inputSize,
            prefixElement ? 'input-form_prefix' : 'input-form_suffix']">
                <span class="notification_text">
                    {{ notificationText }}
                </span>

                <img v-if="iconUrlForNotification" :src="(`${iconUrlForNotification}`)">

                <icon-base
                v-else-if="isNotificationSuccessThemeExist"
                width="11"
                height="10"
                name="CheckMark">
                </icon-base>

                <icon-base
                v-else-if="isNotificationDangerThemeExist"
                width="11"
                height="10"
                name="Cross">
                </icon-base>

            </div>

        </div>

    </div>
</template>

<script setup>
import IconBase from '@GUI/icons/IconBase.vue';
import uniqueId from '@/helpers/uniqueID.js';

import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },

  type: {
    validator(value) {
      return ['text', 'password', 'number'].includes(value)
    },
    default: 'text'
  },

  placeholder: {
    type: String,
    default: 'Введите данные'
  },

  form: {
    type: String
  },

  label: {
    type: String,
    default: ''
  },

  labelTop: {
    type: Boolean,
    default: false
  },

  size: {
    validator(value) {
      return ['small', 'medium', 'large'].includes(value)
    }
  },

  notificationText: {
    type: String
  },

  notificationTheme: {
    validator(value) {
      return ['primary', 'success', 'danger'].includes(value)
    },
  },

  darkTheme: {
    type: Boolean,
    default: false
  },

  disabled: {
    type: Boolean,
    default: false
  },

  iconUrlForNotification: {
    type: String,
    default: ''
  },

  max: {
    type: [String, Number]
  },

  min: {
    type: [String, Number]
  },

  step: {
    type: [String, Number]
  },

  maxlength: {
    type: [String, Number]
  },

  minlength: {
    type: [String, Number]
  },

  prefixElement: {
    type: Boolean,
    default: false
  },

  suffixElement: {
    type: Boolean,
    default: false
  },

  fieldMark: {
    type: Boolean,
    default: false
  },

  showPassword: {
    type: Boolean,
    default: false
  }

})

defineEmits(['update:modelValue'])

const attributes = {
  placeholder: props.placeholder,
  type: props.type,
  form: props.form,
  disabled: props.disabled,
  max: props.max,
  min: props.min,
  step: props.step,
  maxlength: props.maxlength,
  minlength: props.minlength
}

const inputWrapperSize = ref(`input-form-wrapper_size_${props.size}`)
const inputSize = ref(`input-form_size_${props.size}`)

const notificationStaticStyle = ref('notification_field')
const notificationStyle = ref(`notification_field_${props.notificationTheme}`)
const notificationBorderStyle = ref(`input-form_border_${props.notificationTheme}`)

const markForLabel = ref('label_mark');

const isLastElementExist = computed(() => {
  return props.suffixElement || props.showPassword
})

const isinputItemsExist = computed(() => {
  return props.prefixElement || isLastElementExist.value
})

const isNotificationSuccessThemeExist = computed(() => {
  return props.notificationTheme === 'success'
})

const isNotificationDangerThemeExist = computed(() => {
  return props.notificationTheme === 'danger'
})

let idForInput = `input_${uniqueId()}`

const input = ref(null)

const showPasswordIcon = ref(false);

const showOrHidePassword = () => {
  if(props.showPassword && input.value.type === 'password') {
    showPasswordIcon.value = false
    return input.value.setAttribute("type", "text");
  } 
    
  else if(props.showPassword && input.value.type === 'text') {
    showPasswordIcon.value = true
    return input.value.setAttribute("type", "password");
  }
}

let iconForPassword = computed(() => {
  return showPasswordIcon.value ? 'IconEyeShow'  : 'IconEyeHide'
})

onMounted(() => {
  showPasswordIcon.value = props.showPassword && input.value.type === 'password'
})

</script>

<style scoped lang="scss">
.input-form-wrapper_position {
    display: flex;
    justify-content: space-between;

    &_column {
        flex-direction: column;
    }
}

.input-form-wrapper_size {
    &_small {
        width: 440px;
    }

    &_medium {
        width: 545px;
    }

    &_large {
        width: 606px;
    }
}

.inner-input_wrapper_position {
    flex-basis: 100%;
}

.input-form {
    box-sizing: border-box;
    font-family: $input-font;
    font-size: 16px;
    line-height: 20px;
    outline: none;
    border: 1px solid $basic-grey;
    width: 100%;
    min-height: 44px;
    min-width: 50%;
    padding-left: 12px;
    @include text-overflow-style;

    &_prefix {
      border-left: none;
    }

    &_suffix {
      border-right: none;
    }
}

.input-form::placeholder {
    color: $basic-grey;
}

.input-form:placeholder-shown {
    @include text-overflow-style;
}

.input-form_size {
    &_small {
        width: 290px;
    }

    &_medium {
        width: 392px;
    }

    &_large {
        width: 440px;
    }
}

.input-form_mode {
    &_dark {
        font-size: 11px;
        line-height: 27px;
        @include base-style($basic-white, $basic-black, 1px solid $basic-white);
    }

    &_disabled {
        filter: opacity(50%);
        border: 1px solid $basic-grey;
        cursor: not-allowed;
    }
}

.input-form_border {
    &_success {
        border: 1px solid $basic-green;
    }

    &_danger {
        border: 1px solid $basic-red;
    }
}

.label {
    font-family: $input-font;
    font-size: 16px;
    line-height: 20px;
    white-space: nowrap;
    margin-right: 10px;
    color: $dark-grey;

    &_mode_dark {
        font-size: 14px;
        line-height: 27px;
        color: $basic-white;
    }

    &_mark:last-of-type::after {
        content: " *";
        color: $basic-red;
    }
}

.notification_text {
    color: $dark-grey;
    @include text-overflow-style;
}

.notification_field {
    height: 35px;
    display: none;
    align-items: center;
    font-size: 14px;
    justify-content: space-between;
    padding: 0px 12px;
    box-sizing: border-box;

    &_primary {
        background-color: $light-grey;
        display: flex;
    }

    &_success {
        background-color: $light-green;
        display: flex;
    }

    &_danger {
        background-color: $light-red;
        display: flex;
    }

    &_suffix {
      border-right: none;
    }

    &_prefix {
      border-left: none;
    }
}

.slot-container {
    display: flex;
    align-items: center;
    height: 44px;
    overflow: hidden;
    overflow-x: auto;

    &_suffix {
      box-sizing: border-box;
      border: 1px solid $basic-grey;
      border-left: none;

      &_danger {
        border-color: $basic-red;
      }

      &_success {
        border-color: $basic-green;
      }
    }

    &_prefix {
      box-sizing: border-box;
      border: 1px solid $basic-grey;
      border-right: none;

      &_danger {
        border-color: $basic-red;
      }

      &_success {
        border-color: $basic-green;
      }
    }

    &_mode_dark {
      border-color: $basic-white;
    }
}

.slot_wrapper {
    &_prefix {
      margin-left: 10px;
    }

    &_suffix {
      order: 1;
      margin: 0 10px;
    }
}

.password-control {
    cursor: pointer;
    display: none;

    &_icon-show {
        display: flex;

        &_color {
            color: $plain-grey;
        }

        &_color_mode_dark {
            color: $basic-white;
        }
    }
}

</style>