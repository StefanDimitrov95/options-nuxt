<template>
  <form action="">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"><slot name="title" /></p>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>
      <section class="modal-card-body">
        <div v-for="(v, k) in form" :key="k">
          <b-field :label="k">
            <b-input :value="v" v-model="form[k]"></b-input>
          </b-field>
        </div>
      </section>
      <footer class="modal-card-foot">
        <b-button label="Save" type="is-primary" @click="onSubmit()" />
        <b-button label="Close" @click="$emit('close')" />
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: { ...this.signal },
    }
  },
  props: {
    signal: {
      type: Object,
    },
  },
  methods: {
    onSubmit() {
      console.log(this.signal)
      this.$emit('close')
    },
  },
  watch: {
    signal(newValue) {
      this.signal = newValue;
    }
  }
}
</script>
