<template>
  <div class="events">
    <div class="container">
      <h1>Explore Events</h1>
      <Loader v-if="loading" />
      <div v-else class="events__list">
        <EventCard v-for="event in sortedEvents" :key="event.id" :event="event" />
      </div>
    </div>
  </div>
</template>

<script>
import { getEvents } from '@/app/api/requests'

// Components
import EventCard from '../components/EventCard'
import Loader from '../components/Loader'

export default {
  name: 'Events',
  components: {
    EventCard,
    Loader
  },
  data () {
    return {
      events: [],
      loading: true
    }
  },
  async mounted () {
    this.events = await getEvents()

    if (this.events.length) {
      this.loading = false
    }
  },
  computed: {
    sortedEvents () {
      return this.events.slice(0).sort((a, b) => a.name.localeCompare(b.name, 'tr'))
    }
  }
}
</script>

<style lang="scss" scoped>
.events {
  &__list {
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 767px) {
      flex-direction: column;
    }

    &__card {
      &:nth-child(3n+1) {
        margin-left: 0;
      }
    }
  }
}
</style>
