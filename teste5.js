import { fakeUsers } from "./fakeData.js";
import { validateGetReadCountInput } from "./validation";

export const getUserReadCount =async  (req, res) => {
    const error = validateGetReadCountInput(req.body)

    if (error) {
        res.status(400)
        return res.send(error)
    }

    const { name } = req.body

    const userExists = await fakeUsers.findByName(name)

    if (!userExists) {
        res.status(404)
        return res.send('user not found')
    }

    const readCount = await fakeUsers.getReadCountByName(name)

    res.send(`User ${name} has been read ${readCount} times.`);
};
