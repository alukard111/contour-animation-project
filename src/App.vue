<template lang="pug">
	main.main
		<Header :page="key" :indexPage="$route.meta.key" />
		.main__content
			<transition name="fade" mode="out-in">
				<router-view :key="key"></router-view>
			</transition>
		<Footer :page="key" />
</template>

<script>
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import { on_load_mixin } from "./system/statistics";

export default {
	mixins: [
		on_load_mixin,
	],
	components: {
		Header,
		Footer,
	},
	computed: {
		key() {
			return this.$route.meta.key !== undefined 
				? this.$route.meta.key : this.$route;
		},
	},
};
</script>

<style lang="stylus">
.main
	pos relative
</style>
