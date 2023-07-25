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
</template>

<script setup>
import VueBaseButton from '../components/GUI/buttons/VueBaseButton.vue';

function testClick() {
    console.log('Клик!')
}
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
</style>