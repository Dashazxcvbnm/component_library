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

            <div :class="[prefixElement ? 'slot-container_prefix' : 'slot-container_suffix', 'slot-container']">
                <div class="slot_wrapper" ref="slotWrapper">

                    <slot />

                    <div
                    :class="[showPassword ? 'password-control_icon-show' : '', 'password-control']"
                    v-if="showPassword"
                    @click.prevent="showOrHidePassword">
                       
                      <icon-base
                      :class="[darkTheme ? 'password-control_icon-show_color_mode_dark' : 'password-control_icon-show_color']"
                      v-if="showPasswordIcon"
                      width="20"
                      height="20"
                      icon-name="eye-hide"
                      viewBox="0 0 576 512">
                      <icon-eye-hide />
                      </icon-base>

                      <icon-base
                      :class="[darkTheme ? 'password-control_icon-show_color_mode_dark' : 'password-control_icon-show_color']"
                      v-if="!showPasswordIcon"
                      width="20"
                      height="20"
                      icon-name="eye-show"
                      viewBox="0 0 576 512">
                      <icon-eye-show />
                      </icon-base>

                    </div>

                </div>

                <input
                :class="[{ 'input-form_mode_dark': darkTheme },
                { 'input-form_mode_disabled': disabled },
                inputSize, notificationBorderStyle, 'input-form']"
                ref="input"
                :id="idForInput"
                :value="modelValue"
                v-bind="attributes"
                @input="$emit('update:modelValue', $event.target.value)" />
                
            </div>

            <div :class="[notificationStyle, notificationStaticStyle, inputSize]">
                <span class="notification_text">
                    {{ notificationText }}
                </span>

                <img v-if="iconUrlForNotification" :src="(`${iconUrlForNotification}`)">

                <icon-base
                v-else-if="notificationTheme === 'success'"
                width="11"
                height="10"
                icon-name="check-mark"
                viewBox="0 0 11 10"
                fill="none">
                <icon-check-mark />
                </icon-base>

                <icon-base
                v-else-if="notificationTheme === 'danger'"
                width="11"
                height="10"
                icon-name="cross"
                viewBox="0 0 11 10">
                <icon-cross />
                </icon-base>

            </div>

        </div>

    </div>
</template>

<script setup>
import IconBase from '@GUI/icons/IconBase.vue'
import IconEyeHide from '@GUI/icons/IconEyeHide.vue'
import IconEyeShow from '@GUI/icons/IconEyeShow.vue'
import IconCheckMark from '@GUI/icons/IconCheckMark.vue'
import IconCross from '@GUI/icons/IconCross.vue'

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

const uniqueId = computed(() => {
  return (Math.round(Math.random() * 1000)) + '_' + Date.now()
})

let idForInput = ref(`input_${uniqueId.value}`)

const slotWrapper = ref(null)
const input = ref(null)

const paddingForPlaceholder = (count = 0) => {
  if (count > 3) {
    return
  }

  const slotDomWidth = window.getComputedStyle(slotWrapper.value).width

  if (Number(slotDomWidth.replace("px", '')) !== 0) {
    if (props.prefixElement) {
      input.value.style.paddingLeft = `calc(${slotDomWidth} + 20px)`
      return
    }
    else if (props.suffixElement || props.showPassword) {
      input.value.style.paddingRight = `calc(${slotDomWidth} + 20px)`
      return
    }

  } else {
    setTimeout(() => {
      return paddingForPlaceholder(count + 1)
    }, 30)
  }
}

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

onMounted(() => {
  paddingForPlaceholder();
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
    padding-left: 12px;
    @include text-overflow-style;
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
}

.slot-container {
    position: relative;
    display: flex;
    align-items: center;

    &_suffix {
        justify-content: flex-end;
    }

    &_prefix {
        justify-content: flex-start;
    }
}

.slot_wrapper {
    position: absolute;
    margin: 0 10px;
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