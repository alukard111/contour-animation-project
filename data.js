const data = {
	title: 'Новая мужественность',
	url: 'http://localhost',
	statistics: {
		YM_ID: 12345678,
		GA_ID: 'UA-00000000-00',
		RMBT_ID: 12345678,
		PAGE_LOAD_EVENT: false
	},
	share: {
		default_img: '/share.png', // png
		title: 'Брать от жизни все или плыть по течению?',
		description: 'Пройди этот тест и узнай, в чем твой фокус',
		dynamic_shares: {
			1: {
					img: '/share/share_1.png',
					title: 'Наслаждаюсь жизнью как никто другой',
					description: 'Одно удачное свидание - и я на вершине мира! А у тебя как?'
			},
			2: {
					img: '/share/share_2.png',
					title: 'Достигаю цели и беру от жизни все',
					description: 'Иногда полезно расслабиться, но жизнь это борьба. Не согласен?'
			},
			// 3: {
			//     img: '/share/share_3.jpg',
			//     title: 'Магистр авангардных искусств',
			//     description: 'Ваш следующий шаг - собственная выставка'
			// }
		}
	},
	allPrerenderRoutes: [ //without dynamic_shares
		'/',
	]
}
data.allPrerenderRoutes = data.allPrerenderRoutes.concat(Object.keys(data.share.dynamic_shares).map(el => '/' + el));

module.exports = data;