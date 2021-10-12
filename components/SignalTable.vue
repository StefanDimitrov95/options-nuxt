<template>
  <section>
    <button class="button" v-on:click="onCreate()">
      <b-icon icon="plus"></b-icon>
    </button>

    <b-button type="is-primary is-light" :disabled="!checkedRows.length"
      >Approve {{ checkedRows.length }}</b-button
    >
    <b-button
      type="is-danger"
      :disabled="!checkedRows.length"
      v-on:click="onDeleteAll()"
    >
      Delete {{ checkedRows.length }}</b-button
    >

    <b-table
      :data="data"
      checkable
      hoverable
      :debounce-search="250"
      :checked-rows.sync="checkedRows"
      :default-sort="['Symbol', 'desc']"
      :v-bind="keys"
    >
      <b-table-column label="Actions" v-slot="props">
        <button class="button is-small" v-on:click="onEdit(props.row)">
          <b-icon icon="pencil"></b-icon>
        </button>
        <button
          class="button is-small is-danger is-light"
          v-on:click="onDelete(props.row)"
        >
          <b-icon icon="delete"></b-icon>
        </button>
      </b-table-column>

      <b-table-column
        searchable
        field="Symbol"
        width="6em"
        label="Symbol"
        v-slot="props"
      >
        {{ props.row[keys[0]] }}
      </b-table-column>
      <template v-for="(v, k) in keys.slice(1)"> 
        <b-table-column :field="v" :label="v" v-slot="props" :key="k">
          {{ props.row[v] }}
        </b-table-column>
      </template>
      <template #empty>
        <div class="has-text-centered">No records</div>
      </template>
    </b-table>
    <b-modal
      v-model="isModalActive"
      has-modal-card
      trap-focus
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
    const keys = [
      'Symbol',
      'Price',
      'Max Profit',
      'Max Profit%',
      'Max Loss',
      'BE',
      'Probability',
      'Exp Date',
      'Leg1 Strike',
      'Leg1 Bid',
      'Leg2 Strike',
      'Leg2 Ask',
    ]
    return {
      data,
      keys,
      checkboxPosition: 'left',
      checkedRows: [],
      isModalActive: false,
      signal: null,
    }
  },
  methods: {
    onEdit(row) {
      this.signal = row
      this.isModalActive = true
    },
    onCreate() {
      this.signal = Object.fromEntries(this.keys.map(k => [k, null]))
      this.isModalActive = true
    },
    onDelete(row) {
      this.$buefy.dialog.confirm({
        title: `Deleting signal ${row.Symbol}`,
        message: `Are you sure you want to <b>delete</b> the signal with ticker <b>${row.Symbol}</b>? This action cannot be undone.`,
        confirmText: 'Delete Signal',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.$buefy.toast.open(`Signal ${row.Symbol} deleted!`)
          this.data.splice(this.data.indexOf(row), 1)
        },
      })
    },
    onDeleteAll() {
      this.$buefy.dialog.confirm({
        title: `Deleting ${this.checkedRows.length} rows.`,
        message: `Are you sure you want to <b>delete</b> the selected rows? This action cannot be undone.`,
        confirmText: 'Delete Imported Data',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.$buefy.toast.open(`${this.checkedRows.length} rows deleted!`)
          this.data = this.data.filter((n) => !this.checkedRows.includes(n))
          this.checkedRows = []
        },
      })
    },
  },
  components: {
    SignalModal,
  },
}
</script>
