export const Role = {
    Admin: 'admin',
    Member: 'member'
}

class FakeUsers {
    data = [
        {
            id: 1,
            name: "João Oliveira",
            job: "Desenvolvedor",
            readCount: 0,
            role: Role.Admin,
        }
    ]

    async findAll({ increaseReadCount = false } = {}) {
        if (increaseReadCount) this.data.forEach(u => u.readCount++)
        return this.data.map(toPublic)
    }

    async findById(id, { increaseReadCount = false } = {}) {
        const user = this.data.find(u => u.id === id)
        if (!user) return null
        if (increaseReadCount) user.readCount++
        return toPublic(user)
    }

    async findByName(name, { increaseReadCount = false } = {}) {
        const user = this.data.find(u => u.name === name)
        if (!user) return null
        if (increaseReadCount) user.readCount++
        return toPublic(user)
    }

    async createUser(user) {
        const highestId = this.data.reduce((highest, user) => highest < user.id ? user.id : highest, 0)
        const newId = highestId + 1
        const newUser = { ...user, id: newId, readCount: 0 }
        this.data.push(newUser)
        return toPublic(newUser)
    }

    async deleteById(id) {
        this.data = this.data.filter(u => u.id !== id)
    }

    async updateById(id, data) {
        const user = this.data.find(u => u.id === id)
        if (data.name) user.name = data.name
        if (data.job) user.job = data.job
        if (data.role) user.role = data.role
        return toPublic(user)
    }

    async getReadCountByName(name) {
        const user = this.data.find(u => u.name === name)
        if (!user) return null
        return user.readCount
    }
}

/**
 * Converts data stored on the database to public facing data
 */
function toPublic(user) {
    const { id, name, job, role } = user
    return { id, name, job, role }
}

export const fakeUsers = new FakeUsers()
