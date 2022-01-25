<template lang="pug">
  .question
    .question__title
      .question__title-enumeration
        .question__title-enumeration-big-wrapper
          transition(appear name='numb' :duration="600" tag='span' mode="out-in")
            .question__title-enumeration-big-inner(:key="bigNum")
              span.question__title-enumeration-big-num {{ bigNum }}
        span.question__title-enumeration-low-num
          | /05
      .question__title-headline-wrapper  
        .question__title-headline-inner(v-for="item, index in title.split(' ')" :key="index+bigNum")
          transition(appear :duration="200 * index" name='title' tag='h1')
            h1.question__title-headline {{ item }}&nbsp;
    .question__btns
      span.question__btn.questions__btn_no(@click="$emit('clickOnNo')") Нет
        img.question__btn-arrow.questions__btn-arrow_left(src='/icons/svg/arrow-right.svg' alt="arrow-left")
      span.question__btn.questions__btn_yes(@click="$emit('clickOnYes')") Да
        img.question__btn-arrow(src='/icons/svg/arrow-right.svg' alt="arrow-right")
    .question__shape-wrapper(:class="classWrapper")
      component.question__shape(:is='require(`@/assets/shapes/${src}`)' :class="classSvg")
</template>


<script>
export default {
  props: {
    bigNum: {
      type: String,
      require: false,
      default: '01'
    },
    title: {
      type: String,
      require: false,
      default: 'QuestionContent'
    },
    src: {
      type: String,
      require: false,
      default: ''
    },
    classWrapper: {
      type: String,
      require: false,
      default: ''
    },
    classSvg: {
      type: String,
      require: false,
      default: ''
    }
  },
}
</script>