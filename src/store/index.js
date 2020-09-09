import Vue from 'vue'
import Vuex from 'vuex'
import uniqid from 'uniqid'

Vue.use(Vuex)

const transactionStore = new Vuex.Store({
  state: {
    transactionData: {
      cr: [],
      dbt: []
    },
    total: 0
  },
  getters: {
    getTransactionData: function (state, getters) {
      const transactionArray = [...state.transactionData.cr, ...state.transactionData.dbt]

      // Sort based on time
      const sortedTransactionData = transactionArray.sort((firstItem, secondItem) =>
        new Date(firstItem.addedDate).getTime() - new Date(secondItem.addedDate).getTime())

      // Sorted transaction array.
      return sortedTransactionData
    },
    getTotalAmount: function (state, getters) {
      const creditArray = state.transactionData['cr'].filter(item => item.isCalculate)
      const debitArray = state.transactionData['dbt'].filter(item => item.isCalculate)

      // Calculate credit totals.
      const creditTotal = creditArray.reduce((total, crItem) =>
        total + Number(crItem.amount), 0)

      // Calculate debit totals.
      const debitTotal = debitArray.reduce((total, dbtItem) =>
        total + Number(dbtItem.amount), 0)

      // Calculate available balance.
      return creditTotal - debitTotal
    }
  },
  mutations: {
    setTransaction: function (state, transaction) {
      // Create copy of transaction type array.
      const updatedTransactionData = [...state.transactionData[transaction.type]]

      // Add new transaction to the account type.
      updatedTransactionData.push(transaction)
      state.transactionData[transaction.type] = updatedTransactionData
    },
    revertTransaction: function (state, actions) {
      // Find the transaction index.
      const selectedTransactionIndex = state.transactionData[actions.transactionType].findIndex(item => item.id === actions.transactionId)

      if (selectedTransactionIndex !== -1) {
        const transactionItem = { ...state.transactionData[actions.transactionType][selectedTransactionIndex] }
        transactionItem.isCancel = true
        transactionItem.isCalculate = false

        state.transactionData[actions.transactionType][selectedTransactionIndex] = transactionItem

        // Update transaction fields.
        const newTransaction = {
          ...transactionItem,
          id: uniqid(),
          type: actions.transactionType === 'cr' ? 'dbt' : 'cr',
          remarks: 'Cancelled Transaction',
          addedDate: new Date().toLocaleString(),
          isCancel: true,
          isCalculate: true
        }

        // Swap transaction object in account type.
        if (actions.transactionType === 'cr') {
          state.transactionData['dbt'].push(newTransaction)
        } else {
          state.transactionData['cr'].push(newTransaction)
        }
      }

      // Remove the transaction object from the existing array.
      // const updatedTransaction = state.transactionData[actions.transactionType].filter(item => item.id !== actions.transactionId)

      // Update transaction array of that type.
      // state.transactionData[actions.transactionType] = updatedTransaction
    },
    resetTransaction: function (state) {
      state.transactionData = {cr: [], dbt: []}
    }
  },
  actions: {
    addTransactionAction: function ({ commit }, actions) {
      commit('setTransaction', actions.transaction)
    },
    cancelTransactionAction: function ({ commit }, actions) {
      commit('revertTransaction', actions)
    },
    resetTransactionAction: function ({ commit }, actions) {
      commit('resetTransaction', actions)
    }
  }

})

export default transactionStore
