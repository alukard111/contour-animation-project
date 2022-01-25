<template lang="pug">
	footer.footer
		.footer__wrapper
			p.footer__copyright 
				|Проект подготовлен при поддержке компании Viatris. <br/>
				|	ООО «Пфайзер»*, 123112, г. Москва, Пресненская наб., 10, 22-й этаж, БЦ «Башня на Набережной» (Блок С), тел. +7 (495) 287-50-00, факс +7 (495) 287-53-00 PP-MHP-RUS-0125, 20.11.2020 <br/> 
				|*Юридическое лицо ООО «Пфайзер» входит в группу компаний Viatris
			span.footer__share
				Share(v-if="showShare" @share="hiddenShare($event)" :services="services" :title="title" :description="description" )
				img.footer__heart-icon(@click="toggleShowShare" src='/icons/svg/heart.svg', alt='heart')
</template>


<script>
import Share from '@/components/Share.vue'

export default {
	components: {
		Share
	}, 

	data: () => ({
		showShare: false,
		title: 'Брать от жизни все или плыть по течению?',
		description: 'Пройди этот тест и узнай, в чем твой фокус',
		services: [
			'facebook',
			'twitter',
			'vkontakte',
			'telegram'
		],

		
	}),
	methods: {
		toggleShowShare() {
			this.sendData('obshhij_share')
			this.showShare = !this.showShare
		},
		hiddenShare(event) {
			this.sendData(`obshhij_share_${event}`)
			this.showShare = false
		},
		sendData(payload) {
			this.$root.sendGA('external', "click", payload)
		}
	}
}
</script>