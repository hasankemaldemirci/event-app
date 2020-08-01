<template>
  <router-link :to="`/${event.id}`" class="events__list__card">
    <div class="events__list__card__date">{{ event.dateRange }}</div>
    <div class="events__list__card__title">{{ event.name }}</div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: Object
  }
}
</script>

<style lang="scss" scoped>
.events__list__card {
  display: block;
  height: 100%;
  padding: 10px;
  background-color: #f4f7fa;
  border: 1px solid $color-border;
  border-radius: 4px;

  &__date {
    font-weight: 600;
    color: #d1410c;
  }

  &__title {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
