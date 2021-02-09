<template>
  <div class="">
    <div class="flex flex-row justify-between items-center">
      <div class="logo">
        <h1 class="font-header font-bold text-3xl md:text-5xl">Practecha</h1>
      </div>
      <div class="hidden md:block">
        <primary-btn button-text="Join Waitlist" />
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
