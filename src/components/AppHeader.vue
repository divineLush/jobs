<template lang="pug">
    header.app-header
        span GitHub Jobs
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/colors.scss';

    .app-header {
        color: $header-color;
        text-align: center;
        font-weight: bold;
        font-size: 5vh;
        margin: 3vh 0;
    }
</style>
