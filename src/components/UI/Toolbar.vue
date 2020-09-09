<template>
  <div class="md-layout">
    <ul class="navigation-container">
      <li>
        <router-link to="/">Transactions</router-link>
      </li>
      <li>
        <router-link to="/manage">Manage Transactions</router-link>
      </li>
      <li>
        <router-link to="/reset">Reset Transactions</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Toolbar'
}
</script>

<style scoped>
.navigation-container {
  list-style: none;
  display: flex;
  background-color: #8575A7;
  height: 50px;
  align-items: center;
}

.navigation-container a {
  color: lightgrey;
  margin: 20px;
  text-decoration: none;
  font-size: 18px;
}

.navigation-container .router-link-exact-active {
  color: white;
}
</style>
