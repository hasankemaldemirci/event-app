<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo">Event App</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
header {
  height: 50px;
  background-color: #f7f7f7;
  line-height: 50px;

  .logo {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
