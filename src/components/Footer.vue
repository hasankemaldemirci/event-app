<template>
  <footer class="footer">
    <div class="container">
      <span class="copyright">© Event App by HKD</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
footer {
  height: 50px;
  background-color: #f7f7f7;
  line-height: 50px;
  text-align: center;

  .copyright {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
