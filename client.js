import { settings } from './static'

export default class LinodeApi {
  constructor() {
    this.base = settings.apiBaseUrl
    this.headers = {
      Authorization: '',
      'User-Agent': 'linode-cli:building',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }
  setToken(token) {
    this.headers.Authorization = `Bearer ${token}`
  }
  get(path) {
    return fetch(`${this.base}${path}`, {
      headers: this.headers
    }).then(res => {return res.json()})
  }
}
