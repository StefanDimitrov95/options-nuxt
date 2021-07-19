<template>
  <section class="section">
    <div class="columns is-mobile">
      <Card title="Basic" @click.native="isModalActive = true">
        <template v-slot:main><h1>FREE<sub></sub></h1></template>
        <template v-slot:footer>3 trade alerts/mo</template>
      </Card>

      <Card title="Plus" @click.native="isModalActive = true">
        <template v-slot:main><h1>$99<sub>/mo</sub></h1></template>
        <template v-slot:footer>20 trade alerts/mo</template>
      </Card>

      <Card title="Premium" @click.native="isModalActive = true">
        <template v-slot:main><h1>$199<sub>/mo</sub></h1></template>
        <template v-slot:footer>100 trade alerts/mo</template>
      </Card>

      <Card title="Unlimited" @click.native="isModalActive = true">
        <template v-slot:main><h1>$399<sub>/mo</sub></h1></template>
        <template v-slot:footer>UNLIMITED trade alerts/mo</template>
      </Card>
      <b-modal
        v-model="isModalActive"
        has-modal-card
        trap-focus
        :destroy-on-hide="true"
        :can-cancel="['escape', 'outside']"
        aria-role="dialog"
        aria-label="Login form"
        aria-modal
      >
        <template #default="props">
          <Subscribe @close="props.close"></Subscribe>
        </template>
      </b-modal>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import Subscribe from '~/components/Subscribe'

export default {
  name: 'HomePage',

  components: {
    Card,
    Subscribe
  },

  data() {
    return {
      isModalActive: false
    }
  }
}
</script>

<style lang='sass'>
  @import assets/bulma
</style>