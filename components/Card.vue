<template>
  <div class="column">
    <div class="card" @click="$emit('popup')">
      <header class="card-header">
        <p class="card-header-title has-text-grey">
          {{ title }}
        </p>
      </header>
      <div class="card-content">
        <div class="content has-text-centered">
          <!--<b-icon :icon="icon" size="is-large" type="is-primary" />-->
            <slot name="main" />
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <span>
            <slot name="footer" />
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  },
}
</script>

<style scoped>
  .card {
    cursor: pointer;
  }
</style>
