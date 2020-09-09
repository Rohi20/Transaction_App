import Vue from 'vue'

Vue.filter('addCurrency', amount => 'Rs. ' + amount)
