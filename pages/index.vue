<template>
  <div>
    <menu-bar />
    <div class="container mx-auto py-16 px-8 sm:px-auto">
      <!---Hero Section--->
      <div
        class="mt-8 flex flex-col items-center md:items-start md:w-3/5 md:py-32"
      >
        <div
          class="font-header text-3xl text-base font-extrabold md:text-4xl text-center md:text-left my-5"
        >
          We're making technical interviewing work for women and companies.
        </div>
        <div
          class="text-center text-dark-grey md:text-left font-body text-lg md:text-2xl mb-5"
        >
          We help women build their technical interviewing skills through mock
          interviews with engineers and companies looking to improve their
          interviewing process.
        </div>
        <div class="">
          <primary-btn button-text="Join Waitlist"></primary-btn>
        </div>
      </div>

      <!--About Section for Early Career Women-->
      <div class="mt-24 py-16 md:py-32">
        <div class="flex flex-col items-center md:flex-row-reverse">
          <div class="md:w-2/5 md:ml-8">
            <div
              class="font-header text-2xl text-center text-base font-bold md:text-left"
            >
              Get the feedback you need to tackle you technical interviews...
            </div>
            <div class="font-body text-lg text-center my-8 md:text-left">
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
          <div class="md:w-3/5 block bg-gray-500 h-64 w-full"></div>
        </div>
      </div>

      <!--About section for engineers and companies-->
      <div class="mt-24 py-16 md:py-32">
        <div class="flex flex-col items-center md:flex-row">
          <div class="w-full md:w-2/5">
            <div
              class="font-header text-2xl text-center font-bold text-base md:text-left"
            >
              ...while helping engineers and companies improve their technical
              interviewing process.
            </div>
            <div class="font-body text-lg text-center my-8 md:text-left">
              <p class="my-4">
                We help engineers and companies improve their technical
                interviewing process using feedback from early-career women.
                After each interview, we provide interviewers with key insights
                and action steps that over time will help them to conduct better
                on-the-job interviews.
              </p>
            </div>
          </div>
          <div class="block bg-gray-500 h-64 w-full md:w-3/5 md:ml-32"></div>
        </div>
      </div>

      <!--How it works section-->
      <div class="flex flex-col items-center md:mt-24 md:py-16 md:py-32">
        <div class="font-header font-bold text-base text-3xl text-center my-12">
          How We Work
        </div>
        <!--Section Title for Mobile-->
        <div class="md:hidden text-center">
          <div class="font-header text-xl font-semibold text-base">
            {{ sectionTitle }}
          </div>
        </div>
        <!--Section Buttons for Mobile-->
        <div class="md:hidden flex flex-row items-center my-8">
          <button
            class="mx-2 md:mx-4 block bg-white border border-base border-opacity-100 h-24 w-1/2 text-md rounded-md font-body px-4 py-4"
            @click="changeView(true)"
          >
            For Early-Career Women
          </button>
          <button
            class="mx-2 md:mx-4 block bg-white border border-base border-opacity-100 h-24 w-1/2 text-md rounded-md font-body px-4 py-4"
            @click="changeView(false)"
          >
            For Engineers
          </button>
        </div>
        <!--Single Columns for Mobbile-->
        <div class="md:hidden w-full">
          <ol v-show="viewWomen">
            <li
              v-for="(item, index) in women"
              :key="index"
              class="text-lg my-4"
            >
              {{ index + 1 }}. {{ item }}
            </li>
          </ol>
          <ol v-show="!viewWomen">
            <li
              v-for="(item, index) in engineer"
              :key="index"
              class="text-lg my-4"
            >
              {{ index + 1 }}. {{ item }}
            </li>
          </ol>
        </div>
        <!--Double column for Tablet and Desktop-->
        <div class="hidden md:block md:flex md:flex-row h:auto">
          <div class="mx-4 w-1/2">
            <div class="font-header text-xl my-4 text-center">
              <span class="bg-base text-white p-4"
                >For Early-Career Women
              </span>
            </div>
            <ul class="my-16">
              <li
                v-for="(item, index) in women"
                :key="index"
                class="text-lg my-4 font-body text-dark-grey"
              >
                {{ index + 1 }}. {{ item }}
              </li>
            </ul>
          </div>
          <div class="mx-4 w-1/2">
            <div class="font-header text-xl my-4 text-center">
              <span class="bg-base text-white p-4">For Engineers</span>
            </div>
            <ul class="my-16">
              <li
                v-for="(item, index) in engineer"
                :key="index"
                class="font-body my-4 text-lg text-dark-grey"
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
