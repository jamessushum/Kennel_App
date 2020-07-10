const remoteURL = "http://localhost:5002"

export default {
  async get(id) {
    const response = await fetch(`${remoteURL}/locations/${id}`)
    const result = await response.json()
    return result
  },
  async getAll() {
    const response = await fetch(`${remoteURL}/locations`)
    const result = await response.json()
    return result
  },
  async delete(id) {
    const response = await fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE"
    })
    const result = response.json()
    return result
  }
}