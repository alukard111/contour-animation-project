<template lang="pug">
  .about( :class="classes.aboutBox ? classes.aboutBox : ''" )
    .about__title.about__hidden(  :class="classes.aboutTitle ? classes.aboutTitle : ''" )
      .about__title-enumeration-wrapper
        .about__title-enumeration-inner
          span.about__title-enumeration {{ enumeration }}
      .about__title-headline-wrapper
        .about__title-headline-inner
          h1.about__title-headline {{ title }}
    .about__desc.about__hidden(  :class="classes.aboutDescBox ? classes.aboutDescBox : ''" )
      .about__desc-wrapper
        p.about__desc-text( v-html="desc" :class="classes.aboutDesc ? classes.aboutDesc : ''" ) 
    .about__shape-box.about__hidden(  :class="classes.aboutShapeBox ? classes.aboutShapeBox : ''" )
      component.about__shape(:is='require(`@/assets/shapes/${srcSvg}`)' :class="classes.aboutShape ? classes.aboutShape : ''")
    .about__line(:class="classes.aboutLine")
</template>


<script>
export default {
  props: {
    enumeration: {
      type: String,
      require: false,
      default: '',
    },
    title: {
      type: String,
      require: false,
      default: '',
    },
    desc: {
      type: String,
      require: false,
      default: '',
    },
    srcSvg: {
      type: String,
      require: false,
      default: '',
    },
    classes: {
      type: Object,
      require: false,
      default: Object,
    },
  },
  data: () => ({
    aboutBox: null,
    aboutTitle: null,
    aboutDescBox: null,
    aboutShapeBox: null,

    dataEventName: null
  }),

  mounted() {
    this.dataEventName = this.classes.aboutHref === 'about__desc-text-href_disfunkciya' ? 'erektilnaya_disfunkciya' : '48.9%_muzhchin'
    document.querySelector(`.${this.classes.aboutHref}`)?.addEventListener('click', this.sendData.bind(null, 'external', `${this.dataEventName}`))
    
    this.aboutBox = document.querySelector(`.${this.classes.aboutBox}`)
    this.aboutTitle = document.querySelector(`.${this.classes.aboutTitle}`)
    this.aboutDescBox = document.querySelector(`.${this.classes.aboutDescBox.split(' ')[0]}`)
    this.aboutShapeBox = document.querySelector(`.${this.classes.aboutShapeBox.split(' ')[0]}`)
    window.addEventListener('scroll', this.scroll)
  },
  methods: {
    scroll() {
      if (this.aboutBox.getBoundingClientRect().top <= (this.aboutBox.clientHeight / 2) &
          this.aboutBox.getBoundingClientRect().top > -(this.aboutBox.clientHeight / 2) ) {
        this.aboutTitle.classList.toggle('about__hidden')
        this.aboutDescBox.classList.toggle('about__hidden')
        this.aboutShapeBox.classList.toggle('about__hidden')
        
        window.removeEventListener('scroll', this.scroll)
      }
    },
    sendData(link, payload) {
			this.$root.sendGA(link, "click", payload)
		},
  },
  
  beforeDestroy() {
    document.querySelector(`.${this.classes.aboutHref}`)?.removeEventListener('click', this.sendData)
    window.removeEventListener('scroll', this.scroll)
  },

  
}
</script>