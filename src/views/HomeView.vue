<template>
    <div class="btns-wrapper">
        
    <!-- Маленькие кнопки. С текстом и икноками -->
        <VueBaseButton
        class="btn"
        size="small"
        appearance="editing" />

        <VueBaseButton
        class="btn"
        title=""
        size="small"
        appearance="editing"
        rightIcon iconUrl="src/components/icons/BlackCross.svg" 
        @click="testClick" />

        <VueBaseButton
        class="btn"
        title=""
        size="small"
        appearance="editing"
        rightIcon iconUrl="src/components/icons/Pencil.svg"
        @click="testClick" />

        <VueBaseButton
        class="btn"
        title=""
        size="small"
        appearance="editing"
        rightIcon
        iconUrl="src/components/icons/HeartSmall.png"
        @click="testClick" />

        <!-- Базовая серия medium кнопка -->
        <VueBaseButton
        class="btn"
        title="Apply" />

        <!-- large кнопка в черно-красном цвете -->
        <VueBaseButton
        class="btn"
        title="Add to bag"
        size="large"
        appearance="main-black" />

        <!-- large кнопка в белом цвете -->
        <VueBaseButton
        class="btn"
        title="save"
        size="large"
        appearance="main-white"
        leftIcon
        iconUrl="src/components/icons/Heart.svg" />

    </div>

    <!-- "Прозрачные" кнопки с разным background-color у обертки-->
    <div class="bg-wrap bg-wrap_first">

        <VueBaseButton
        class="bg-btn"
        size="large"
        appearance="transparent"
        leftIcon
        iconUrl="src/components/icons/Pencil.svg" />

    </div>

    <div class="bg-wrap bg-wrap_second">

        <VueBaseButton
        class="bg-btn"
        size="large"
        appearance="transparent"
        rightIcon
        iconUrl="src/components/icons/Heart.svg" />

    </div>

    <div class="bg-wrap bg-wrap_third">

        <VueBaseButton
        class="bg-btn"
        size="large"
        appearance="transparent-white" />

    </div>

    <!-- Круглые кнопки -->
    <div class="btns-wrapper">
        
            <VueBaseButton
            class="btn"
            size="small"
            appearance="editing"
            circle
            @click="testClick"/>
    
            <VueBaseButton
            class="btn"
            title=""
            size="small"
            appearance="editing"
            rightIcon
            iconUrl="src/components/icons/BlackCross.svg"
            circle/>
    
            <VueBaseButton
            class="btn"
            title=""
            size="small"
            appearance="editing"
            rightIcon
            iconUrl="src/components/icons/Pencil.svg" 
            circle/>
    
            <VueBaseButton
            class="btn"
            title=""
            size="small"
            appearance="editing"
            rightIcon
            iconUrl="src/components/icons/HeartSmall.png"
            circle/>
    
            <VueBaseButton
            class="btn"
            title="Apply"
            circle/>
    
            <VueBaseButton
            class="btn"
            title="Add to bag"
            size="large"
            appearance="main-black"
            circle/>
    
            <VueBaseButton
            class="btn"
            title="save"
            size="large"
            appearance="main-white"
            leftIcon
            iconUrl="src/components/icons/Heart.svg"
            circle/>
    
        </div>

        <div>

            <VueBaseButton
            class="btn"
            size="large"
            appearance="transparent"
            circle/>

        </div>

        <!-- Деактивированные кнопки -->
        <div class="btns-wrapper">

        <VueBaseButton
        class="btn"
        size="small"
        appearance="editing"
        circle
        disabled
        @click="testClick"/>

        <VueBaseButton
        class="btn"
        title=""
        size="small"
        appearance="editing"
        rightIcon
        iconUrl="src/components/icons/BlackCross.svg"
        circle
        disabled/>

        <VueBaseButton
        class="btn"
        title=""
        size="small"
        appearance="editing"
        rightIcon
        iconUrl="src/components/icons/Pencil.svg" 
        circle
        disabled/>

        <VueBaseButton
        class="btn"
        title=""
        size="small"
        appearance="editing"
        rightIcon
        iconUrl="src/components/icons/HeartSmall.png"
        circle
        disabled/>

        <VueBaseButton
        class="btn"
        title="Apply"
        circle
        disabled/>

        <VueBaseButton
        class="btn"
        title="Add to bag"
        size="large"
        appearance="main-black"
        circle
        disabled/>

        <VueBaseButton
        class="btn"
        title="save"
        size="large"
        appearance="main-white"
        leftIcon
        iconUrl="src/components/icons/Heart.svg"
        circle
        disabled/>

    </div>

    <div class="wrap">

        <span class="text">small инпут</span>
        <VueBaseInput
        class="input"
        label="Текствое описание"
        size="small"
        notificationText="Базовое уведомление"
        notificationTheme="primary"/>

        <VueBaseInput
        class="input"
        label="Текствое описание"
        size="small"
        notificationText="Успех"
        notificationTheme="success"/>

        <VueBaseInput
        class="input"
        label="Текствое описание"
        size="small"
        notification-text="Предупреждение"
        notificationTheme="danger"/>

        <span class="text">без label</span>
        <VueBaseInput
        class="input"
        size="small"/>

        <span class="text">label сверху</span>
        <VueBaseInput
        class="input"
        label="Текствое описание"
        labelTop
        size="small"/>

    </div>

    <div class="wrap">

        <span class="text">medium инпут</span>
        <VueBaseInput
        class="input"
        label="Текствое описание"
        size="medium"/>

        <VueBaseInput
        class="input"
        size="medium"/>

    </div>

    <div class="wrap">

        <span class="text">large инпут</span>
        <VueBaseInput
        class="input"
        label="Текствое описание"
        size="large"/>

        <VueBaseInput
        class="input"
        size="large"
        notificationText="Базовое уведомление"/>

    </div>

    <div class="wrap">

        <span class="text">Инпут без фиксированной ширины. Занимает ширину контейнера</span>
        <VueBaseInput
        class="input"
        label="Текствое описание"/>

        <VueBaseInput
        class="input"/>

    </div>

    <span class="text">Без контейнера занимает 100% ширины</span>
    <VueBaseInput
    class="input"/>

    <VueBaseInput
    class="input"
    notificationText="Базовое уведомление"
    notificationTheme="primary"/>

    <div class="wrap">

        <span class="text">Деактивированный инпут</span>
        <VueBaseInput
        class="input"
        size="small"
        disabled/>

        <VueBaseInput
        class="input"
        size="medium"
        disabled/>

        <VueBaseInput
        class="input"
        size="large"
        disabled/>

    </div>

    <div class="wrap bg-input-wrap">

        <span class="text">В темной теме</span>
        <VueBaseInput
        class="input"
        label="Текствое описание"
        darkTheme
        size="small"/>

        <VueBaseInput
        class="input"
        label="Текствое описание"
        darkTheme
        size="small"
        showPassword/>

        <span class="text">Диактивированный</span>
        <VueBaseInput
        class="input"
        label="Текствое описание"
        darkTheme
        size="small"
        disabled/>

    </div>

    <div class="wrap">

        <span class="text">Инпуты со стилестической отметкой на лейбле об обязательном вводе</span>
        <VueBaseInput
        class="input"
        size="small"
        label="Текствое описание"
        fieldMark/>

        <VueBaseInput
        class="input"
        size="medium"
        label="Текствое описание"
        fieldMark/>

        <VueBaseInput
        class="input"
        size="large"
        label="Текствое описание"
        fieldMark/>

    </div>

    <div class="wrap">

        <span class="text">Инпут с кнопкой внутри вставляемая через slot</span>
        <vue-base-input
        class="input"
        size="small"
        suffixElement>

        <button class="button">Тест кнопка</button></vue-base-input>

        <vue-base-input
        class="input"
        size="small"
        prefixElement>

        <button class="button">Тест кнопка</button></vue-base-input>

        <vue-base-input
        class="input"
        size="medium">

        <button class="button">Тест кнопка</button></vue-base-input>

        <vue-base-input
        class="input"
        size="large">

        <button class="button">Тест кнопка</button></vue-base-input>

        <vue-base-input
        class="input">

        <button class="button">Тест кнопка</button></vue-base-input>

        <span class="text">Инпут с иконкой внутри вставляемая через slot</span>
        <vue-base-input
        class="input"
        size="small">

        <img src="src/components/icons/Search.svg"></vue-base-input>

        <vue-base-input
        class="input"
        size="small"
        prefixElement>

        <img src="src/components/icons/Search.svg"></vue-base-input>
    </div>

    <div class="wrap">

        <span class="text">Импут с атрибутом showPassword показывающий или скрывающий пароль</span>
        <VueBaseInput
        class="input"
        size="small"
        v-model="value"
        type="password"
        showPassword/>

        <VueBaseInput
        class="input"
        size="small"
        type="text"
        v-model="value1"
        showPassword/>

    </div>

    <vue-base-input
    class="input"
    notificationText="Базовое уведомление"
    notificationTheme="primary">

    <button class="button">Тест кнопка</button>
    </vue-base-input>


</template>

<script setup>
import VueBaseButton from '@GUI/buttons/VueBaseButton.vue';
import VueBaseInput from '@GUI/input/VueBaseInput.vue'

import { ref } from 'vue'

function testClick() {
  console.log('Клик!')
}

const value = ref('')
const value1 = ref('')

</script>

<style scoped>
.btns-wrapper {
    display: flex;
}

.btn {
    margin: 10px 10px;
}

.btn_size {
    width: 185px;
}

.bg-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 10px;
}

.bg-wrap_first {
    background-color: #e39cf7;
}

.bg-wrap_second {
    background-color: #feed9f;
}

.bg-wrap_third {
    background-color: #000000;
}

.wrap {
    width: 650px;
}

.wrap:not(:first-child) {
    margin: 50px 0;
}

.bg-input-wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000000;
    height: 350px;
    flex-flow: column wrap;
}

.input {
    margin: 0 0 10px;
}

.text {
    display: inline-block;
    color: blueviolet;
    margin-bottom: 10px;
}

.button {
    border: none;
}
</style>