<template>
  <div>
    <a
      :href="href"
      class="block bg-accent border-accent hover:bg-base hover:text-white text-dark-grey h-16 w-48 rounded-md font-body text-lg md:text-xl text-center align-middle py-4"
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
