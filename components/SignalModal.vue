<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit signal</p>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>
      <section class="modal-card-body">
          <div v-for="(k, v) in signal" :key="v">
          <b-field :label="v">
            <b-input :value="k"></b-input>
          </b-field>
          </div>
      </section>
      <footer class="modal-card-foot">
        <b-button label="Save" type="is-primary" />
        <b-button label="Close" @click="$emit('close')" />
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    signal: {
      type: Object
    },
  },
}
</script>

<style scoped>
</style>