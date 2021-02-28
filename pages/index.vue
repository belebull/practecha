<template>
  <div class="font-custom">
    <menu-bar />
    <div class="container px-8 py-8 mx-auto sm:px-auto">
      <!---Hero Section--->
      <div class="flex flex-col items-center justify-center lg:flex-row">
        <div class="w-full mt-8 lg:w-2/5 lg:py-32">
          <div
            class="my-5 text-3xl font-extrabold text-center text-main md:text-3xl lg:text-left"
          >
            We're making technical interviewing work for women and companies.
          </div>
          <div
            class="mb-5 text-lg text-center text-dark-grey lg:text-left font-body md:text-2xl"
          >
            We help women build their technical interviewing skills through mock
            interviews with engineers and companies looking to improve their
            interviewing process.
          </div>
          <div class="justify-center">
            <primary-btn button-text="Join Waitlist"></primary-btn>
          </div>
        </div>
        <div class="w-full lg:w-3/5"><img src="~/static/convosvg.svg" /></div>
      </div>

      <!--About Section for Early Career Women-->
      <div class="py-16 mt-16 md:py-32">
        <div class="flex flex-col items-center lg:flex-row-reverse">
          <div class="w-full text-center lg:text-left lg:w-1/2 lg:ml-8">
            <div
              class="my-8 text-2xl font-bold text-center text-main lg:text-left"
            >
              Get the feedback you need to tackle you technical interviews...
            </div>
            <div class="my-4 text-xl font-bold text-main">The Challenges</div>
            <div class="text-xl text-dark-grey">
              Women beginning their careers in software development face unique
              barriers when it comes to technical interviewing, such as a lack
              of mentorship, peer support, tools and vital feedback.
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
            <div class="pt-8 pb-4 text-xl font-bold text-main">
              The Solution
            </div>
            <div class="text-xl text-dark-grey">
              Here at Practecha, we working to remove those barriers for
              early-career women through beginner-friendly mock interviews with
              personalized feedback from current engineers and peers.
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
      <div class="py-16 mt-16 md:py-32">
        <div class="flex flex-col items-center lg:flex-row">
          <div class="w-full lg:w-1/2">
            <div class="text-2xl font-bold text-center text-main lg:text-left">
              ...while also helping engineers and companies improve their
              technical interviewing process.
            </div>
            <div class="my-8 text-lg text-center lg:text-left">
              <div class="my-4 text-xl font-bold text-main">The Challenges</div>
              <div class="my-4 text-dark-grey">
                We simply don’t believe in one-sided interviews. That’s why we
                use feedback from early-career women to help engineers and
                companies improve their technical interviewing process.
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
              <div class="my-4 text-xl font-bold text-main">The Solution</div>
              <div class="my-4 text-dark-grey">
                Understand what diverse candidates think of your interviewers
                and gather data on how your process compares to others in your
                field. Plus, companies and engineers can gain access to a
                diverse pool of talented early-career women. #WinWin
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
      <div class="flex flex-col items-center md:mt-24 md:py-16 md:py-32">
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
          <primary-btn button-text="Join the waitlist"></primary-btn>
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
