<template>
  <div class="bg-accent w-screen h-32">
    <div
      class="flex flex-row justify-between items-center container mx-auto px-8 py-12 md:py-8"
    >
      <div class="logo">
        <h1 class="font-header font-bold text-3xl text-base">Practecha</h1>
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
