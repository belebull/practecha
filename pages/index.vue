<template>
  <div class="container mx-auto py-16 px-8 sm:px-auto">
    <menu-bar />
    <!---Hero Section--->
    <div class="mt-8 flex flex-col items-center md:items-start md:w-3/5">
      <div class="font-header text-3xl text-center md:text-left my-5">
        We're making technical interviewing work for women and companies.
      </div>
      <div class="text-center md:text-left font-body text-lg mb-5">
        We help women build their technical interviewing skills through mock
        interviews with engineers and companies looking to improve their
        interviewing process.
      </div>
      <div class="">
        <primary-btn button-text="Join Waitlist"></primary-btn>
      </div>
    </div>

    <!--About Section-->
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
