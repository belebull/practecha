<template>
  <div>
    <menu-bar />
    <div class="container px-8 py-16 mx-auto sm:px-auto">
      <!---Hero Section--->
      <div class="flex flex-col items-center justify-center lg:flex-row">
        <div class="w-full mt-8 lg:w-2/5 lg:py-32">
          <div
            class="my-5 text-base text-3xl font-extrabold text-center font-header md:text-3xl lg:text-left"
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
      <div class="py-16 mt-24 md:py-32">
        <div class="flex flex-col items-center md:flex-row-reverse">
          <div class="md:w-2/5 md:ml-8">
            <div
              class="text-base text-2xl font-bold text-center font-header md:text-left"
            >
              Get the feedback you need to tackle you technical interviews...
            </div>
            <div class="my-8 text-lg text-center font-body md:text-left">
              <p class="my-4">
                Women face unique challenges when it comes to technical
                interviewing given a lack of peer support and mentorship. And
                don’t even mention the isolation, imposter syndrome and bad
                interviewers you have to deal with.
              </p>
              <p class="my-4">
                That’s why we connect women starting out in tech with engineers
                and peers prep through non-judgmental and beginner-friendly mock
                interviews.
              </p>
            </div>
          </div>
          <div class="block w-full h-64 bg-gray-500 md:w-3/5"></div>
        </div>
      </div>

      <!--About section for engineers and companies-->
      <div class="py-16 mt-24 md:py-32">
        <div class="flex flex-col items-center md:flex-row">
          <div class="w-full md:w-2/5">
            <div
              class="text-base text-2xl font-bold text-center font-header md:text-left"
            >
              ...while helping engineers and companies improve their technical
              interviewing process.
            </div>
            <div class="my-8 text-lg text-center font-body md:text-left">
              <p class="my-4">
                We help engineers and companies improve their technical
                interviewing process using feedback from early-career women.
                After each interview, we provide interviewers with key insights
                and action steps that over time will help them to conduct better
                on-the-job interviews.
              </p>
            </div>
          </div>
          <div class="block w-full h-64 bg-gray-500 md:w-3/5 md:ml-32"></div>
        </div>
      </div>

      <!--How it works section-->
      <div class="flex flex-col items-center md:mt-24 md:py-16 md:py-32">
        <div class="my-12 text-base text-3xl font-bold text-center font-header">
          How We Work
        </div>
        <!--Section Title for Mobile-->
        <div class="text-center md:hidden">
          <div class="text-base text-xl font-semibold font-header">
            {{ sectionTitle }}
          </div>
        </div>
        <!--Section Buttons for Mobile-->
        <div class="flex flex-row items-center my-8 md:hidden">
          <button
            class="block w-1/2 h-24 px-4 py-4 mx-2 bg-white border border-opacity-100 rounded-md md:mx-4 border-base text-md font-body"
            @click="changeView(true)"
          >
            For Early-Career Women
          </button>
          <button
            class="block w-1/2 h-24 px-4 py-4 mx-2 bg-white border border-opacity-100 rounded-md md:mx-4 border-base text-md font-body"
            @click="changeView(false)"
          >
            For Engineers
          </button>
        </div>
        <!--Single Columns for Mobbile-->
        <div class="w-full md:hidden">
          <ol v-show="viewWomen">
            <li
              v-for="(item, index) in women"
              :key="index"
              class="my-4 text-lg"
            >
              {{ index + 1 }}. {{ item }}
            </li>
          </ol>
          <ol v-show="!viewWomen">
            <li
              v-for="(item, index) in engineer"
              :key="index"
              class="my-4 text-lg"
            >
              {{ index + 1 }}. {{ item }}
            </li>
          </ol>
        </div>
        <!--Double column for Tablet and Desktop-->
        <div class="hidden md:block md:flex md:flex-row h:auto">
          <div class="w-1/2 mx-4">
            <div class="my-4 text-xl text-center font-header">
              <span class="p-4 text-white bg-base"
                >For Early-Career Women
              </span>
            </div>
            <ul class="my-16">
              <li
                v-for="(item, index) in women"
                :key="index"
                class="my-4 text-lg font-body text-dark-grey"
              >
                {{ index + 1 }}. {{ item }}
              </li>
            </ul>
          </div>
          <div class="w-1/2 mx-4">
            <div class="my-4 text-xl text-center font-header">
              <span class="p-4 text-white bg-base">For Engineers</span>
            </div>
            <ul class="my-16">
              <li
                v-for="(item, index) in engineer"
                :key="index"
                class="my-4 text-lg font-body text-dark-grey"
              >
                {{ index + 1 }}. {{ item }}
              </li>
            </ul>
          </div>
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
import MenuBar from '~/components/MenuBar.vue'
import PrimaryBtn from '~/components/PrimaryBtn.vue'
export default {
  components: { MenuBar, PrimaryBtn },
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
      sectionTitle: 'For Early-Career Women',
    }
  },
  methods: {
    changeView(newView) {
      this.viewWomen = newView
      if (this.viewWomen === true) {
        this.sectionTitle = 'For Early-Career Women'
      } else {
        this.sectionTitle = 'For Engineers'
      }
    },
  },
}
</script>

<style></style>
