<template>
  <div class="common">
    <div>
      <h1>МИХАИЛ КОСАРЕВ</h1>
      <h2 v-if="years > 0">frontend-разработчик {{ years }} года, Москва</h2>
      <img
        src="../assets/images/image.png"
        class="common__img"
        data-aos="flip-up"
      />
      <ul>
        <li>
          <a
            href="#about"
            :class="{ active: isActive('about') }"
            >Обо мне</a
          >
        </li>
        <li>
          <a
            href="#skills"
            :class="{ active: isActive('skills') }"
            >Скиллы</a
          >
        </li>
        <li>
          <a
            href="#education"
            :class="{ active: isActive('education') }"
            >Образование</a
          >
        </li>
        <li>
          <a
            href="#experience"
            :class="{ active: isActive('experience') }"
            >Опыт работы</a
          >
        </li>
      </ul>
      <a class="common__resume" href="https://disk.yandex.ru/i/j07Q7keDMcelKw">Резюме.pdf</a>
    </div>
    <div class="common__contacts">
      <a
        href="https://t.me/origiboy"
        target="_blank"
        class="common__contacts-telegram"
        >Telegram: @origiboy</a
      >
      <a
        href="mailto:origiboy@yandex.ru"
        target="_blank"
        class="common__contacts-email"
        >Email: origiboy@yandex.ru</a
      >
      <span class="common__contacts-working-time">Рабочее время</span>
      <span class="common__contacts-working-hours">Пн - Пт, 9:00 - 18:00</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  const about = ref<HTMLElement | null>(null)
  const experienceTop = ref(0)
  const educationTop = ref(0)
  const skillsTop = ref(0)
  const scroll = ref(0)

  const years = ref(0)
  const BIRTHDAY = new Date('2001-06-08')

  const calcDate = (date1: Date, date2: Date) => {
    let years = date1.getFullYear() - date2.getFullYear()
    if (date1.getMonth() < date2.getMonth()) {
      return years - 1
    } else if (date1.getMonth() > date2.getMonth()) {
      return years
    } else {
      if (date1.getDate() >= date2.getDate()) return years
      else return years - 1
    }
  }

  const handleScroll = () => {
    scroll.value = document.documentElement.scrollTop || document.body.scrollTop
  }

  const isActive = (key: string) => {
    let keyActive = 'about'

    if (skillsTop.value - scroll.value - 40 < 0) {
      keyActive = 'skills'
    }

    if (educationTop.value - scroll.value - 40 < 0) {
      keyActive = 'education'
    }

    if (experienceTop.value - scroll.value - 40 < 0) {
      keyActive = 'experience'
    }

    return keyActive === key
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)

    years.value = calcDate(new Date(), BIRTHDAY)

    const experience = document.querySelector('#experience')
    if (experience) experienceTop.value = experience.getBoundingClientRect().top

    const education = document.querySelector('#education')
    if (education) educationTop.value = education.getBoundingClientRect().top

    const skills = document.querySelector('#skills')
    if (skills) skillsTop.value = skills.getBoundingClientRect().top
  })
</script>

<style lang="scss" scoped>
  .common {
    position: sticky;
    top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 231px;
    height: calc(100vh - 80px);
    margin-right: 160px;

    &__resume {
      display: inline-block;
      width: fit-content;
      border: 1px solid $color-white;
      border-radius: 6px;
      padding: 10px 20px;
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      color: $color-white;
      cursor: pointer;
      transition: opacity 0.2s linear;

      &:hover {
        opacity: 0.7;
      }

      @media (max-width: 768px) {
        margin: 20px auto;
      }
    }

    @media (max-width: 1080px) {
      margin-right: 80px;
      min-width: 231px;
      max-width: 231px;
    }

    @media (max-width: 768px) {
      position: static;
      max-width: unset;
      width: 100%;
      margin-right: 0px;
      margin-bottom: 40px;
      height: auto;
      align-items: center;
      text-align: center;
    }

    h1 {
      margin: 0px;
      margin-bottom: 20px;
      color: $color-white;
      font-size: 24px;
      font-weight: 400;
      line-height: 29px;
    }

    h2 {
      margin: 0px;
      margin-bottom: 40px;
      color: $color-white;
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;
    }

    ul {
      margin: 0px;
      padding: 0px;
      list-style: none;
      li {
        margin-bottom: 20px;
      }

      a {
        color: rgba(255, 255, 255, 0.5);
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
        text-decoration: none;
        transition: all 0.2s linear;

        @media (max-width: 1080px) {
          font-size: 16px;
          line-height: 120%;
        }

        &.active {
          color: $color-white;
          @media (max-width: 1080px) {
            font-size: 24px;
            line-height: 120%;
          }

          @media (max-width: 768px) {
            font-size: 16px;
            line-height: 120%;
            color: rgba(255, 255, 255, 0.5);
          }
        }
      }
    }

    &__contacts {
      display: flex;
      flex-direction: column;

      &-telegram {
        display: inline-block;
        margin-bottom: 15px;
        color: $color-white;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        text-decoration: none;
      }

      &-email {
        display: inline-block;
        margin-bottom: 30px;
        color: $color-white;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        text-decoration: none;
      }

      &-working-time {
        display: inline-block;
        margin-bottom: 15px;
        color: $color-white;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        text-decoration: none;
      }

      &-working-hours {
        display: inline-block;
        color: rgba(255, 255, 255, 0.5);
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        text-decoration: none;
      }
    }

    &__img {
      margin-bottom: 40px;
      border-radius: 75px;
    }
  }
</style>
