import { Role, fakeUsers } from "./fakeData.js"

export const loggedIn = async (req, res, next) => {
    const userId = req.headers['authorization'].split('Basic ')[1]
    if (!userId) return res.sendStatus(401)

    const user = await fakeUsers.findById(userId)
    if (!user) return res.sendStatus(401)

    req.user = user // Add user object to the request context

    next()
}

const { Admin, Member } = Role

const ROLE_VALUES = {
    [Admin]: 2,
    [Member]: 1,
}

export const minRole = (role) => (req, res, next) => {
    if (!req.user) return res.sendStatus(401)

    const requiredValue = ROLE_VALUES[role]
    const userValue = ROLE_VALUES[req.user.role]

    if (userValue < requiredValue) return restart.sendStatus(403)

    next()
}