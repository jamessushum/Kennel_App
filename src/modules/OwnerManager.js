const remoteURL = "http://localhost:5002"

export default {
  async get(id) {
    const response = await fetch(`${remoteURL}/owners/${id}`)
    const result = await response.json()
    return result
  },
  async getAll() {
    const response = await fetch(`${remoteURL}/owners`)
    const result = await response.json()
    return result
  },
  async delete(id) {
    const response = await fetch(`${remoteURL}/owners/${id}`, {
      method: "DELETE"
    })
    const result = await response.json()
    return result
  },
  async post(newOwnerobj) {
    const response = await fetch(`${remoteURL}/owners`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newOwnerobj)
    })
    const result = await response.json()
    return result
  }
}