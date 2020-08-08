import { format, differenceInHours } from 'date-fns'

class Session {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    this.startDate = data.starts
    this.dateRange = this.formatDate(data.starts, data.ends)
    this.duration = this.calculateDuration(data.starts, data.ends)
    this.capacity = data.capacity
  }

  formatDate (startDate, endDate) {
    return (
      format(new Date(startDate), 'MMM dd') +
      ' - ' +
      format(new Date(endDate), 'MMM dd')
    )
  }

  calculateDuration (startDate, endDate) {
    const parsedStartDate = Date.parse(startDate)
    const parsedEndDate = Date.parse(endDate)
    return differenceInHours(parsedEndDate, parsedStartDate) + ' Hours'
  }
}

export default Session
