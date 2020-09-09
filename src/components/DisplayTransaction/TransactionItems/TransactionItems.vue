<template>
    <div>
        <div class="transaction-container">
            <table class="transaction-table">
                <tr>
                    <th>Transaction Date</th>
                    <th>Remarks</th>
                    <th>Debit</th>
                    <th>Credit</th>
                    <th></th>
                </tr>
                <tr v-for="item in transactionData" :key="item.id">
                    <td>{{item.addedDate}}</td>
                    <td>{{item.remarks}}</td>
                    <td>{{item.type === 'dbt' ? item.amount : ''}}</td>
                    <td>{{item.type === 'cr' ? item.amount  : ''}}</td>
                    <td v-if="!item.isCancel">
                        <button class="btn-cancel" type="button" title="Cancel Transaction"
                         @click="cancelTransaction(item.id, item.type)">x</button>
                    </td>
                    <td v-else> </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'TransactionItems',
  //   data: function () {
  //     return {
  //       transactionData: this.$store.getters.getTransactionData
  //     }
  //   },
  computed: {
    ...mapGetters({
      transactionData: 'getTransactionData'
    })

  },
  methods: {
    cancelTransaction: function (id, type) {
      this.$store.dispatch('cancelTransactionAction', { transactionId: id, transactionType: type })
    }

  }
}
</script>
