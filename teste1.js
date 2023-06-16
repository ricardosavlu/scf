import { fakeUsers } from "./fakeData.js";

export const getUser = async (req, res, next) => {
    const { name } = req.query;
    const user = await fakeUsers.findByName(name, { increaseReadCount: true })

    if (user) res.send(user)
    else res.sendStatus(404)
};

export const getUsers = async (req, res, next) => {
    const users = await fakeUsers.findAll({ increaseReadCount: true })
    res.send(users);
};
