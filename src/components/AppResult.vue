<template lang="pug">
    div.result-container
        template(v-if="isFull")
            p {{ result.title }}
            img.result-container__logo(:src="result.company_logo")
            a(:href="result.company_url")
            p {{ result.location }}
            p {{ result.type  }}
            p {{ result.company }}
            p {{ result.created_at }}
            div(v-html="result.description")
            div(v-html="result.how_to_apply")
            a(:href="result.url")
        template(v-else)
            router-link.link(:to="`/job/${ result.id }`") {{ result.title }}
            p {{ result.location }}
            p {{ result.type  }}
            p {{ result.company }}
            p {{ result.created_at }}
</template>

<script>
export default {
    name: 'AppResult',

    props: ['result', 'isFull']
}
</script>

<style lang="scss" scoped>
    .result-container {
        margin: 8vh auto;
        text-align: center;
        max-width: 30vw;

        &__logo {
            max-width: 30vh;
        }
    }
</style>
