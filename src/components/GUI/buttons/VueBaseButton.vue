<template>
    <div :class="[{ 'button-wrapper_size_small_width': rightIcon || leftIcon },
        'button-wrapper',
        buttonSize]">

        <button :class="['button-form', buttonStyle]">

            <img class="icon" v-if="leftIcon" :src="(`${iconUrl}`)">

            <span v-if="buttonTitle" :class="[{ 'button-text_margin': rightIcon || leftIcon }]">{{ buttonTitle }}</span>

            <img class="icon" v-if="rightIcon" :src="(`${iconUrl}`)">

        </button>

    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Submit'
    },

    type: {
        type: String,
        default: 'button'
    },

    form: {
        type: String,
        default: ''
    },

    size: {
        validator(value) {
            return ['small', 'medium', 'large'].includes(value)
        },
        default: 'medium'
    },

    appearance: {
        validator(value) {
            return ['editing', 'primary', 'main-black', 'main-white', 'transparent', 'transparent-white'].includes(value)
        },
        default: 'primary'
    },

    leftIcon: {
        type: Boolean,
        default: false
    },

    rightIcon: {
        type: Boolean,
        default: false
    },

    iconUrl: {
        type: String,
        default: ''
    }
})

const buttonStyle = ref(`button_size_${props.appearance}`)
const buttonSize = ref(`button-wrapper_size_${props.size}`)

const buttonTitle = computed(() => {
    return (props.size === 'small' && props.title === 'Submit') ? 'Edit' : props.title
})

</script>

<style scoped lang="scss">
@import "src/assets/mixins.scss";
@import "src/assets/variables.scss";

.button-form {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    white-space: nowrap;
    width: 100%;
    height: 100%;
    font-family: $basic-font;
    font-size: 14px;
    line-height: 20.75px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}

.button-text_margin {
    margin: 0 7px;
}

.button_size {
    &_transparent {
        @include base-style($basic-black, $transparent-color, 2px solid $basic-black);
        @include transparent-style;

        &-white {
            @include base-style($basic-white, $transparent-color, 2px solid $basic-white);
            @include transparent-style;
        }
    }

    &_editing {
        @include base-style($basic-black, $light-blue, none);
        font-family: $secondary-font;
        line-height: 20px;
        text-transform: none;
    }

    &_editing:hover {
        background-color: $dark-blue;
    }

    &_primary {
        @include base-style($plain-grey, $light-grey, 2px solid $basic-grey);
    }

    &_primary:hover {
        border-color: $plain-grey;
    }

    &_main-black {
        @include base-style($basic-white, $basic-black, none);
    }

    &_main-black:hover {
        background-color: $basic-red;
    }

    &_main-white {
        @include base-style($dark-grey, $basic-white, 2px solid $basic-grey);
    }

    &_main-white:hover {
        border: 2px solid $plain-grey;
    }
}

.button-wrapper_size {
    &_small {
        height: 24px;

        &_width {
            width: 24px;
        }
    }

    &_medium {
        width: 120px;
        height: 40px;
    }

    &_large {
        width: 170px;
        height: 55px;
    }
}

.icon {
    margin-bottom: 2px;
}
</style>