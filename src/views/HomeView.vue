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
        size="medium"
        suffixElement>

        <button class="button">Тест кнопка</button></vue-base-input>

        <vue-base-input
        class="input"
        size="large"
        suffixElement>

        <button class="button">Тест кнопка</button></vue-base-input>

        <vue-base-input
        class="input"
        suffixElement>

        <button class="button">Тест кнопка</button></vue-base-input>

        <span class="text">Инпут с иконкой внутри вставляемая через slot</span>
        <vue-base-input
        class="input"
        size="small"
        suffixElement>

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
        notification-text="Предупреждение"
        notificationTheme="success"
        showPassword/>

        <VueBaseInput
        class="input"
        size="small"
        type="text"
        notification-text="Предупреждение"
        notificationTheme="danger"
        v-model="value1"
        showPassword/>

    </div>

    <vue-base-input
    class="input"
    notificationText="Базовое уведомление"
    notificationTheme="primary"
    suffixElement>

    <button class="button">Тест кнопка</button>
    </vue-base-input>

    <div class="wrap">

        <span class="">Checkboxes</span>
        
        <vue-base-checkbox
        label="Checkbox 1"
        v-model="checkedActive1"
        id="checkbox1"/>

        <VueBaseCheckbox
        label="Checkbox 2"
        v-model="checkedActive2"
        id="checkbox2"/>

        <VueBaseCheckbox
        label="CHECKBOX"
        v-model="checkedActive3"
        id="checkbox3"/>

    </div>

    <div class="wrap">

        <span class="text">Диактивированный чекбокс</span>
        <VueBaseCheckbox
        label="Checkbox 4"
        v-model="checkedActive4"
        id="checkbox4"
        disabled/>

        <VueBaseCheckbox
        label="Checkbox 5"
        v-model="checkedActive5"
        id="checkbox5"
        disabled/>

    </div>

    <div class="wrap">

        <span class="text">default(самый маленький) чекбокс</span>
        <VueBaseCheckbox
        label="Checkbox 6"
        v-model="checkedActive6"
        id="checkbox6"/>

    </div>

    <div class="wrap">

        <span class="text">medium чекбокс</span>
        <VueBaseCheckbox
        label="Checkbox 7"
        v-model="checkedActive7"
        id="checkbox7"
        size="medium"/>

    </div>

    <div class="wrap">

        <span class="text">large чекбокс</span>
        <VueBaseCheckbox
        label="Checkbox 8"
        v-model="checkedActive8"
        id="checkbox8"
        size="large"/>

    </div>

    <div class="wrap">

        <span class="text">Группа чек-боксов в горизонтальном расположении: {{ selectedDogs }}</span>
        <VueBaseCheckboxGroup
        name="dogs"
        size="large"
        direcrion="horizontal"
        v-model="selectedDogs"
        :buttons="listOfDogs"
        />

        <span class="text">Группа чек-боксовв в вертикальном (по умолчанию) расположении: {{ selectedCats }}</span>
        <VueBaseCheckboxGroup
        name="cats"
        size="medium"
        v-model="selectedCats"
        :buttons="listOfCats"/>

    </div>

</template>

<script setup>
import VueBaseButton from '@GUI/buttons/VueBaseButton.vue';
import VueBaseInput from '@GUI/input/VueBaseInput.vue'
import VueBaseCheckbox from '@GUI/checkbox/VueBaseCheckbox.vue';
import VueBaseCheckboxGroup from '../components/GUI/checkbox-group/VueBaseCheckboxGroup.vue';

import { ref } from 'vue'

function testClick() {
  console.log('Клик!')
}

const value = ref('')
const value1 = ref('')

const checkedActive1 = ref(true)
const checkedActive2 = ref(true)
const checkedActive3 = ref(false)
const checkedActive4 = ref(true)
const checkedActive5 = ref(false)
const checkedActive6 = ref(true)
const checkedActive7 = ref(true)
const checkedActive8 = ref(false)

const listOfDogs = ref([
  {label: 'Корги', value: 'Corgi', id: '1' , checked: true},
  {label: 'Долматинец', value: 'Dalmatian', id: '2', checked: true },
  {label: 'Боксер', value: 'Boxer', id: '3', checked: false },
  {label: 'Бигль', value: 'Beagle', id: '4', checked: true, disabled: true }
])

const listOfCats = ref([
  {label: 'Maine-Coon', value: 'Maine-Coon', id: '5' , checked: true },
  {label: 'Sphinx', value: 'Sphinx', id: '6', checked: true },
  {label: 'Munchkin', value: 'Munchkin', id: '7', checked: false },
  {label: 'Burma', value: 'Burma', id: '8', checked: true, disabled: true }
])

const selectedDogs = ref([])
const selectedCats = ref([])
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