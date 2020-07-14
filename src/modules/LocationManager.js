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
    const result = await response.json()
    return result
  },
  async post(newLocationObj) {
    const response = await fetch(`${remoteURL}/locations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newLocationObj)
    })
    const result = await response.json()
    return result
  },
  async update(editedLocation) {
    const response = await fetch(`${remoteURL}/locations/${editedLocation.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedLocation)
    })
    const result = await response.json()
    return result
  }
}