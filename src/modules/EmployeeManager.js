const remoteURL = "http://localhost:5002"

export default {
  async get(id) {
    const response = await fetch(`${remoteURL}/employees/${id}`)
    const result = await response.json()
    return result
  },
  async getAll() {
    const response = await fetch(`${remoteURL}/employees`)
    const result = await response.json()
    return result
  },
  async delete(id) {
    const response = await fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    })
    const result = await response.json()
    return result
  },
  async post(newEmployeeObj) {
    const response = await fetch(`${remoteURL}/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployeeObj)
    })
    const result = await response.json()
    return result
  },
  async update(editedEmployee) {
    const response = await fetch(`${remoteURL}/employees/${editedEmployee.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEmployee)
    })
    const result = await response.json()
    return result
  },
  async getWithAnimals(id) {
    const response = await fetch(`${remoteURL}/employees/${id}?_embed=animals`)
    const result = await response.json()
    return result
  }
}