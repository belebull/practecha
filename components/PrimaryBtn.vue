<template>
  <div>
    <a
      :href="href"
      class="block bg-base text-white border-accent h-14 w-48 rounded-lg font-body text-lg hover:font-bold md:text-xl text-center align-middle py-4"
      >{{ buttonText }}</a
    >
  </div>
</template>

<script>
export default {
  props: {
    buttonText: { type: String, default: 'Button' },
    href: { type: String, default: 'https://www.practecha.com' },
  },
}
</script>

<style></style>
