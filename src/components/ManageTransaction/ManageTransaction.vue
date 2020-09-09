<template>
  <div>
    <DisplayBalance />
    <div class="transaction-container">
      <div>
        <label for="ddlType">Transaction Type</label>
        <select id="ddlType" v-model="type">
          <option value="cr">Credit</option>
          <option value="dbt">Debit</option>
        </select>
      </div>
      <div>
        <label for="txtAmount">Amount</label>
        <input type="number" v-model="amount" />
      </div>
      <div>
        <label for="txtRemarks">Remarks</label>
        <textarea rows="5" id="txtRemarks" v-model="remarks"></textarea>
      </div>
      <button
        type="submit"
        class="btnTransaction"
        @click="addTransaction"
        :disabled="formValid"
      >Add Transaction</button>
    </div>
    <div class="transaction-container" v-if="transactionExists">
      <button type="submit" class="btnTransaction" @click="viewTransaction">View Transactions</button>
    </div>
  </div>
</template>

<script>
import uniqId from 'uniqid'
import DisplayBalance from '../UI/DisplayBalance'

export default {
  name: 'ManageTransaction',
  data: function () {
    return {
      amount: '',
      type: 'cr',
      remarks: ''
    }
  },
  computed: {
    transactionExists: function () {
      return this.$store.getters.getTotalAmount > 0
    },
    formValid: function () {
      return this.amount === ''
    }
  },
  methods: {
    addTransaction: function () {
      const id = uniqId()
      const transactionItem = {
        id,
        amount: this.amount,
        type: this.type,
        remarks: this.remarks,
        addedDate: new Date().toLocaleString(),
        isCancel: false,
        isCalculate: true
      }

      if (Number(this.amount) <= 0) {
        alert('Enter valid amount!')
        this.amount = ''
        this.remarks = ''
        this.type = 'cr'
        return
      }

      if (
        (Number(this.amount) < this.$store.getters.getTotalAmount &&
          this.type === 'dbt') ||
        this.type === 'cr'
      ) {
        this.$store.dispatch('addTransactionAction', {
          transaction: transactionItem
        })
        this.amount = ''
        this.remarks = ''
        this.type = 'cr'
      } else {
        alert(
          'Amount exceeds available balance. Cannot perform this transaction'
        )
      }
    },
    viewTransaction: function () {
      this.$router.push('/')
    }
  },
  components: {
    DisplayBalance
  }
}
</script>
