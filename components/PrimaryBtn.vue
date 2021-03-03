<template>
  <div>
    <a
      :href="href"
      class="block w-48 py-4 text-lg text-center text-white align-middle rounded-lg bg-main border-accent h-14 font-body hover:font-bold md:text-xl"
      >{{ buttonText }}</a
    >
  </div>
</template>

<script>
export default {
  props: {
    buttonText: { type: String, default: 'Button' },
    href: {
      type: String,
      default: 'https://beleiciabullock.typeform.com/to/jYKkC1c3',
    },
  },
}
</script>

<style></style>
