<template>
  <div>
    <p class="menu-label is-hidden-touch">{{ title }}</p>
    <ul class="menu-list">
      <li v-for="(item, key) of items" :key="key">
        <nuxt-link :to="item.to" exact-active-class="is-active">
          <b-icon :icon="item.icon" /> {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    items: {
      type: Array,
      default: () => [{ title: 'None', icon: '', to: { name: 'index' } }],
    },
  },
}
</script>

<style>
</style>