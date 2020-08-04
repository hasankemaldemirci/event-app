<template>
  <div class="event-detail">
    <div class="container">
      <Loader v-if="loading" />
      <div v-else-if="!error" class="event-detail__content">
        <div class="event-detail__content__hero">
          <div class="left">
            <h1>{{ event.name }}</h1>
            <span>{{ event.dateRange }}</span>
          </div>
          <div class="right">
            <router-link to="/">Back to List</router-link>
          </div>
        </div>
        <Sessions :sessions="sessions" />
      </div>
      <div v-else>
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import { getEventDetail } from '@/app/api/requests'

// Components
import Loader from '../components/Loader'
import Sessions from '../components/Sessions'

export default {
  components: {
    Loader,
    Sessions
  },
  data () {
    return {
      event: {},
      sessions: [],
      loading: true,
      error: null
    }
  },
  async mounted () {
    const id = this.$route.params.id

    try {
      await getEventDetail(id).then(({ event, sessions }) => {
        this.event = event
        this.sessions = sessions
      })
    } catch (error) {
      this.error = error
    } finally {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.event-detail__content__hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid $color-border;

  .left {
    > h1 {
      line-height: 1em;
    }

    > span {
      display: block;
      margin-top: 5px;
      font-size: 16px;
      font-weight: 600;
      color: #d1410c;
    }
  }

  .right {
    padding-left: 15px;
  }
}
</style>
