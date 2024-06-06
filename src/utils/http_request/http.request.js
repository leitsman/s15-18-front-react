const { SERVER_ROUTES } = require("@/constants/server.routes")

class HttpRequest {
  BASE_URL = ""

  constructor(base_url) {
    this.BASE_URL = base_url
  }

  async get(path) {
    const res = await fetch(`${this.BASE_URL}${path}`)

    const data = await res.json()
    console.log(data)
  }

  async post(path, data) {

  }

  async put(path, data) {

  }

  async delete(path) {

  }

}

export const httpRequest = new HttpRequest("https://jsonplaceholder.typicode.com")