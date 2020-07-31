<template>
  <div class="sessions">
    <table class="sessions__table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Duration</th>
          <th>Title</th>
          <th>Capacity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="session in sortedSessions" :key="session.id">
          <td>{{ session.dateRange }}</td>
          <td>{{ session.duration }}</td>
          <td>{{ session.name }}</td>
          <td>{{ session.capacity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Sessions',
  props: {
    sessions: Array
  },
  computed: {
    sortedSessions () {
      const sessions = this.sessions.slice(0).sort((a, b) => {
        const firstDate = new Date(a.dateRange)
        const secondDate = new Date(b.dateRange)
        return firstDate - secondDate
      })

      return sessions
    }
  }
}
</script>

<style lang="scss" scoped>
.sessions {
  margin-top: 20px;

  &__table {
    width: 100%;
    border-collapse: collapse;

    tr:nth-of-type(odd) {
      background-color: #f4f7fa;
    }

    th {
      background-color: #7c7a7a;
      font-size: 16px;
      font-weight: 700;
      color: #fff;

      @media (max-width: 575px) {
        font-size: 14px;;
      }
    }

    td, th {
      padding: 10px;
      border: 1px solid $color-border;
      text-align: left;

      @media (max-width: 575px) {
        padding: 8px;
      }
    }
  }
}
</style>
