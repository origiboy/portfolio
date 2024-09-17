<template>
    <div class="about" id="about">
        <h2>Обо мне</h2>
        <img src="../assets/images/hero-1.png" class="img-1" data-aos="flip-up" />
        <div class="about__text" data-aos="flip-up">
            <h3>
                Меня зовут Косарев Михаил, я Frontend-разработчик с опытом работы более четырёх лет. Основной мой стек — это Vue.js/React + TS, на которым я создавал и поддерживал B2B и B2C приложения. Моя работа включала в себя интеграцию с RESTful API, создание интерактивных интерфейсов, а также оптимизацию производительности и миграцию проектов с Vue 2 на Vue 3. Я окончил Московский авиационный институт по специальности системный анализ и управление. В свободное время я занимаюсь разработкой прикладных pet проектов, и всегда открыт для новых предложений как на полную занятость, так и на проектную работу.
            </h3>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.about {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    max-width: 500px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        max-width: unset;
        width: 100%;
        align-items: flex-start;
    }

    h2 {
        margin-bottom: 60px;
        color: $color-white;
        font-size: 32px;
        font-weight: 700;
        line-height: 39px;
        text-align: end;
    }

    img {
        width: 100%;
        border-radius: 20px;
        object-fit: cover;

        &:not(:last-child) {
            margin-bottom: 60px;
        }

        &.img-1 {
            min-height: 275px;
        }

        &.img-2 {
            min-height: 585px;
        }
    }

    &__text {
        margin-bottom: 60px;

        h3 {
            color: $color-white;
            font-size: 20px;
            font-weight: 400;
            line-height: 150%;

            &:not(:last-child) {
                margin-bottom: 30px;
            }
        }
    }
}
</style>
