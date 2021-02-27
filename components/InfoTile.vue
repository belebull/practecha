<template>
  <div
    class="flex flex-col items-center w-32 h-32 p-3 text-base rounded-lg bg-accent"
  >
    <img :src="iconFile" alt="" />
    <div class="text-md text-main">{{ infoText }}</div>
  </div>
</template>

<script>
export default {
  props: {
    iconFile: {
      type: String,
      required: true,
      default: '~/static/icons/users.svg',
    },
    infoText: {
      type: String,
      required: true,
      default: 'Lack of mentorship',
    },
  },
  methods: {
    getIconUrl(icon) {
      const iconPath = `@/static/icons/${icon}.svg`
      return iconPath
    },
  },
}
</script>

<style></style>
