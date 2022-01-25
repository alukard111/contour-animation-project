
export default {
  namespaced: true,
  state: {
    answersOnQuestions: 0,
    questionNumber: 0,
    questions: [
      {
        number: '01',
        title: 'Умение готовить украшает мужчину',
        src: 'shape-01.svg',
        classWrapper: 'question__shape-wrapper_cooking',
        classSvg: 'question__shape_cooking'
      },
      {
        number: '02',
        title: 'Ласки в сексе — важный этап',
        src: 'shape-02.svg',
        classWrapper: 'question__shape-wrapper_caress',
        classSvg: 'question__shape_caress'
      },
      {
        number: '03',
        title: 'Лучше самому заниматься спортом, чем болеть за других',
        src: 'shape-03.svg',
        classWrapper: 'question__shape-wrapper_sport',
        classSvg: 'question__shape_sport'
      },
      {
        number: '04',
        title: 'Если ты любишь свою работу, такого понятия, как «конец рабочего дня», не существует',
        src: 'shape-04.svg',
        classWrapper: 'question__shape-wrapper_work',
        classSvg: 'question__shape_work'
      },
      {
        number: '05',
        title: 'Яркая сексуальная жизнь с одной постоянной партнершей — это миф',
        src: 'shape-05.svg',
        classWrapper: 'question__shape-wrapper_sex-life',
        classSvg: 'question__shape_sex-life'
      },
    ]
  },
  getters: {
    getQuestion(state) {
      return state.questions[state.questionNumber]
    },
    getQuestionNumber(state) {
      return state.questionNumber
    },
  },
  mutations: {
    INCREASE_QUESTION(state) {
      state.questionNumber +=1
    },
    ANSWERS_ON_QUESTIONS_YES(state) {
      state.answersOnQuestions += 1
    },
    ANSWERS_ON_QUESTIONS_NO(state) {
      state.answersOnQuestions -= 1
    },
    RESET_QUESTIONS(state) {
      state.questionNumber = 0
      state.answersOnQuestions = 0
    }
  },

  actions: {
    GIVE_AN_ANSWER_YES(context) {
      context.commit({
        type: 'ANSWERS_ON_QUESTIONS_YES'
      })
      context.commit({
        type: 'INCREASE_QUESTION'
      })
    },

    GIVE_AN_ANSWER_NO(context) {
      context.commit({
        type: 'ANSWERS_ON_QUESTIONS_NO'
      })
      context.commit({
        type: 'INCREASE_QUESTION'
      })
    }
  }
}
