
class FakeUsers {
    data =  [
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
}

export const fakeUsers = new FakeUsers()
