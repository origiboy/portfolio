<template>
    <div class="about" id="about">
        <h2>Обо мне</h2>
        <img src="~/assets/images/hero-1.png" class="img-1" data-aos="flip-up" />
        <div class="about__text" data-aos="flip-up">
            <h3>Привет, меня зовут Михаил!</h3>
            <h3>
                Я 3 года занимаюсь разработкой сайтов, созданием SPA приложений, а также написанием скриптов на языке
                Javascript.
            </h3>
        </div>
        <img src="~/assets/images/hero-2.png" class="img-2" data-aos="flip-up" />
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
