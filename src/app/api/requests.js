import axios from 'axios'

import Event from '../models/event'
import Session from '../models/session'

const proxy = process.env.VUE_APP_PROXY
const apiURL = process.env.VUE_APP_API_URL
const token = process.env.VUE_APP_TOKEN
const headers = { Authorization: `Token ${token}` }

const getEvents = async () => {
  const response = await axios({
    url: `${proxy}/${apiURL}/events`,
    headers
  })

  const result = response.data.results
  const events = result.map(event => new Event(event))

  return events
}

const getEventDetail = async (id) => {
  const responseEventDetail = await axios({
    url: `${proxy}/${apiURL}/events/${id}`,
    headers
  })

  const responseEventDetailSessions = await axios({
    url: `${proxy}/${apiURL}/events/${id}/sessions`,
    headers
  })

  const responseAll = Promise.all([
    responseEventDetail,
    responseEventDetailSessions
  ]).then(res => {
    return {
      event: new Event(res[0].data),
      sessions: res[1].data.results.map(session => new Session(session))
    }
  })

  return responseAll
}

export { getEvents, getEventDetail }
