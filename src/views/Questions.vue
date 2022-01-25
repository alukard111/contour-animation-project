<template lang="pug">
  .questions
    .questions__line.questions__line_top
    <QuestionContent @clickOnNo="giveAnAnswerNo()" @clickOnYes="giveAnAnswerYes()" :classSvg="getQuestion.classSvg" :classWrapper="getQuestion.classWrapper" :bigNum="getQuestion.number" :title="getQuestion.title" :src="getQuestion.src"  />
    .questions__line.questions__line_bottom
    //- hr.questions__line-shape
</template>

<script>
import QuestionContent from '@/components/layout/QuestionContent.vue'

export default {
  components: {
    QuestionContent
  },

  data: () => ({
    btnDisable: true, 
  }),
  
  created() {
    this.$store.commit({
      type: 'questions/RESET_QUESTIONS'
    })
  },

  computed: {
    getQuestion() {
      return this.$store.getters['questions/getQuestion']
    },
  },
  methods: {
    giveAnAnswerNo() {
      if (this.btnDisable) {
        this.sendData('vopros_1-5_otvet_net')
        this.$store.dispatch({
          type: 'questions/GIVE_AN_ANSWER_NO'
        })
        this.goToResult()
        this.btnDisable = false
        setTimeout(() => {
          this.btnDisable = true
        }, 1000)
      } 
    },
    giveAnAnswerYes() {
      if (this.btnDisable) {
        this.sendData('vopros_1-5_otvet_da')
        this.$store.dispatch({
          type: 'questions/GIVE_AN_ANSWER_YES'
        })
        this.goToResult()
        this.btnDisable = false
        setTimeout(() => {
          this.btnDisable = true
        }, 1000)
      }
    },

    goToResult() {
      if (this.$store.getters['questions/getQuestionNumber'] > 4) {
        this.$router.push({
          path: '/result'
        })
      } 
    },

    sendData(payload) {
			this.$root.sendGA("internal", "click", payload)
		}
  },
  
}
</script>