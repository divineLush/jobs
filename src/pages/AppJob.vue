<template lang="pug">
    div.app-job
        router-link.link(to="/") Home
        AppMessage(:show="isLoading" :isLoading="true")
        AppResult(:result="job" :isFull="true")
</template>

<script>
import axios from 'axios'
import { jobURL } from '../assets/utils'
import AppResult from '../components/AppResult.vue'
import AppMessage from '../components/AppMessage.vue'

export default {
    name: 'AppJob',

    components: {
        AppResult,
        AppMessage
    },

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
        axios
            .get(`${ jobURL }${ this.id }.json`)
            .then(res => {
                this.job = res.data
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
