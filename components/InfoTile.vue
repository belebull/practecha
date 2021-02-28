<template>
  <div
    v-if="size === 'small'"
    class="flex flex-col items-center w-32 h-32 p-3 text-base rounded-lg shadow-md font-custom bg-accent"
  >
    <img :src="getIconUrl()" alt="" />
    <div class="my-2 text-center text-md text-main">{{ infoText }}</div>
  </div>
  <div
    v-else
    class="flex flex-col items-center w-full h-40 p-4 text-lg text-center rounded-lg shadow-md md:h-32 justify-evenly font-custom lg:text-left lg:flex-row bg-accent text-main"
  >
    <img src="@/static/icons/star.svg" alt="" class="w-6 h-6 lg:ml-2" />
    <div class="w-full mt-2 ml-2 lg:ml-5">{{ infoText }}</div>
  </div>
</template>

<script>
export default {
  props: {
    iconFile: {
      type: String,
      required: false,
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
