<template lang="pug">
    p.app-message(v-if="show" :class="messageClass")
        template(v-if="isLoading") Loading...
        template(v-else) You seem to have made too many requests...
</template>

<script>
export default {
    name: 'AppMessage',

    props: ['show', 'isLoading'],

    computed: {
        messageClass() {
            return {
                'app-message--loading': this.isLoading,
                'app-message--error': !this.isLoading
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/colors.scss';

    .app-message {
        text-align: center;
        font-weight: bold;

        &--loading {
            color: $secondary-color;
        }

        &--error {
            color: $header-color;
        }
    }
</style>
