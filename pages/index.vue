<template>
  <div class="container mx-auto py-16 px-8 sm:px-auto">
    <menu-bar />
    <!---Hero Section--->
    <div
      class="mt-8 flex flex-col items-center md:items-start md:w-3/5 md:py-32"
    >
      <div
        class="font-header text-3xl md:text-4xl text-center md:text-left my-5"
      >
        We're making technical interviewing work for women and companies.
      </div>
      <div class="text-center md:text-left font-body text-lg md:text-2xl mb-5">
        We help women build their technical interviewing skills through mock
        interviews with engineers and companies looking to improve their
        interviewing process.
      </div>
      <div class="">
        <primary-btn button-text="Join Waitlist"></primary-btn>
      </div>
    </div>

    <!--About Section-->
    <div class="bg-gray-300 mt-24 py-16 md:py-32">
      <div class="flex flex-col items-center md:flex-row-reverse">
        <div class="md:w-2/5 md:ml-8">
          <div class="font-header text-2xl text-center md:text-left">
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
        <div class="md:w-3/5 block bg-black h-36 w-26 md:w-auto md:h-auto">
          hello
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
}
</script>

<style></style>
