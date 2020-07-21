<template lang="pug">
    div.app-home
        form.app-home__form
            div
                label(for="description") Description
                input.app-home__form__input(
                    v-model="form.description"
                    type="text"
                    id="description"
                    name="description"
                )

            div
                label(for="location") Location
                input.app-home__form__input(
                    v-model="form.location"
                    type="text"
                    id="location"
                    name="location"
                )

            div
                label.app-home__form__checkbox-container
                    span.app-home__form__checkbox-container__label Full Time
                    input.app-home__form__checkbox-container__checkbox(
                        type="checkbox"
                        v-model.lazy="form.fullTime"
                    )
                    span.app-home__form__checkbox-container__checkmark

            button.app-home__form__btn(@click="makeRequest") Submit

        AppMessage(:show="isLoading" :isLoading="true")
        AppMessage(:show="isError" :isLoading="false")

        div.app-home__results-container
            template(v-for="(result, key) in results")
                AppResult(:result="result" :isFull="false")
</template>

<script>
import { url } from '../assets/utils'
import AppResult from '../components/AppResult.vue'
import AppMessage from '../components/AppMessage.vue'

export default {
    name: 'AppHome',

    components: {
        AppResult,
        AppMessage
    },

    data() {
        return {
            form: {
                description: '',
                location: '',
                fullTime: false
            },
            results: [],
            isLoading: false,
            isError: false
        }
    },

    methods: {
        makeRequest() {
            this.isError = false
            this.isLoading = true
            fetch(this.makeURL())
                .then(res => res.json())
                .then(res => {
                    this.results = res
                    this.isLoading = false
                })
                .catch(error => {
                    this.isLoading = false
                    this.isError = true
                })
        },
        makeURL() {
            const isFullTime = `?full_time=${ this.form.fullTime }`
            const makeParam = (key) => {
                const value = this.form[key]
                const param = `&${ key }=${ value.split().join('+') }`

                return value !== '' ? param : ''
            }
            const description = makeParam('description')
            const location = makeParam('location')

            return `${ url }${ isFullTime }${ description }${ location }`
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/colors.scss';

    .app-home {
        &__form {
            width: 30vh;
            margin: 0 auto 25vh;

            &__input {
                background-color: $secondary-background-color;
                color: $main-background-color;
                outline-color: $secondary-color;
                border: none;
                margin: 1.5vh 0 4vh;
                padding: 1vh 2vh;
                height: 3.5vh;
                font-size: 2.5vh;
                font-family: monospace;
            }

            &__btn {
                background-color: $main-color;
                font-family: monospace;
                height: 5vh;
                width: 20vh;
                font-size: 3vh;
                position: absolute;
                top: 55vh;
            }

            &__checkbox-container {
                display: block;
                position: relative;
                padding-left: 6vh;
                margin-bottom: 12px;
                cursor: pointer;
                font-size: 22px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;

                &__label {
                    font-size: 3vh;
                    position: absolute;
                    right: 6vh;
                    top: 1.1vh;
                }

                &__checkbox {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0;
                }

                &__checkmark {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 6.5vh;
                    width: 6.5vh;
                    background-color: #eee;
                    &:after {
                        content: "";
                        position: absolute;
                        display: none;
                    }
                }

                &:hover &__checkbox ~ &__checkmark {
                    background-color: $main-color;
                }

                & &__checkbox ~ &__checkmark {
                    background-color: $secondary-background-color;
                }

                & &__checkbox:checked ~ &__checkmark:after {
                    display: block;
                }

                & &__checkmark:after {
                    left: 2.6vh;
                    top: 1.5vh;
                    width: 1vh;
                    height: 2vh;
                    border: solid $main-background-color;
                    border-width: 0 0.5vh 0.5vh 0;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                }
            }
        }

        &__results-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
