import { fakeUsers } from "./fakeData.js";

export const deleteUser = async (req, res) => {
    const error = validateDeleteUserInput(req.query)

    if (error) {
        res.status(400)
        return res.send(error)
    }

    const { name } = req.query

    const existingUser = await fakeUsers.findByName(name)

    if(!existingUser) {
        res.status(404)
        return res.send('user not found')
    }

    if (req.user.role !== Role.Admin) {
        if(req.user.id !== id) return res.sendStatus(403) // Members can only delete themselves
    }

    await fakeUsers.deleteById(existingUser.id)

    res.send("user deleted successfully");
};