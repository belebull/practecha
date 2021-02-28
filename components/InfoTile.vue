<template>
  <div
    class="flex flex-col items-center w-32 h-32 p-3 text-base rounded-lg shadow-md bg-accent"
  >
    <img :src="getIconUrl()" alt="" />
    <div class="my-2 text-center text-md text-main">{{ infoText }}</div>
  </div>
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
  },
  methods: {
    getIconUrl() {
      return require(`../static/icons/${this.iconFile}.svg`)
    },
  },
}
</script>

<style></style>
