<template>
    <div class="transaction-container" v-if="showBalance">
            <div>
                <label for="txtTotal">Available Balance</label>
                <span class="available-balance">{{getAvailableBalance | addCurrency}}</span>
            </div>
        </div>
</template>

<script>
export default {
  name: 'DisplayBalance',
  computed: {
    getAvailableBalance: function () {
      return this.$store.getters.getTotalAmount
    },
    showBalance: function () {
      return (this.$store.getters.getTotalAmount || this.$route.path !== '/manage')
    }
  }
}
</script>
