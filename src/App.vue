<template lang="pug">
  div#app
    AppHeader
    main
      router-view
</template>

<script>
import AppHeader from '../src/components/AppHeader.vue'

export default {
  name: 'app',

  components: { AppHeader }
}
</script>

<style lang="scss">
  @import './assets/scss/colors.scss';

  body {
    background-color: $main-background-color;
    color: $main-color;
    font-family: monospace;
    font-size: 3vh;

    .link {
      color: $secondary-background-color;

      &:hover {
        color: $secondary-color;
      }
    }
  }
</style>
