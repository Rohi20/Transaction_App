<template>
<div>
    <div  v-if="transactionData.length">
        <TransactionItems/>
        <DisplayBalance />
    </div>
    <div v-else>
        <h4>There is no current transaction!</h4>
    </div>
</div>
</template>

<script>
import TransactionItems from './TransactionItems/TransactionItems'
import DisplayBalance from '../UI/DisplayBalance'

export default {
  name: 'DisplayTransaction',
  data: function () {
    return {
      transactionData: this.$store.getters.getTransactionData
    }
  },
  components: {
    TransactionItems,
    DisplayBalance
  }
}
</script>
