<template>
    <div
    :class="[{'button-outer-wrapper_size': blackAndRedStyle},
        {'button-outer-wrapper_size': whiteStyle},
        'button-outer-wrapper']">

        <button
        :class="[{
            'button-form_color-black': blackAndRedStyle,
            'button-form_color-white': whiteStyle
        }, 'button-form']"
        :style="{
             'background-color': backgroundColor,
             'color': colorText,
             'border': borderStyle
            }"
        @mouseenter="mouseHoverOn"
        @mouseleave="mouseHoveOff">

        <img
        class="icon_after"
        :style="{
            'margin-right': marginForIcon + 'px'}"
        v-if="leftIcon"
        :src="(`${iconUrl}`)"
        :width="widthIcon"
        :height="heightIcon"/>
        
        {{ title }}

        <img
        class="icon_before"
        :style="{'margin-left': marginForIcon + 'px'}"
        v-if="rightIcon"
        :src="(`${iconUrl}`)"
        :width="widthIcon"
        :height="heightIcon"/>

        </button>

    </div>
</template>

<script setup>

const props = defineProps({

    title: {
        type: String,
        default: 'Submit'
    },

    type: {
        type: String,
        default: ''
    },

    form: {
        type: String,
        default: ''
    },

    blackAndRedStyle: {
        type: Boolean,
        default: false
    },

    whiteStyle: {
        type: Boolean,
        default: false
    },

    iconUrl: {
        type: String,
        default: ''
    },

    widthIcon: {
        type: [Number, String],
        default: 17
    },

    heightIcon: {
        type: [Number, String],
        default: 16
    },

    leftIcon: {
        type: Boolean,
        default: false
    },

    rightIcon: {
        type: Boolean,
        default: false
    },

    marginForIcon: {
        type: [Number, String],
        default: 4
    },

    backgroundColor: {
        type: String,
        default: ''
    },

    colorText: {
        type: String,
        default: ''
    },

    borderStyle: {
        type: String,
        default: ''
    },

    backgroundHover: {
        type: String,
        default: ''
    },

    borderHover: {
        type: String,
        default: ''
    }

})

function mouseHoverOn(event) {
  let target = event.target

  if(props.backgroundHover) {
    target.style.backgroundColor = `${props.backgroundHover}`
  }
  if(props.borderHover) {
    target.style.border = `${props.borderHover}`
  }
}

function mouseHoveOff(event) {
  let target = event.target

  if(props.backgroundHover) {
    target.style.backgroundColor = `${props.backgroundColor}`
  }
  if(props.borderHover) {
    target.style.border = `${props.borderStyle}`
  }
}
</script>

<style scoped>
.button-outer-wrapper {
    min-width: 114px;
    height: 40px;
}

.button-form {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    white-space: nowrap;
    width: 100%;
    height: 100%;
    font-family: Oswald;
    font-size: 15px;
    line-height: 20.75px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: inherit;
    color: #828282;
    background-color: #F0F2F2;
    border: 2px solid #C4C4C4;
}

.button-form_color-black {
    color: #FFFFFF;
    background-color: #000000;
    border: none; 
}

.button-outer-wrapper_size {
    min-width: 150px;
    height: 50px;
}

.button-form_color-black:hover {
    background-color: #EB5757;
}

.button-form_color-white {
    color: #3F3F3F;
    background-color: #FFFFFF;
    border: 2px solid #C4C4C4; 
}

.button-form_color-white:hover {
    border: 2px solid #828282;
}

.button-form:hover {
    border-color: #828282;
}

</style>
