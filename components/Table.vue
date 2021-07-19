<template>
  <section>
            <button class="button" v-on:click="onCreate()">
          <b-icon icon="plus"></b-icon>
        </button>
    <b-table
      :data="data"
      checkable
      :checked-rows.sync="checkedRows"
      :default-sort="['Symbol', 'desc']"
    >
      <b-table-column label="Actions" v-slot="props">
        <button class="button is-small" v-on:click="onEdit(props.row)">
          <b-icon icon="pencil"></b-icon>
        </button>
      </b-table-column>
      <b-table-column field="Symbol" label="Symbol" v-slot="props">
        {{ props.row['Symbol'] }}
      </b-table-column>

      <b-table-column field="Price" label="Price" v-slot="props">
        {{ props.row['Price'] }}
      </b-table-column>

      <b-table-column field="Max Profit" label="Max Profit" v-slot="props">
        {{ props.row['Max Profit'] }}
      </b-table-column>

      <b-table-column field="Max Profit%" label="Max Profit%" v-slot="props">
        {{ props.row['Max Profit%'] }}
      </b-table-column>

      <b-table-column field="Max Loss" label="Max Loss" v-slot="props">
        {{ props.row['Max Loss'] }}
      </b-table-column>

      <b-table-column field="BE" label="BE" v-slot="props">
        {{ props.row['BE'] }}
      </b-table-column>

      <b-table-column field="Probability" label="Probability" v-slot="props">
        {{ props.row['Probability'] }}
      </b-table-column>

      <b-table-column field="Exp Date" label="Exp Date" v-slot="props">
        {{ props.row['Exp Date'] }}
      </b-table-column>

      <b-table-column field="Leg1 Strike" label="Leg1 Strike" v-slot="props">
        {{ props.row['Leg1 Strike'] }}
      </b-table-column>

      <b-table-column field="Leg1 Bid" label="Leg1 Bid" v-slot="props">
        {{ props.row['Leg1 Bid'] }}
      </b-table-column>

      <b-table-column field="Leg2 Strike" label="Leg2 Strike" v-slot="props">
        {{ props.row['Leg2 Strike'] }}
      </b-table-column>

      <b-table-column field="Leg2 Ask" label="Leg2 Ask" v-slot="props">
        {{ props.row['Leg2 Ask'] }}
      </b-table-column>

      <template #empty>
        <div class="has-text-centered">No records</div>
      </template>
    </b-table>
    <pre>{{ checkedRows }}</pre>
    <b-modal
      v-model="isModalActive"
      has-modal-card
      trap-focus
      full-screen
      :destroy-on-hide="true"
      :can-cancel="[]"
      aria-role="dialog"
      aria-label="Login form"
      aria-modal
    >
      <template #default="props">
        <SignalModal @close="props.close" :signal="signal"></SignalModal>
      </template>
    </b-modal>
  </section>
</template>

<script>
import SignalModal from '~/components/SignalModal'
export default {
  data() {
    const data = require('@/static/calls.json')

    return {
      data,
      checkboxPosition: 'left',
      checkedRows: [],
      isModalActive: false,
      signal: null
    }
  },
  methods: {
    onEdit(row) {
      this.signal = row
      this.isModalActive = true;
    },
    onCreate() {
      this.signal = { a: '', b: '' };
      this.isModalActive = true;
    }
  },
  components: {
    SignalModal
  }
}
</script>
