import questions from './questions'

export default {
  questions,
  namespaced: true,
  state: {
    resultDescOfNo: 'Вы привыкли брать от жизни все и готовы за это платить \
      — своим временем, энергией и здоровьем. \
      Точно знаете, чего хотите и что нужно сделать, \
      чтобы добиться своей цели. Скорее всего, секс для вас — \
      лучший способ снять напряжение и расслабиться, \
      но по-настоящему доверять вы можете только себе.',
    resultDescOfYes: 'Вы рано распробовали вкус жизни и умеете наслаждаться \
      ею как никто другой. Даже если что-то пошло не так, одно удачное свидание \
      или бурная ночь могут поднять ваше настроение и самооценку на максимальную высоту. \
      Скорее всего, у вас хорошие отношения с окружающими, ведь вы мастерски уходите от \
      конфликтов и общения с неприятными людьми.',
    resultShare: [
      {
        title: 'Наслаждаюсь жизнью как никто другой',
        desc: 'Одно удачное свидание - и я на вершине мира! А у тебя как?',
        img: '/share/share_1.png',
        share: 'uspex'
      },
      {
        title: 'Достигаю цели и беру от жизни все',
        desc: 'Иногда полезно расслабиться, но жизнь это борьба. Не согласен?',
        img: '/share/share_2.png',
        share: 'udovolstvie'
      }
    ],
    
    resultBackgroundSelectorNo: 'result__cover_no',
    resultsNo: [
      { 
        enumeration: '01',
        title: 'Бизнес',
        desc: 'Вы — отличный стратег, который не жалеет времени и сил, чтобы добиться своего. \
                Вам ничего не стоит остаться после рабочего дня, чтобы закончить презентацию, \
                или обойтись без отпуска, чтобы запустить важный проект. \
                Неудачи не могут выбить вас из колеи — вы просто находите новую дорогу к старой цели. \
                Вам идеально подходит работа с инвестициями или управление IT-проектами.',
        src: 'shape-11.svg',
        classes: {
          aboutBox: 'about_business',
          aboutTitle: 'about__title_business',
          aboutDescBox: 'about__desc_business',
          aboutDesc: 'about__desc-text_business',
          aboutShapeBox: 'about__shape-box_business',
          aboutShape: 'about__shape_business about__shape_business-start-up',
          aboutLine: 'about__line-business'
        },
      },
      { 
        enumeration: '02',
        title: 'Досуг',
        desc: 'Ощущение, что все в ваших руках, не покидает вас даже во время отдыха. \
              Выбирайте активные варианты досуга: экстремальные развлечения, туристические походы, \
              прохождение квестов и участие в интеллектуальных соревнованиях. \
              Все это подходит для того, чтобы вы еще раз убедились в собственном великолепии.',
        src: 'shape-12.svg',
        classes: {
          aboutBox: 'about_leisure',
          aboutTitle: 'about__title_leisure',
          aboutDescBox: 'about__desc_leisure',
          aboutDesc: 'about__desc-text_leisure',
          aboutShapeBox: 'about__shape-box_leisure about__shape-box_leisure-cooking',
          aboutShape: 'about__shape_leisure about__shape_leisure-cooking',
          aboutLine: 'about__line-leisure'
        },
      },
      {
        enumeration: '03',
        title: 'Отношения и секс',
        desc: 'Секс — то, что вам помогает расслабиться, на время забыть о подвигах и уйти от проблем. \
                Вы с головой окунаетесь в телесные удовольствия, окружены вниманием женщин,  \
                находитесь в поисках новых сексуальных впечатлений.  \
                Впрочем, репутация сердцееда вас напрягает гораздо меньше, чем возможные проблемы с мужским здоровьем.  \
                Даже таким суперменам, как вы, может потребоваться помощь в борьбе с эректильной дисфункцией —  \
                с ней сталкиваются <a href="https://gra-via.com/about-problem/chto-takoe-erektilnaya-disfunkciya" class="about__desc-text-href about__desc-text-href_muzhchin">48,9% мужчин в возрасте 20–77 лет 1</a>',
        src: 'shape-02.svg',
        classes: {
          aboutBox: 'about_relationship',
          aboutTitle: 'about__title_relationship',
          aboutDescBox: 'about__desc_relationship',
          aboutDesc: 'about__desc-text_relationship',
          aboutShapeBox: 'about__shape-box_relationship',
          aboutShape: 'about__shape_relationship',
          aboutLine: 'about__line-relationship',
          aboutHref: 'about__desc-text-href_muzhchin'
        },
      },
      {
        enumeration: '04',
        title: 'Спорт',
        desc: 'Бодибилдинг лучше всего поможет вам выплеснуть накопившуюся энергию. \
                Идеально, если вы начнете заниматься не в спортивном зале, \
                а на улице — например, на воркаут-площадке или в ближайшем парке. \
                Для разнообразия попробуйте не ставить перед собой конкретную цель, \
                а занимайтесь для удовольствия, чтобы почувствовать свое тело и освободить \
                голову от лишних мыслей.',
        src: 'shape-13.svg',
        classes: {
          aboutBox: 'about_sport',
          aboutTitle: 'about__title_sport',
          aboutDescBox: 'about__desc_sport',
          aboutDesc: 'about__desc-text_sport',
          aboutShapeBox: 'about__shape-box_sport about__shape-box_sport-snowboard',
          aboutShape: 'about__shape_sport about__shape_sport-snowboard',
          aboutLine: 'about__line-sport'
        },
      },
      {
        enumeration: '05',
        title: 'Здоровье',
        desc: 'Вы активно используете ресурсы своего тела, которые не всегда безграничны. \
                Сердечно-сосудистые заболевания, диабет, курение, малоподвижный образ жизни, депрессия, стресс, \
                тревожность, конфликты в отношениях — все это факторы, которые могут сказываться на здоровье \
                мужской репродуктивной системы. Очень важно не пускать ситуацию на самотек, \
                не заниматься самодиагностикой и самолечением. При любых сомнениях или проявлениях проблем с мужским здоровьем, \
                следует обратиться к врачу, который сможет поставить правильный диагноз  \
                и назначит оптимальное лечение.',
        src: 'shape-10.svg',
        classes: {
          aboutBox: 'about_health',
          aboutTitle: 'about__title_health',
          aboutDescBox: 'about__desc_health',
          aboutDesc: 'about__desc-text_health',
          aboutShapeBox: 'about__shape-box_health',
          aboutShape: 'about__shape_health',
          aboutLine: 'about__line-health'
        },
      },
    ],
   
    resultBackgroundSelectorYes: 'result__cover_yes',
    resultsYes: [
      {
        enumeration: '01',
        title: 'Бизнес',
        desc: 'Вы — превосходный стартапер и отличный кризис-менеджер.\
                Вы адекватно воспринимаете реальность и легко идете на решительные меры.\
                Снижаете затраты, сокращаете персонал или консультируетесь со сторонними экспертами, \
                когда не знаете, как поступить правильно. \
                Если вы все еще не начали свое дело, это вопрос времени.',
        src: 'shape-06.svg',
        classes: {
          aboutBox: 'about_business',
          aboutTitle: 'about__title_business',
          aboutDescBox: 'about__desc_business',
          aboutDesc: 'about__desc-text_business',
          aboutShapeBox: 'about__shape-box_business',
          aboutShape: 'about__shape_business',
          aboutLine: 'about__line-business'
        },
      },
      {
        enumeration: '02',
        title: 'Досуг',
        desc: 'Ощущение, что все в ваших руках, не покидает вас даже во время отдыха. \
              Выбирайте активные варианты досуга: экстремальные развлечения, туристические походы,\
              прохождение квестов и участие в интеллектуальных соревнованиях.\
              Все это подходит для того, чтобы вы еще раз убедились в собственном великолепии.',
        src: 'shape-07.svg',
        classes: {
          aboutBox: 'about_leisure',
          aboutTitle: 'about__title_leisure',
          aboutDescBox: 'about__desc_leisure',
          aboutDesc: 'about__desc-text_leisure',
          aboutShapeBox: 'about__shape-box_leisure',
          aboutShape: 'about__shape_leisure',
          aboutLine: 'about__line-leisure'
        },
      },
      {
        enumeration: '03',
        title: 'Отношения и секс',
        desc: 'Секс — то, что приносит вам самое большое удовольствие.\
                При этом вы заботитесь не только о себе, но и о партнерше, \
                даже если это отношения на одну ночь. Трудно устоять перед соблазнами. \
                Проблемы в постели практически незнакомы, но в случае осечки вы предпочитаете не \
                заниматься самолечением, а обращаетесь к специалисту. Ваш подход срабатывает: \
                благодаря тому что вы следите за мужским здоровьем и своевременно получаете медицинскую \
                помощь, можете превзойти себя в сексуальной сфере.',
        src: 'shape-02.svg',
        classes: {
          aboutBox: 'about_relationship',
          aboutTitle: 'about__title_relationship',
          aboutDescBox: 'about__desc_relationship',
          aboutDesc: 'about__desc-text_relationship',
          aboutShapeBox: 'about__shape-box_relationship',
          aboutShape: 'about__shape_relationship',
          aboutLine: 'about__line-relationship'
        },
      },
      {
        enumeration: '04',
        title: 'Спорт',
        desc: 'Идеальный вид спорта для вас — хелиски (катание на лыжах или сноуборде с вертолета).\
              Физическая активность доставит вам удовольствие в том случае, если вы не будете \
              зависеть от партнеров по игре или состязаться с кем-то, \
              а сможете сосредоточиться на собственных ощущениях.',
        src: 'shape-09.svg',
          classes: {
          aboutBox: 'about_sport',
          aboutTitle: 'about__title_sport',
          aboutDescBox: 'about__desc_sport',
          aboutDesc: 'about__desc-text_sport',
          aboutShapeBox: 'about__shape-box_sport',
          aboutShape: 'about__shape_sport',
          aboutLine: 'about__line-sport'
        },
      },
      {
        enumeration: '05',
        title: 'Здоровье',
        desc: 'Ваше самочувствие зависит от уверенности в себе. \
              Она необходима вам в любой ситуации: от экстремального спорта до экспериментов в постели. \
              Поэтому лучшее, что вы можете сделать для себя, — позаботиться о здоровье, в том числе сексуальном. \
              Почти половина мужчин в РФ в возрасте от 20 до 77 лет сталкивается с проблемой эректильной дисфункции1. \
              Не стоит запускать проблему и ждать, что все пройдет само собой. \
              При любых <a href="https://gra-via.com/about-problem/erektilnaya-disfunkciya-i-bady" class="about__desc-text-href about__desc-text-href_disfunkciya">симптомах эректильной дисфункции</a> стоит обратиться к квалифицированному специалисту, \
              который сможет поставить диагноз и подобрать лечение. И тогда к вам вернется вера в себя и свои силы.',
        src: 'shape-10.svg',
          classes: {
            aboutBox: 'about_health',
            aboutTitle: 'about__title_health',
            aboutDescBox: 'about__desc_health',
            aboutDesc: 'about__desc-text_health',
            aboutShapeBox: 'about__shape-box_health',
            aboutShape: 'about__shape_health',
            aboutLine: 'about__line-health',
            aboutHref: 'about__desc-text-href_disfunkciya'
          },
      }
    ]
  },
  getters: {
    getResult(state) {
      if (questions.state.answersOnQuestions < 0) {
        return state.resultsNo
      } 
      return state.resultsYes
    },
    getShare(state) {
      if (questions.state.answersOnQuestions < 0) {
        return state.resultShare[0]
      }
      return state.resultShare[1]
    },
    getBackgroundCover(state) {
      if (questions.state.answersOnQuestions < 0) {
        return state.resultBackgroundSelectorNo
      }
      return state.resultBackgroundSelectorYes
    },
    getResultDesc(state) {
      if (questions.state.answersOnQuestions < 0) {
        return state.resultDescOfNo
      }
      return state.resultDescOfYes
     
    }
  },
  mutations: {
    
  },
  actions: {

  }
}