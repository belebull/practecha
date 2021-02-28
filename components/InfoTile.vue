<template>
  <div
    v-if="size === 'small'"
    class="flex flex-col items-center w-32 h-32 p-3 text-base rounded-lg shadow-md bg-accent"
  >
    <img :src="getIconUrl()" alt="" />
    <div class="my-2 text-center text-md text-main">{{ infoText }}</div>
  </div>
  <div v-else class=""></div>
</template>

<script>
export default {
  props: {
    iconFile: {
      type: String,
      required: true,
      default: 'users',
    },
    infoText: {
      type: String,
      required: true,
      default: 'Lack of mentorship',
    },
    size: {
      type: String,
      required: false,
      default: 'small',
      validator: (value) => ['large', 'small'].includes(value.toLowerCase()),
    },
  },
  methods: {
    getIconUrl() {
      return require(`../static/icons/${this.iconFile}.svg`)
    },
  },
}
</script>

<style></style>
