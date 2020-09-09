<template>
<div>
  <div class="transaction-container" v-if="transactionExists">
    <ResetLayout/>
  </div>
  <div class="transaction-container" v-else>
    <AddTransaction/>
  </div>
</div>
</template>

<script>
import ResetLayout from './ResetLayout/ResetLayout'
import AddTransaction from './AddTransaction/AddTransaction'
export default {
  name: 'ManageTransaction',
  computed: {
    transactionExists: function () {
      return this.$store.getters.getTransactionData.length
    }
  },
  components: {
    ResetLayout,
    AddTransaction
  }
}
</script>
