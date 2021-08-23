<template>
  <div class="w-screen h-32 bg-accent">
    <div
      class="container flex flex-row items-center justify-between px-8 py-12 mx-auto md:py-8"
    >
      <div class="logo">
        <h1 class="text-3xl font-bold font-header text-main">Practecha</h1>
      </div>
      <div class="hidden md:block">
        <primary-btn button-text="Join Cohort" />
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryBtn from './PrimaryBtn.vue'
export default {
  components: { PrimaryBtn },
}
</script>
<style></style>
