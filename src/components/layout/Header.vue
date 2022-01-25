<template lang="pug">
	header.header
		.header__wrapper
			.header__inner
				a(href="https://gra-via.com/" target="_blank" @click="sendData('logo_gravia')")
					img.header__logo-icon.header__logo-icon_gravia( src='/icons/svg/logo1.svg', alt='logo1')
				span.header__tag(	:class='{"header__tag_index": (indexPage === 1) }' 	) 
					| СПЕЦПРОЕКТ
				a(href="https://www.championat.com/" target="_blank" @click="sendData('logo_chempionat')")
					img.header__logo-icon(src='/icons/svg/logo2.svg', alt='logo2')
</template>

<script>
export default {
	props: {
		indexPage: {
			type: Number,
			require: false,
			default: 0
		}
	},

	methods: {
		sendData(payload) {
			this.$root.sendGA("internal", "click", payload)
		}
	}

	
}


</script>
