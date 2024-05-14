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
@import url('~/assets/style/main.scss');

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
