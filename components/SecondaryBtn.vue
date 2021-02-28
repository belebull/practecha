<template>
  <button
    class="block w-64 py-4 text-center bg-white border rounded-full border-main text-main text-md hover:font-bold"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
      default: 'Button',
    },
  },
}
</script>

<style></style>
