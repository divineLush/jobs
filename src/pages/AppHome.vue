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
                label(for="locations") Locations
                input.app-home__form__input(
                    v-model="form.locations"
                    type="text"
                    id="locations"
                    name="locations"
                )

            div
                //- label(for="full_time") Full Time
                //- input.app-home__form__input(
                //-     v-model="form.fullTime"
                //-     type="checkbox"
                //-     id="full_time"
                //-     name="full_time"
                //- )

                label.app-home__form__checkbox-container
                    span.app-home__form__checkbox-container__label Full Time
                    input.app-home__form__checkbox-container__checkbox(
                        type="checkbox"
                        v-model.lazy="form.fullTime"
                    )
                    span.app-home__form__checkbox-container__checkmark
</template>

<script>
export default {
    name: 'AppHome',

    data() {
        return {
            form: {
                description: '',
                locations: '',
                fullTime: false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/colors.scss';

    .app-home {
        &__form {
            width: 30vh;
            margin: 0 auto;

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
    }
</style>
