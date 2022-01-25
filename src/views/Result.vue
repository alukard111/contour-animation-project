<template lang="pug">
.result
  .result__background-color(ref="backgroundColor")
  .result__cover(:class="backgroundCover")
    .result__cover-inner(v-if="showMobileInnerCover")
      .result__title
        .result__title-link-wrapper
          .result__title-link-inner
            a.result__title-link Результат
        .result__title-headline-wrapper
          .result__title-headline-inner(v-for="item, index in title.split(' ')")
            transition(appear :duration="300 * index" name='title' tag='h1')
              h1.result__title-headline {{ item }}&nbsp;
      .result__desc
        p.result__desc-text {{ resultDesc }}
      .result__share
        Share(@share="sendData('external', `share_${getShare.share}_${$event}`)" :services="services" :title="getShare.title" :description="getShare.desc" :image="getShare.img")
        span.result__start-over(@click="goToQuestionsPage") Начать заново
          img.result__arrow-left(src='/icons/svg/arrow-left.svg', alt='arrow-left')
      .result__scroll-about(@click="scrollDown")
        img.result__scroll-arrow(src='/icons/svg/arrow-down.svg', alt='arrow-down')
        span.result__scroll Прокрутить вниз, чтобы узнать больше
          
  .result__about-wrapper(v-if="this.stateShowAbout")
    <ResultAbout v-for="result in getAbout" :key="result.title" :enumeration="result.enumeration" :title="result.title" :desc="result.desc" :srcSvg="result.src" :classes="result.classes" />
    
  .result__footer(v-if="this.stateShowAbout")
    h1.result__footer-slogan Уверенность и здоровье — <br> ваш собственный выбор
    span.result__footer-text Узнайте про ваши возможности на 
      a.result__footer-text_link gra-via.com 
</template>


<script>
import ResultAbout from '@/components/layout/ResultAbout.vue'
import Share from '@/components/Share.vue'

export default {
  components: {
    ResultAbout,
    Share
  },
  data: () => ({
    title: 'Фокус: достижение успеха',
    stateShowAbout: false,
    stateshowMobileInnerCover: false,
    services: [
			'facebook',
			'twitter',
			'vkontakte'
		],

    aboutWrapperElem: null,
   
  }),
  
  mounted() {
    this.aboutWrapperElem = document.querySelector('.result__about-wrapper')
    document.querySelector('.result__cover').addEventListener('animationend', this.showAbout)
  },
  computed: {
    getAbout() {
      return this.$store.getters['result/getResult'] 
    },
    getShare() {
      return this.$store.getters['result/getShare']
    },
    showMobileInnerCover() {
      if (document.body.offsetWidth < 661) {
        return this.stateShowAbout
      } 
      return true
    },
    backgroundCover() {
      return this.$store?.getters['result/getBackgroundCover']
      
    },
    resultDesc() {
      return this.$store?.getters['result/getResultDesc']
    }
    
  },

  methods: {
    showAbout(event) {
      event.stopPropagation()
      this.stateShowAbout = true
      document.querySelector('.result__cover').removeEventListener('animationend', this.showAbout)
    },
    sendData(link, payload) {
			this.$root.sendGA(link, "click", payload)
		},
    goToQuestionsPage() {
      this.sendData('internal', 'nachat_zanovo')
      this.$router.push({
        path: '/'
      })
    },
    scrollDown() {
      window.scrollBy({
        top: this.aboutWrapperElem.getBoundingClientRect().top,
        behavior: 'smooth'
      })
    }
  }
  
}
</script>