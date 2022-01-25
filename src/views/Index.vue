<template lang="pug">
	//- p Главная страница! //- подумать про название - div.index__title-slogan-cont 
	.index
		.index__wrapper
			.index__line-wrapper.index__line-wrapper_top
				.index__line.index__line_top
			.index__title
				div.index__title-slogan-wrapper(v-for="item, index in title" :key="item.id")
					transition(appear :duration="200 * index" name='title' tag='h1')
						h1(:class="item.class") {{ item.text }}
			.index__line-wrapper
				.index__line.index__line_center
			.index__begin
				p.index__begin-desc
					| У мужчин есть две глобальные стратегии на пути к исполнению желаний.
					| Первая: поставить цель и добиваться ее всеми возможными способами.
					| Вторая: никуда не спешить и наслаждаться каждым моментом в жизни.
					| Ответьте на несколько вопросов, чтобы понять, какая из этих дорог ваша — 
					| в бизнесе, сексе, спорте, отдыхе и здоровье
				span.index__btn(@click="goToQuestionsPage") Начать
					img.index__btn-arrow(src='/icons/svg/arrow-right.svg' alt="arrow-right")
</template>

<script>
export default {
	data: () => ({
		title: [
			{	
				id: 'slogan-0',
				text: 'Новая',
				class: 'index__title-slogan',
			},
			{	
				id: 'slogan-1',
				text: 'мужественность:',
				class: 'index__title-slogan',
			},
			{	
				id: 'question-0',
				text: 'как ',
				class: 'index__title-question',
			},
			{	
				id: 'question-1',
				text: `брать`,
				class: 'index__title-question index__title-question_grow',
			},
			{	
				id: 'question-2',
				text: 'от ',
				class: 'index__title-question ',
			},
			{	
				id: 'question-3',
				text: 'жизни ',
				class: 'index__title-question',
			},
			{	
				id: 'question-4',
				text: 'свое',
				class: 'index__title-question',
			},
			{	
				id: 'question-5',
				text: '?',
				class: 'index__title-question',
			}
		]
	}),
	methods: {
		goToQuestionsPage() {
			this.sendData('nachat')
			this.$router.push({ path: '/questions' })
		},
		sendData(payload) {
			this.$root.sendGA("internal", "click", payload)
		}
	},

}
</script>