<template>
    <div class="reset-add-container">
        <div>There is no current transactions. Please add a transaction.</div>
        <div>
         <button type="submit" class="btnTransaction"
  @click="goToManageTransaction">Add Transaction</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AddTransaction',
  methods: {
    goToManageTransaction: function () {
      this.$router.push('/manage')
    }
  }
}
</script>
