import { fakeUsers, Role } from "./fakeData.js";

export const updateUser = async (req, res) => {
    const error = validateUserCreateInput(req.body)

    if (error) {
        res.status(400)
        return res.send(error)
    }

    const { id, ...rest } = req.body

    const userExists = await fakeUsers.findById(id)

    if (!userExists) {
        res.status(404)
        return res.send('user not found')
    }

    if (req.user.role !== Role.Admin) {
        if(req.user.id !== id) return res.sendStatus(403) // Only admins can change other people's data
        delete rest.role // Only admins can change roles
    }

    const updatedUser = await fakeUsers.updateById(id, rest)

    res.send(updatedUser);
};