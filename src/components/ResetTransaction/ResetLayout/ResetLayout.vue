<template>
     <table class="reset-table">
    <tr>
      <td rowspan="2">
        <v-icon large>{{ alertPath }}</v-icon>
      </td>
      <td>Caution: Once transactions are reset cannot be retained!</td>
    </tr>
    <tr>
      <td>
        <button type="submit" class="btnTransaction" @click="resetTransaction">Reset Transaction</button>
      </td>
    </tr>
  </table>

</template>

<script>
import { mdiAlertOutline } from '@mdi/js'
export default {
  name: 'ResetLayout',
  data: function () {
    return {
      alertPath: mdiAlertOutline
    }
  },
  methods: {
    resetTransaction: function () {
      const confirm = window.confirm('Are you sure you want reset transactions?')

      if (confirm) {
        this.$store.dispatch('resetTransactionAction')
      }
      this.$router.push('/')
    }
  }

}
</script>
