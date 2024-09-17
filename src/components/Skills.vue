<template>
    <div class="skills" id="skills">
        <h2>Скиллы</h2>
        <div class="skills__list">
            <SkillsSkill v-for="(skill, id) in skills" :skill="skill" :key="id" />
        </div>
    </div>
</template>

<script setup lang="ts">
import SkillsSkill from './skills/Skill.vue'
import { ref } from 'vue'

const skills = ref([
    {
        color: 'green',
        col: 'three',
        data: [
            {
                header: 'HTML',
                skills: ['HTML5', 'БЭМ', 'Семантическая разметка', 'SEO'],
            },
            {
                header: 'CSS',
                skills: ['SCSS', 'БЭМ', 'Семантическая разметка', 'SEO'],
            },
        ],
    },
    {
        color: 'blue',
        col: 'three',
        data: [
            {
                header: 'JavaScript',
                skills: ['ES5+', 'const / let', 'DOM', 'Модули', 'Fetch API / Axios', 'Async / await, promise', 'ООП'],
            },
        ],
    },
    {
        color: 'blue',
        col: 'two',
        data: [
            {
                header: 'Vue',
                skills: ['Vue 2/3', 'Vuex', 'Vue Router', 'Vuetify', 'Axios'],
            },
        ],
    },
    {
        color: 'blue',
        col: 'two',
        data: [
            {
                header: 'React',
                skills: ['React Router', 'Redux', 'Redux Toolkit', 'Mobx', 'Formik', 'React Native'],
            },
        ],
    },
    {
        color: 'blue',
        col: 'two',
        data: [
            {
                header: 'TypeScript',
                skills: ['Object Types', 'Enums', 'Кортежи', 'Дженерики'],
            },
        ],
    },
    {
        color: 'green',
        col: 'two',
        data: [
            {
                header: 'Тестирование',
                skills: ['Jest', 'Cypress', 'vitest']
            },
        ],
    },
    {
        color: 'green',
        col: 'two',
        data: [
            {
                header: 'Backend',
                skills: ['node.js', 'express.js', 'PHP', 'Laravel']
            },
        ],
    },
    {
        color: 'green',
        col: 'two',
        data: [
            {
                header: 'Терминал / Git',
                skills: ['npm', 'GitHub', 'GitLab', 'CI/CD', 'GitHub Actions']
            },
        ],
    },
    {
        color: 'green',
        col: 'three',
        data: [
            {
                header: 'Сборки',
                skills: ['Gulp', 'Webpack 4/5', 'Vite', 'Parcel', 'Prettier', 'ESLint'],
            },
        ],
    },
    {
        color: 'blue',
        col: 'three',
        data: [
            {
                header: 'Инструменты',
                skills: ['Notion 💚', 'StoryBook', 'docker', 'Figma', 'DevTools', 'Browsersync', 'Jira', 'Toggl Track'],
            },
        ],
    },
])
</script>

<style lang="scss" scoped>
.skills {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    margin-bottom: 40px;

    @media (max-width: 768px) {
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

    &__list {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 30px;
        width: 100%;

        @media (max-width: 1280px) {
            gap: 10px;
        }
    }
}
</style>
