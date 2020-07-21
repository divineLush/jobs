<template lang="pug">
    div.app-job
        router-link.link(to="/") Home
        p(v-if="isLoading") Loading...
        AppResult(:result="job" :isFull="true")
</template>

<script>
import { jobURL } from '../assets/utils'
import AppResult from '../components/AppResult.vue'

export default {
    name: 'AppJob',

    components: { AppResult },

    data() {
        return {
            job: {},
            isLoading: false
        }
    },

    computed: {
        id() {
            return this.$route.params.id
        }
    },

    mounted() {
        this.isLoading = true
        fetch(`${ jobURL }${ this.id }.json`)
            .then(res => res.json())
            .then(res => {
                this.job = res
                this.isLoading = false
            })
    }
}
</script>

<style lang="scss" scoped>
    .app-job {
        text-align: center;
        margin: 0 auto;
    }
</style>
