<script setup>
import CommonInfo from './components/CommonInfo.vue'
import AboutMe from './components/AboutMe.vue'
import Skills from './components/Skills.vue'
import Education from './components/Education.vue'
import WorkExperience from './components/WorkExperience.vue'
</script>

<template>
	<div class="container">
		<div class="main">
			<CommonInfo />
			<div class="content-part">
				<AboutMe />
				<Skills />
				<Education />
				<WorkExperience />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import url('./assets/style/main.scss');

.main {
	justify-content: space-between;
}

.content-part {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

</style>
