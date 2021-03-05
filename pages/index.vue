<template>
  <div class="font-custom">
    <menu-bar />
    <div class="container px-8 mx-auto sm:px-auto">
      <!---Hero Section--->
      <div class="flex flex-col items-center justify-center py-16 lg:flex-row">
        <div class="w-full text-center lg:text-left lg:w-2/5">
          <div class="my-5 text-3xl font-extrabold text-main md:text-3xl">
            Let's build a better technical interview process.
          </div>
          <div class="mb-5 text-lg text-dark-grey font-body md:text-2xl">
            We connect early-career women with engineers through mock interviews
            to improve the technical interview process.
          </div>
          <div class="inline-block">
            <primary-btn button-text="Join Beta"></primary-btn>
          </div>
        </div>
        <div class="w-full lg:w-3/5"><img src="~/static/convosvg.svg" /></div>
      </div>

      <!--About Section for Early Career Women-->
      <div class="py-16 mt-8">
        <div class="flex flex-col items-center lg:flex-row-reverse">
          <div class="w-full text-center lg:text-left lg:w-1/2 lg:ml-8">
            <div
              class="my-8 text-2xl font-bold text-center text-main lg:text-left"
            >
              We help early-career women prepare for technical interviews...
            </div>
            <!--<div class="my-4 text-xl font-bold text-main">The Challenges</div>-->
            <div class="text-xl text-dark-grey">
              Women starting their software development careers
              <span class="font-bold text-main">face unique barriers</span> when
              it comes to technical interviewing.
            </div>
            <ul class="my-4 text-center">
              <li
                v-for="item in ecwChallengeTiles"
                :key="item.icon"
                class="inline-block py-4 mx-3"
              >
                <info-tile :icon-file="item.icon" :info-text="item.text" />
              </li>
            </ul>
            <!--<div class="pt-8 pb-4 text-xl font-bold text-main">
              The Solution
            </div>-->
            <div class="text-xl text-dark-grey">
              That's why we match women in college and junior roles with
              engineers and peers for
              <span class="font-bold text-main">
                beginner-friendly mock interviews with personalized feedback </span
              >.
            </div>
            <ul class="my-4 text-center">
              <li
                v-for="item in ecwSolutionTiles"
                :key="item.icon"
                class="inline-block py-4 mx-3"
              >
                <info-tile :icon-file="item.icon" :info-text="item.text" />
              </li>
            </ul>
          </div>
          <div class="w-full my-8 text-center lg:w-1/2">
            <img
              src="../static/desk.png"
              alt="A woman sitting at a desk working on a laptop"
              class="inline-block w-2/3 md:w-1/2 lg:w-4/5 lg:h-3/5"
            />
          </div>
        </div>
      </div>

      <!--About section for engineers and companies-->
      <div class="py-16 mt-8">
        <div class="flex flex-col items-center lg:flex-row">
          <div class="w-full lg:w-1/2">
            <div class="text-2xl font-bold text-center text-main lg:text-left">
              ...while helping engineers and companies develop better technical
              interviews.
            </div>
            <div class="my-8 text-xl text-center lg:text-left">
              <!--<div class="my-4 text-xl font-bold text-main">The Challenges</div>-->
              <div class="my-4 text-dark-grey">
                Developing a technical interview process is
                <span class="font-bold text-main">hard work</span>. Not only do
                companies struggle to engage with diverse candidates, but it is
                also costly to expirement with different formats and train
                engineers to be quality interviewers.
              </div>
              <ul class="my-4 text-center">
                <li
                  v-for="item in ecChallengeTiles"
                  :key="item.icon"
                  class="inline-block py-4 mx-3"
                >
                  <info-tile :icon-file="item.icon" :info-text="item.text" />
                </li>
              </ul>
              <!--<div class="my-4 text-xl font-bold text-main">The Solution</div>-->
              <div class="my-4 text-dark-grey">
                That's why we provide
                <span class="font-bold text-main">
                  feedback to train engineers
                </span>
                to be better interviewers and a
                <span class="font-bold text-main">
                  space for companies to expirement
                </span>
                with different formats and questions.
              </div>
              <ul class="my-4 text-center">
                <li
                  v-for="item in ecSolutionTiles"
                  :key="item.icon"
                  class="inline-block py-4 mx-3"
                >
                  <info-tile :icon-file="item.icon" :info-text="item.text" />
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full my-8 text-center lg:w-1/2">
            <img
              src="../static/sitting.png"
              alt="A woman sitting on a stool with a laptop and smelling a purple flower"
              class="inline-block w-2/3 md:w-1/2 lg:w-4/5 lg:h-3/5"
            />
          </div>
        </div>
      </div>

      <!--How it works section-->
      <div class="flex flex-col items-center mt-12">
        <div class="mb-8 text-3xl font-bold text-center text-main font-header">
          How It Works
        </div>
        <!--Section Buttons-->
        <div class="flex flex-col items-center mb-8 md:flex-row">
          <button
            class="block w-64 py-4 my-4 text-center border rounded-full md:mx-8 border-main text-main text-md hover:font-bold"
            :class="{ active: isActive }"
            @click="changeView(true)"
          >
            For Early-Career Women
          </button>
          <button
            class="block w-64 py-4 my-4 text-center border rounded-full md:mx-8 border-main text-main text-md hover:font-bold"
            :class="{ active: !isActive }"
            @click="changeView(false)"
          >
            For Engineers and Companies
          </button>
        </div>
        <!--Single Columns for Mobbile and Tablet-->
        <div class="w-full lg:hidden">
          <ul v-show="viewWomen">
            <li v-for="(item, id) in ecwInstructions" :key="id" class="my-4">
              <info-tile :info-text="item.text" :size="`large`" />
            </li>
          </ul>
          <ul v-show="!viewWomen">
            <li v-for="(item, id) in ecInstructions" :key="id" class="my-4">
              <info-tile :info-text="item.text" :size="`large`" />
            </li>
          </ul>
        </div>

        <!--Two Columns for Desktop-->
        <div class="hidden w-full lg:block">
          <ul v-if="viewWomen">
            <div class="flex flex-row items-begin">
              <div class="w-1/2 mx-4">
                <li
                  v-for="(item, id) in ecwInstructions.slice(0, 3)"
                  :key="id"
                  class="my-4"
                >
                  <info-tile :info-text="item.text" :size="`large`" />
                </li>
              </div>
              <div class="w-1/2 mx-4">
                <li
                  v-for="(item, id) in ecwInstructions.slice(3, 6)"
                  :key="id"
                  class="my-4"
                >
                  <info-tile :info-text="item.text" :size="`large`" />
                </li>
              </div>
            </div>
          </ul>
          <ul v-else>
            <div class="flex flex-row items-begin">
              <div class="w-1/2 mx-4">
                <li
                  v-for="(item, id) in ecInstructions.slice(0, 3)"
                  :key="id"
                  class="my-4"
                >
                  <info-tile :info-text="item.text" :size="`large`" />
                </li>
              </div>
              <div class="w-1/2 mx-4">
                <li
                  v-for="(item, id) in ecInstructions.slice(3, 6)"
                  :key="id"
                  class="my-4"
                >
                  <info-tile :info-text="item.text" :size="`large`" />
                </li>
              </div>
            </div>
          </ul>
        </div>
        <!--Join Waitlist Button-->
        <div class="mt-16">
          <primary-btn button-text="Join Beta"></primary-btn>
        </div>
      </div>
    </div>
    <!--Footer-->
    <div
      class="w-screen h-auto px-4 py-16 mt-20 lg:h-64 lg:px-40 lg:py-16 bg-main text-accent"
    >
      <div
        class="flex flex-col items-center justify-center text-center lg:text-left lg:justify-between lg:flex-row"
      >
        <div>
          <div class="text-3xl font-bold lg:text-4xl">Practecha</div>
          <div class="text-xl lg:text-2xl">
            Let's build a better technical interview process.
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="text-xl font-bold lg:text-2xl">Questions?</div>
          <div class="text-xl lg:text-2xl">
            Email us at
            <a
              href="mailto:hello@practecha.com"
              class="hover:font-bold hover:underline"
            >
              hello@practecha.com</a
            >!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoTile from '~/components/InfoTile.vue'
import MenuBar from '~/components/MenuBar.vue'
import PrimaryBtn from '~/components/PrimaryBtn.vue'
export default {
  components: { MenuBar, PrimaryBtn, InfoTile },
  data() {
    return {
      women: [
        'Tell us about your interview prep so far (no worries if you’re just starting out!)',
        'We match you with a peer or engineer for a mock interview.',
        'You complete a mock interview. Don’t worry - you got this!',
        'You provide feedback to your interviewer to help them improve.',
        'You get feedback from your interviewer and a third party to help your prep.',
        'You schedule another interview to build your confidence!',
      ],
      engineer: [
        'Tell us what types of interviews you’re interested in leading. We love newbies and experienced interviewers!',
        'We’ll match you with an early-career woman for a mock interview.',
        'You complete a mock interview. You can test out new questions or we can help you come up with some.',
        'You provide feedback to the interviewee to help them build their interview skills.',
        'You receive feedback from your interviewee and a third-party to improve your interviewing skills.',
        'Complete another interview!',
      ],
      viewWomen: true,
      isActive: true,
      ecwChallengeTiles: [
        { icon: 'users', text: 'Lack of mentorship' },
        { icon: 'livesaver', text: 'Few beginner friendly tools' },
        { icon: 'navigation', text: 'Little to no feedback' },
      ],
      ecwSolutionTiles: [
        { icon: 'target', text: 'Realistic practice' },
        { icon: 'heart', text: 'Made for beginners' },
        { icon: 'filter', text: 'Personalized feedback' },
      ],
      ecChallengeTiles: [
        { icon: 'dollar-sign', text: 'Expensive expirementation' },
        { icon: 'user-x', text: 'No interview training' },
        { icon: 'frown', text: 'Little diversity' },
      ],
      ecSolutionTiles: [
        { icon: 'activity', text: 'Test your process' },
        { icon: 'check-circle', text: 'Train interviewers' },
        { icon: 'heart', text: 'Improve diversity' },
      ],
      ecwInstructions: [
        {
          id: 1,
          text:
            'Tell us about your interview prep so far (no worries if you’re just starting out!) ',
        },
        {
          id: 2,
          text:
            "We'll match you to an interviewer - either an engineer or a peer.",
        },
        {
          id: 3,
          text:
            "Complete an interview! Don't worry - you're going to do great.",
        },
        {
          id: 4,
          text: 'Give some feedback to your interviewer after the session.',
        },
        {
          id: 5,
          text:
            "We'll send you feedback from your interviewer and another mentor to help you prep.",
        },
        {
          id: 6,
          text: 'Get some practice by booking your next interview!',
        },
      ],
      ecInstructions: [
        {
          id: 1,
          text:
            'Tell us what types of interviews you’re interested in leading. We love newbies and experienced interviewers!',
        },
        {
          id: 2,
          text:
            'We’ll match you with an early-career woman for a mock interview.',
        },
        {
          id: 3,
          text:
            "Complete an interview! Don't worry - we'll provide some tips on how to prepare.",
        },
        {
          id: 4,
          text: 'Give some feedback to your interviewee after the session.',
        },
        {
          id: 5,
          text:
            "We'll send you feedback from your interviwee and another mentor to help conduct better interviews.",
        },
        {
          id: 6,
          text: 'Get some more practice by booking your next interview!',
        },
      ],
    }
  },
  methods: {
    changeView(newView) {
      this.viewWomen = newView
      this.isActive = newView
    },
  },
}
</script>

<style>
.active {
  background-color: #6b3399;
  color: white;
}
</style>
