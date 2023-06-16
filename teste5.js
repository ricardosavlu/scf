import { fakeUsers } from "./fakeData.js";
import { validateGetReadCountInput } from "./validation.js";

export const getUserReadCount = async (req, res) => {
    const error = validateGetReadCountInput(req.query)

    if (error) {
        res.status(400)
        return res.send(error)
    }

    const { name } = req.query

    const userExists = await fakeUsers.findByName(name)

    if (!userExists) {
        res.status(404)
        return res.send('user not found')
    }

    const readCount = await fakeUsers.getReadCountByName(name)

    res.send(`User ${name} has been read ${readCount} times.`);
};
