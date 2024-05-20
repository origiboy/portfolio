<template>
    <div :class="skill.color + ' ' + skill.col" class="skill" data-aos="flip-up">
        <div v-for="(point, id) in skill.data" :key="id" class="skill__point">
            <span class="skill__point-header">{{ point.header }}</span>

            <div v-for="(text, id) in point.skills" :key="id" class="skill__point-text">
                {{ text }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface SkillDataInterface {
    header: String
    skills: Array<String>
}

interface SkillInterface {
    color: String
    col: String
    data: Array<SkillDataInterface>
}

defineProps<{ skill: SkillInterface }>()

</script>

<style lang="scss" scoped>
.skill {
    display: flex;
    flex-direction: column;
    padding: 30px;
    border: 5px solid;
    border-radius: 20px;
    background: $body-white;

    &.one {
        grid-column: span 1;
    }

    &.two {
        grid-column: span 2;
    }

    &.three {
        grid-column: span 3;
    }

    &.four {
        grid-column: span 4;
    }

    &.five {
        grid-column: span 5;
    }

    &.six {
        grid-column: span 6;
    }

    &.one, &.two, &.three, &.four, &.five, &.six {
        @media (max-width: 1280px) {
            grid-column: span 3;
        }

        @media (max-width: 980px) {
            grid-column: span 6;
        }
    }

    &__point {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        &:not(:last-child) {
            margin-bottom: 20px;
        }

        &-header {
            display: inline-block;
            padding: 5px 7px;
            margin-bottom: 20px;
            width: fit-content;
            border-radius: 6px;
            color: $body-white;
            font-size: 18px;
            font-weight: 400;
            line-height: 22px;
        }

        &-text {
            display: inline-block;
            margin-bottom: 5px;
            padding-left: 5px;
            color: $color-black;
            font-size: 16px;
            font-weight: 600;
            line-height: 20px;
        }
    }
}

.blue {
    border-color: $body-blue;
    
    .skill__point-header {
        background: $body-blue;
    }
}

.green {
    border-color: $body-green;

    .skill__point-header {
        background: $body-green;
    }
}
</style>
