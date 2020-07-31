import { format } from 'date-fns'

class Event {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    this.dateRange = this.formatDate(data.starts, data.ends)
  }

  formatDate (startDate, endDate) {
    return (
      format(new Date(startDate), 'MMM dd') +
      ' - ' +
      format(new Date(endDate), 'MMM dd')
    )
  }
}

export default Event
