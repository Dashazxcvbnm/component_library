<template>
    <div class="input-outer-wrapper">

        <div
        class="label-inner-wrapper">
        
            <label
            :class="[requiredField ? requiredStyleField : false]"
            for="name-field"
            v-if="label">{{ label }}</label>

        </div>
        
        <div class="input-inner-wrapper">

            <input
            id="name-field"
            class="input-form"
            :class="[{
                'input-form_error': notificationErrorFieldActivation,
                'input-form_valid': notificationValidFieldActivation}]"
            :placeholder="placeholder"
            :type="type"
            :value="modelValue"
            :minlength="minLength"
            @input="validator"
            />
            
            <div
            :class="[{'field-validity-notification_empty': notificationEmptyFieldActivation}, staticStyleNotification]">
            
                <span 
                class="notification_text">
                {{ emptyFieldText }}
                </span>

            </div>

            <div 
            :class="[{'field-validity-notification_error': notificationErrorFieldActivation}, staticStyleNotification]">
                
                <span 
                class="notification_text">
                {{ errorFieldText }}
                </span>
                <img src="../icons/Cross.svg">

            </div>

            <div
            :class="[{'field-validity-notification_valid': notificationValidFieldActivation}, staticStyleNotification]">

                <span 
                class="notification_text">
                {{ validFieldText }}
                </span>
                <img src="../icons/CheckMark.svg">

            </div>

        </div>
            
       
    </div>
</template>

<script setup>

import { ref } from 'vue';

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },

    label: {
        type: String,
        default: ''
    },

    type: {
        type: String,
        default: 'text'
    },

    placeholder: {
        type: String,
        default: 'Введите данные'
    },

    emptyFieldText: {
        type: String
    },

    errorFieldText: {
        type: String
    },

    validFieldText: {
        type: String
    },

    minLength: {
        type: Number,
        default: 2
    },

    requiredField: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(['update:modelValue'])

const requiredStyleField = ref('label-form-with_after')

const staticStyleNotification = ref('field-validity-notification')
let notificationEmptyFieldActivation = ref(false)
let notificationErrorFieldActivation = ref(false)
let notificationValidFieldActivation = ref(false)

const validator = (event) => {
    const value = event.target.value
    emits('update:modelValue', value)

    if (!value.length && props.emptyFieldText) {
         notificationEmptyFieldActivation = true
         notificationErrorFieldActivation = false
         notificationValidFieldActivation = false
    }
    else if ((value.length < props.minLength) && props.errorFieldText) {
        notificationEmptyFieldActivation = false
        notificationErrorFieldActivation = true
        notificationValidFieldActivation = false
    }

    else if (props.validFieldText) {
        notificationEmptyFieldActivation = false
        notificationErrorFieldActivation = false
        notificationValidFieldActivation = true
    }
}

</script>

<style scoped>

.input-outer-wrapper {
    display: flex;
    justify-content: space-between;
    width: 606px;
    font-family: Roboto;
    font-size: 16px;
    line-height: 20px;
}

.input-inner-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 79px;
}

.input-form {
    border: 1px solid #C4C4C4;
    outline: none;
    width: 376px;
    height: 40px;
    padding-left: 12px;
}

.input-form_error {
    border: 1px solid #EB5757;
}

.input-form_valid {
    border: 1px solid #27AE60;
}

input::placeholder {
    color: #C4C4C4;
}

.field-validity-notification {
    height: 35px;
    display: none; 
    align-items: center;
    font-size: 14px;
    justify-content: space-between;
    padding: 0px 12px;
}

.field-validity-notification_empty {
    background-color: #F0F2F2;
    display: flex;
}

.field-validity-notification_error {
    background-color: #FFE3E3;
    display: flex;
}

.field-validity-notification_valid {
    background-color: #E3FFE9;
    display: flex;
}

.notification_text {
    color: #3F3F3F;
}

.label-inner-wrapper {
    color: #3F3F3F;
}

.label-form-with_after:last-of-type:after {
    content: " *";
    color: #EB5757;
}

</style>


