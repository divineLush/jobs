<template lang="pug">
  div#app
    AppHeader
    router-view
</template>

<script>
import AppHeader from '../src/components/AppHeader.vue'

export default {
  name: 'app',

  components: { AppHeader }
}
</script>
