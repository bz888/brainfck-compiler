import request from 'superagent'

export function getDataById (id) {
  return request
    .get(`/api/v1/bfdata/${id}`)
    .then(res => res.body)
}

export function getData () {
  return request
    .get('/api/v1/bfdata/')
    .then(res => res.body)
}
