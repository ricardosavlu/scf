
class FakeUsers {
    data = [
        {
            id: 1,
            name: "João Oliveira",
            job: "Desenvolvedor"
        }
    ]

    async findAll() {
        return this.data
    }

    async findById(id) {
        return this.data.find(u => u.id === id) ?? null
    }

    async findByName(name) {
        return this.data.find(u => u.name === name)
    }

    async createUser(user) {
        const highestId = this.data.reduce((highest, user) => highest < user.id ? user.id : highest, 0)
        const newId = highestId + 1
        const newUser = { ...user, id: newId }
        this.data.push(newUser)
        return newUser
    }

    async deleteById(id) {
        this.data = this.data.filter(u => u.id !== id)
    }
}

export const fakeUsers = new FakeUsers()
