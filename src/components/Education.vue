<template>
    <div class="education" id="education">
        <div class="education__content" data-aos="flip-up">
            <h2>Образование</h2>
            <h3>Высшее образование (бакалавриат)<br />2019 - 2023</h3>
            <p>
                Московский авиационный институт (национальный исследовательский университет).<br>Институт № 7
                «Робототехнические и интеллектуальные системы»
            </p>
            <p>Инженер-программист по специальности “Системный анализ и управление”.</p>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.education {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 40px;
    margin-bottom: 40px;
    border-radius: 20px;
    background-image: url(../assets/images/education-1.png);
    background-size: 320px;
    background-repeat: no-repeat;
    background-position: center right 40px;
    background-color: $body-black;

    @media (max-width: 980px) {
        padding-bottom: 200px;
        background-size: 320px;
        background-position: bottom 40px left 40px;
    }

    &__content {
        max-width: 420px;
    }

    h2 {
        margin-bottom: 20px;
        color: $color-white;
        font-size: 32px;
        font-weight: 700;
        line-height: 39px;
    }

    h3 {
        margin-bottom: 20px;
        color: $color-white;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        text-decoration-line: underline;
    }

    p {
        color: $color-white;
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
    }
}
</style>
