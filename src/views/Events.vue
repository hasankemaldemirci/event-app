<template>
  <div class="events">
    <div class="container">
      <h1>Explore Events</h1>
      <Loader v-if="loading" />
      <div v-else-if="!error" class="events__list">
        <div class="flex-row">
          <div v-for="event in sortedEvents" :key="event.id" class="flex-row__column">
            <EventCard :event="event" />
          </div>
        </div>
      </div>
      <div v-else>
        {{ error }}
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
      loading: true,
      error: null
    }
  },
  async mounted () {
    try {
      this.events = await getEvents()
    } catch (error) {
      this.error = error
    } finally {
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
    margin-top: 10px;
  }

  h1 {
    line-height: 1em;
  }
}
</style>
