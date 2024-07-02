<template>
    <div class="experience" id="experience">
        <div class="experience__content">
            <h2>Опыт работы</h2>
            <div class="experience__timeline">
                <div class="experience__line">
                    <span class="experience__line-pointer"></span>
                    <span class="experience__line-circle" :style="{ top: circle_1_top + 'px' }"></span>
                    <span class="experience__line-circle" :style="{ top: circle_2_top + 'px' }"></span>
                    <span class="experience__line-circle" :style="{ top: circle_3_top + 'px' }"></span>
                </div>
                <div class="experience__places" ref="date_parent">
                    <div class="experience__places-group">
                        <span class="experience__places-date date-1" ref="date_1" data-aos="fade-up">ноябрь 2019</span>
                        <div class="experience__places-block" data-aos="fade-up">
                            <h3>Проектная деятельность</h3>
                            <p>
                                Разрабтаывал вёрстку по макетам figma, full stack веб-сервисы для отслеживания и учёта
                                данных с использованием баз данных
                            </p>
                            <span>ноябрь 2019 - март 2021</span>
                        </div>
                        <span class="experience__places-date date-2" ref="date_2" data-aos="fade-up">март 2021</span>
                    </div>
                    <div class="experience__places-group">
                        <div class="experience__places-block" data-aos="fade-up">
                            <h3>Skillbox</h3>
                            <p><strong>Должность:</strong> Code reviewer/Frontend разработчик</p>
                            <p>
                                Разрабатывал учебные интерфейсы на стеке Vue/React.<br>Проверял выполненные домашние задания студентов в рамках курсов Веб-верстка, javascript, vue.js.
                            </p>
                            <span>март 2021 - март 2023</span>
                        </div>
                        <span class="experience__places-date date-3" ref="date_3" data-aos="fade-up">март 2023</span>
                    </div>
                    <div class="experience__places-group">
                        <div class="experience__places-block" data-aos="fade-up">
                            <h3>Северсталь-инфоком (FUN&SUN)</h3>
                            <p><strong>Должность:</strong> Frontend разработчик</p>
                            <p>
                                <ul>
                                    <li>- Разработка и поддержка b2b и b2c продуктов с использованием Vue.js (преимущественно) и React.</li>
                                    <li>- Создание интерактивных пользовательских интерфейсов, разработка прикладных npm пакетов.</li>
                                    <li>- Интеграция с RESTful API для получения и отправки данных, работа с внешними сервисами и библиотеками, работа со сторонними API (в том числе оплата).</li>
                                    <li>- Оптимизация производительности фронтенд-части приложений, улучшение времени загрузки и отклика.</li>
                                    <li>- Разделение frontend на микросервисы.</li>
                                    <li>- Взаимодействие с командой аналитиков и бэкенд-разработчиков для координации совместной работы и достижения поставленных целей.</li>
                                    <li>- Поддержка и обновление существующего кода, исправление багов и внедрение новых функций на основе отзывов пользователей и требований бизнеса.</li>
                                    <li>- Разработка сложных внутренних решений (например, реализовал компонент отображения отелей на карте с помощью API Яндекс Карты v3).</li>
                                    <li>- Миграция части сервисов с Vue 2 на Vue 3.</li>
                                </ul>
                            </p>
                            <span>Должность: Frontend разработчик</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const date_parent = ref<HTMLElement | null>(null)
const date_1 = ref<HTMLElement | null>(null)
const date_2 = ref<HTMLElement | null>(null)
const date_3 = ref<HTMLElement | null>(null)

const circle_1_top = ref(0)
const circle_2_top = ref(0)
const circle_3_top = ref(0)
onMounted(() => {
    if (date_parent.value) {
        if (date_1.value) {
            const top = date_1.value.getBoundingClientRect().top - date_parent.value.getBoundingClientRect().top - 115
            circle_1_top.value = top
        }

        if (date_2.value) {
            const top = date_2.value.getBoundingClientRect().top - date_parent.value.getBoundingClientRect().top - 115
            circle_2_top.value = top
        }

        if (date_3.value) {
            const top = date_3.value.getBoundingClientRect().top - date_parent.value.getBoundingClientRect().top - 115
            circle_3_top.value = top
        }
    }
})
</script>

<style lang="scss" scoped>
.experience {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 40px;
    border-radius: 20px;
    background-color: $body-white;

    @media (max-width: 980px) {
        padding: 20px;
    }

    &__timeline {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 0px 120px;

        @media (max-width: 980px) {
            padding: 0px 10px;
        }
    }

    &__line {
        position: relative;
        display: flex;
        justify-content: center;
        width: 60px;
        margin-right: 40px;

        &-pointer {
            position: relative;
            border: 4px solid rgb(106, 150, 212);

            &:after {
                content: '';
                position: absolute;
                bottom: -20px;
                left: -24px;
                width: 48px;
                height: 48px;
                background-image: url('../assets/images/arrow_down.svg');
                background-size: 100%;
                background-repeat: no-repeat;
                background-position: center;
            }
        }

        &-circle {
            position: absolute;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: rgb(106, 150, 212);
        }
    }

    &__places {
        position: relative;
        padding: 15px 0px;

        @media (max-width: 768px) {
            flex-grow: 1;
        }

        &-group {
            &:not(:last-child) {
                margin-bottom: 80px;

                @media (max-width: 768px) {
                    margin-bottom: 30px;
                }
            }
        }

        &-block {
            max-width: 400px;
            width: 100%;
            padding: 20px;
            margin-bottom: 80px;
            border: 4px solid $body-green;
            border-radius: 20px;

            @media (max-width: 768px) {
                margin-bottom: 30px;
            }

            h3 {
                color: $color-black;
                font-size: 20px;
                font-weight: 700;
                line-height: 24px;
                text-decoration-line: underline;
            }

            p {
                color: $color-black;
                font-size: 16px;
                font-weight: 500;
                line-height: 150%;
            }

            span {
                color: $color-black;
                font-size: 12px;
                font-weight: 600;
                line-height: 15px;
            }

            ul {
                list-style: none;
                padding-left: 0px;
            }

            li {
                display: inline-block;
                margin-bottom: 10px;
                color: $color-black;
                font-size: 16px;
                font-weight: 500;
                line-height: 150%;
            }
        }

        &-date {
            display: inline-block;
            color: $color-black;
            font-size: 24px;
            font-weight: 600;
            line-height: 29px;

            &:not(:last-child) {
                margin-bottom: 80px;

                @media (max-width: 768px) {
                    margin-bottom: 30px;
                }
            }
        }
    }

    h2 {
        margin-bottom: 40px;
        color: $color-black;
        font-size: 32px;
        font-weight: 700;
        line-height: 39px;
    }
}
</style>
