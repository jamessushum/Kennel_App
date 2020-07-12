const remoteURL = "http://localhost:5002"

export default {
  async get(id) {
    const response = await fetch(`${remoteURL}/animals/${id}`)
    const result = await response.json()
    return result
  },
  async getAll() {
    const response = await fetch(`${remoteURL}/animals`)
    const result = await response.json()
    return result
  },
  async delete(id) {
    const response = await fetch(`${remoteURL}/animals/${id}`, {
      method: "DELETE"
    })
    const result = await response.json()
    return result
  },
  async post(newAnimal) {
    const response = await fetch(`${remoteURL}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    })
    const result = await response.json()
    return result
  }
}