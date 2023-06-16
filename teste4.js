import { fakeUsers } from "./fakeData.js";

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

    const updatedUser = await fakeUsers.updateById(id, rest)
    
    res.send(updatedUser);
};