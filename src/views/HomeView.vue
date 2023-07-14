<template>

    <div class="btns-wrapper">
<!-- базовый интуп -->
        <VueBaseButton
        class="btn"/> 
<!-- модификация базового инпута -->
        <VueBaseButton
        borderStyle="2px dashed #EB5757"
        backgroundHover="#baf5ee"
        class="btn btn_size"/>
    </div>
    
    <div class="btns-wrapper">
<!-- базовый черно-красный инпут -->
        <VueBaseButton
        class="btn"
        blackAndRedStyle
        title="Add to bag"/>
<!-- модификация черно-красного инпута -->
        <VueBaseButton
        borderHover="2px solid #000000"
        backgroundColor="#fcbbe1"
        colorText="#000000"
        backgroundHover="#c4bbfc"
        class="btn"
        blackAndRedStyle
        title="Add to bag"/>
    </div>
    
    <div class="btns-wrapper">
<!-- базовый белый инпут -->
        <VueBaseButton
        leftIcon
        iconUrl="src/components/icons/Heart.svg"
        class="btn btn-wrap"
        whiteStyle
        title="Save"
        @click="testClick"/>
<!-- модификация белого инпута -->
        <VueBaseButton
        rightIcon
        iconUrl="src/components/icons/Heart.svg"
        marginForIcon="10"
        class="btn btn-wrap"
        whiteStyle
        title="Save"
        @click="testClick"/>

    </div>
        
</template>

<script setup>
import VueBaseButton from '../components/VueBaseButton.vue'

function testClick () {
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
</style>