<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Subscribe</p>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>
      <section class="modal-card-body">
        <b-field>
            <b-input placeholder="Credit card"
                icon="credit-card">
            </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <b-button label="Pay" type="is-primary" />
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  props: ['email', 'password'],
}
</script>

<style scoped>
footer>>>* {
    width: 100%;
}
</style>